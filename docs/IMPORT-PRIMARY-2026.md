# 2026年度 一次試験の取り込み

2026-11-28、電気技術者試験センターの公開PDFから、令和8年度第二種電気主任技術者一次試験の30問（理論8・電力7・機械8・法規7）を大問単位で転記。問題文・解答群と公式解答（記号）を収録し、解答には対応する解答群の語句を付記しています。独自解説・関連知識は未作成。2026-11-28にユーザーの判断で全件 `reviewStatus: published` として公開しました（`sample: false`）。

## 原本

| 科目 | ファイル                                                                                       | ページ数 | SHA-256                                                            |
| ---- | ---------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| 理論 | [20260830_ch_second_q01.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf) | 19       | `F4DBF04BA2E233118402354AEB961526013F4B0EA9C4397E2E0966909C1C3865` |
| 電力 | [20260830_ch_second_q02.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q02.pdf) | 11       | `4CC06E418D0416C2B538E87A7452889F90CECE156CE00B1394CB45F16F07D2E3` |
| 機械 | [20260830_ch_second_q03.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q03.pdf) | 15       | `D97E3933C8E0AB118AACE92196C6AE9BF85DD477B81E6104DF86AD003336FD0E` |
| 法規 | [20260830_ch_second_q04.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q04.pdf) | 14       | `5A5D7A2182BFF66DE440EF83EE8C954D384FACA757DD1C123774DF188BFB5E25` |
| 解答 | [20260830_ch_second_a01.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf) | 1        | `96A106B2E30BA64F7CA6718356A24B530769F644FF277830FF6B82A93A91D687` |

[試験センターの公開一覧](https://www.shiken.or.jp/chief/second/qa/)で公式出典を確認。一覧で公開されている一次試験は2019〜2026年度です。

## ファイル

`src/content/questions/2026-primary-<subject>-q<NN>.md`（subjectは `theory` / `power` / `machine` / `law`）。各ファイルの `sourceUrl` に原本PDFのページ、`sourceNote` に冊子ページを記録しています。図14点は原本から切り出したPNGで `src/assets/question-diagrams/2026/2026-primary-*.png`。

## 転記の扱い

- 空欄は `［(1)］` の形で表記。解答群は `### 問Nの解答群` に (イ)〜(ヨ) の順で列挙。
- 機械の問7（測光量）はA欄・B欄・C欄の組合せ形式のため、解答も「定義の記号，単位の記号」の組で記載。
- 理論・機械の問7・問8は選択問題で、その旨を各問の冒頭に引用で記載。
- 表紙・答案用紙記入上の注意・配点の見出しは省略。
- 原本PDFのテキスト層は、CenturyOldstyleフォントのΩ・η・ε・σなどの記号が抽出されない。理論・機械は全ページを画像で確認して転記し、法規の問4の選択肢（5 Ω・1 Ω・2 Ω）も画像で確認した。電力・法規の他の問は抽出テキストから転記しており、公開前に原本との照合が必要。
