---
title: "2015年度 電力・管理 問5 需要率・負荷率・不等率と変電所のコンデンサ容量"
year: 2015
examStage: "secondary"
subject: "power-management"
questionNumber: 5
topics: ["load-characteristics","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q01.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=7"
sourceNote: "ユーザー提供の問題PDF 8ページと公式標準解答PDF 7-8ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，電力・管理の問5。需要率・負荷率・不等率と変電所のコンデンサ容量の問題と公式標準解答。"
---

## 問題

定格容量9 500 kV・Aの変圧器1台を有する変電所から，配電線A，Bにより，下表に示す需要設備a，b，cに電力を供給しているとき，次の問に答えよ。

ただし，需要設備a，b，cの需要率はそれぞれ80 %，需要設備a，b，cの負荷力率はそれぞれ遅れの一定値とし，結果は，小数第1位を四捨五入せよ。

| 配電線 | 需要設備 | 設備容量 [kV・A] | 最大電力 [kW] | 負荷率 [%] | 需要設備間の不等率 | 配電線間の不等率 |
| ------ | -------- | ---------------: | ------------: | ---------: | ------------------ | ---------------- |
| A      | a        |            7 500 |         5 700 |         70 | －                 | 1.1              |
| B      | b        |            4 000 |         3 040 |         80 | 1.25               | （同上）         |
| B      | c        |            3 500 |         2 660 |         60 | （同上）           | （同上）         |

※原本の表では，配電線Bの行と「需要設備間の不等率」1.25（b，cの2行），「配電線間の不等率」1.1（全3行）のセルが結合されている。

### (1)

需要設備a，b，cの平均電力 [kW]をそれぞれ求めよ。

### (2)

変電所の総合最大電力 [kW]を求めよ。

### (3)

変電所の総合負荷率 [%]を求めよ。

### (4)

需要設備a，b，cの負荷力率 [%]をそれぞれ求めよ。

### (5)

変圧器が過負荷とならないために必要なコンデンサの最小容量 [kvar]を求めよ。

## 解答

### (1)

需要設備a，b，cの平均電力を，それぞれ$\overline{P_{\mathrm{a}}}$，$\overline{P_{\mathrm{b}}}$，$\overline{P_{\mathrm{c}}}$とすると，平均電力＝最大電力×負荷率の関係があるので，

$$
\left.
\begin{aligned}
\overline{P_{\mathrm{a}}}&=5\,700\times0.7=3\,990\ \mathrm{kW}\\
\overline{P_{\mathrm{b}}}&=3\,040\times0.8=2\,432\ \mathrm{kW}\\
\overline{P_{\mathrm{c}}}&=2\,660\times0.6=1\,596\ \mathrm{kW}
\end{aligned}
\right\}\quad\text{（答）}
$$

### (2)

配電線A，Bの最大電力を，それぞれ$P_{\mathrm{A}}$，$P_{\mathrm{B}}$とすると，総合最大電力＝合計最大電力／不等率の関係があるので，

$$
\begin{aligned}
P_{\mathrm{A}}&=5\,700\ \mathrm{kW}\\
P_{\mathrm{B}}&=\frac{3\,040+2\,660}{1.25}=4\,560\ \mathrm{kW}
\end{aligned}
$$

よって，同様に，変電所の総合最大電力$P_{\mathrm{S}}$は，

$$
P_{\mathrm{S}}=\frac{P_{\mathrm{A}}+P_{\mathrm{B}}}{1.1}=\frac{5\,700+4\,560}{1.1}\fallingdotseq9\,327.27\ \rightarrow\ 9\,327\ \mathrm{kW}\quad\text{（答）}
$$

### (3)

変電所の平均電力を$\overline{P_{\mathrm{S}}}$とすると，

$$
\overline{P_{\mathrm{S}}}=\overline{P_{\mathrm{a}}}+\overline{P_{\mathrm{b}}}+\overline{P_{\mathrm{c}}}
$$

よって，(1)で示した関係式より，変電所の総合負荷率$LF$は，

$$
\begin{aligned}
LF&=\frac{\overline{P_{\mathrm{S}}}}{P_{\mathrm{S}}}\times100\\
&=\frac{3\,990+2\,432+1\,596}{9\,327}\times100\\
&\fallingdotseq85.97\ \rightarrow\ 86\ \%\quad\text{（答）}
\end{aligned}
$$

### (4)

需要設備a，b，cの負荷力率を，それぞれ$\cos\theta_{\mathrm{a}}$，$\cos\theta_{\mathrm{b}}$，$\cos\theta_{\mathrm{c}}$とすると，

最大電力＝設備容量×負荷力率×需要率

の関係があるので，

$$
\left.
\begin{aligned}
\cos\theta_{\mathrm{a}}&=\frac{5\,700}{7\,500\times0.80}\times100=95\ \%\ (\text{遅れ})\\
\cos\theta_{\mathrm{b}}&=\frac{3\,040}{4\,000\times0.80}\times100=95\ \%\ (\text{遅れ})\\
\cos\theta_{\mathrm{c}}&=\frac{2\,660}{3\,500\times0.80}\times100=95\ \%\ (\text{遅れ})
\end{aligned}
\right\}\quad\text{（答）}
$$

### (5)

必要なコンデンサ容量を$Q_{\mathrm{c}}$，変圧器定格容量を$S$，変電所の総合負荷力率を$\cos\theta$とすると，

$$
P_{\mathrm{S}}^2+(P_{\mathrm{S}}\tan\theta-Q_{\mathrm{c}})^2\leqq S^2
$$

を満足しなければならない。

$$
\cos\theta=\cos\theta_{\mathrm{a}}=\cos\theta_{\mathrm{b}}=\cos\theta_{\mathrm{c}}=0.95
$$

であり，遅れ力率より$\tan\theta>0$なので，

$$
\begin{aligned}
Q_{\mathrm{c}}&\geqq P_{\mathrm{S}}\tan\theta-\sqrt{S^2-P_{\mathrm{S}}^2}\\
&=P_{\mathrm{S}}\sqrt{\sec^2\theta-1}-\sqrt{S^2-P_{\mathrm{S}}^2}\\
&=9\,327.27\sqrt{\frac{1}{0.95^2}-1}-\sqrt{9\,500^2-9\,327.27^2}\\
&\fallingdotseq1\,262.38\ \rightarrow\ 1\,262\ \mathrm{kvar}
\end{aligned}
$$

よって，$Q_{\mathrm{c}}$の最小値は，1 262 kvar　…（答）
