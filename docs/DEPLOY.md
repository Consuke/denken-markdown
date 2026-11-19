# Cloudflare Pagesへのデプロイ

静的HTMLを`dist/`へ出力します。Cloudflareアカウント・GitHub連携・ドメインの操作は所有者が実施してください。SSRアダプター、Workers、Pages Functions、DB、認証は不要です。

## 1. リポジトリを準備

GitHubにリポジトリを作成してソースをpushします。`package-lock.json`、`.node-version`、`.github/workflows/ci.yml`を含め、`node_modules/`、`dist/`、`dist-preview/`、`.env`を含めません。初期状態はGitリポジトリでなかったため、必要なら`git init -b main`から開始してください。

PRとmainへのpushでCIがformat・型・コンテンツ・数式・ユニットテスト・静的ビルド・ブラウザ検証を実行します。GitHub上で成功することを確認し、必要ならブランチ保護の必須チェックに設定します。

## 2. Pagesを作成

Cloudflareダッシュボードの **Workers & Pages → Create application → Pages → Import an existing Git repository** でGitHubリポジトリを選びます。

| 設定                   | 値                                 |
| ---------------------- | ---------------------------------- |
| Framework preset       | Astro                              |
| Production branch      | `main`                             |
| Build command          | `npm run build`                    |
| Build output directory | `dist`                             |
| Root directory         | リポジトリのルート                 |
| Node.js                | `24.13.0`（`.node-version`と一致） |

ビルド環境変数：

| 変数                      | 値・目的                            |
| ------------------------- | ----------------------------------- |
| `NODE_VERSION`            | `24.13.0`                           |
| `PUBLIC_SITE_URL`         | 実際の本番HTTPSオリジン（パスなし） |
| `PUBLIC_CONTACT_EMAIL`    | 公開する訂正連絡先                  |
| `PUBLIC_ENABLE_ANALYTICS` | `false`                             |
| `PUBLIC_ENABLE_ADS`       | `false`                             |

開発依存もインストールしてください。validationに使用するため、`NPM_CONFIG_PRODUCTION=true`や`npm ci --omit=dev`は設定しません。

**`build:preview`や`dist-preview/`は指定しません。** PagesのPRプレビューも通常の`npm run build`を使用し、公開対象だけを出力します。開発用プレビューには認証がありません。`CF_PAGES=1`環境ではサンプルビルドを拒否します。

## 3. ビルドとドメイン

1. Save and Deployを実行し、content・math・output検証まで成功したことをログで確認します。
2. 必要なら先に`PUBLIC_SITE_URL`を割り当てられた`https://プロジェクト名.pages.dev`に設定します。
3. Custom domainsで本番ドメインを設定し、DNSとHTTPSの有効化を確認します。
4. `PUBLIC_SITE_URL`を最終的な本番オリジンに変更して再デプロイします。canonical・OGP・sitemap・robotsはビルド時に決まります。
5. 必要ならpages.devやwwwから正式ホストへのリダイレクトをCloudflare側で設定します。

暫定値`https://example.com`のままでは、全ページがnoindex・robotsがDisallowになります。

## 4. 公開後に確認

- `/`、`/questions/`、科目・分野別、案内ページが表示される。
- 公開済みの実際の問題を追加した場合だけ、該当の年度・詳細URLが生成される。
- サンプル3件・下書き・レビュー済みの問題URLが404になる。
- 存在しないURLで`404.html`が**404ステータス**で返る。SPA用の`/* /index.html 200`ルールは追加しない。
- canonical・OGP・sitemap・robotsが本番ドメインを指す。
- iPhone Safari・Android Chromeの実機で開閉・コピー成功／拒否・長い数式のスクロールを確認する。
- 訂正メール・出典リンク・図の代替テキストを確認する。

エミュレーションは実機の許可動作や本番HTTP応答の代替にはなりません。Search Console登録とサイトマップ送信は、この確認後に所有者が実施します。

## 5. 問題公開の運用

公式一次資料と利用条件（転載・HTML化・図表改変等）を確認し、必要な記録を残します。原文・公式解答・独自解説を区別し、出典と注記を設定します。確認済みの実際の問題だけ`reviewStatus: published`かつ`sample: false`にしてmainへ反映します。架空サンプルのフラグを外してはいけません。

現在、2017〜2025年度の90問と公式解答、2026年度の問題10問はすべて下書きです。そのため、初回の本番ビルドで問題数が0件になるのは正常です。取り込み内容と公開前に照合する原本表記は[取り込み記録](IMPORT-2017-2025.md)を参照してください。ローカルでの確認は`npm run dev`を使用します。

修正時は`updatedAt`を更新し、Git履歴で追跡します。取り下げは`draft`等へ戻して再ビルドします。出力初期化により古い詳細HTMLも残りません。

## 公式手順

- [AstroのPagesデプロイ](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [ビルド設定](https://developers.cloudflare.com/pages/configuration/build-configuration/)
- [Pagesの404](https://developers.cloudflare.com/pages/configuration/serving-pages/)
- [カスタムドメイン](https://developers.cloudflare.com/pages/configuration/custom-domains/)
