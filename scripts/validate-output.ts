import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { visit } from 'unist-util-visit';
import {
  readArticleSources,
  readQuestionSources,
} from '../src/lib/content-files';
import {
  articleCategoryGroups,
  articleCopyMarkdown,
  articleTagGroups,
  isPublicArticle,
} from '../src/lib/article-model';
import { isPublicQuestion } from '../src/lib/visibility';
import { extractSections, parseMarkdown } from '../src/lib/markdown-export';
import {
  articleImageFiles,
  articleImagePrefix,
  questionDiagramFiles,
  questionDiagramPrefix,
} from '../src/lib/question-diagrams';
import { outputFiles, routeForFile, validateLinks } from './validate-links';
import { aiServices, buildAiLinks, maxAiUrlLength } from '../src/lib/ai-prompt';

const preview = process.argv.includes('--preview');
const directory = path.resolve(preview ? 'dist-preview' : 'dist');
const adsenseScriptSource =
  'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5293965345695237';
const entries = await readQuestionSources();
const visible = entries.filter(
  (entry) => preview || isPublicQuestion(entry.data),
);
const hidden = entries.filter(
  (entry) => !preview && !isPublicQuestion(entry.data),
);
const articles = await readArticleSources(undefined, entries);
const visibleArticles = articles.filter(
  (entry) => preview || isPublicArticle(entry.data),
);
const hiddenArticles = articles.filter(
  (entry) => !preview && !isPublicArticle(entry.data),
);
const hiddenContent = [...hidden, ...hiddenArticles];
const files = await outputFiles(directory);
const htmlFiles = files.filter((filename) => filename.endsWith('.html'));
const routes = htmlFiles.map((filename) => routeForFile(directory, filename));
const expect = (condition: unknown, message: string) => {
  if (!condition) throw new Error(message);
};
const expectedQuestions = visible
  .map((entry) => `/questions/${entry.id}/`)
  .sort();
const actualQuestions = routes
  .filter((route) => route.startsWith('/questions/') && route !== '/questions/')
  .sort();
const expectedDiagrams = [
  ...questionDiagramFiles([...visible, ...visibleArticles]).map(
    (file) => questionDiagramPrefix.slice(1) + file,
  ),
  ...articleImageFiles(visibleArticles).map(
    (file) => articleImagePrefix.slice(1) + file,
  ),
].sort();
const actualDiagrams = files
  .map((file) => path.relative(directory, file).replace(/\\/g, '/'))
  .filter(
    (file) =>
      file.startsWith(questionDiagramPrefix.slice(1)) ||
      file.startsWith(articleImagePrefix.slice(1)),
  )
  .sort();
const tagGroups = articleTagGroups(visibleArticles);
// 記事の少ないタグページはnoindex・サイトマップ対象外（プレビューは全ページnoindex）。
const thinTagRoutes = new Set(
  tagGroups
    .filter((group) => !preview && !group.indexable)
    .map((group) => `/articles/tag/${group.slug}/`),
);
const expectedArticles = [
  ...(visibleArticles.length ? ['/articles/'] : []),
  ...visibleArticles.map((entry) => `/articles/${entry.id}/`),
  ...articleCategoryGroups(visibleArticles).map(
    (group) => `/articles/category/${group.slug}/`,
  ),
  ...tagGroups.map((group) => `/articles/tag/${group.slug}/`),
].sort();
const actualArticles = routes
  .filter((route) => route.startsWith('/articles/'))
  .sort();
expect(
  JSON.stringify(actualArticles) === JSON.stringify(expectedArticles),
  '生成された記事URLと公開条件が一致しません',
);
expect(
  JSON.stringify(actualDiagrams) === JSON.stringify(expectedDiagrams),
  '生成された図と問題の公開条件が一致しません',
);
expect(
  JSON.stringify(actualQuestions) === JSON.stringify(expectedQuestions),
  '生成された問題URLと公開条件が一致しません',
);

