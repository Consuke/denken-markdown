import { test, expect } from '@playwright/test';
import { readArticleSources } from '../../src/lib/content-files';
import { articleCopyMarkdown } from '../../src/lib/article-model';

const articles = await readArticleSources();
const article = articles.find(
  (entry) => entry.id === 'sample-three-phase-power',
)!;
const articleUrl = `/articles/${article.id}/`;

test('ヘッダーから記事一覧・記事・関連問題・次の記事へ辿れる', async ({
  page,
}) => {
  await page.goto('/');
  await page
    .getByRole('navigation', { name: 'メインナビゲーション' })
    .getByRole('link', { name: '解説記事' })
    .click();
  await expect(page).toHaveURL(/\/articles\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '電験を、もっと直感的に理解する。',
  );
  await expect(
    page.locator('.category-links').getByRole('link', { name: '電気理論' }),
  ).toBeVisible();
  await page.getByRole('link', { name: article.data.title }).click();
  await expect(page).toHaveURL(new RegExp(`${articleUrl}$`));
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    article.data.title,
  );
  await expect(page.locator('.article-body math').first()).toBeAttached();
  expect(
    await page
      .locator('.article-body img')
      .evaluate(
        (image) =>
          (image as HTMLImageElement).complete &&
          (image as HTMLImageElement).naturalWidth > 0,
      ),
  ).toBe(true);
  await page
    .getByRole('navigation', { name: '目次' })
    .getByRole('link', { name: '線路損失' })
    .click();
  await expect
    .poll(() => page.evaluate(() => decodeURIComponent(location.hash)))
    .toBe('#h-線路損失');
  await expect(page.locator('#h-線路損失')).toBeInViewport();
  await expect(
    page.getByRole('link', { name: '#三相交流' }).first(),
  ).toHaveAttribute('href', '/articles/tag/three-phase/');
  const next = page.locator('#next-articles-title + .article-list');
  await expect(
    next.getByRole('link', { name: /複素数を回転として捉える/ }),
  ).toBeVisible();
  await page
    .locator('#article-questions-title + .question-list')
    .getByRole('link', { name: /三相送電線の抵抗損失/ })
    .click();
  await expect(page).toHaveURL(/\/questions\/sample-transmission\/$/);
  const backlinks = page.locator('#question-articles-title + .article-list');
  await expect(
    backlinks.getByRole('link', { name: article.data.title }),
  ).toBeVisible();
});

test('カテゴリ・タグ・分野ページに記事が出る', async ({ page }) => {
  await page.goto('/articles/category/electrical-theory/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '電気理論の記事',
  );
  await expect(
    page.getByRole('link', { name: article.data.title }),
  ).toBeVisible();
  await page.goto('/articles/tag/ac-circuits/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    '「交流回路」の記事',
  );
  await expect(page.locator('.article-entry')).toHaveCount(2);
  await page.goto('/topics/feedback/');
  await expect(
    page
      .locator('.index-articles')
      .getByRole('link', { name: /複素数を回転として捉える/ }),
  ).toBeVisible();
});

test('記事のMarkdownをコピーできる', async ({ page }) => {
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
  await page.goto(articleUrl);
  const origin = new URL(
    (await page.locator('link[rel="canonical"]').getAttribute('href'))!,
  ).origin;
  await page.getByRole('button', { name: '記事のMarkdownをコピー' }).click();
  await expect(page.getByRole('status')).toHaveText('コピーしました');
  await expect
    .poll(() =>
      page.evaluate(() =>
        (window as unknown as { copied: string[] }).copied.at(-1),
      ),
    )
    .toBe(articleCopyMarkdown(article, origin));
});
