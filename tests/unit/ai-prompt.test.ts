import { describe, expect, it } from 'vitest';
import {
  absolutizeImages,
  aiServices,
  buildAiLinks,
  buildAiPrompt,
  maxAiUrlLength,
  type AiPromptInput,
} from '../../src/lib/ai-prompt';
import { readQuestionSources } from '../../src/lib/content-files';
import { extractSections } from '../../src/lib/markdown-export';

const origin = 'https://denken-study.com';
const base: AiPromptInput = {
  title: '2025年度 機械・制御 問1 例題',
  subject: 'machine-control',
  pageUrl: `${origin}/questions/example/`,
  question: '\n本文 $V=RI$\n\n![回路図](/diagrams/questions/2025/fig.png)\n\n',
  answer: '\n$$\nI=\\frac{V}{R}\n$$\n',
};
const decodeQuery = (href: string) => new URL(href).searchParams.get('q');

describe('AI解説用プロンプト', () => {
  it('サイト内の画像だけを絶対URLにする', () => {
    expect(
      absolutizeImages(
        '![a](/diagrams/x.png) ![b](https://example.org/y.png) [c](/questions/)',
        origin,
      ),
    ).toBe(
      `![a](${origin}/diagrams/x.png) ![b](https://example.org/y.png) [c](/questions/)`,
    );
  });

  it('問題文と公式解答をLaTeXのまま含め、図の注意を添える', () => {
    const prompt = buildAiPrompt(base, origin);
    expect(prompt).toContain('# 問題\n\n本文 $V=RI$');
    expect(prompt).toContain(
      `![回路図](${origin}/diagrams/questions/2025/fig.png)`,
    );
    expect(prompt).toContain('# 公式標準解答\n\n$$\nI=\\frac{V}{R}\n$$');
    expect(prompt).toContain('公式標準解答を正として');
    expect(prompt).toContain('図はURLの画像です');
    expect(prompt).toContain('（機械・制御）');
    expect(prompt).toContain(`掲載ページ：${base.pageUrl}`);
  });

  it('解答が未掲載なら、解答の作成と検算を依頼する', () => {
    const prompt = buildAiPrompt(
      { ...base, answer: undefined, question: '本文のみ' },
      origin,
    );
    expect(prompt).not.toContain('# 公式標準解答');
    expect(prompt).toContain('公式解答は添付していません');
    expect(prompt).not.toContain('図はURLの画像です');
  });

  it('ChatGPTとClaudeのリンクにプロンプトをそのまま渡す', () => {
    const { prompt, links } = buildAiLinks(base, origin);
    expect(links.map((link) => link.id)).toEqual(['chatgpt', 'claude']);
    for (const link of links) {
      const service = aiServices.find(({ id }) => id === link.id)!;
      expect(link.href.startsWith(`${service.url}?q=`)).toBe(true);
      expect(decodeQuery(link.href)).toBe(prompt);
      expect(link.includesAnswer).toBe(true);
    }
  });

  it('URLが長すぎる場合は、問題文だけのプロンプトに切り替える', () => {
    const long = { ...base, answer: 'あ'.repeat(maxAiUrlLength) };
    const { prompt, links } = buildAiLinks(long, origin);
    expect(prompt).toContain('あ'.repeat(100));
    for (const link of links) {
      expect(link.includesAnswer).toBe(false);
      expect(decodeQuery(link.href)).toBe(
        buildAiPrompt({ ...long, answer: undefined }, origin),
      );
    }
  });

  it('全問題のリンクがURL長の上限に収まる', async () => {
    for (const entry of await readQuestionSources()) {
      const sections = extractSections(entry.body);
      const { links } = buildAiLinks(
        {
          title: entry.data.title,
          subject: entry.data.subject,
          pageUrl: `${origin}/questions/${entry.id}/`,
          question: sections.question.markdown,
          answer: sections.answer?.markdown,
        },
        origin,
      );
      for (const link of links)
        expect(link.href.length, entry.id).toBeLessThanOrEqual(maxAiUrlLength);
    }
  });
});
