import { getCollection, type CollectionEntry } from 'astro:content';
import { selectVisibleQuestions, sortQuestions } from './visibility';
import { validateQuestionSet } from './validation';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { parseFrontmatter } from '@astrojs/markdown-remark';

export type Question = CollectionEntry<'questions'>;
export const isContentPreview = import.meta.env.DEV || __CONTENT_PREVIEW__;

export async function getVisibleQuestions(): Promise<Question[]> {
  const collection = await getCollection('questions');
  // Content Collectionsのbodyは末尾改行を正規化するため、コピー用本文は原本から読む。
  const entries = await Promise.all(
    collection.map(async (entry) => ({
      ...entry,
      body: parseFrontmatter(
        await readFile(
          path.resolve('src/content/questions', entry.id + '.md'),
          'utf8',
        ),
      ).content,
    })),
  );
  validateQuestionSet(
    entries.map((entry) => ({ ...entry, body: entry.body ?? '' })),
  );
  return sortQuestions(selectVisibleQuestions(entries, isContentPreview));
}
