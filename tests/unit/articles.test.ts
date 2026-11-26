import { describe, expect, it } from 'vitest';
import {
  readArticleSources,
  readQuestionSources,
} from '../../src/lib/content-files';
import {
  articleCategoryGroups,
  articleCopyMarkdown,
  articleTagGroups,
  articlesForQuestion,
  articlesForTopic,
  isPublicArticle,
  minIndexableTagArticles,
  nextArticles,
  selectVisibleArticles,
  sortArticles,
  validateArticleSet,
  type ArticleSource,
} from '../../src/lib/article-model';
import { addHeadingIds, headingSlug } from '../../src/lib/article-toc';
import { articleSchema } from '../../src/lib/schema';
import { parseArticleBody } from '../../src/lib/markdown-export';
import { articleImageFiles } from '../../src/lib/question-diagrams';

const questions = await readQuestionSources();
const articles = await readArticleSources(undefined, questions);
const sample = articles.find(
  (entry) => entry.id === 'sample-three-phase-power',
)!;
const sampleComplex = articles.find(
  (entry) => entry.id === 'sample-complex-numbers',
)!;
const realQuestion = questions.find((entry) => !entry.data.sample)!;
const frontmatter = {
  title: '交流がイメージできない人へ',
  description: '交流を波形と位相のイメージから理解する。',
  category: '電気理論',
  tags: ['交流回路', '三角関数'],
  relatedQuestions: [realQuestion.id],
  publishedAt: '2026-11-20',
  updatedAt: '2026-11-20',
};
const real: ArticleSource = {
  id: 'real-article',
  body: '## 見出し\n\n本文 $P=VI$。\n',
  data: articleSchema.parse(frontmatter),
};
const validate = (...entries: ArticleSource[]) =>
  validateArticleSet(entries, questions);
const withData = (
  id: string,
  patch: Partial<ArticleSource['data']>,
): ArticleSource => ({ ...real, id, data: { ...real.data, ...patch } });

describe('解説記事のfrontmatter', () => {
  it('カテゴリとタグは日本語で書き、URL用のslugに変換する', () => {
    expect(real.data.category).toBe('electrical-theory');
    expect(real.data.tags).toEqual(['ac-circuits', 'trigonometry']);
    expect(real.data.draft).toBe(false);
    expect(real.data.next).toEqual([]);
  });
  it('サンプルとdraftは本番で非公開にする', () => {
    expect(isPublicArticle(real.data)).toBe(true);
    expect(isPublicArticle(sample.data)).toBe(false);
    expect(isPublicArticle({ ...real.data, draft: true })).toBe(false);
  });
  it.each([
    [{ category: 'electrical-theory' }, '未登録のカテゴリ'],
    [{ category: '開発記録' }, '未登録のカテゴリ'],
    [{ tags: ['電験三種'] }, '未登録のタグ'],
    [{ tags: ['交流回路', '交流回路'] }, 'タグが重複'],
    [{ relatedQuestions: ['Bad_ID'] }, ''],
    [{ description: '' }, ''],
    [{ updatedAt: '2026-11-01', publishedAt: '2026-11-02' }, '公開日以降'],
    [{ updatedAt: '2999-01-01' }, '未来'],
    [{ sample: true }, '架空'],
    [{ status: 'published' }, ''],
  ])('不正なfrontmatterを拒否する: %o', (patch, message) => {
    expect(() => articleSchema.parse({ ...frontmatter, ...patch })).toThrow(
      message,
    );
  });
});

describe('解説記事の本文と参照', () => {
  it('正しい記事は検証を通る', () => {
    expect(() => validate(real)).not.toThrow();
  });
  it.each([
    ['# H1は禁止\n\n本文', 'H1'],
    ['<div>raw</div>', 'raw HTML'],
    ['[x](javascript:alert(1))', 'プロトコル'],
    ['', '空'],
  ])('危険・不正な本文を拒否する: %s', (body, message) => {
    expect(() => validate({ ...real, body })).toThrow(message);
  });
  it('存在しない問題やサンプル問題への参照を拒否する', () => {
    expect(() =>
      validate(withData('a', { relatedQuestions: ['2099-unknown-q01'] })),
    ).toThrow('関連問題が存在しません');
    expect(() =>
      validate(withData('a', { relatedQuestions: ['sample-transmission'] })),
    ).toThrow('サンプル問題');
  });
  it('nextは存在する記事だけを指定でき、自分自身やサンプルは不可', () => {
    expect(() =>
      validate(withData('a', { next: ['b'] }), withData('b', {})),
    ).not.toThrow();
    expect(() => validate(withData('a', { next: ['missing'] }))).toThrow(
      'nextの記事が存在しません',
    );
    expect(() => validate(withData('a', { next: ['a'] }))).toThrow('自分自身');
    expect(() =>
      validate(withData('a', { next: [sample.id] }), sample),
    ).toThrow('サンプル記事');
  });
  it('一覧のパスと衝突するIDや重複IDを拒否する', () => {
    expect(() => validate(withData('tag', {}))).toThrow('使えません');
    expect(() => validate(withData('category', {}))).toThrow('使えません');
    expect(() => validate(real, real)).toThrow('重複ID');
  });
  it('記事画像は自分のIDのフォルダに限る', () => {
    expect(() =>
      validate({ ...real, body: '![図](/diagrams/articles/other/a.png)' }),
    ).toThrow('/diagrams/articles/real-article/');
    expect(
      articleImageFiles([
        { body: '![図](/diagrams/articles/real-article/a.png)' },
      ]),
    ).toEqual(['real-article/a.png']);
    expect(() =>
      articleImageFiles([{ body: '![図](/diagrams/articles/../x.png)' }]),
    ).toThrow('不正な図のパス');
  });
});

