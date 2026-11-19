---
title: "2025年度 機械・制御 問2 誘導電動機の滑り・損失・出力"
year: 2025
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 10・11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2025年度の電験二種二次試験，機械・制御の問2。誘導電動機の滑り・損失・出力の問題と公式標準解答。"
---

## 問題

定格出力22 kW，定格周波数60 Hz，6極の三相かご形誘導電動機があり，定格回転速度が1 158 min⁻¹，定格運転時の効率が87.5 %である。この誘導電動機に関して，次の問に答えよ。

ただし，負荷損は銅損のみとし，一次銅損と二次銅損は常に等しいものとする。また，機械損は無視する。

### (1)

定格出力のときの滑り $s_1$ [%]及び定格トルク $T_1$ [N·m]をそれぞれ求めよ。

### (2)

定格出力のときの二次銅損 $P_{\mathrm{c2}}$ [W]及び固定損 $P_{\mathrm{f}}$ [W]をそれぞれ求めよ。

### (3)

出力トルクが定格トルクの50 %のときの回転速度 $N_2$ [min⁻¹]及び出力 $P_2$ [W]をそれぞれ求めよ。ただし，滑りとトルクが比例するものとする。

## 解答

### (1)

電源の周波数を $f$ [Hz]，電動機の極数を $p$ とすれば電動機の同期速度 $N_{\mathrm{s}}$ は，

$$
N_{\mathrm{s}}=\frac{120f}{p}=\frac{120\times60}{6}=1\,200\ \mathrm{min}^{-1}
$$

である。したがって，定格回転速度を $N_1$ [min⁻¹]とすれば定格時の滑り $s_1$ は，

$$
s_1=\frac{N_{\mathrm{s}}-N_1}{N_{\mathrm{s}}}\times100=\frac{1\,200-1\,158}{1\,200}\times100=3.5\%
$$

となる。定格出力を $P_1$ [W]，定格出力時の回転角速度を $\omega_1$ [rad/s]とすれば定格トルク $T_1$ は次式となる。

$$
T_1=\frac{P_1}{\omega_1}=\frac{P_1}{2\pi\frac{N_1}{60}}=\frac{22\times10^3}{2\pi\times\frac{1\,158}{60}}=181.42\quad\to\quad181\ \mathrm{N\cdot m}
$$

### (2)

総損失を $P_{\mathrm{L}}$ [W]とすれば定格運転時の効率 $\eta_1$ [%]は，次式となる。

$$
\eta_1=\frac{P_1}{P_1+P_{\mathrm{L}}}\times100=\frac{P_1}{P_1+P_{\mathrm{c}}+P_{\mathrm{f}}}\times100=\frac{P_1}{P_1+2P_{\mathrm{c2}}+P_{\mathrm{f}}}\times100\%
$$

この式を変形して与えられた数値を代入すると $P_{\mathrm{L}}$ は次式のように求まる。

$$
P_{\mathrm{L}}=\left(\frac{100}{\eta_1}-1\right)P_1=\left(\frac{100}{87.5}-1\right)\times22\times10^3=3\,142.9\ \mathrm{W}
$$

二次銅損 $P_{\mathrm{c2}}$ と定格出力 $P_1$ との間には滑り $s_1$ を用いれば次式に示す関係が成り立つ。

$$
P_{\mathrm{c2}}:P_1=s_1:(1-s_1)
$$

よって，$P_{\mathrm{c2}}$ は，この式を変形して与えられた数値を代入すると次式のようになる。

$$
P_{\mathrm{c2}}=\frac{s_1}{1-s_1}\cdot P_1=\frac{0.035}{1-0.035}\times22\times10^3=797.93\quad\to\quad798\ \mathrm{W}
$$

題意から，一次銅損 $P_{\mathrm{c1}}$ と二次銅損 $P_{\mathrm{c2}}$ は等しいので，銅損 $P_{\mathrm{c}}$ は，

$$
P_{\mathrm{c}}=P_{\mathrm{c1}}+P_{\mathrm{c2}}=2P_{\mathrm{c2}}
$$

であり，負荷損は銅損のみを考えるので，総損失 $P_{\mathrm{L}}$ は，

$$
P_{\mathrm{L}}=P_{\mathrm{c}}+P_{\mathrm{f}}=2P_{\mathrm{c2}}+P_{\mathrm{f}}
$$

$$
\therefore P_{\mathrm{f}}=P_{\mathrm{L}}-2P_{\mathrm{c2}}=3\,142.9-2\times797.93=1\,547.0\quad\to\quad1\,550\ \mathrm{W}
$$

### (3)

出力トルクが定格トルクの50 %のときのトルクを $T_2$ および滑りを $s_2$ [%]とすると，題意から滑りとトルクは図に示すような比例関係にあるので，このときの滑り $s_2$ は，

$$
s_2=0.5s_1
$$

となる。このときの回転速度 $N_2$ は，

$$
\begin{aligned}
N_2&=N_{\mathrm{s}}(1-s_2)=N_{\mathrm{s}}(1-0.5s_1)\\
&=1\,200\left(1-0.5\times\frac{3.5}{100}\right)=1\,179\\
&=1\,179\quad\to\quad1\,180\ \mathrm{min}^{-1}
\end{aligned}
$$

また，このときの出力 $P_2$ は，

$$
\begin{aligned}
P_2&=\omega_2T_2=\frac{2\pi}{60}N_2\cdot0.5T_1\\
&=\frac{2\pi}{60}\times1\,179\times0.5\times181.42=11\,199\quad\to\quad11\,200\ \mathrm{W}
\end{aligned}
$$

![滑りとトルクの比例関係](/diagrams/questions/2025/2025-secondary-machine-control-q02-answer-fig01.png)
