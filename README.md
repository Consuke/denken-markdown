# Denken 2 Library

電験二種（二次試験）の問題・解答・独自解説を、1問1Markdownで管理する静的ライブラリです。ユーザー提供のDESIGN.md（版数1.0）に従いM0〜M4を実装しています。[進捗](TODO.md)・[検証記録](docs/VERIFICATION.md)・[Cloudflare Pages公開手順](docs/DEPLOY.md)を参照してください。

2017〜2025年度の**90問と公式標準解答**を、各年度の電力・管理6問・機械・制御4問に分けて収録しています。2026年度は既存の10問（問題文のみ）を収録しています。実問題100件はすべて下書きで、別に架空サンプル3件があります。本番の問題数は0件です。[2017〜2025年度の取り込み記録](docs/IMPORT-2017-2025.md)・[2026年度の取り込み記録](docs/IMPORT-2026.md)を参照してください。

## 環境構築

Node.js **24.13.0**（`.node-version`）/ npm 11以上を使用。Astro **7.4.12**、TypeScript strict、Content Collections（`glob`）、remark-math、rehype-katex、KaTeXを使用しています。依存は完全なバージョンと`package-lock.json`で固定しています。

```sh
npm ci
```

`.env.example`を`.env`にコピーし、必要に応じて設定します。PowerShell：

```powershell
Copy-Item .env.example .env
```

| 変数                      | 用途                                       | 初期値・扱い                       |
| ------------------------- | ------------------------------------------ | ---------------------------------- |
| `PUBLIC_SITE_URL`         | canonical・OGP・sitemapの本番HTTPSオリジン | `https://example.com`（暫定）      |
| `PUBLIC_CONTACT_EMAIL`    | 公開する訂正連絡先                         | 未設定。ページには「準備中」を表示 |
| `PUBLIC_ENABLE_ANALYTICS` | 将来用                                     | `false`。MVPでは処理なし           |
| `PUBLIC_ENABLE_ADS`       | 将来用                                     | `false`。MVPでは処理なし           |

`PUBLIC_`変数は公開情報です。秘密情報を入れないでください。`PUBLIC_SITE_URL`にパス・認証情報・クエリは指定できません。暫定ドメインのままでは`noindex`と`robots.txt`の`Disallow: /`を出力します。本番ドメインを設定すると通常ページをインデックス可能にします。

## 開発と本番出力

```sh
npm run dev
```

開発サーバーではサンプル・下書き・レビュー済みも表示します。架空サンプルは問題タイトルと注意書きで明示します。

スキーマや分野の定義を変更した後に追加問題が反映されない場合は、開発サーバーを一度停止し、`npm run dev`で再起動してください。下書きを確認するために`reviewStatus`を変更する必要はありません。

```sh
npm run build
npm run preview
```

本番用の`dist/`には **`reviewStatus: published`かつ`sample: false`** の問題だけを生成します。詳細・一覧・年度導線・関連問題・サイトマップに同じ条件を適用します。非公開Markdown原本やコピーペイロードは配信しません。

ビルドは、原本検証 → 出力先の初期化 → Astro静的生成 → 生成物検証の順です。取り下げた問題の古いHTMLが残ることも防ぎます。`astro build`を直接実行すると検証・初期化を通らないため、npm scriptを使ってください。

サンプルを静的HTMLで確認する場合：

```sh
npm run build:preview
npm run preview:samples
```

`dist-preview/`には全件を生成し、全ページを`noindex`、robotsを`Disallow: /`にして、サイトマップを出力しません。**このディレクトリはデプロイしません。** Cloudflare Pages環境ではサンプルビルド自体を拒否します。noindexはアクセス制限ではありません。

## 問題の追加

`src/content/questions/`直下に、小文字ASCII slugの`.md`ファイルを追加します。例：`2026-secondary-power-management-q01.md`。ファイル名（拡張子を除く）が恒久IDです。公開後は変更せず、frontmatterの`slug`による上書きも許可しません。