describe('目次とコピー', () => {
  it('H2・H3に重複しないIDを付ける', () => {
    const tree = parseArticleBody(
      '## 交流とは？\n\n本文\n\n### 実効値 $V$\n\n本文\n\n## 交流とは？\n\n本文\n\n#### 対象外\n',
    );
    expect(
      addHeadingIds(tree).map(({ depth, id, text }) => ({ depth, id, text })),
    ).toEqual([
      { depth: 2, id: 'h-交流とは', text: '交流とは？' },
      { depth: 3, id: 'h-実効値-v', text: '実効値 V' },
      { depth: 2, id: 'h-交流とは-2', text: '交流とは？' },
    ]);
    expect(headingSlug('！？')).toBe('section');
  });
  it('コピー用Markdownはタイトルを付け、画像を絶対URLにする', () => {
    expect(
      articleCopyMarkdown(
        {
          data: { title: '記事' },
          body: '\n本文\n\n![図](/diagrams/articles/a/b.png)\n',
        },
        'https://denken-study.com',
      ),
    ).toBe(
      '# 記事\n\n本文\n\n![図](https://denken-study.com/diagrams/articles/a/b.png)\n',
    );
  });
});

describe('解説記事の並びと導線', () => {
  const older = withData('older', { publishedAt: '2026-01-01' });
  const newer = withData('newer', {
    publishedAt: '2026-02-01',
    tags: ['ac-circuits'],
  });
  const other = withData('other', {
    publishedAt: '2026-03-01',
    tags: ['calculus'],
    category: 'math',
  });
  it('新しい順に並べ、本番では公開記事だけを残す', () => {
    expect(sortArticles([older, newer]).map((entry) => entry.id)).toEqual([
      'newer',
      'older',
    ]);
    expect(selectVisibleArticles([sample, real], false)).toEqual([real]);
    expect(selectVisibleArticles([sample, real], true)).toHaveLength(2);
  });
  it('次の記事はnextを優先し、なければ共通タグの多い順', () => {
    expect(
      nextArticles(sample, [sample, sampleComplex]).map((entry) => entry.id),
    ).toEqual(['sample-complex-numbers']);
    expect(nextArticles(withData('x', { next: ['older'] }), [newer])).toEqual(
      [],
    );
    expect(
      nextArticles(real, [real, newer, older, other]).map((entry) => entry.id),
    ).toEqual(['older', 'newer']);
  });
  it('問題ページ・分野ページには関連問題を挙げた記事を出す', () => {
    expect(
      articlesForQuestion('sample-transmission', [sample, real]).map(
        (entry) => entry.id,
      ),
    ).toEqual(['sample-three-phase-power']);
    expect(articlesForQuestion('sample-feedback', [sample])).toEqual([]);
    expect(
      articlesForTopic('feedback', [sample, sampleComplex], questions).map(
        (entry) => entry.id,
      ),
    ).toEqual(['sample-complex-numbers']);
  });
  it('カテゴリ・タグは記事のあるものだけ。少ないタグは索引しない', () => {
    expect(
      articleCategoryGroups([older, other]).map((group) => group.slug),
    ).toEqual(['math', 'electrical-theory']);
    const many = Array.from({ length: minIndexableTagArticles }, (_, index) =>
      withData(`many-${index}`, { tags: ['calculus'] }),
    );
    const groups = articleTagGroups([older, ...many]);
    expect(
      groups.map(({ slug, indexable, articles }) => [
        slug,
        indexable,
        articles.length,
      ]),
    ).toEqual([
      ['calculus', true, minIndexableTagArticles],
      ['ac-circuits', false, 1],
      ['trigonometry', false, 1],
    ]);
  });
});
