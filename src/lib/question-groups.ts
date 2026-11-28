import type { QuestionData } from './schema';
import { examStages, subjectOrder, subjects } from './taxonomy';

export type GroupKey = 'year' | 'subject';

type Groupable = { data: Pick<QuestionData, 'year' | 'subject'> };

export interface QuestionGroup<T extends Groupable> {
  key: GroupKey;
  /** ページ内リンク用のID（例: `year-2016`、`power-management`、`year-2016-power-management`）。 */
  id: string;
  label: string;
  questions: T[];
  children: QuestionGroup<T>[];
}

const groupValue = (key: GroupKey, entry: Groupable) =>
  key === 'year' ? String(entry.data.year) : entry.data.subject;

const groupLabel = (key: GroupKey, value: string) => {
  if (key === 'year') return `${value}年度`;
  const subject = subjects[value as QuestionData['subject']];
  return `${examStages[subject.stage].label} ${subject.label}`;
};

const groupId = (key: GroupKey, value: string) =>
  key === 'year' ? `year-${value}` : value;

const compareValues = (key: GroupKey, a: string, b: string) =>
  key === 'year'
    ? Number(b) - Number(a)
    : subjectOrder(a as QuestionData['subject']) -
      subjectOrder(b as QuestionData['subject']);

/**
 * 問題を年度（新しい順）・科目（taxonomyの順）で入れ子にまとめる。
 * 各グループ内の問題は渡された順を保つ。
 */
export function groupQuestions<T extends Groupable>(
  questions: T[],
  keys: GroupKey[],
  parentId = '',
): QuestionGroup<T>[] {
  const [key, ...rest] = keys;
  if (!key) return [];
  const buckets = new Map<string, T[]>();
  for (const entry of questions) {
    const value = groupValue(key, entry);
    buckets.set(value, [...(buckets.get(value) ?? []), entry]);
  }
  return [...buckets.entries()]
    .sort(([a], [b]) => compareValues(key, a, b))
    .map(([value, entries]) => {
      const id = (parentId ? `${parentId}-` : '') + groupId(key, value);
      return {
        key,
        id,
        label: groupLabel(key, value),
        questions: entries,
        children: groupQuestions(entries, rest, id),
      };
    });
}
