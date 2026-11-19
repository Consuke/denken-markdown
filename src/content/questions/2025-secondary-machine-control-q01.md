---
title: "2025年度 機械・制御 問1 同期電動機のフェーザ図とV曲線"
year: 2025
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 3・4ページと公式標準解答PDF 8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2025年度の電験二種二次試験，機械・制御の問1。同期電動機のフェーザ図とV曲線の問題と公式標準解答。"
---

## 問題

三相円筒形同期電動機を遅れ力率で運転する場合に関して，次の問に答えよ。ただし，単位法の基準は電動機の定格容量及び定格電圧とし，電動機の損失は無視するものとする。

### (1)

この電動機の同期リアクタンスを $X_{\mathrm{s}}$ [p.u.]，端子電圧（相電圧）を $V$ [p.u.]，無負荷誘導起電力を $E$ [p.u.]，電機子電流を $I$ [p.u.]，力率角を $\theta$ [rad]，負荷角を $\delta$ [rad]として，そのフェーザ図は次ページの図のようになった。このフェーザ図中の(a)，(b)，(c)，(d)，(e)，(f)に当てはまる記号を答えよ。（解答例(a) $\dot I$，(b) $\dot V$，(c) $\mathrm{j}X_{\mathrm{s}}\dot I$，…）

### (2)

フェーザ図から $E$ を，$V$，$\theta$，$I$，$X_{\mathrm{s}}$ で表す式を導出せよ。

### (3)

小問(2)で求めた式から，電動機が定格力率=0.8，$X_{\mathrm{s}}=2.0$ p.u.である場合の定格運転時の $E$ の値を求めよ。

### (4)

フェーザ図から $X_{\mathrm{s}}I$ を $E$，$V$，及び $\cos\delta$ で表す式を導出せよ。

### (5)

この電動機を同期調相機として運転する場合に次の問に答えよ。ただし，このときの端子電圧は定格電圧一定とする。

a) 小問(4)で求めた式から，$I$ を $E$ と $X_{\mathrm{s}}$ で表す式を求めよ。

b) 小問(5) a)で求めた式は，界磁電流を調整して $E$ を変化させたときの $I$ の値を示すグラフを表し，これは同期調相機のV曲線に相当する。このグラフにおいて，$I$ が最小値のときの $E$ の値を求めよ。

![図 同期電動機のフェーザ図](/diagrams/questions/2025/2025-secondary-machine-control-q01-fig01.png)

## 解答

### (1)

（a）$\dot V$，（b）$\theta$，（c）$\delta$，（d）$\dot I$，（e）$\mathrm{j}X_{\mathrm{s}}\dot I$，（f）$\dot E$

### (2)

![公式解答の同期電動機のフェーザ図](/diagrams/questions/2025/2025-secondary-machine-control-q01-answer-fig01.png)

フェーザ図から三平方の定理によって，

$$
\begin{aligned}
E&=\sqrt{(V\cos\theta)^2+(X_{\mathrm{s}}I-V\sin\theta)^2}\\
&=\sqrt{V^2+(X_{\mathrm{s}}I)^2-2VX_{\mathrm{s}}I\sin\theta}
\end{aligned}\tag{1}
$$

### (3)

①式に $V=1.0$，$I=1.0$，$\cos\theta=0.8$，$X_{\mathrm{s}}=2.0$ を代入して，

$$
\begin{aligned}
E&=\sqrt{V^2+(X_{\mathrm{s}}I)^2-2VX_{\mathrm{s}}I\sin\theta}\\
&=\sqrt{1.0^2+(2.0\times1)^2-2\times1.0\times2.0\times1.0\times0.6}\\
&=1.6125\quad\to\quad E=1.61\ \mathrm{p.u.}
\end{aligned}
$$

### (4)

フェーザ図の $V$，$E$，$X_{\mathrm{s}}I$ の三角形に余弦定理を適用すると，

$$
(X_{\mathrm{s}}I)^2=E^2+V^2-2EV\cos\delta
$$

$$
X_{\mathrm{s}}I=\sqrt{E^2+V^2-2EV\cos\delta}\tag{2}
$$

### (5)

a) ②式より，

$$
I=\frac{1}{X_{\mathrm{s}}}\sqrt{E^2+V^2-2EV\cos\delta}
$$

同期調相機運転は無負荷運転なので負荷角 $\delta$ は零，即ち $\cos\delta=1.0$ である。

この $\cos\delta=1.0$ と定格電圧 $V=1.0$ を上式に代入して，

$$
\begin{aligned}
I&=\frac{1}{X_{\mathrm{s}}}\sqrt{E^2-2E+1}\\
&=\frac{1}{X_{\mathrm{s}}}\sqrt{(E-1)^2}=\frac{|E-1|}{X_{\mathrm{s}}}
\end{aligned}
$$

$$
\to\quad I=\frac{|E-1|}{X_{\mathrm{s}}}\tag{3}
$$

b) $I$ の最小値は0なので③式より，

$$
I=\frac{|E-1|}{X_{\mathrm{s}}}=0
$$

$$
\to\quad E=1.0\ \mathrm{p.u.}
$$
