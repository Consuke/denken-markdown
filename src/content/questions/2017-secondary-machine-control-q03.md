---
title: "2017年度 機械・制御 問3 単相ダイオード整流回路"
year: 2017
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["rectifiers"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=15"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 15・16ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，機械・制御の問3。単相ダイオード整流回路の問題と公式標準解答。"
---

## 問題

図1〜3のように単相ダイオード整流器を200 V，50 Hzの交流電源$v$に接続する。それぞれの回路には，負荷として$R=100\ \Omega$の抵抗器を接続する。図2のコンデンサの静電容量及び図3のインダクタのインダクタンスは十分に大きく，コンデンサの電圧リプル及びインダクタの電流リプルは無視できる。また，ダイオード，コンデンサ及びインダクタに損失はないものとする。回路が動作してから十分に時間が経過しているものとして，次の問に答えよ。

### (1)

図1の負荷電圧$v_{\mathrm{L1}}$の平均値$V_{\mathrm{L1}}$を求めよ。

### (2)

図1の負荷抵抗器$R$の消費電力の平均値$P_{\mathrm{L1}}$を求めよ。

### (3)

図2の負荷電圧$v_{\mathrm{L2}}$の平均値$V_{\mathrm{L2}}$を求めよ。

### (4)

図2の負荷抵抗器$R$の消費電力の平均値$P_{\mathrm{L2}}$を求めよ。

### (5)

図3の負荷電圧$v_{\mathrm{L3}}$の平均値$V_{\mathrm{L3}}$を求めよ。

### (6)

図3の負荷抵抗器$R$の消費電力の平均値$P_{\mathrm{L3}}$を求めよ。

![図1 単相ダイオードブリッジ整流器と抵抗負荷](/diagrams/questions/2017/2017-secondary-machine-control-q03-fig01.png)

![図2 コンデンサを負荷抵抗と並列に接続した整流回路](/diagrams/questions/2017/2017-secondary-machine-control-q03-fig02.png)

![図3 インダクタを負荷抵抗と直列に接続した整流回路](/diagrams/questions/2017/2017-secondary-machine-control-q03-fig03.png)

## 解答

### (1)

電源電圧を，

$$
v=\sqrt{2}V\sin\theta
$$

とすると，その全波整流波形は，

$$
v_{\mathrm{L1}}=\left|\sqrt{2}V\sin\theta\right|
$$

となる。ここで，平均値は

$$
\begin{aligned}
V_{\mathrm{L1}}&=\frac{1}{2\pi}\int_0^{2\pi}v_{\mathrm{L1}}\,\mathrm{d}\theta
=\frac{1}{2\pi}\int_0^{2\pi}\left|\sqrt{2}V\sin\theta\right|\,\mathrm{d}\theta\\
&=\frac{1}{\pi}\int_0^\pi\sqrt{2}V\sin\theta\,\mathrm{d}\theta
=\frac{\sqrt{2}V}{\pi}\int_0^\pi\sin\theta\,\mathrm{d}\theta\\
&=\frac{\sqrt{2}V}{\pi}[-\cos\theta]_0^\pi
=\frac{\sqrt{2}V}{\pi}[(-\cos\pi)-(-\cos0)]\\
&=\frac{2\sqrt{2}}{\pi}V
\end{aligned}
$$

したがって，

$$
V_{\mathrm{L1}}=\frac{2\sqrt{2}}{\pi}\times200=180.06
\quad\longrightarrow\quad180\ \mathrm{V}\quad\text{（答）}
$$

### (2)

$v_{\mathrm{L1}}$の実効値は$v$の実効値に等しいので，

$$
P_{\mathrm{L1}}=\frac{V^2}{R}=\frac{200^2}{100}=400\ \mathrm{W}\quad\text{（答）}
$$

### (3)

コンデンサ$C$は$v$の最大値まで充電され$R$によって放電される。しかし$C$は十分に大きく，電圧リプルは無視できるので，$V_{\mathrm{L2}}$は$v$の最大値（波高値）で一定となる。したがって，

$$
V_{\mathrm{L2}}=\sqrt{2}V=\sqrt{2}\times200=282.84
\quad\longrightarrow\quad283\ \mathrm{V}\quad\text{（答）}
$$

### (4)

負荷抵抗器$R$には，一定電圧$V_{\mathrm{L2}}$が印加するので，

$$
P_{\mathrm{L2}}=\frac{V_{\mathrm{L2}}^2}{R}=\frac{(\sqrt{2}V)^2}{R}=\frac{2V^2}{R}
=\frac{2\times200^2}{100}=800\ \mathrm{W}\quad\text{（答）}
$$

### (5)

全波整流波形のうち，交流成分は$L$に印加し，直流成分，すなわち平均値のみが$R$に印加する。全波整流波形の平均値は，すでに上記(1)で求めており，

$$
V_{\mathrm{L3}}=V_{\mathrm{L1}}=\frac{2\sqrt{2}}{\pi}V=\frac{2\sqrt{2}}{\pi}\times200=180.06
\quad\longrightarrow\quad180\ \mathrm{V}\quad\text{（答）}
$$

### (6)

$R$には$V_{\mathrm{L3}}$が印加しているので，

$$
\begin{aligned}
P_{\mathrm{L3}}&=\frac{V_{\mathrm{L3}}^2}{R}=\frac{\left(\dfrac{2\sqrt{2}}{\pi}V\right)^2}{R}
=\frac{8V^2}{\pi^2R}\\
&=\frac{8}{\pi^2}\times\frac{200^2}{100}=324.23
\quad\longrightarrow\quad324\ \mathrm{W}\quad\text{（答）}
\end{aligned}
$$
