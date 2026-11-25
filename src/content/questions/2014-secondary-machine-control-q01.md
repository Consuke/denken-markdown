---
title: "2014年度 機械・制御 問1 三相かご形誘導電動機のL形等価回路と動作特性"
year: 2014
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 3-4ページと公式標準解答PDF 10ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，機械・制御の問1。三相かご形誘導電動機のL形等価回路と動作特性の問題と公式標準解答。"
---

## 問題

定格線間電圧200 V，定格周波数50 Hz，4極の三相かご形誘導電動機について，三相星形結線1相分のL形等価回路から動作特性を考える。三相星形結線1相分のL形等価回路の回路定数を，励磁アドミタンス$\dot{y}_0=0.05-\mathrm{j}0.15$ S，一次抵抗$r_1=0.1$ Ω，一次漏れリアクタンス$x_1=0.3$ Ω，二次抵抗の一次側換算値$r_2'=0.15$ Ω，二次漏れリアクタンスの一次側換算値$x_2'=0.4$ Ωとする。誘導電動機を定格電圧，定格周波数の三相交流電源に接続し，負荷トルクを$T_{\mathrm{L}}$ [N・m]としたとき，滑りは$s=0.03$であった。負荷トルクが$T_{\mathrm{L}}$ [N・m]のときの次の値を求めよ。

### (1)

同期速度$n_0$ [min$^{-1}$]

### (2)

励磁電流$I_0$ [A]

### (3)

二次電流の一次換算値$I_2'$ [A]

### (4)

負荷トルク$T_{\mathrm{L}}$ [N・m]

### (5)

一次電流$I_1$ [A]

### (6)

入力力率

## 解答

### (1)

同期速度$n_0$は，定格周波数$f_1$と極対数$p$から

$$
n_0=\frac{f_1}{p}\times60=\frac{50}{2}\times60=1\,500\ \rightarrow\ 1\,500\ \mathrm{min}^{-1}\quad\text{（答）}
$$

### (2)

励磁電流$I_0$は，相電圧$V_1$と励磁回路のアドミタンス$y_0$から，

$$
\begin{aligned}
\dot{I}_0&=V_1y_0=\frac{200}{\sqrt{3}}(0.05-\mathrm{j}0.15)\\
&=5.773\,5-\mathrm{j}17.320\\
I_0&=\sqrt{5.773\,5^2+17.320^2}=18.257\ \rightarrow\ 18.3\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

### (3)

二次電流の一次換算値$I_2'$は，等価回路の二次等価抵抗を考慮して，

$$
\begin{aligned}
\dot{I}_2'&=\frac{V_1}{r_1+\dfrac{r_2'}{s}+\mathrm{j}(x_1+x_2')}=\frac{\dfrac{200}{\sqrt{3}}}{0.1+\dfrac{0.15}{0.03}+\mathrm{j}(0.3+0.4)}=\frac{\dfrac{200}{\sqrt{3}}}{5.1+\mathrm{j}0.7}\\
&=22.222-\mathrm{j}3.050\,0\\
I_2'&=\sqrt{22.222^2+3.050\,0^2}=22.430\ \rightarrow\ 22.4\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

### (4)

負荷トルク$T_{\mathrm{L}}$は，回転角速度を$\omega_{\mathrm{m}}$ [rad/s]，機械出力を$P_{\mathrm{m}}$ [W]，電源角周波数を$\omega_1$ [rad/s]，同期ワットを$P_2$ [W]とすると，

$$
\begin{aligned}
T_{\mathrm{L}}&=\frac{P_{\mathrm{m}}}{\omega_{\mathrm{m}}}=\frac{P_2}{\dfrac{\omega_1}{p}}=\frac{3p}{2\pi f_1}\times I_2'^2\times\frac{r_2'}{s}\\
&=\frac{3\times2}{2\pi\times50}\times22.430^2\times\frac{0.15}{0.03}=48.067\ \rightarrow\ 48.1\ \mathrm{N\cdot m}\quad\text{（答）}
\end{aligned}
$$

### (5)

一次電流$I_1$は，

$$
\begin{aligned}
\dot{I}_1&=\dot{I}_0+\dot{I}_2'=5.773\,5-\mathrm{j}17.320+22.222-\mathrm{j}3.050\,0\\
&=27.995-\mathrm{j}20.370\\
I_1&=\sqrt{27.995^2+20.370^2}=34.621\ \rightarrow\ 34.6\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

### (6)

力率$\cos\phi$は，一次電流とその実部から，

$$
\cos\phi=\frac{27.995}{34.621}=0.808\,61\ \rightarrow\ 0.809\quad\text{（答）}
$$
