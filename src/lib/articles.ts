import { getCollection, type CollectionEntry } from 'astro:content';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import {
  selectVisibleArticles,
  sortArticles,
  validateArticleSet,
} from './article-model';
import { isContentPreview } from './questions';

export type Article = CollectionEntry<'articles'> & { body: string };

/** 公開条件で絞った記事。一覧・詳細・逆リンク・ナビはすべてこれを使う。 */
export async function getVisibleArticles(): Promise<Article[]> {
  const [collection, questions] = await Promise.all([
    getCollection('articles'),
    getCollection('questions'),
  ]);
  // コピー用の本文は、末尾改行を正規化しない原本から読む（問題と同じ扱い）。
  const articles = await Promise.all(
    collection.map(async (entry) => ({
      ...entry,
      body: parseFrontmatter(
        await readFile(
          path.resolve('src/content/articles', entry.id + '.md'),
          'utf8',
        ),
      ).content,
    })),
  );
  validateArticleSet(articles, questions);
  return sortArticles(selectVisibleArticles(articles, isContentPreview));
}
