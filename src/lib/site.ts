export const siteName = '電験二種 過去問・解説';
export const defaultDescription =
  '電験二種・二次試験の問題、解答、独自解説。年度・科目・分野別に掲載しています。非公式サイトです。';

export function siteOrigin(value = 'https://example.com'): string {
  const url = new URL(value);
  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.search ||
    url.hash ||
    url.username ||
    url.password
  ) {
    throw new Error(
      'PUBLIC_SITE_URLはパス・クエリ・認証情報を含まないHTTPSオリジンにしてください',
    );
  }
  return url.origin;
}
