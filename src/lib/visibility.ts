import type { QuestionData } from './schema';
import { subjectOrder } from './taxonomy';

export function isPublicQuestion(
  data: Pick<QuestionData, 'reviewStatus' | 'sample'>,
): boolean {
  return data.reviewStatus === 'published' && data.sample === false;
}

export function selectVisibleQuestions<T extends { data: QuestionData }>(
  entries: T[],
  preview: boolean,
): T[] {
  return entries.filter((entry) => preview || isPublicQuestion(entry.data));
}

export function sortQuestions<T extends { id: string; data: QuestionData }>(
  entries: T[],
): T[] {
  return [...entries].sort(
    (a, b) =>
      b.data.year - a.data.year ||
      subjectOrder(a.data.subject) - subjectOrder(b.data.subject) ||
      a.data.questionNumber - b.data.questionNumber ||
      (a.data.partNumber ?? '').localeCompare(b.data.partNumber ?? '', 'en', {
        numeric: true,
      }) ||
      a.id.localeCompare(b.id, 'en'),
  );
}