let origin = '';
for (const filename of htmlFiles) {
  const route = routeForFile(directory, filename);
  const html = await readFile(filename, 'utf8');
  const $ = load(html);
  const canonical = $('link[rel="canonical"]').attr('href');
  expect(
    canonical && new URL(canonical).protocol === 'https:',
    `${route}: canonicalがありません`,
  );
  origin ||= new URL(canonical!).origin;
  expect(
    canonical === `${origin}${route}`,
    `${route}: canonicalが絶対URL・末尾スラッシュのルールと一致しません`,
  );
  expect(
    $('h1').length === 1 && $('title').text().trim(),
    `${route}: H1またはtitleが不正です`,
  );
  expect(
    $('meta[name="description"]').attr('content')?.trim(),
    `${route}: descriptionが空です`,
  );
  expect(
    $('meta[property="og:url"]').attr('content') === canonical,
    `${route}: OGP URLが不正です`,
  );
  expect(
    $('html').attr('data-content-preview') === String(preview),
    `${route}: プレビュー状態が一致しません`,
  );
  if (preview)
    expect(
      $('meta[name="robots"]').attr('content')?.includes('noindex'),
      `${route}: プレビューにnoindexがありません`,
    );
  if (!preview && origin !== 'https://example.com' && route !== '/404.html') {
    expect(
      Boolean($('meta[name="robots"]').attr('content')?.includes('noindex')) ===
        thinTagRoutes.has(route),
      thinTagRoutes.has(route)
        ? `${route}: 記事の少ないタグページにnoindexがありません`
        : `${route}: 本番URLでnoindexになっています`,
    );
  }
  if (route === '/404.html')
    expect(
      $('meta[name="robots"]').attr('content')?.includes('noindex'),
      '404はnoindexが必要です',
    );
  expect($('.katex-error').length === 0, `${route}: 数式エラーがあります`);
  const externalScripts = $('script[src]').filter((_, element) =>
    /^(?:https?:)?\/\//i.test($(element).attr('src') ?? ''),
  );
  const adsenseScripts = externalScripts.filter(
    (_, element) => $(element).attr('src') === adsenseScriptSource,
  );
  expect(
    externalScripts.length === adsenseScripts.length &&
      $('iframe').length === 0,
    `${route}: 想定外の外部スクリプトがあります`,
  );
  const shouldLoadAdsense =
    !preview && !$('meta[name="robots"]').attr('content')?.includes('noindex');
  expect(
    adsenseScripts.length === (shouldLoadAdsense ? 1 : 0),
    `${route}: AdSenseコードの有無・件数が公開条件と一致しません`,
  );
  for (const element of adsenseScripts.toArray()) {
    const script = $(element);
    expect(
      script.parent().is('head') &&
        script.attr('async') !== undefined &&
        script.attr('crossorigin') === 'anonymous',
      `${route}: AdSenseコードの配置または属性が不正です`,
    );
  }
  for (const entry of hiddenContent)
    expect(
      !html.includes(entry.id) && !html.includes(entry.data.title),
      `${route}: 非公開の問題・記事が混入しています: ${entry.id}`,
    );
  expect(
    $('a[href="/articles/"]').length > 0 === visibleArticles.length > 0,
    `${route}: 解説記事へのナビゲーションが公開記事の有無と一致しません`,
  );
}
for (const filename of files.filter((file) =>
  /\.(js|json|xml|txt)$/.test(file),
)) {
  const content = await readFile(filename, 'utf8');
  for (const entry of hiddenContent)
    expect(
      !content.includes(entry.id) && !content.includes(entry.data.title),
      `${filename}: 非公開データが混入しています`,
    );
}
for (const entry of visible) {
  const $ = load(
    await readFile(
      path.join(directory, 'questions', entry.id, 'index.html'),
      'utf8',
    ),
  );
  const sections = extractSections(entry.body);
  const payload = JSON.parse($('#copy-sources').text()) as Record<
    string,
    string
  >;
  expect(
    payload.question === sections.question.markdown,
    `${entry.id}: 問題のコピー原文が一致しません`,
  );
  expect(
    payload.answer === sections.answer?.markdown,
    `${entry.id}: 解答のコピー原文が一致しません`,
  );
  const ai = buildAiLinks(
    {
      title: entry.data.title,
      subject: entry.data.subject,
      pageUrl: `${origin}/questions/${entry.id}/`,
      question: sections.question.markdown,
      answer: sections.answer?.markdown,
    },
    origin,
  );
  expect(
    payload.prompt === ai.prompt && $('#ai-prompt').text() === ai.prompt,
    `${entry.id}: AI解説用プロンプトが原文から生成した内容と一致しません`,
  );
  const aiLinks = $('a[data-ai-service]');
  expect(
    aiLinks.length === aiServices.length,
    `${entry.id}: AIで解説するリンクの数が正しくありません`,
  );
  aiLinks.each((index, element) => {
    const href = $(element).attr('href') ?? '';
    expect(
      href === ai.links[index]!.href &&
        href.length <= maxAiUrlLength &&
        $(element).attr('target') === '_blank' &&
        ($(element).attr('rel') ?? '').includes('noopener'),
      `${entry.id}: ${ai.links[index]!.label}へのリンクが正しくありません`,
    );
  });
  expect(
    $('details#answer').length === (sections.answer ? 1 : 0),
    `${entry.id}: 解答欄の有無が原文と一致しません`,
  );
  expect(
    $('#explanation').length === (sections.explanation ? 1 : 0),
    `${entry.id}: 独自解説欄の有無が原文と一致しません`,
  );
  expect(
    $('details#answer').attr('open') === undefined,
    `${entry.id}: 解答が初めから開いています`,
  );
  const tex: string[] = [];
  visit(parseMarkdown(entry.body), (node) => {
    if (node.type === 'math' || node.type === 'inlineMath')
      tex.push(node.value);
  });
  const rendered = $('.formula[data-tex]')
    .toArray()
    .map((element) => $(element).attr('data-tex'));
  expect(
    JSON.stringify(tex) === JSON.stringify(rendered),
    `${entry.id}: AST由来のLaTeXと生成HTMLが一致しません`,
  );
  expect(
    $('math').length === tex.length,
    `${entry.id}: MathMLが欠落しています`,
  );
}

