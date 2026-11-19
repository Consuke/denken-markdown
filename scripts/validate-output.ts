import { readFile, access } from 'node:fs/promises';
import path from 'node:path';
import { load } from 'cheerio';
import { visit } from 'unist-util-visit';
import { readQuestionSources } from '../src/lib/content-files';
import { isPublicQuestion } from '../src/lib/visibility';
import { extractSections, parseMarkdown } from '../src/lib/markdown-export';
import {
  questionDiagramFiles,
  questionDiagramPrefix,
} from '../src/lib/question-diagrams';
import { outputFiles, routeForFile, validateLinks } from './validate-links';

const preview = process.argv.includes('--preview');
const directory = path.resolve(preview ? 'dist-preview' : 'dist');
const entries = await readQuestionSources();
const visible = entries.filter(
  (entry) => preview || isPublicQuestion(entry.data),
);
const hidden = entries.filter(
  (entry) => !preview && !isPublicQuestion(entry.data),
);
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
const expectedDiagrams = questionDiagramFiles(visible)
  .map((file) => questionDiagramPrefix.slice(1) + file)
  .sort();
const actualDiagrams = files
  .map((file) => path.relative(directory, file).replace(/\\/g, '/'))
  .filter((file) => file.startsWith(questionDiagramPrefix.slice(1)))
  .sort();
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
      !$('meta[name="robots"]').attr('content')?.includes('noindex'),
      `${route}: 本番URLでnoindexになっています`,
    );
  }
  if (route === '/404.html')
    expect(
      $('meta[name="robots"]').attr('content')?.includes('noindex'),
      '404はnoindexが必要です',
    );
  expect($('.katex-error').length === 0, `${route}: 数式エラーがあります`);
  expect(
    $('script[src^="http"], iframe').length === 0,
    `${route}: 想定外の外部スクリプトがあります`,
  );
  for (const entry of hidden)
    expect(
      !html.includes(entry.id) && !html.includes(entry.data.title),
      `${route}: 非公開問題が混入しています: ${entry.id}`,
    );
}
for (const filename of files.filter((file) =>
  /\.(js|json|xml|txt)$/.test(file),
)) {
  const content = await readFile(filename, 'utf8');
  for (const entry of hidden)
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
  const expectedRoutes = routes.filter((route) => route !== '/404.html').sort();
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
  `出力検証OK: ${htmlFiles.length} HTML・問題${visible.length}件・内部リンク${await validateLinks(directory)}参照（${preview ? 'プレビュー' : '本番'}）`,
);
