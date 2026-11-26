import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { articleSchema, questionSchema } from './schema';
import {
  articleId,
  articleTagGroups,
  isPublicArticle,
  validateArticleSet,
  type ArticleSource,
} from './article-model';
import {
  questionId,
  validateQuestionSet,
  type QuestionSource,
} from './validation';

export const questionsDirectory = new URL(
  '../content/questions/',
  import.meta.url,
);

export async function readQuestionSources(
  directory = questionsDirectory,
): Promise<QuestionSource[]> {
  const files = await readdir(directory, { withFileTypes: true });
  const entries: QuestionSource[] = [];
  for (const file of files.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    if (!file.isFile() || !file.name.endsWith('.md'))
      throw new Error(
        `questions/は1問1Markdownのフラット構成です: ${file.name}`,
      );
    try {
      const raw = await readFile(new URL(file.name, directory), 'utf8');
      const { content, frontmatter } = parseFrontmatter(raw);
      entries.push({
        id: questionId(file.name),
        data: questionSchema.parse(frontmatter),
        body: content,
      });
    } catch (error) {
      throw new Error(
        `${fileURLToPath(directory)}${file.name}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  validateQuestionSet(entries);
  return entries;
}

export const articlesDirectory = new URL(
  '../content/articles/',
  import.meta.url,
);

export async function readArticleSources(
  directory = articlesDirectory,
  questions?: QuestionSource[],
): Promise<ArticleSource[]> {
  const files = await readdir(directory, { withFileTypes: true });
  const entries: ArticleSource[] = [];
  for (const file of files.sort((a, b) => a.name.localeCompare(b.name, 'en'))) {
    if (!file.isFile() || !file.name.endsWith('.md'))
      throw new Error(
        `articles/は1記事1Markdownのフラット構成です: ${file.name}`,
      );
    try {
      const raw = await readFile(new URL(file.name, directory), 'utf8');
      const { content, frontmatter } = parseFrontmatter(raw);
      entries.push({
        id: articleId(file.name),
        data: articleSchema.parse(frontmatter),
        body: content,
      });
    } catch (error) {
      throw new Error(
        `${fileURLToPath(directory)}${file.name}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
  validateArticleSet(entries, questions ?? (await readQuestionSources()));
  return entries;
}

/** 本番で記事が少なくnoindexにするタグページのパス（サイトマップから除外する）。 */
export async function thinTagRoutes(): Promise<string[]> {
  const articles = (await readArticleSources()).filter((entry) =>
    isPublicArticle(entry.data),
  );
  return articleTagGroups(articles)
    .filter((group) => !group.indexable)
    .map((group) => `/articles/tag/${group.slug}/`);
}
