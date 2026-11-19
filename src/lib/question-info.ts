import type { QuestionData } from './schema';
import { subjects } from './taxonomy';
import { sortQuestions } from './visibility';

export function questionDescription(data: QuestionData): string {
  return (
    data.description ??
    `${data.sample ? '架空の自作サンプル。公式過去問ではありません。' : ''}${data.year}年度・二次試験 ${subjects[data.subject].label} 問${data.questionNumber}${data.partNumber ? ` (${data.partNumber})` : ''}「${data.title}」の問題文。MarkdownとLaTeXをコピーできます。`
  );
}

export function relatedQuestions<T extends { id: string; data: QuestionData }>(
  current: T,
  entries: T[],
): T[] {
  return sortQuestions(
    entries.filter(
      (entry) =>
        entry.id !== current.id &&
        entry.data.topics.some((topic) => current.data.topics.includes(topic)),
    ),
  ).slice(0, 5);
}
