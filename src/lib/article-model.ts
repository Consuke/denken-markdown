import { visit } from 'unist-util-visit';
import type { ArticleData, QuestionData } from './schema';
import { parseArticleBody } from './markdown-export';
import { articleImagePrefix } from './question-diagrams';
import { questionId } from './validation';
import { absolutizeImages } from './ai-prompt';
import type { ArticleCategory, ArticleTag, Topic } from './taxonomy';

export interface ArticleSource {
  id: string;
  data: ArticleData;
  body: string;
}
type ArticleLike = { id: string; data: ArticleData };

/** 記事IDもファイル名から決まる恒久ID。問題と同じ規則を使う。 */
export const articleId = questionId;
/** /articles/category/ と /articles/tag/ と衝突するため記事IDに使えない名前 */
const reservedIds = new Set(['category', 'tag']);
/** 記事がこの本数未満のタグページはnoindexにし、サイトマップから外す */
export const minIndexableTagArticles = 3;

export function isPublicArticle(
  data: Pick<ArticleData, 'draft' | 'sample'>,
): boolean {
  return !data.draft && !data.sample;
}

export function selectVisibleArticles<T extends { data: ArticleData }>(
  entries: T[],
  preview: boolean,
): T[] {
  return entries.filter((entry) => preview || isPublicArticle(entry.data));
}

/** 新しい順。同日はIDの順で安定させる。 */
export function sortArticles<T extends ArticleLike>(entries: T[]): T[] {
  return [...entries].sort(
    (a, b) =>
      b.data.publishedAt.localeCompare(a.data.publishedAt) ||
      a.id.localeCompare(b.id, 'en'),
  );
}

/**
 * スキーマ検証済みの記事について、ID・本文・参照先を検証する。
 * frontmatterの検証はarticleSchema（Content Collectionsと読み込み関数）で行う。
 */
export function validateArticleSet(
  entries: ArticleSource[],
  questions: { id: string; data: Pick<QuestionData, 'sample'> }[],
): void {
  const questionSamples = new Map(
    questions.map((question) => [question.id, question.data.sample]),
  );
  const articleSamples = new Map(
    entries.map((entry) => [entry.id, entry.data.sample]),
  );
  const ids = new Set<string>();
  for (const entry of entries) {
    try {
      articleId(`${entry.id}.md`);
      if (reservedIds.has(entry.id))
        throw new Error(`記事IDに「${entry.id}」は使えません`);
      if (ids.has(entry.id)) throw new Error(`重複ID: ${entry.id}`);
      ids.add(entry.id);
      const { data } = entry;
      for (const id of data.relatedQuestions) {
        if (!questionSamples.has(id))
          throw new Error(`関連問題が存在しません: ${id}`);
        if (!data.sample && questionSamples.get(id))
          throw new Error(
            `サンプル以外の記事からサンプル問題は参照できません: ${id}`,
          );
      }
      for (const id of data.next) {
        if (id === entry.id) throw new Error('nextに自分自身は指定できません');
        if (!articleSamples.has(id))
          throw new Error(`nextの記事が存在しません: ${id}`);
        if (!data.sample && articleSamples.get(id))
          throw new Error(
            `サンプル以外の記事からサンプル記事は参照できません: ${id}`,
          );
      }
      visit(parseArticleBody(entry.body), 'image', (node) => {
        if (
          node.url.startsWith(articleImagePrefix) &&
          !node.url.startsWith(`${articleImagePrefix}${entry.id}/`)
        )
          throw new Error(
            `記事の画像は ${articleImagePrefix}${entry.id}/ に置いてください: ${node.url}`,
          );
      });
    } catch (error) {
      throw new Error(
        `articles/${entry.id}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}

/** 指定した問題を関連問題に挙げている記事（問題ページの逆リンク用）。 */
export function articlesForQuestion<T extends ArticleLike>(
  questionId: string,
  articles: T[],
): T[] {
  return sortArticles(
    articles.filter((article) =>
      article.data.relatedQuestions.includes(questionId),
    ),
  );
}

/** 関連問題がその分野に属する記事（分野ページ用）。 */
export function articlesForTopic<T extends ArticleLike>(
  topic: Topic,
  articles: T[],
  questions: { id: string; data: Pick<QuestionData, 'topics'> }[],
): T[] {
  const ids = new Set(
    questions
      .filter((question) => question.data.topics.includes(topic))
      .map((question) => question.id),
  );
  return sortArticles(
    articles.filter((article) =>
      article.data.relatedQuestions.some((id) => ids.has(id)),
    ),
  );
}

/**
 * 「次に読んでほしい記事」。nextの指定を順に使い、
 * 指定がなければ共通のタグが多い記事を新しい順に最大3件。
 * 引数のarticlesは表示対象の記事だけを渡す（非公開の記事を出さないため）。
 */
export function nextArticles<T extends ArticleLike>(
  current: T,
  articles: T[],
): T[] {
  if (current.data.next.length)
    return current.data.next.flatMap((id) =>
      articles.filter((article) => article.id === id),
    );
  const shared = (article: T) =>
    article.data.tags.filter((tag) => current.data.tags.includes(tag)).length;
  return sortArticles(
    articles.filter(
      (article) => article.id !== current.id && shared(article) > 0,
    ),
  )
    .sort((a, b) => shared(b) - shared(a))
    .slice(0, 3);
}

export interface ArticleGroup<K extends string, T> {
  slug: K;
  articles: T[];
}

/** 記事が1本以上あるカテゴリだけを返す。 */
export function articleCategoryGroups<T extends ArticleLike>(
  articles: T[],
): ArticleGroup<ArticleCategory, T>[] {
  const groups = new Map<ArticleCategory, T[]>();
  for (const article of sortArticles(articles))
    groups.set(article.data.category, [
      ...(groups.get(article.data.category) ?? []),
      article,
    ]);
  return [...groups].map(([slug, articles]) => ({ slug, articles }));
}

/** 記事が1本以上あるタグだけを返す。indexableは検索エンジンに登録するか。 */
export function articleTagGroups<T extends ArticleLike>(
  articles: T[],
): (ArticleGroup<ArticleTag, T> & { indexable: boolean })[] {
  const groups = new Map<ArticleTag, T[]>();
  for (const article of sortArticles(articles))
    for (const tag of article.data.tags)
      groups.set(tag, [...(groups.get(tag) ?? []), article]);
  return [...groups].map(([slug, articles]) => ({
    slug,
    articles,
    indexable: articles.length >= minIndexableTagArticles,
  }));
}

/** コピー用のMarkdown。タイトルを見出しにし、サイト内の画像は絶対URLにする。 */
export function articleCopyMarkdown(
  article: { data: Pick<ArticleData, 'title'>; body: string },
  origin: string,
): string {
  return `# ${article.data.title}\n\n${absolutizeImages(article.body, origin).replace(/^\s+/, '')}`;
}
