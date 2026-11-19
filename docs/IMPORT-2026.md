# 2026年度の問題文取り込み

2026-11-18、ユーザー提供PDFから大問単位で10件を転記。問題文だけを収録し、解答・解説・独自解説・関連知識は作成していません。全件 `reviewStatus: draft` / `sample: false` です。

## 原本

| 科目       | 提供ファイル                        | ページ数 | 公式出典                                                                    |
| ---------- | ----------------------------------- | -------- | --------------------------------------------------------------------------- |
| 電力・管理 | 電験二種_二次試験_2026_電力管理.pdf | 9        | [公式PDF](https://www.shiken.or.jp/chief/upload/20261115_ch_second_q01.pdf) |
| 機械・制御 | 電験二種_二次試験_2026_機械制御.pdf | 8        | [公式PDF](https://www.shiken.or.jp/chief/upload/20261115_ch_second_q02.pdf) |

各PDFの表紙に「令和8年度」「第2種」と科目名があることを確認。[試験センターの公開一覧](https://www.shiken.or.jp/chief/second/qa/)で公式出典を確認し、各Markdownにも資料名と原本ページへのリンクを記録しています。

提供ファイルのSHA-256：

```text
電力・管理 4905E74393C2EFD157C8E45BDB930726FBCE57712350777FFAA9988A25CB000C
機械・制御 513D7F3CD05B1E5185E9D6AF0C090F9BB493380056D0D1FC7F139C6EC8F0D43E
```

## ファイルとページの対応

ファイルは`src/content/questions/`直下。小問は各大問のファイル内にH3で収録しています。

| ファイル                                                                                                  | 問題                                   | 原本PDFのページ  | 図   |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------- | ---------------- | ---- |
| [2026-secondary-power-management-q01.md](../src/content/questions/2026-secondary-power-management-q01.md) | 排熱回収方式コンバインドサイクル発電   | 3（冊子1）       | なし |
| [2026-secondary-power-management-q02.md](../src/content/questions/2026-secondary-power-management-q02.md) | 断路器と接地開閉器                     | 4（冊子2）       | なし |
| [2026-secondary-power-management-q03.md](../src/content/questions/2026-secondary-power-management-q03.md) | 送電線のたるみと電線実長               | 5〜6（冊子3〜4） | 1    |
| [2026-secondary-power-management-q04.md](../src/content/questions/2026-secondary-power-management-q04.md) | 配電線の電圧と太陽光発電の連系         | 7（冊子5）       | 1    |
| [2026-secondary-power-management-q05.md](../src/content/questions/2026-secondary-power-management-q05.md) | 通信線への電磁誘導作用                 | 8（冊子6）       | なし |
| [2026-secondary-power-management-q06.md](../src/content/questions/2026-secondary-power-management-q06.md) | 需要率・負荷率・不等率                 | 9（冊子7）       | 2    |
| [2026-secondary-machine-control-q01.md](../src/content/questions/2026-secondary-machine-control-q01.md)   | 分布巻回転機の起磁力と分布係数         | 3〜4（冊子1〜2） | 2    |
| [2026-secondary-machine-control-q02.md](../src/content/questions/2026-secondary-machine-control-q02.md)   | 単相三巻線変圧器                       | 5（冊子3）       | 1    |
| [2026-secondary-machine-control-q03.md](../src/content/questions/2026-secondary-machine-control-q03.md)   | 単相ハーフブリッジインバータ           | 6〜7（冊子5〜6） | 2    |
| [2026-secondary-machine-control-q04.md](../src/content/questions/2026-secondary-machine-control-q04.md)   | 二次遅れ系のインパルス応答と周波数応答 | 8（冊子7）       | なし |

## 転記・図の扱い

- 問題内容・数値・符号・単位・小問番号を保持し、紙面の改行・全半角・数式表記をMarkdownとLaTeXに整形。タイトルと分野タグは整理用に付記。
- 表紙・答案用紙記入上の注意・科目共通の問題選択案内は省略。共通の解答上の注意は原本PDF2ページを参照。問ごとに指定された字数・丸め・近似などの条件は本文に収録。
- 電力・管理問3の①式〜③式や、機械・制御問3の波形記入欄は空欄のまま保持。KaTeXの丸数字は`\textcircled`で表示。
- 図9点は原本を切り出したPNG。線や波形を生成・再作図せず、必要な説明に合わせて配置。保存先は`src/assets/question-diagrams/2026/`。
- 原本PDF全体はサイトの公開ディレクトリにコピーしていません。下書きの本文と図は本番出力から除外します。
- PDF抽出用ツールは一時的に`node_modules/.pdf-tools/`へ配置。アプリの`package.json`・`package-lock.json`は変更していません。
