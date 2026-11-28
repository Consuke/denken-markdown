import { describe, expect, it } from 'vitest';
import { groupQuestions } from '../../src/lib/question-groups';

const entry = (
  id: string,
  year: number,
  subject: 'theory' | 'law' | 'power-management' | 'machine-control',
) => ({ id, data: { year, subject } });

const entries = [
  entry('a', 2016, 'power-management'),
  entry('b', 2026, 'machine-control'),
  entry('c', 2016, 'theory'),
  entry('d', 2026, 'power-management'),
  entry('e', 2016, 'power-management'),
  entry('f', 2026, 'law'),
];

describe('問題のグループ化', () => {
  it('年度は新しい順、科目はtaxonomyの順に並べ、グループ内の順序を保つ', () => {
    const years = groupQuestions(entries, ['year']);
    expect(years.map((group) => [group.id, group.label])).toEqual([
      ['year-2026', '2026年度'],
      ['year-2016', '2016年度'],
    ]);
    expect(years[1]!.questions.map((question) => question.id)).toEqual([
      'a',
      'c',
      'e',
    ]);
    const subjects = groupQuestions(entries, ['subject']);
    expect(subjects.map((group) => [group.id, group.label])).toEqual([
      ['theory', '一次試験 理論'],
      ['law', '一次試験 法規'],
      ['power-management', '二次試験 電力・管理'],
      ['machine-control', '二次試験 機械・制御'],
    ]);
  });

  it('2段目は親のIDを前置したIDになる', () => {
    const [latest] = groupQuestions(entries, ['year', 'subject']);
    expect(latest!.children.map((group) => group.id)).toEqual([
      'year-2026-law',
      'year-2026-power-management',
      'year-2026-machine-control',
    ]);
    expect(latest!.children.every((group) => group.children.length === 0)).toBe(
      true,
    );
  });

  it('キーがなければ空', () => {
    expect(groupQuestions(entries, [])).toEqual([]);
  });
});