for (const entry of visibleArticles) {
  const $ = load(
    await readFile(
      path.join(directory, 'articles', entry.id, 'index.html'),
      'utf8',
    ),
  );
  expect(
    $('meta[property="og:type"]').attr('content') === 'article' &&
      JSON.parse($('script[type="application/ld+json"]').text())[
        'datePublished'
      ] === entry.data.publishedAt,
    `${entry.id}: 記事のOGP・構造化データが不正です`,
  );
  expect(
    JSON.parse($('#copy-sources').text()).article ===
      articleCopyMarkdown(entry, origin),
    `${entry.id}: 記事のコピー原文が一致しません`,
  );
  const tex: string[] = [];
  visit(parseMarkdown(entry.body), (node) => {
    if (node.type === 'math' || node.type === 'inlineMath')
      tex.push(node.value);
  });
  expect(
    $('.article-body .formula[data-tex]').length === tex.length &&
      $('.article-body math').length === tex.length,
    `${entry.id}: 記事の数式が欠落しています`,
  );
  const linked = $(
    '#article-questions-title + .question-list a[href^="/questions/"]',
  )
    .toArray()
    .map((element) => $(element).attr('href'));
  const expectedLinked = visible
    .filter((question) => entry.data.relatedQuestions.includes(question.id))
    .map((question) => `/questions/${question.id}/`);
  expect(
    expectedLinked.every((href) => linked.includes(href)) &&
      linked.length === expectedLinked.length,
    `${entry.id}: 関連問題のリンクが公開条件と一致しません`,
  );
}

const adsTxt = await readFile(path.join(directory, 'ads.txt'), 'utf8');
const publisherId = new URL(adsenseScriptSource).searchParams
  .get('client')!
  .replace(/^ca-/, '');
expect(
  adsTxt.trim() === `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0`,
  'ads.txtとAdSenseコードのパブリッシャーIDが一致しません',
);
const robots = await readFile(path.join(directory, 'robots.txt'), 'utf8');
if (preview) {
  expect(
    robots.includes('Disallow: /'),
    'プレビューのrobotsがクロールを許可しています',
  );
  const sitemapExists = await access(
    path.join(directory, 'sitemap-index.xml'),
  ).then(
    () => true,
    () => false,
  );
  expect(!sitemapExists, 'プレビューにサイトマップがあります');
} else {
  if (origin !== 'https://example.com')
    expect(
      robots.includes(`${origin}/sitemap-index.xml`),
      'robotsにサイトマップがありません',
    );
  const index = load(
    await readFile(path.join(directory, 'sitemap-index.xml'), 'utf8'),
    { xmlMode: true },
  );
  const sitemapFiles = index('sitemap > loc')
    .toArray()
    .map((element) => index(element).text());
  const sitemapRoutes: string[] = [];
  for (const url of sitemapFiles) {
    expect(
      new URL(url).origin === origin,
      'サイトマップのオリジンが一致しません',
    );
    const xml = load(
      await readFile(path.join(directory, new URL(url).pathname), 'utf8'),
      { xmlMode: true },
    );
    xml('url > loc').each((_i, element) => {
      const url = new URL(xml(element).text());
      expect(
        url.origin === origin && routes.includes(url.pathname),
        `サイトマップに未知のURL: ${url}`,
      );
      expect(url.pathname !== '/404.html', '404がサイトマップに含まれています');
      sitemapRoutes.push(url.pathname);
    });
  }
  const expectedRoutes = routes
    .filter((route) => route !== '/404.html' && !thinTagRoutes.has(route))
    .sort();
  expect(
    sitemapRoutes.length === new Set(sitemapRoutes).size,
    'サイトマップに重複があります',
  );
  expect(
    JSON.stringify([...new Set(sitemapRoutes)].sort()) ===
      JSON.stringify(expectedRoutes),
    'サイトマップの公開URLが不足または重複しています',
  );
}
expect(
  !files.some(
    (filename) => filename.endsWith('.md') || filename.endsWith('_worker.js'),
  ),
  'Markdown原本またはSSR Workerが出力されています',
);
console.log(
  `出力検証OK: ${htmlFiles.length} HTML・問題${visible.length}件・記事${visibleArticles.length}件・内部リンク${await validateLinks(directory)}参照（${preview ? 'プレビュー' : '本番'}）`,
);
