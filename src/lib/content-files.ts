import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { questionSchema } from './schema';
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
