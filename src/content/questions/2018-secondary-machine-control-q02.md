---
title: "2018年度 機械・制御 問2 円筒形同期発電機の出力とフェーザ"
year: 2018
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=12"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 12・13ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2018年度の電験二種二次試験，機械・制御の問2。円筒形同期発電機の出力とフェーザの問題と公式標準解答。"
---

## 問題

図は，三相星形接続の円筒形同期発電機のフェーザ図である。この図を参照して次の問に答えよ。ただし，電機子抵抗による電圧降下及び磁気飽和は無視するものとする。

### (1)

$E$ [V]，$V$ [V]，$\delta$ [rad]，$X_{\mathrm{S}}$ [$\Omega$]を用いて，発電機出力$P$ [kW]を表す式を導出過程を含めて示せ。

### (2)

定格皮相電力30000 kV・A，定格端子電圧（線間電圧）6600 V，短絡比0.5の円筒形三相同期発電機において，次のa，b及びcの問に答えよ。

- a. $X_{\mathrm{S}}$ [$\Omega$]の値を求めよ。
- b. 三相平衡交流系統に接続して，$E=7000$ V，$V=3810$ V，$\delta=\dfrac{\pi}{6}$ radで運転しているときの$P$ [kW]，$I$ [A]，力率（$\cos\phi$）の値を求めよ。
- c. この発電機を三相平衡交流系統から切り離して，三相平衡抵抗器負荷に接続した。界磁電流を調整して$V=3700$ V，$\delta=\dfrac{\pi}{3}$ radで運転し，抵抗器負荷に電力を供給した。このときの$P$ [kW]，$E$ [V]，$I$ [A]，力率（$\cos\phi$）の値を求めよ。

![円筒形三相同期発電機のフェーザ図。E，V，Iは各フェーザの大きさ](/diagrams/questions/2018/2018-secondary-machine-control-q02-fig01.png)

## 解答

### (1)

発電機出力$P$

$$
P=3VI\cos\phi\times10^{-3}
$$

フェーザ図から，

$$
X_{\mathrm{S}}I\cos\phi=E\sin\delta
$$

したがって，

$$
P=3V\frac{E\sin\delta}{X_{\mathrm{S}}}\times10^{-3}
=\frac{3EV}{X_{\mathrm{S}}}\sin\delta\times10^{-3}\ [\mathrm{kW}]\quad\text{（答）}
$$

### (2)

#### a

単位法では，

$$
X_{\mathrm{S(p.u.)}}=\frac{1}{\text{短絡比}}=\frac{1}{0.5}=2.00\ \mathrm{p.u.}
$$

定格電機子電流$I_{\mathrm{R}}$

$$
I_{\mathrm{R}}=\frac{30000\times10^3}{\sqrt{3}\times6600}=2624.3\ \mathrm{A}
$$

1 p.u.インピーダンス

$$
Z_{\mathrm{p.u.}}=\frac{\dfrac{6600}{\sqrt{3}}}{2624.3}=1.4520
$$

$$
X_{\mathrm{S}}=2.00\times1.4520=2.9040\quad\longrightarrow\quad2.90\ \Omega\quad\text{（答）}
$$

#### b

$$
P=\frac{3\times7000\times3810}{2.9040}\times\sin\frac{\pi}{6}\times10^{-3}=13776
\quad\longrightarrow\quad13800\ \mathrm{kW}\quad\text{（答）}
$$

フェーザ図から，

$$
\begin{aligned}
IX_{\mathrm{S}}&=\sqrt{E^2-2EV\cos\delta+V^2}\\
&=\sqrt{7000^2-2\times7000\times3810\times\cos\dfrac{\pi}{6}+3810^2}\\
&=\sqrt{1.7322\times10^7}=4162.0
\end{aligned}
$$

$$
I=\frac{4162.0}{2.9040}=1433.2\quad\longrightarrow\quad1430\ \mathrm{A}\quad\text{（答）}
$$

$$
\cos\phi=\frac{P\times10^3}{3VI}=\frac{13776\times10^3}{3\times3810\times1433.2}=0.84095
\quad\longrightarrow\quad0.841\quad\text{（答）}
$$

#### c

抵抗器負荷のため，$\cos\phi=1.00$，$\phi=0$ radである。…（答）

フェーザ図から，

$$
E\cos\delta=V+IX_{\mathrm{S}}\sin\phi
$$

$$
E=\frac{1}{\cos\delta}(V+IX_{\mathrm{S}}\sin\phi)=\frac{V}{\cos\delta}=\frac{3700}{0.5}=7400.0
\quad\longrightarrow\quad7400\ \mathrm{V}\quad\text{（答）}
$$

$$
P=3V\frac{E\sin\delta}{X_{\mathrm{S}}}\times10^{-3}
=\frac{3\times7400\times3700}{2.9040}\sin\frac{\pi}{3}\times10^{-3}=24496
\quad\longrightarrow\quad24500\ \mathrm{kW}\quad\text{（答）}
$$

$$
I=\frac{P\times10^3}{3V\cos\phi}=\frac{24496\times10^3}{3\times3700\times1.00}=2206.8
\quad\longrightarrow\quad2210\ \mathrm{A}\quad\text{（答）}
$$
