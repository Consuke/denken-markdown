---
title: "2013年度 機械・制御 問1 三相誘導電動機のテブナン等価回路と始動トルク"
year: 2013
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=9"
sourceNote: "ユーザー提供の問題PDF 3-4ページと公式標準解答PDF 9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，機械・制御の問1。三相誘導電動機のテブナン等価回路と始動トルクの問題と公式標準解答。"
---

## 問題

400 [V]，60 [Hz]，4極の三相誘導電動機がある。二次側諸量を一次側に換算した星形1相分のT形等価回路を図1に示す。図中の$s$は滑り，$V$は一次電圧（星形相電圧）であり，また，等価回路定数は次のとおりである。

$r_1=0.2$ [Ω]，$x_1=0.5$ [Ω]，$x_{\mathrm{M}}=20$ [Ω]

$r_2=0.1$ [Ω]（一次側換算値），$x_2=0.2$ [Ω]（一次側換算値）

次の問に答えよ。

### (1)

図1のT形等価回路は鳳・テブナンの定理によると，図2の回路で表される。

a. 電動機に線間電圧400 [V]を印加し，同期速度で回転しているとき，図1の端子A，B間に現れる電圧$V_{\mathrm{t}}$ [V]を求めよ。

b. 図1で一次端子を短絡したとき，端子A，Bから一次側をみた合成インピーダンス$R+\mathrm{j}X$ [Ω]を求めよ。

### (2)

図2の回路から，始動時に二次回路に流れる電流$I_2$ [A]（一次側換算値）及び始動トルク$T_{\mathrm{s}}$ [N・m]を求めよ。

![図1は三相誘導電動機のT形等価回路（r1，jx1，励磁リアクタンスjxM，jx2，端子A・B間の負荷抵抗r2/s），図2は鳳・テブナンの等価回路（電圧Vt，R，jX，端子A・B間のr2/s）](/diagrams/questions/2013/2013-secondary-machine-control-q01-fig01.png)

## 解答

### (1)

鳳・テブナンの定理を用いると，図1のA，Bから左側の部分を図2の回路で表すことができる。

a. 同期速度で回転しているので滑り$s=0$であるから，$\dfrac{r_2}{s}=\infty$となる。$\dfrac{r_2}{s}$には電流が流れないので，$\dot{V}_{\mathrm{t}}$は$\mathrm{j}x_{\mathrm{M}}$の両端の電圧である。したがって，

$$
\dot{V}_{\mathrm{t}}=\frac{\mathrm{j}x_{\mathrm{M}}}{r_1+\mathrm{j}(x_1+x_{\mathrm{M}})}V=\frac{\mathrm{j}20}{0.2+\mathrm{j}20.5}\cdot\frac{400}{\sqrt{3}}=225.29+\mathrm{j}2.1979\ [\mathrm{V}]
$$

となり，その大きさは

$$
V_{\mathrm{t}}=225.30\ \rightarrow\ 225\ [\mathrm{V}]\quad\text{（答）}
$$

となる。

b. $R+\mathrm{j}X$は

$$
\begin{aligned}
R+\mathrm{j}X&=\mathrm{j}x_2+\frac{\mathrm{j}x_{\mathrm{M}}(r_1+\mathrm{j}x_1)}{r_1+\mathrm{j}(x_1+x_{\mathrm{M}})}=0.19035+\mathrm{j}0.68966\\
&\rightarrow\ 0.190+\mathrm{j}0.690\ [\Omega]\quad\text{（答）}
\end{aligned}
$$

となる。

### (2)

始動時に二次回路に流れる電流$I_2$は滑り$s=1$としたときに$\dfrac{r_2}{s}$を流れる電流であるから，鳳・テブナンの等価回路から，

$$
\dot{I}_2=\frac{V_{\mathrm{t}}}{R+r_2+\mathrm{j}X}=\frac{225.30}{0.19035+0.1+\mathrm{j}0.68966}=116.82-\mathrm{j}277.50\ [\mathrm{A}]
$$

となり，その大きさは

$$
I_2=301.08\ \rightarrow\ 301\ [\mathrm{A}]\quad\text{（答）}
$$

同期速度は$\omega_0$，極対数を$p$，周波数を$f$とすれば

$$
\omega_0=2\pi\frac{f}{p}=2\pi\frac{60}{2}=188.50\ [\mathrm{rad/s}]
$$

であるから，始動トルクは

$$
T_{\mathrm{s}}=3\times\frac{r_2I_2^2}{\omega_0}=3\times\frac{0.1\times301.08^2}{188.50}=144.27\ \rightarrow\ 144\ [\mathrm{N\cdot m}]\quad\text{（答）}
$$
