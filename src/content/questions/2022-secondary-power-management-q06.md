---
title: "2022年度 電力・管理 問6 需要設備の最大電力と総合負荷率"
year: 2022
examStage: "secondary"
subject: "power-management"
questionNumber: 6
topics: ["load-characteristics"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q01.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 8ページと公式標準解答PDF 6・7ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2022年度の電験二種二次試験，電力・管理の問6。需要設備の最大電力と総合負荷率の問題と公式標準解答。"
---

## 問題

ある変電所から，配電線A，Bにより，下表に示す需要設備a，b，cに電力を供給しているとき，次の問に答えよ。配電線はA，B以外にはないものとし，需要設備a，b，cの力率は全て90%（遅れ一定）とする。

### (1)

需要設備a，b，cの最大電力[kW]をそれぞれ求めよ。

### (2)

変電所の総合最大電力[kW]を求めよ。

### (3)

需要設備a，b，cの平均電力[kW]をそれぞれ求めよ。

### (4)

変電所の総合負荷率[%]を求めよ。

| 配電線 | 需要設備 | 設備容量 [kV・A] | 需要率 | 負荷率 [%] |
| --- | --- | --- | --- | --- |
| A | a | 9000 | 0.6 | 70 |
| B | b | 5000 | 0.7 | 80 |
| B | c | 3000 | 0.8 | 60 |

需要設備間の不等率：配電線Aは「－」，配電線Bは1.25。配電線間の不等率：1.1。

## 解答

### (1)

需要設備a，b，cの最大電力[kW]を，それぞれ$P_{\mathrm{a}}$，$P_{\mathrm{b}}$，$P_{\mathrm{c}}$とすると，最大電力＝設備容量×力率×需要率の関係があるので，

$$
\begin{aligned}
P_{\mathrm{a}}&=9000\times0.9\times0.6=4860\ \mathrm{kW}\\
P_{\mathrm{b}}&=5000\times0.9\times0.7=3150\ \mathrm{kW}\\
P_{\mathrm{c}}&=3000\times0.9\times0.8=2160\ \mathrm{kW}
\end{aligned}\quad\text{（答）}
$$

### (2)

配電線A，Bの最大電力を，それぞれ$P_{\mathrm{A}}$，$P_{\mathrm{B}}$とすると，総合最大電力＝合計最大電力／不等率の関係があるので，

$$
P_{\mathrm{A}}=4860\ \mathrm{kW},\qquad P_{\mathrm{B}}=\frac{3150+2160}{1.25}=4248\ \mathrm{kW}
$$

よって，同様に，変電所の総合最大電力$P_{\mathrm{S}}$は，

$$
P_{\mathrm{S}}=\frac{P_{\mathrm{A}}+P_{\mathrm{B}}}{1.1}=\frac{4860+4248}{1.1}=8280\ \mathrm{kW}\quad\text{（答）}
$$

### (3)

需要設備a，b，cの平均電力[kW]を，それぞれ$\overline{P}_{\mathrm{a}}$，$\overline{P}_{\mathrm{b}}$，$\overline{P}_{\mathrm{c}}$とすると，平均電力＝最大電力×負荷率の関係があるので，

$$
\begin{aligned}
\overline{P}_{\mathrm{a}}&=4860\times0.7=3402\quad\longrightarrow\quad3400\ \mathrm{kW}\\
\overline{P}_{\mathrm{b}}&=3150\times0.8=2520\quad\longrightarrow\quad2520\ \mathrm{kW}\\
\overline{P}_{\mathrm{c}}&=2160\times0.6=1296\quad\longrightarrow\quad1300\ \mathrm{kW}
\end{aligned}\quad\text{（答）}
$$

### (4)

変電所の平均電力を$\overline{P}_{\mathrm{S}}$とすると，

$$
\overline{P}_{\mathrm{S}}=\overline{P}_{\mathrm{a}}+\overline{P}_{\mathrm{b}}+\overline{P}_{\mathrm{c}}
$$

よって，小問(3)で示した関係式より，変電所の総合負荷率$LF$は，

$$
LF=\frac{\overline{P}_{\mathrm{S}}}{P_{\mathrm{S}}}\times100
=\frac{3402+2520+1296}{8280}\times100\fallingdotseq87.17
\quad\longrightarrow\quad87.2\%\quad\text{（答）}
$$
