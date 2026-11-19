import { questionSchema, type QuestionData } from './schema';
import { extractSections } from './markdown-export';

export interface QuestionSource {
  id: string;
  data: QuestionData;
  body: string;
}

export function questionId(filename: string): string {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.md$/.test(filename)) {
    throw new Error(
      `ファイル名は小文字ASCII slug + .mdにしてください: ${filename}`,
    );
  }
  return filename.slice(0, -3);
}

export function validateQuestionSet(entries: QuestionSource[]): void {
  const ids = new Set<string>();
  const numbers = new Set<string>();
  for (const entry of entries) {
    try {
      questionId(`${entry.id}.md`);
      const data = questionSchema.parse(entry.data);
      if (ids.has(entry.id)) throw new Error(`重複ID: ${entry.id}`);
      ids.add(entry.id);
      const number = JSON.stringify([
        data.sample,
        data.year,
        data.examStage,
        data.subject,
        data.questionNumber,
        data.partNumber ?? '',
      ]);
      if (numbers.has(number))
        throw new Error(
          `年度・試験区分・科目・問題番号・小問が重複しています: ${number}`,
        );
      numbers.add(number);
      extractSections(entry.body);
    } catch (error) {
      throw new Error(
        `${entry.id}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
