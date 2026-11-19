import { describe, expect, it } from 'vitest';
import { readQuestionSources } from '../../src/lib/content-files';
import {
  relatedQuestions,
  questionDescription,
} from '../../src/lib/question-info';
import { siteOrigin } from '../../src/lib/site';

const entries = (await readQuestionSources()).filter(
  (entry) => entry.data.sample,
);

describe('一覧と関連問題', () => {
  it('自分自身を除き、共通分野の問題だけを並べる', () => {
    const current = entries.find(
      (entry) => entry.id === 'sample-transformers',
    )!;
    expect(relatedQuestions(current, entries).map((entry) => entry.id)).toEqual(
      ['sample-transmission'],
    );
    expect(relatedQuestions(current, [current])).toEqual([]);
  });
  it('関連問題は安定した順で最大5件', () => {
    const current = entries[0]!;
    const candidates = Array.from({ length: 7 }, (_, index) => ({
      ...current,
      id: `candidate-${index}`,
      data: { ...current.data, questionNumber: index + 1 },
    }));
    expect(
      relatedQuestions(current, candidates).map((entry) => entry.id),
    ).toEqual([
      'candidate-0',
      'candidate-1',
      'candidate-2',
      'candidate-3',
      'candidate-4',
    ]);
  });
  it('SEO説明は原文かメタデータから生成し、サンプルを明示する', () => {
    expect(questionDescription(entries[0]!.data)).toContain('架空');
    expect(
      questionDescription({
        ...entries[0]!.data,
        description: undefined,
        sample: false,
      }),
    ).toContain('二次試験');
  });
});

describe('canonical用オリジン', () => {
  it('HTTPSオリジンに正規化する', () => {
    expect(siteOrigin('https://denken.example.com/')).toBe(
      'https://denken.example.com',
    );
  });
  it.each([
    'http://example.com',
    'https://example.com/path',
    'https://example.com/?x=1',
    'https://a:b@example.com',
  ])('誤った本番URLを拒否する: %s', (value) =>
    expect(() => siteOrigin(value)).toThrow(),
  );
});