各問題のPNG図は`src/assets/question-diagrams/`に置き、`/diagrams/questions/相対パス.png`で参照します。例：`src/assets/question-diagrams/2026/図名.png` → `/diagrams/questions/2026/図名.png`。表示対象のMarkdownから参照される図だけをビルド時に静的出力するため、下書きの図も本番に混入しません。代替テキストを付けてください。公開してよい共通図・サンプルSVGは従来どおり`public/diagrams/`も利用できます。

以下は書式説明用の**架空サンプル**です。

```markdown
---
title: '自作の回路計算（架空サンプル）'
year: 2025
examStage: secondary
subject: power-management
questionNumber: 3
topics: [power-systems]
sourceName: '架空サンプル・自作例題'
sourceUrl: 'https://example.org/sample'
sourceNote: '架空の自作例題。公式過去問ではなく、年度・問番号は整理用。'
publishedAt: '2026-11-17'
updatedAt: '2026-11-17'
reviewStatus: draft
sample: true
---

## 問題

抵抗に流れる電流を $I$ とする。

## 解答

電圧は $V=RI$ である。

## 独自解説

抵抗と電流の積から電圧を求める。

## 関連知識

オームの法則。
```

- 必須H2は`## 問題`だけです。解答・独自解説・関連知識は省略でき、存在しない欄は画面にも表示しません。追加する場合は`問題 → 解答 → 独自解説 → 関連知識`の順を守り、各本文を空にせず、小問・小見出しにはH3を使います。
- `year`は西暦整数。`examStage`は保持しますが、MVPでは`secondary`のみ対応します。
- `subject`は`power-management`（電力・管理）か`machine-control`（機械・制御）。`topics`は[taxonomy.ts](src/lib/taxonomy.ts)のslugを1件以上指定します。
- `questionNumber`は1以上の整数。小問を別ページにする場合のみ`partNumber`を指定。実問題同士、サンプル同士で、それぞれ年度・試験区分・科目・問番号・小問の組み合わせを一意にします。架空サンプルの整理用番号と実問題の番号は別に扱います。
- `sourceName`とHTTPSの`sourceUrl`は必須。サンプル以外で予約済み例示ドメインは使えません。**公式一次資料であることと利用条件は人が確認します。** 外部URLの可用性は自動取得していません。
- `publishedAt`・`updatedAt`は引用符付き`YYYY-MM-DD`を推奨。公開日≦更新日、日本時間で未来の更新日は禁止です。当サイトの掲載・更新日を指定します。
- `reviewStatus`は`draft` / `reviewed` / `published`。`sample`省略時は`false`。サンプルは明示的に`true`にし、タイトル・出典名・注記にも「架空」と書きます。
- 任意項目は`answerSourceUrl`、`sourceNote`、`difficulty`（1〜5、主観値）、`description`、`partNumber`。公式解答を転記する場合は`answerSourceUrl`に資料のURLを設定し、`## 解答`に本文を入れます。画面の「出典・更新情報」から公式解答の資料にも移動できます。
- 実際の過去問は利用条件と内容を確認し、新しいファイルを作成してレビュー後に公開します。架空サンプルの`sample`を外して公開してはいけません。

## 数式とコピー

行内は`$V=RI$`、独立行は以下の形式。`math`コードフェンスは使用しません。

```latex
$$
I_1 = \frac{Z_2}{Z_1 + Z_2} I
$$
```

[markdown-export.ts](src/lib/markdown-export.ts)がASTのH2とoffsetから原文を切り出します。見出し行を除いた原文の改行・デリミタを保存するため、コピー結果の先頭・末尾に空行が含まれる場合があります。文字列splitやMarkdownの再シリアライズは使いません。

