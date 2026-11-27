import { describe, expect, it } from 'vitest';
import { readQuestionSources } from '../../src/lib/content-files';
import { questionSchema } from '../../src/lib/schema';
import { extractSections } from '../../src/lib/markdown-export';
import { questionId, validateQuestionSet } from '../../src/lib/validation';
import {
  isPublicQuestion,
  selectVisibleQuestions,
  sortQuestions,
} from '../../src/lib/visibility';

const entries = (await readQuestionSources()).filter(
  (entry) => entry.data.sample,
);
const base = entries[0]!;
const body =
  '## 問題\n\n原文 $V=RI$。\n\n## 解答\n\n答え。\n\n## 独自解説\n\n解説。\n';

describe('MarkdownのASTセクション', () => {
  it('コードフェンス内の見出しを分割せず、Markdownを原文のまま保持する', () => {
    const markdown = body.replace(
      '原文 $V=RI$。',
      '原文 $V=RI$。\n\n```md\n## 解答\n```',
    );
    const sections = extractSections(markdown);
    expect(sections.question.markdown).toBe(
      '\n原文 $V=RI$。\n\n```md\n## 解答\n```\n\n',
    );
    expect(sections.answer?.markdown).toBe('\n答え。\n\n');
    expect(sections.explanation?.markdown).toBe('\n解説。\n');
  });
  it('CRLFとUnicodeのoffsetを保持する', () => {
    const sections = extractSections(body.replace(/\n/g, '\r\n'));
    expect(sections.question.markdown).toBe('\r\n原文 $V=RI$。\r\n\r\n');
  });
  it.each([
    body.replace('## 問題', '### 問題'),
    body.replace('## 解答', '## 問題'),
    body.replace('答え。', ''),
    body.replace('## 解答', '## 未知'),
    body.replace('原文 $V=RI$。', '<script>alert(1)</script>'),
  ])('不正な構成を拒否する', (markdown) =>
    expect(() => extractSections(markdown)).toThrow(),
  );
  it('HTML特殊文字を含む数式はHTMLと誤認しない', () => {
    expect(() =>
      extractSections(body.replace('$V=RI$', '$a < b$')),
    ).not.toThrow();
  });
  it('問題文だけを受け入れ、解答や解説を補わない', () => {
    const markdown = '## 問題\n\n回路の電圧 $V$ を求めよ。\n';
    const sections = extractSections(markdown);
    expect(Object.keys(sections)).toEqual(['question']);
    expect(sections.question.markdown).toBe('\n回路の電圧 $V$ を求めよ。\n');
  });
  it('任意セクションも、存在する場合は空本文と順序逆転を拒否する', () => {
    expect(() => extractSections('## 問題\n\n本文\n\n## 解答\n')).toThrow('空');
    expect(() =>
      extractSections('## 解答\n\n答え\n\n## 問題\n\n本文\n'),
    ).toThrow('順');
  });
});

describe('コンテンツの品質', () => {
  it('3件すべてが架空と明記されている', () => {
    expect(entries).toHaveLength(3);
    for (const entry of entries) {
      expect(entry.data.sample).toBe(true);
      expect(entry.data.title).toContain('架空');
    }
  });
  it.each([
    { title: '' },
    { subject: 'unknown' },
    { topics: ['unknown'] },
    { examStage: 'primary' },
    { examStage: 'secondary', subject: 'theory' },
    { publishedAt: '2026-02-30' },
    { updatedAt: '9999-12-31' },
    { publishedAt: '2026-11-18', updatedAt: '2026-11-17' },
    { questionNumber: 0 },
    { difficulty: 6 },
    { sourceUrl: 'javascript:alert(1)' },
    { title: 'サンプルとの記載なし' },
    { slug: 'override-id' },
  ])('不正なメタデータを拒否する: %j', (data) => {
    expect(questionSchema.safeParse({ ...base.data, ...data }).success).toBe(
      false,
    );
  });
  it('必須フィールド欠落を拒否する', () => {
    const { sourceName: _name, ...data } = base.data;
    expect(questionSchema.safeParse(data).success).toBe(false);
  });
  it('重複IDと問題番号を検出し、小問の区別を許す', () => {
    expect(() => validateQuestionSet([base, base])).toThrow('重複ID');
    expect(() =>
      validateQuestionSet([base, { ...base, id: 'other-id' }]),
    ).toThrow('問題番号');
    expect(() =>
      validateQuestionSet([
        base,
        { ...base, id: 'other-id', data: { ...base.data, partNumber: '2' } },
      ]),
    ).not.toThrow();
  });
  it.each(['Upper.md', '日本語.md', '../path.md', 'slug.MD', 'bad_slug.md'])(
    '恒久IDのルールを検証する: %s',
    (filename) => expect(() => questionId(filename)).toThrow(),
  );
  it('架空サンプルと実問題の番号を区別し、実問題同士の重複は拒否する', () => {
    const real = {
      ...base,
      id: 'real-question',
      data: {
        ...base.data,
        sample: false,
        sourceUrl:
          'https://www.shiken.or.jp/chief/upload/20251116_ch_second_q01.pdf',
      },
    };
    expect(() => validateQuestionSet([base, real])).not.toThrow();
    expect(() =>
      validateQuestionSet([real, { ...real, id: 'duplicate-real-question' }]),
    ).toThrow('問題番号');
  });
});

describe('公開制御とソート', () => {
  it.each(['draft', 'reviewed', 'published'] as const)(
    '%sのサンプルは本番で非公開',
    (reviewStatus) => {
      expect(isPublicQuestion({ sample: true, reviewStatus })).toBe(false);
      expect(isPublicQuestion({ sample: false, reviewStatus })).toBe(
        reviewStatus === 'published',
      );
    },
  );
  it('公開対象だけを抽出し、プレビューでは全件表示する', () => {
    const published = {
      ...base,
      id: 'real-reviewed-fixture',
      data: { ...base.data, sample: false, reviewStatus: 'published' as const },
    };
    expect(selectVisibleQuestions([...entries, published], false)).toEqual([
      published,
    ]);
    expect(selectVisibleQuestions(entries, true)).toHaveLength(3);
  });
  it('年度降順・科目（taxonomyの順）・問題番号順で安定して並べる', () => {
    expect(sortQuestions(entries).map((entry) => entry.id)).toEqual([
      'sample-transformers',
      'sample-feedback',
      'sample-transmission',
    ]);
  });
});
