import { access } from 'node:fs/promises';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import { readQuestionSources } from '../../src/lib/content-files';
import { extractSections, parseMarkdown } from '../../src/lib/markdown-export';
import { questionDiagramFiles } from '../../src/lib/question-diagrams';
import { isPublicQuestion } from '../../src/lib/visibility';

const entries = (await readQuestionSources()).filter(
  (entry) => entry.data.year === 2026 && !entry.data.sample,
);

describe('2026年度PDFの取り込み', () => {
  it('電力・管理6問と機械・制御4問を大問単位で保存する', () => {
    for (const [subject, count] of [
      ['power-management', 6],
      ['machine-control', 4],
    ] as const) {
      expect(
        entries
          .filter((entry) => entry.data.subject === subject)
          .map((entry) => entry.data.questionNumber)
          .sort((a, b) => a - b),
      ).toEqual(Array.from({ length: count }, (_, index) => index + 1));
    }
  });
  it('問題文だけを収録し、小問を大問ファイル内に保持する', () => {
    const parts = {
      'power-management': [3, 2, 4, 4, 2, 4],
      'machine-control': [5, 3, 5, 4],
    };
    for (const entry of entries) {
      expect(Object.keys(extractSections(entry.body))).toEqual(['question']);
      const headings = parseMarkdown(entry.body).children.filter(
        (node) => node.type === 'heading' && node.depth === 3,
      );
      expect(headings).toHaveLength(
        parts[entry.data.subject][entry.data.questionNumber - 1]!,
      );
    }
  });
  it('全問を本番に公開する', () => {
    expect(entries).toHaveLength(10);
    for (const entry of entries) {
      expect(entry.data.reviewStatus).toBe('published');
      expect(isPublicQuestion(entry.data)).toBe(true);
      expect(entry.data.sourceUrl).toMatch(
        /^https:\/\/www\.shiken\.or\.jp\/chief\/upload\/20261115_ch_second_q0[12]\.pdf#page=\d+$/,
      );
    }
  });
  it('問題図9件が揃っている', async () => {
    const files = questionDiagramFiles(entries);
    expect(files).toHaveLength(9);
    for (const file of files)
      await expect(
        access(path.resolve('src/assets/question-diagrams', file)),
      ).resolves.toBeUndefined();
  });
  it('問題図のパストラバーサルを拒否する', () => {
    expect(() =>
      questionDiagramFiles([
        { body: '![図](/diagrams/questions/../../private.png)' },
      ]),
    ).toThrow('不正');
  });
});