[math.ts](src/lib/math.ts)が`inlineMath` / `math`ノードの`value`をHASTのプロパティとしてコピー用属性に保持します。HTMLエスケープはシリアライザーに任せます。セクションは切り出したASTを直接HTMLへ変換します。KaTeXのHTML・MathML・annotationから逆変換しません。

- 問題文・解答のボタンは、それぞれのセクションのMarkdownだけをコピーします。
- 数式横の「LaTeX」は`$` / `$$`を除く式の中身をコピーします。
- `navigator.clipboard.writeText()`を使い、成功・失敗を`aria-live`で通知。HTTPSまたはlocalhostで動作します。許可拒否時は失敗を表示します。
- 本文・数式・解答開閉はJS無効でも利用可能。コピーボタンはJS有効時だけ表示します。
- 原文をそのままClipboard APIへ渡しますが、OSや貼り付け先によって改行コードが変換される場合があります（WindowsのCRLF等）。
- raw HTMLと危険なURLプロトコルを禁止。KaTeXは`trust: false`で厳格検証し、未対応コマンドや構文エラーは全ステータスでビルド失敗にします。
- rehype-katexは`throwOnError`を公開しないため、直接のKaTeX検証とVFileエラーチェックを併用。KaTeXは依存全体で同じバージョンに固定しています。

## 検証

```sh
npm run format:check
npm run check
npm run validate:content
npm run validate:math
npm run test
npm run build
npm run validate:links
npm run validate:output
```

`build`にはcontent・math・output・内部リンク検証を含みます。`build:preview`も同様に全問題を検証します。出力検証を単独で実行するときは先にビルドしてください。

```sh
npm run browsers:install
npm run test:e2e
```

Linuxで必要なら`npm run browsers:install -- --with-deps`を使用。ブラウザはプロジェクト内の`node_modules`に保存します。E2Eは`dist-preview/`をビルドし、専用サーバーをポート4322で起動・終了します。開発サーバーの4321と並行して実行できます。

Prettierはコピー原文の意図しない変更を避けるため問題Markdownを整形対象から除外しています。内容検証は別途必須です。OGP画像の原稿は`assets/og.svg`。ブラウザ導入後に`npm run generate:og`で`public/og.png`を再生成できます。

## 実装範囲と判断

- 全件・年度・科目・分野、パンくず、最大5件の関連問題。並び順は年度降順・科目slug・問番号昇順・小問・ID。分類は静的リンクです。
- 白背景・黒い本文・青いリンク・system font・素のCSSを採用。本文幅は最大820px、数式領域だけが横スクロールします。
- トップは科目・年度・分野の分類リンク、一覧は問題名が中心です。分類の切り替えと出典・更新情報は必要なときに開けます。キャッチコピーや装飾カード、本文前の重複する説明は置きません。
- Astro 7の既定Markdown処理の変更に対応し、remark/rehypeを`markdown.processor: unified(...)`で明示。旧オプションと混在しません。
- SSRアダプター・DB・認証・React・広告・解析は未導入。
- サイト名・ドメイン・連絡先は仮設定。アカウント連携・実機検証・権利確認は公開前の手動作業です。
- Lighthouse・Core Web Vitalsは未測定。実機や本番配信での目標値は保証しません。

M5（全文検索、ブックマーク、学習履歴、管理用CSV/JSON出力、広告、アフィリエイト、Anki、ランダム出題）は未実装です。

## 公式資料

実装時（2026-11-17）に公式資料とnpmの安定版・導入済み型定義を確認しました。

- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Markdown](https://docs.astro.build/en/guides/markdown-content/)
- [Unified processor](https://docs.astro.build/en/reference/markdown-processors/unified/)
- [Astro 7移行ガイド](https://docs.astro.build/en/guides/upgrade-to/v7/)
- [Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [remark-math / rehype-katex](https://github.com/remarkjs/remark-math)
- [Cloudflare Pages / Astro](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/)
- [Playwright端末エミュレーション](https://playwright.dev/docs/emulation)
