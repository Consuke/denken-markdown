---
title: "2023年度 機械・制御 問4 ゲイン特性曲線からの伝達関数の導出"
year: 2023
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 9・10ページと公式標準解答PDF 14・15・16・17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，機械・制御の問4。ゲイン特性曲線からの伝達関数の導出の問題と公式標準解答。"
---

## 問題

本問題で扱う伝達関数の全ての極と零点は複素平面上の右半平面には存在しないものと仮定する。以下の問に答えよ。ここで必要に応じて，$14=20\log_{10}10^{0.7}$，$10^{0.7}=5.0119$ を用いよ。ただし，全ての図は折れ線近似で表している。

### (1)

図1に示すゲイン特性曲線から積分要素の伝達関数 $G_1(s)=\dfrac{1}{T_{\mathrm{I}}s}$ を求めよ。

### (2)

図2に示すゲイン特性曲線が表す伝達関数 $G(s)$ を $G(s)=G_1(s)G_2(s)$ のように分解して考える。$G_1(s)$ を小問(1)で求めた伝達関数とするときの $G_2(s)$ を求めよ。

### (3)

図2に示すゲイン特性曲線から伝達関数 $G(s)$ を求めよ。ただし，$G(s)=\dfrac{1}{T_{\mathrm{I1}}s}$ とおいて，その周波数伝達関数 $G(\mathrm{j}\omega)=\dfrac{1}{\mathrm{j}T_{\mathrm{I1}}\omega}$ のゲインが $\omega=0.1$ rad/sのとき40 dBであることを用いて $T_{\mathrm{I1}}$ を決定せよ。

### (4)

折れ線近似で表した図3に示すゲイン特性曲線から伝達関数 $G(s)$ を求めよ。ただし，$G(s)$ を積分要素 $G_1(s)=\dfrac{1}{T_{\mathrm{I2}}s}$ と一次遅れ要素 $G_2(s)=\dfrac{1}{1+Ts}$ に分解して考えよ。

![図1 積分要素のゲイン特性曲線](/diagrams/questions/2023/2023-secondary-machine-control-q04-fig01.png)

![図2 角周波数0.1 rad/sで40 dBとなるゲイン特性曲線](/diagrams/questions/2023/2023-secondary-machine-control-q04-fig02.png)

![図3 角周波数0.5 rad/sで傾きが変化するゲイン特性曲線](/diagrams/questions/2023/2023-secondary-machine-control-q04-fig03.png)

## 解答

### (1)

図1のゲイン特性曲線は傾きが−20 dB/decの直線なので，積分要素であって，その伝達関数は，

$$
G_1(s)=\frac{1}{T_{\mathrm{I}}s},\quad T_{\mathrm{I}}>0 \tag{1}
$$

で表される。ここで，定数 $T_{\mathrm{I}}$ を積分時間という。ゲインが0 dBとなる角周波数は，積分時間 $T_{\mathrm{I}}$ を使って $\dfrac{1}{T_{\mathrm{I}}}$ [rad/s]で表すことができる。したがって，図1より，

$$
\frac{1}{T_{\mathrm{I}}}=0.1 \tag{2}
$$

が成り立つ。上式を解いて，

$$
T_{\mathrm{I}}=10 \tag{3}
$$

を得る。

③式を①式に代入して，

$$
G_1(s)=\frac{1}{10s} \tag{4}
$$

となる。

### (2)

解図1に示すように，積分要素 $G_1(s)=\dfrac{1}{T_{\mathrm{I}}s}$ と比例要素 $G_2(s)=K$ に分解することができる。

![解図1 積分要素と比例要素のゲイン特性](/diagrams/questions/2023/2023-secondary-machine-control-q04-answer-fig01.png)

$G_1(s)$ は小問(1)で扱った伝達関数に一致している。

$G_2(s)$ は，

$$
20\log_{10}K=40=20\log_{10}10^2 \tag{5}
$$

から，$K=100$ となる。したがって，

$$
G_2(s)=100 \tag{6}
$$

と求められる。

### (3)

図2のゲイン特性曲線は傾きが−20 dB/decの直線なので，積分要素 $G(s)=\dfrac{1}{T_{\mathrm{I1}}s}$，$T_{\mathrm{I1}}>0$ である。その周波数伝達関数 $G(\mathrm{j}\omega)=\dfrac{1}{\mathrm{j}T_{\mathrm{I1}}\omega}$ のゲインは，

$$
|G(\mathrm{j}\omega)|=\left|\frac{1}{\mathrm{j}T_{\mathrm{I1}}\omega}\right|=\frac{1}{T_{\mathrm{I1}}\omega} \tag{7}
$$

となるから，デシベルで表すと $20\log_{10}\dfrac{1}{T_{\mathrm{I1}}\omega}$ [dB]である。

さて，図2から，$\omega=0.1$ rad/sのとき40 dBなので次式が成り立つ。

$$
20\log_{10}\frac{1}{0.1T_{\mathrm{I1}}}=40=20\log_{10}10^2 \tag{8}
$$

よって，

$$
\frac{1}{0.1T_{\mathrm{I1}}}=100 \tag{9}
$$

より，$T_{\mathrm{I}}=\dfrac{1}{10}$ となるので，求める伝達関数は $G(s)=\dfrac{10}{s}$ である。

### (4)

解図2に示すように積分要素 $G_1(s)=\dfrac{1}{T_{\mathrm{I2}}s}$ と一次遅れ要素 $G_2(s)=\dfrac{1}{1+Ts}$ に分解して考える。

![解図2 積分要素と一次遅れ要素のゲイン特性](/diagrams/questions/2023/2023-secondary-machine-control-q04-answer-fig02.png)

小問(3)において，積分要素 $G_1(s)=\dfrac{1}{T_{\mathrm{I2}}s}$ のゲインは $20\log_{10}\dfrac{1}{T_{\mathrm{I2}}\omega}$ [dB]で計算できることを学んでいる。解図2から，$\omega=0.5$ rad/sのとき14 dBなので次式が成り立つ。

$$
20\log_{10}\frac{1}{0.5T_{\mathrm{I2}}}=14=20\log_{10}10^{0.7} \tag{10}
$$

よって，

$$
\frac{1}{0.5T_{\mathrm{I2}}}=10^{0.7}=5.0119 \tag{11}
$$

より，$T_{\mathrm{I2}}=0.399\,05$ となる。一方，一次遅れ要素 $G_2(s)=\dfrac{1}{1+Ts}$ は，折れ点角周波数が $\omega=0.5$ rad/sなので，$T=2$ となる。したがって，求める伝達関数は，

$$
G(s)=\frac{1}{0.399\,05s(1+2s)}\quad\to\quad\frac{1}{0.399s(1+2s)} \tag{12}
$$

である。
