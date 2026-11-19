import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { readQuestionSources } from '../../src/lib/content-files';
import { extractSections } from '../../src/lib/markdown-export';
import { questionDiagramFiles } from '../../src/lib/question-diagrams';
import { isPublicQuestion } from '../../src/lib/visibility';

interface DocumentSource {
  year: number;
  type: string;
  filename: string;
  sha256: string;
  pageCount: number;
  sourceUrl: string;
}
interface YearManifest {
  year: number;
  questions: {
    subject: 'power-management' | 'machine-control';
    q: number;
    questionPages: number[];
    answerPages: number[];
  }[];
  figures: { type: string; page: number; box: number[]; file: string }[];
}

const documents: DocumentSource[] = JSON.parse(
  await readFile('docs/imports/pdf-sources.json', 'utf8'),
).documents;
const years = Array.from({ length: 9 }, (_, index) => 2017 + index);
const manifests: YearManifest[] = await Promise.all(
  years.map(async (year) =>
    JSON.parse(await readFile(`docs/imports/${year}.json`, 'utf8')),
  ),
);
const entries = (await readQuestionSources()).filter(
  ({ data }) => !data.sample && years.includes(data.year),
);

describe('2017〜2025年度の問題・公式解答の取り込み', () => {
  it('9年度それぞれに電力・管理6問、機械・制御4問があり、大問が欠けていない', () => {
    expect(entries).toHaveLength(90);
    for (const year of years) {
      for (const [subject, count] of [
        ['power-management', 6],
        ['machine-control', 4],
      ] as const) {
        expect(
          entries
            .filter(
              (entry) =>
                entry.data.year === year && entry.data.subject === subject,
            )
            .map((entry) => entry.data.questionNumber)
            .sort((a, b) => a - b),
          `${year} ${subject}`,
        ).toEqual(Array.from({ length: count }, (_, index) => index + 1));
      }
    }
  });

  it('問題と公式解答だけを収録し、全問を下書きに保つ', () => {
    for (const entry of entries) {
      expect(Object.keys(extractSections(entry.body)), entry.id).toEqual([
        'question',
        'answer',
      ]);
      expect(entry.data.partNumber, entry.id).toBeUndefined();
      expect(entry.data.reviewStatus, entry.id).toBe('draft');
      expect(isPublicQuestion(entry.data), entry.id).toBe(false);
    }
  });

  it('各大問の出典とページが、原本27冊の対応表と一致する', () => {
    const archive = documents.filter((doc) => years.includes(doc.year));
    expect(archive).toHaveLength(27);
    for (const doc of archive) {
      expect(doc.sha256).toMatch(/^[a-f0-9]{64}$/);
      expect(doc.filename).toContain(String(doc.year));
      expect(doc.sourceUrl).toMatch(
        /^https:\/\/www\.shiken\.or\.jp\/chief\/upload\//,
      );
    }
    for (const manifest of manifests) {
      expect(manifest.questions).toHaveLength(10);
      for (const question of manifest.questions) {
        const id = `${manifest.year}-secondary-${question.subject}-q${String(question.q).padStart(2, '0')}`;
        const entry = entries.find((entry) => entry.id === id)!;
        expect(entry, id).toBeDefined();
        for (const [type, pages, url] of [
          [question.subject, question.questionPages, entry.data.sourceUrl],
          ['answers', question.answerPages, entry.data.answerSourceUrl],
        ] as const) {
          const source = archive.find(
            (doc) => doc.year === manifest.year && doc.type === type,
          )!;
          expect(pages.length, id).toBeGreaterThan(0);
          expect(
            pages.every(
              (page) =>
                Number.isInteger(page) && page > 0 && page <= source.pageCount,
            ),
            id,
          ).toBe(true);
          expect(url, id).toBe(`${source.sourceUrl}#page=${pages[0]}`);
        }
      }
    }
  });

  it('切り出した問題図・解答図110点がMarkdownの参照と一致する', () => {
    const files = manifests.flatMap((manifest) => {
      for (const figure of manifest.figures) {
        const source = documents.find(
          (doc) => doc.year === manifest.year && doc.type === figure.type,
        )!;
        expect(figure.page).toBeLessThanOrEqual(source.pageCount);
        expect(figure.box).toHaveLength(4);
        expect(figure.box.every((coordinate) => coordinate >= 0)).toBe(true);
      }
      return manifest.figures.map(
        (figure) => `${manifest.year}/${figure.file}`,
      );
    });
    expect(files).toHaveLength(110);
    expect(new Set(files).size).toBe(files.length);
    expect(questionDiagramFiles(entries).sort()).toEqual(files.sort());
  });
});
