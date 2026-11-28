# 一次試験の取り込み

電気技術者試験センターの公開PDFから，第二種電気主任技術者一次試験を年度ごとに大問単位で転記しています。各年度とも理論8・電力7・機械8・法規7の30問で，問題文・解答群と公式解答（記号）を収録し，解答には対応する解答群の語句を付記しています。独自解説・関連知識は未作成。ユーザーの判断で，取り込んだ年度は `reviewStatus: published` として公開しています。

[試験センターの公開一覧](https://www.shiken.or.jp/chief/second/qa/)で公開されている一次試験は2020〜2026年度です（2019年度以前は一覧になく，ユーザー提供のPDFが必要）。

## 2025年度（令和7年度，2025-08-31実施）

2026-11-28取り込み。図13点。

| 科目 | ファイル                                                                                       | ページ数 | SHA-256                                                            |
| ---- | ---------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| 理論 | [20250831_ch_second_q01.pdf](https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf) | 19       | `E3049EC5259DCD24F3CD8A6052AD71FB0A6C9008D12561CFBA82F9C5D2E75A16` |
| 電力 | [20250831_ch_second_q02.pdf](https://www.shiken.or.jp/chief/upload/20250831_ch_second_q02.pdf) | 10       | `FCF1BC55CE798E3A26FB4D37DE69AD4512BED6292DAB452672F41A262D5F15F5` |
| 機械 | [20250831_ch_second_q03.pdf](https://www.shiken.or.jp/chief/upload/20250831_ch_second_q03.pdf) | 18       | `29A39AA95895E7F6B089ADC9CFC6C2D36EC9EDBDCADF84A7459586A438C957CF` |
| 法規 | [20250831_ch_second_q04.pdf](https://www.shiken.or.jp/chief/upload/20250831_ch_second_q04.pdf) | 15       | `C7F26F319A74FA283770DEE777E8DAC5CF86824FB93433F8595CD2900E50B609` |
| 解答 | [20250831_ch_second_a01.pdf](https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf) | 1        | `1FACC27C2AE522CF40DEC746E16EC4F9C72C90B04A39CE52F73F6F194B143263` |

## 2026年度（令和8年度，2026-08-30実施）

| 科目 | ファイル                                                                                       | ページ数 | SHA-256                                                            |
| ---- | ---------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------ |
| 理論 | [20260830_ch_second_q01.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf) | 19       | `F4DBF04BA2E233118402354AEB961526013F4B0EA9C4397E2E0966909C1C3865` |
| 電力 | [20260830_ch_second_q02.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q02.pdf) | 11       | `4CC06E418D0416C2B538E87A7452889F90CECE156CE00B1394CB45F16F07D2E3` |
| 機械 | [20260830_ch_second_q03.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q03.pdf) | 15       | `D97E3933C8E0AB118AACE92196C6AE9BF85DD477B81E6104DF86AD003336FD0E` |
| 法規 | [20260830_ch_second_q04.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_q04.pdf) | 14       | `5A5D7A2182BFF66DE440EF83EE8C954D384FACA757DD1C123774DF188BFB5E25` |
| 解答 | [20260830_ch_second_a01.pdf](https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf) | 1        | `96A106B2E30BA64F7CA6718356A24B530769F644FF277830FF6B82A93A91D687` |

2026-11-28取り込み。図14点。

## ファイル

`src/content/questions/<year>-primary-<subject>-q<NN>.md`（subjectは `theory` / `power` / `machine` / `law`）。各ファイルの `sourceUrl` に原本PDFのページ、`sourceNote` に冊子ページを記録しています。図は原本から切り出したPNGで `src/assets/question-diagrams/<year>/<year>-primary-*.png`。

## 転記の扱い

- 空欄は `［(1)］` の形で表記。解答群は `### 問Nの解答群` に (イ)〜(ヨ) の順で列挙。
- 組合せ形式（2026年度機械問7）や小問ごとに解答群がある形式（2025年度機械問8）は，解答群を本文に置き，解答に記号と語句を記載。
- 法規の冒頭の注（用語の略称と，基準日時点の法令に基づく旨）は各問の冒頭に引用で記載。
- 理論・機械の問7・問8は選択問題で、その旨を各問の冒頭に引用で記載。
- 表紙・答案用紙記入上の注意・配点の見出しは省略。
- 原本PDFのテキスト層は、CenturyOldstyleフォントのΩ・η・ε・σなどの記号が抽出されない。理論・機械は全ページを画像で確認して転記し、法規の問4の選択肢（5 Ω・1 Ω・2 Ω）も画像で確認した。電力・法規の他の問は抽出テキストから転記しており、公開前に原本との照合が必要。
