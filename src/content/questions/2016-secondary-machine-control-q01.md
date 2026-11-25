---
title: "2016年度 機械・制御 問1 三相かご形誘導電動機の二次入力・軸出力・効率"
year: 2016
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=9"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，機械・制御の問1。三相かご形誘導電動機の二次入力・軸出力・効率の問題と公式標準解答。"
---

## 問題

定格線間電圧200 V，定格周波数50 Hz，4極の星形結線の三相かご形誘導電動機があり，L形等価回路において1相一次換算の抵抗値及びリアクタンス値は次のとおりである。

一次抵抗$r_1=0.707$ Ω，リアクタンス$x_1+x_2'=0.439$ Ω

二次抵抗$r_2'=0.710$ Ω，

この電動機が回転速度1470 min$^{-1}$で運転しているとき，次の値を求めよ。ただし，鉄損，機械損，励磁電流は無視する。

### (1)

一次電流

### (2)

二次入力

### (3)

電動機の軸出力

### (4)

二次銅損

### (5)

電動機の効率

## 解答

### (1)

滑りを$s$，極数を$p$，定格周波数を$f$，回転速度を$N$とすると，

$$
s=1-\frac{p}{120f}\times N=1-\frac{4}{120\times50}\times1470=0.02
$$

一次電流を$I_1$，定格線間電圧を$V_{\mathrm{n}}$とすると，

$$
\begin{aligned}
I_1&=\frac{\dfrac{V_{\mathrm{n}}}{\sqrt{3}}}{\sqrt{\left(r_1+\dfrac{r_2'}{s}\right)^2+(x_1+x_2')^2}}=\frac{\dfrac{200}{\sqrt{3}}}{\sqrt{\left[0.707+\left(\dfrac{0.710}{0.02}\right)\right]^2+0.439^2}}\\
&\fallingdotseq3.188\,9\ \rightarrow\ 3.19\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

### (2)

一次換算の二次電流を$I_2'$とすると，$I_1=I_2'=3.188\,9$ Aである。したがって，二次入力$P_2$は，

$$
P_2=3\cdot\frac{r_2'}{s}\cdot I_2'^2=3\times\frac{0.710}{0.02}\times3.188\,9^2\fallingdotseq1\,083.0\ \rightarrow\ 1.08\ \mathrm{kW}\quad\text{（答）}
$$

### (3)

電動機の軸出力を$P_{\mathrm{M}}$とすると，

$$
P_{\mathrm{M}}=(1-s)P_2=(1-0.02)\times1\,083.0\fallingdotseq1\,061.3\ \rightarrow\ 1.06\ \mathrm{kW}\quad\text{（答）}
$$

### (4)

二次銅損を$P_{\mathrm{c2}}$とすると，

$$
P_{\mathrm{c2}}=s\cdot P_2=0.02\times1\,083.0\fallingdotseq21.66\ \rightarrow\ 21.7\ \mathrm{W}\quad\text{（答）}
$$

### (5)

電動機の効率を$\eta$，一次入力を$P_1$とすると，

$$
\begin{aligned}
\eta&=\frac{P_{\mathrm{M}}}{P_1}\times100=\frac{P_{\mathrm{M}}}{3\cdot r_1\cdot I_1^2+P_2}\times100=\frac{1\,061.3}{3\times0.707\times3.188\,9^2+1\,083.0}\times100\\
&=\frac{1\,061.3}{1\,104.6}\times100\fallingdotseq96.080\ \rightarrow\ 96.1\ \%\quad\text{（答）}
\end{aligned}
$$
