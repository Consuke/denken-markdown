import { describe, expect, it } from 'vitest';
import { load } from 'cheerio';
import { extractSections } from '../../src/lib/markdown-export';
import { renderSection } from '../../src/lib/render-section';
import { validateMath } from '../../src/lib/math';
import { safeJson } from '../../src/lib/safe-json';

function document(question: string): string {
  return `## 問題\n\n${question}\n\n## 解答\n\n答え。\n\n## 独自解説\n\n解説。`;
}

describe('数式原文と安全なHTML', () => {
  it.each([
    ['inline', 'V=RI'],
    ['block', '\\frac{a}{b}'],
    [
      'block',
      '\\begin{aligned} a &< b \\\\ c &= \\text{"quoted"} \\end{aligned}',
    ],
  ])('%s式のLaTeXソースを欠損せずHTML属性で保持する', async (mode, tex) => {
    const md = mode === 'inline' ? `$${tex}$` : `$$\n${tex}\n$$`;
    const html = await renderSection(extractSections(document(md)).question);
    const $ = load(html);
    expect($('.formula').attr('data-tex')).toBe(tex);
    expect($('button').length).toBe(0);
    expect($('.katex').length).toBe(1);
    expect($('math').length).toBe(1);
    expect($('script').length).toBe(0);
    expect($('.katex-error').length).toBe(0);
  });
  it('JSON内の閉じscriptとHTMLを安全に保持する', () => {
    const value = {
      question:
        '\n```html\n</script><img src=x onerror="alert(1)">\n```\n$V=RI$\n',
    };
    const serialized = safeJson(value);
    expect(serialized).not.toContain('<');
    expect(JSON.parse(serialized)).toEqual(value);
    const $ = load(
      `<script type="application/json" id="payload">${serialized}</script>`,
    );
    expect($('img').length).toBe(0);
    expect(JSON.parse($('#payload').text())).toEqual(value);
  });
  it('全角括弧や数式で終わる強調の直後に和文が続いても太字にする', async () => {
    const html = await renderSection(
      extractSections(
        document(
          '**位相（波形のタイミング）**が重要。**$j$ を掛ける**んです。',
        ),
      ).question,
    );
    const $ = load(html);
    expect($('strong').length).toBe(2);
    expect($('strong').first().text()).toBe('位相（波形のタイミング）');
    expect($('p').text()).not.toContain('*');
  });
  it('コードブロック内の$式$は数式として扱わない', async () => {
    const html = await renderSection(
      extractSections(document('```txt\n$not_math$\n```')).question,
    );
    expect(load(html)('.formula[data-tex]').length).toBe(0);
  });
  it('不正LaTeXとmathコードフェンスをビルド前に拒否する', () => {
    expect(() => validateMath('$\\thisCommandDoesNotExist{x}$')).toThrow(
      '数式エラー',
    );
    expect(() => validateMath('$$\n\\frac{a}\n$$')).toThrow();
    expect(() => validateMath('```math\nx\n```')).toThrow('コードフェンス');
  });
  it('Markdownリンクの危険なプロトコルを拒否する', () => {
    expect(() =>
      extractSections(document('[link](javascript:alert%281%29)')),
    ).toThrow('URLプロトコル');
  });
});
