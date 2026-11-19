---
title: "2021年度 電力・管理 問6 同期発電機の速度調定率と負荷分担"
year: 2021
examStage: "secondary"
subject: "power-management"
questionNumber: 6
topics: ["power-systems","parallel-operation"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q01.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=5"
sourceNote: "ユーザー提供の問題PDF 9ページと公式標準解答PDF 5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2021年度の電験二種二次試験，電力・管理の問6。同期発電機の速度調定率と負荷分担の問題と公式標準解答。"
---

## 問題

定格出力120 MW，定格周波数50 Hzの同期発電機Aと定格出力80 MW，定格周波数50 Hz，速度調定率4.0%の同期発電機Bとが並列運転可能な電力系統がある。次の問に答えよ。ただし，調速機（ガバナ）の特性は線形であるとし，負荷の周波数特性は無視する。

### (1)

発電機Aのみの運転によって，系統周波数が50.00 Hzに保たれているとする。発電機が出力80 MWで運転しているときに系統負荷が40 MW減少した結果，周波数が50.50 Hzとなった。発電機Aの速度調定率[%]を求めよ。ただし，有効数字は，小数点以下1桁とする。

### (2)

出力100 MWで運転中の発電機Aと出力80 MWで運転中の発電機Bとが並列運転を行っており，系統周波数が50.00 Hzに保たれているとする。系統負荷が30 MW減少したときの，系統周波数[Hz]，発電機Aの出力[MW]，及び発電機Bの出力[MW]を求めよ。ただし，系統周波数の有効数字は，小数点以下2桁とする。

## 解答

### (1)

発電機Aの速度調定率を$x$ [%]とする。次の方程式が成り立たなければならない。

$$
50.50=50.00+50\times\frac{x}{100}\times\frac{40}{120}
$$

これを解くと，$x=3$

発電機Aの速度調定率は，3.0%である。

### (2)

系統負荷が30 MW減少したときの発電機Aの出力を$P_{\mathrm{A}}$ [MW]，発電機Bの出力を$P_{\mathrm{B}}$ [MW]，系統周波数を$f$ [Hz]とする。次の連立方程式が成り立たなければならない。

$$
\begin{cases}
P_{\mathrm{A}}+P_{\mathrm{B}}=180-30\\
f=50.00+50\times\dfrac{3}{100}\times\dfrac{100-P_{\mathrm{A}}}{120}\\
f=50.00+50\times\dfrac{4}{100}\times\dfrac{80-P_{\mathrm{B}}}{80}
\end{cases}
$$

これを解くと，$P_{\mathrm{A}}=80$，$P_{\mathrm{B}}=70$，$f=50.25$

発電機Aの出力は80 MW，発電機Bの出力は70 MW，系統周波数は50.25 Hzとなる。
