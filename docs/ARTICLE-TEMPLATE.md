# 解説記事のひな形

`src/content/articles/<slug>.md` にコピーして使います。ファイル名（slug）は小文字英数字とハイフンで、そのまま恒久URL `/articles/<slug>/` になります。公開後は変更しないでください。`category`・`tag` はslugに使えません。

```markdown
---
title: '交流がイメージできない人へ'
description: '交流電圧と電流の変化を、波形や位相のイメージから理解する'
category: 電気理論
tags: [交流回路, 三角関数]
relatedQuestions: [2016-secondary-power-management-q05]
next: [complex-numbers-intro]
publishedAt: '2026-11-26'
updatedAt: '2026-11-26'
draft: true
---

## ここ、分かりにくくない？

読者の疑問・つまずきから始める。

## 先に結論とイメージ

直感的な説明と図。

## 少しずつ数式へ

必要な前提と導出。$P = VI\cos\theta$ のように数式はLaTeXで書く。

## 電験での使いどころ

試験問題との関係。

## よくある誤解・注意点

符号・定義・適用条件など。

## まとめ

重要なポイントを短く。
```

## frontmatter

| 項目                        | 必須 | 内容                                                                        |
| --------------------------- | ---- | --------------------------------------------------------------------------- |
| `title`                     | ○    | 記事タイトル（150字以内）                                                   |
| `description`               | ○    | 一覧・検索結果・OGPに出す要約（300字以内）                                  |
| `category`                  | ○    | 1つ。`src/lib/taxonomy.ts` の `articleCategories` にある日本語名            |
| `tags`                      |      | 複数可。`articleTags` にある日本語名。新しいタグは先にtaxonomy.tsへ追加する |
| `relatedQuestions`          |      | 「この知識を使う過去問」。問題ID（問題ファイル名から`.md`を除いたもの）     |
| `next`                      |      | 「次に読んでほしい記事」の記事ID。省略すると共通タグの多い記事を最大3件表示 |
| `publishedAt` / `updatedAt` | ○    | 引用符付き`YYYY-MM-DD`。未来の日付は不可                                    |
| `draft`                     |      | `true`の間は本番に出ない（devとプレビューでは表示）                         |

## 本文のルール

- 見出しはH2から始める（H1はtitleを使う）。H2・H3から目次を自動生成する。
- 数式は `$...$` と `$$` ブロック。KaTeXのエラーはビルド失敗になる。
- raw HTMLは使えない。
- 記事専用の画像は `src/assets/article-images/<slug>/<name>.png` に置き、`![説明](/diagrams/articles/<slug>/<name>.png)` で参照する（PNGのみ）。過去問の図 `/diagrams/questions/...` も参照できる。
- 過去問へのリンクは `/questions/<問題ID>/`。非公開の問題へのリンクは内部リンク検証で失敗する。
- 数式・導出・電気的な説明は、公開前に必ず人が確認する。
