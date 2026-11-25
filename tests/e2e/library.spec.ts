import { test, expect } from '@playwright/test';
import { readQuestionSources } from '../../src/lib/content-files';
import { extractSections } from '../../src/lib/markdown-export';

const entries = await readQuestionSources();
const sample = entries.find((entry) => entry.id === 'sample-transformers')!;
const sections = extractSections(sample.body);
const sampleUrl = `/questions/${sample.id}/`;

test('問題文だけの2026年度ページで図と数式を表示し、不要な解答欄を出さない', async ({
  page,
}, testInfo) => {
  for (const id of [
    '2026-secondary-power-management-q03',
    '2026-secondary-machine-control-q02',
    '2026-secondary-machine-control-q03',
  ]) {
    await page.goto('/questions/' + id + '/');
    await expect(page.locator('#question')).toBeVisible();
    await expect(page.locator('#question .prose button')).toHaveCount(0);
    await expect(page.locator('#question math').first()).toBeAttached();
    await expect(
      page.locator('#answer, #explanation, #knowledge-title'),
    ).toHaveCount(0);
    await expect(
      page.getByRole('button', { name: '問題文のMarkdownをコピー' }),
    ).toBeVisible();
    await expect(page.locator('[data-copy-key="answer"]')).toHaveCount(0);
    expect(
      await page
        .locator('#question img')
        .evaluateAll((images) =>
          images.every(
            (image) =>
              (image as HTMLImageElement).complete &&
              (image as HTMLImageElement).naturalWidth > 0,
          ),
        ),
    ).toBe(true);
  }
  if (testInfo.project.name === 'desktop-chromium') {
    await page.screenshot({
      path: testInfo.outputPath('2026-machine-q03-desktop.png'),
      fullPage: true,
    });
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/questions/2026-secondary-power-management-q03/');
    await page.screenshot({
      path: testInfo.outputPath('2026-power-q03-mobile.png'),
      fullPage: true,
    });
  }
});

test('分類・年度・詳細・関連問題を辿れる', async ({ page }) => {
  await page.goto('/');
  await page
    .getByRole('navigation', { name: '問題の分類から探す' })
    .getByRole('link', { name: '電力・管理', exact: true })
    .click();
  await expect(page).toHaveURL(/\/subjects\/power-management\/$/);
  await expect(page.locator('.question-entry')).toHaveCount(
    entries.filter((entry) => entry.data.subject === 'power-management').length,
  );
  await page.locator('.browse-options > summary').click();
  await page
    .locator('.browse-filters')
    .getByRole('link', { name: '2025年度', exact: true })
    .click();
  await expect(page.locator('.question-entry')).toHaveCount(
    entries.filter((entry) => entry.data.year === 2025).length,
  );
  await page.getByRole('link', { name: /変圧器の並行運転と負荷分担/ }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    sample.data.title,
  );
  await expect(page.locator('.sample-notice')).toContainText(
    '公式過去問ではありません',
  );
  await page
    .locator('.question-meta .topic-links')
    .getByRole('link', { name: '変圧器', exact: true })
    .click();
  await expect(page).toHaveURL(/\/topics\/transformers\/$/);
  await page.goto(sampleUrl);
  const related = page
    .locator('section[aria-labelledby="related-title"] a')
    .first();
  const relatedUrl = await related.getAttribute('href');
  expect(relatedUrl).toMatch(/^\/questions\/[a-z0-9-]+\/$/);
  await related.click();
  expect(new URL(page.url()).pathname).toBe(relatedUrl);
  await page.getByRole('link', { name: '訂正を依頼する', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('訂正依頼');
});

test('取り込んだ公式解答を開閉し、問題・解答を原文どおりコピーできる', async ({
  page,
}, testInfo) => {
  test.setTimeout(120_000);
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value: string) => {
          (window as unknown as { copied: string }).copied = value;
        },
      },
    });
  });
  for (const id of [
    '2017-secondary-power-management-q01',
    '2023-secondary-machine-control-q02',
    '2025-secondary-machine-control-q04',
  ]) {
    const entry = entries.find((entry) => entry.id === id)!;
    const original = extractSections(entry.body);
    await page.goto(`/questions/${id}/`);
    await expect(page.locator('#answer')).not.toHaveAttribute('open', '');
    await expect(page.locator('#explanation, #knowledge-title')).toHaveCount(0);
    await page.locator('.source-details > summary').click();
    await expect(
      page.getByRole('link', { name: '公式解答の資料' }),
    ).toHaveAttribute('href', entry.data.answerSourceUrl!);
    await page
      .getByRole('button', { name: '問題文のMarkdownをコピー' })
      .click();
    expect(
      await page.evaluate(
        () => (window as unknown as { copied: string }).copied,
      ),
    ).toBe(original.question.markdown);
    await page.locator('#answer > summary').focus();
    await page.keyboard.press('Enter');
    await expect(page.locator('#answer')).toHaveAttribute('open', '');
    await page.getByRole('button', { name: '解答のMarkdownをコピー' }).click();
    expect(
      await page.evaluate(
        () => (window as unknown as { copied: string }).copied,
      ),
    ).toBe(original.answer?.markdown);
    for (const picture of await page.locator('#answer img').all()) {
      await expect(picture).toHaveJSProperty('complete', true);
      expect(
        await picture.evaluate(
          (image) => (image as HTMLImageElement).naturalWidth,
        ),
      ).toBeGreaterThan(0);
    }
    if (
      id === '2023-secondary-machine-control-q02' &&
      testInfo.project.name === 'desktop-chromium'
    ) {
      await page.screenshot({
        path: testInfo.outputPath('2023-official-answer.png'),
        fullPage: true,
      });
    }
    await page.locator('#answer > summary').click();
    await expect(page.locator('#answer')).not.toHaveAttribute('open', '');
  }
});

