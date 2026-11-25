---
title: "2016年度 機械・制御 問2 単相変圧器の等価回路定数・電圧変動率・効率"
year: 2016
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 10-11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，機械・制御の問2。単相変圧器の等価回路定数・電圧変動率・効率の問題と公式標準解答。"
---

## 問題

定格容量50 kV・A，定格一次電圧11 000 V，定格二次電圧3 300 V，定格周波数50 Hzの単相変圧器があり，高圧側からの試験結果は次のとおりであった。

- 無負荷試験　無負荷損：$P_0=290$ W，無負荷電流：$I_0=0.221$ A
- 短絡試験　インピーダンス電圧：$V_{\mathrm{1S}}=550$ V，一次電流：$I_{\mathrm{1S}}=4.55$ A，インピーダンスワット：$P_{\mathrm{S}}=740$ W

次の問に答えよ。

ただし，定格負荷時の力率$\cos\phi$における電圧の変動率$\varepsilon$ [%]は，百分率抵抗降下を$p$ [%]，百分率リアクタンス降下を$q$ [%]とすれば，次式で表せるものとする。

$$
\varepsilon=p\cos\phi+q\sin\phi+\frac{1}{200}(q\cos\phi-p\sin\phi)^2\ [\%]
$$

### (1)

図に示す簡易等価回路の回路定数（一次側換算値）をそれぞれ求めよ。

### (2)

遅れ力率80%，全負荷における電圧の変動率を求めよ。

### (3)

遅れ力率80%，$\dfrac{1}{2}$負荷における効率を求めよ。

### (4)

遅れ力率80%，$\dfrac{1}{2}$負荷における電圧の変動率を求めよ。

![簡易等価回路。入力側に励磁コンダクタンスg0と励磁サセプタンスb0の並列回路，直列に一次換算全巻線抵抗Rと一次換算全漏れリアクタンスX](/diagrams/questions/2016/2016-secondary-machine-control-q02-fig01.png)

## 解答

### (1)

定格一次電圧を$V_{\mathrm{1n}}$とすると，

励磁コンダクタンス：

$$
g_0=\frac{P_0}{V_{\mathrm{1n}}^2}=\frac{290}{11\,000^2}\fallingdotseq2.396\,7\times10^{-6}\ \rightarrow\ 2.40\times10^{-6}\ \mathrm{S}\quad\text{（答）}
$$

励磁アドミタンス：

$$
Y_0=\frac{I_0}{V_{\mathrm{1n}}}=\frac{0.221}{11\,000}=20.091\times10^{-6}\ \mathrm{S}
$$

励磁サセプタンス：

$$
\begin{aligned}
b_0&=\sqrt{Y_0^2-g_0^2}=\sqrt{(20.091\times10^{-6})^2-(2.396\,7\times10^{-6})^2}\\
&\fallingdotseq19.948\times10^{-6}\ \rightarrow\ 19.9\times10^{-6}\ \mathrm{S}\quad\text{（答）}
\end{aligned}
$$

一次換算全巻線抵抗：

$$
R=\frac{P_{\mathrm{S}}}{I_{\mathrm{1S}}^2}=\frac{740}{4.55^2}\fallingdotseq35.744\ \rightarrow\ 35.7\ \Omega\quad\text{（答）}
$$

一次換算全インピーダンス：

$$
Z=\frac{V_{\mathrm{1S}}}{I_{\mathrm{1S}}}=\frac{550}{4.55}=120.88\ \Omega
$$

一次換算全漏れリアクタンス：

$$
X=\sqrt{Z^2-R^2}=\sqrt{120.88^2-35.744^2}\fallingdotseq115.47\ \rightarrow\ 115\ \Omega\quad\text{（答）}
$$

### (2)

短絡試験の結果から，定格容量を$S_{\mathrm{n}}$とすると，定格一次電流$I_{\mathrm{1n}}$は，