test('Markdownのコピー値が数式を含めて原文と一致し、成功・失敗を通知する', async ({
  page,
}) => {
  // ブラウザ差・OSの権限に依存しない検証。実際のClipboard APIは別ケースで確認。
  await page.addInitScript(() => {
    const state = window as unknown as { copied: string[]; failCopy: boolean };
    state.copied = [];
    state.failCopy = false;
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value: string) => {
          if (state.failCopy) throw new Error('Permission denied');
          state.copied.push(value);
        },
      },
    });
  });
  await page.goto(sampleUrl);
  const questionCopy = page.getByRole('button', {
    name: '問題文のMarkdownをコピー',
  });
  await questionCopy.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByRole('status')).toHaveText('コピーしました');
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as unknown as { copied: string[] }).copied.at(-1),
      ),
    )
    .toBe(sections.question.markdown);
  await page.locator('#answer > summary').click();
  await page.getByRole('button', { name: '解答のMarkdownをコピー' }).click();
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as unknown as { copied: string[] }).copied.at(-1),
      ),
    )
    .toBe(sections.answer?.markdown);
  await page.evaluate(() => {
    (window as unknown as { failCopy: boolean }).failCopy = true;
  });
  await questionCopy.click();
  await expect(page.getByRole('status')).toHaveText('コピーできませんでした');
  await expect(questionCopy).toBeEnabled();
});

test('ホームでAI解説向けのサイトであることを示す', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '過去問を、そのままAIに解説させる。',
  );
  await expect(page.getByRole('heading', { name: '使い方' })).toBeVisible();
  await expect(page.locator('.steps li')).toHaveCount(3);
});

test('ChatGPT・ClaudeへのリンクにプロンプトをURLで渡し、全文もコピーできる', async ({
  page,
}) => {
  await page.addInitScript(() => {
    const state = window as unknown as { copied: string[] };
    state.copied = [];
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: {
        writeText: async (value: string) => {
          state.copied.push(value);
        },
      },
    });
  });
  await page.goto(sampleUrl);
  const prompt = await page.locator('#ai-prompt').inputValue();
  expect(prompt).toContain(sample.data.title);
  expect(prompt).toContain('# 公式標準解答');
  for (const [name, origin] of [
    ['ChatGPTで解説', 'https://chatgpt.com'],
    ['Claudeで解説', 'https://claude.ai'],
  ] as const) {
    const link = page.getByRole('link', { name });
    await expect(link).toBeVisible();
    await expect(link).toHaveAttribute('target', '_blank');
    const url = new URL((await link.getAttribute('href'))!);
    expect(url.origin).toBe(origin);
    expect(url.searchParams.get('q')).toBe(prompt);
  }
  await page.getByText('プロンプトの全文を見る').click();
  await page.getByRole('button', { name: 'プロンプトをコピー' }).click();
  await expect(page.getByRole('status')).toHaveText('コピーしました');
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as unknown as { copied: string[] }).copied.at(-1),
      ),
    )
    .toBe(prompt);
});