$$
I_{\mathrm{1n}}=\frac{S_{\mathrm{n}}}{V_{\mathrm{1n}}}=\frac{50\times10^3}{11\,000}=4.545\,5\ \rightarrow\ 4.55\ \mathrm{A}
$$

となるので，$I_{\mathrm{1S}}$は定格一次電流である。

百分率インピーダンス降下：

$$
\%z=\frac{V_{\mathrm{1S}}}{V_{\mathrm{1n}}}\times100=\frac{550}{11\,000}\times100=5.00\ \%
$$

百分率抵抗降下：

$$
p=\frac{P_{\mathrm{S}}}{S_{\mathrm{n}}}\times100=\frac{740}{50\times10^3}\times100=1.48\ \%
$$

百分率リアクタンス降下：

$$
q=\sqrt{\%z^2-p^2}=\sqrt{5.00^2-1.48^2}=4.775\,9\ \%
$$

求める電圧の変動率$\varepsilon$は，$\cos\phi=0.8$のとき，$\sin\phi=0.6$であるから，与式を用いて，

$$
\begin{aligned}
\varepsilon&=p\cos\phi+q\sin\phi+\frac{1}{200}(q\cos\phi-p\sin\phi)^2\\
&=1.48\times0.8+4.775\,9\times0.6+\frac{1}{200}(4.775\,9\times0.8-1.48\times0.6)^2\\
&\fallingdotseq4.092\,5\ \rightarrow\ 4.09\ \%\quad\text{（答）}
\end{aligned}
$$

### (3)

全負荷に対して，$k$倍負荷（負荷率$k$）時の有効出力は$kS_{\mathrm{n}}\cos\phi$，銅損は$k^2P_{\mathrm{S}}$，鉄損は$P_0$でそれぞれ表されるので，$k$倍負荷時の効率の式$\eta_{\mathrm{k}}$は次式となる。

$$
\begin{aligned}
\eta_{\mathrm{k}}&=\frac{kS_{\mathrm{n}}\cos\phi}{kS_{\mathrm{n}}\cos\phi+k^2P_{\mathrm{S}}+P_0}\times100=\frac{\dfrac{1}{2}\times50\times10^3\times0.8}{\dfrac{1}{2}\times50\times10^3\times0.8+\left(\dfrac{1}{2}\right)^2\times740+290}\times100\\
&\fallingdotseq97.680\ \rightarrow\ 97.7\ \%\quad\text{（答）}
\end{aligned}
$$

### (4)

上記(2)における全負荷の$p$及び$q$が，$\dfrac{1}{2}$負荷時に$p'$及び$q'$に変化したとすれば，定格一次電流$I_{\mathrm{1n}}$が$\dfrac{1}{2}I_{\mathrm{1n}}$になるので，

$$
p'=\frac{R\cdot\dfrac{1}{2}I_{\mathrm{1n}}}{V_{\mathrm{1n}}}\times100=\frac{1}{2}p,\qquad q'=\frac{X\cdot\dfrac{1}{2}I_{\mathrm{1n}}}{V_{\mathrm{1n}}}\times100=\frac{1}{2}q
$$

となり，$\dfrac{1}{2}$負荷時の電圧の変動率$\varepsilon'$は，次のようになる。

$$
\begin{aligned}
\varepsilon'&=p'\cos\phi+q'\sin\phi+\frac{1}{200}(q'\cos\phi-p'\sin\phi)^2\\
&=\frac{1}{2}(p\cos\phi+q\cos\phi)+\frac{1}{800}(q\cos\phi-p\sin\phi)^2\\
&=\frac{1}{2}(1.48\times0.8+4.775\,9\times0.6)+\frac{1}{800}(4.775\,9\times0.8-1.48\times0.6)^2\\
&\fallingdotseq2.035\,5\ \rightarrow\ 2.04\ \%\quad\text{（答）}
\end{aligned}
$$

（注：2行目の$q\cos\phi$は原本の表記のまま転記。前後の式から$q\sin\phi$の誤植と考えられる。）