test('実際のClipboard APIへ書き込める', async ({
  page,
  context,
  browserName,
}) => {
  test.skip(
    browserName !== 'chromium',
    'WebKitのOSクリップボード許可は自動化対象外',
  );
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto(sampleUrl);
  await page.getByRole('button', { name: '問題文のMarkdownをコピー' }).click();
  await expect(page.getByRole('status')).toHaveText('コピーしました');
  await expect
    .poll(async () =>
      (await page.evaluate(() => navigator.clipboard.readText())).replace(
        /\r\n/g,
        '\n',
      ),
    )
    .toBe(sections.question.markdown.replace(/\r\n/g, '\n'));
});

test('JavaScript無効でも本文・数式が表示され、キーボードで解答を開ける', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}${sampleUrl}`);
  await expect(page.locator('#question')).toContainText('合成負荷電流');
  await expect(page.locator('#question math').first()).toBeAttached();
  await expect(page.locator('#answer')).not.toHaveAttribute('open', '');
  await page.locator('#answer > summary').focus();
  await page.keyboard.press('Enter');
  await expect(page.locator('#answer')).toHaveAttribute('open', '');
  await expect(page.locator('.answer-body')).toContainText('各変圧器の電流');
  await expect(page.locator('[data-copy-key]:visible')).toHaveCount(0);
  await context.close();
});

for (const width of [375, 768, 1280]) {
  test(`${width}pxで全画面の横スクロールがなく、長い数式だけスクロールできる`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(180_000);
    await page.setViewportSize({ width, height: 900 });
    for (const url of [
      '/',
      '/questions/',
      // 原文一致と全画像・リンクは生成物検証が全件確認する。
      // レイアウトは架空例題と各年度・科目の最も長い実問題を代表に確認。
      ...entries
        .filter(
          (entry) =>
            entry.data.sample ||
            entry.id ===
              entries
                .filter(
                  (other) =>
                    !other.data.sample &&
                    other.data.year === entry.data.year &&
                    other.data.subject === entry.data.subject,
                )
                .sort((a, b) => b.body.length - a.body.length)[0]?.id,
        )
        .map((entry) => `/questions/${entry.id}/`),
    ]) {
      await test.step(url, async () => {
        await page.goto(url);
        const details = page.locator('#answer');
        if (await details.count()) await details.locator('summary').click();
        await page.evaluate(() => document.fonts.ready);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth + 1,
          ),
          url,
        ).toBe(true);
        if (
          testInfo.project.name === 'desktop-chromium' &&
          ((width === 1280 && url === '/') ||
            (width === 375 && url === sampleUrl))
        ) {
          const screenshot = testInfo.outputPath(`page-${width}.png`);
          await page.screenshot({ path: screenshot, fullPage: true });
          await testInfo.attach(`page-${width}`, {
            path: screenshot,
            contentType: 'image/png',
          });
        }
      });
    }
    if (width === 375) {
      await page.goto('/questions/sample-feedback/');
      const scrollable = await page
        .locator('.formula-block .formula-scroll')
        .evaluateAll((elements) =>
          elements.some((element) => element.scrollWidth > element.clientWidth),
        );
      expect(scrollable).toBe(true);
    }
  });
}

test('案内ページと404、プレビューのSEO設定', async ({ page }) => {
  for (const url of ['/about/', '/sources/', '/privacy/', '/corrections/']) {
    await page.goto(url);
    await expect(page.locator('main h1')).toBeVisible();
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
      'content',
      'noindex, nofollow',
    );
    const canonical = new URL(
      (await page.locator('link[rel="canonical"]').getAttribute('href'))!,
    );
    expect(canonical.protocol).toBe('https:');
    expect(canonical.pathname).toBe(url);
  }
  const response = await page.goto('/no-such-page/');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'ページが見つかりません',
  );
});
