---
title: "2013年度 機械・制御 問2 V結線変圧器の二次電圧と供給電力"
year: 2013
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 10-11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，機械・制御の問2。V結線変圧器の二次電圧と供給電力の問題と公式標準解答。"
---

## 問題

図のように同一の単相変圧器2台をV結線し，一次側を線間電圧400 [V]の平衡三相交流電源に接続する。一次巻線と二次巻線の巻数比は2:1であり，一次及び二次の漏れリアクタンスはそれぞれ0.32 [Ω]，0.12 [Ω]である。ある三相負荷を二次側に接続すると，三相交流電源には50 [A]で力率1の平衡三相電流が流れた。次の問に答えよ。ただし，励磁電流，鉄損及び巻線抵抗は無視でき，変圧器鉄心は磁気飽和しないものとする。

### (1)

無負荷時の二次電圧$V_{\mathrm{2ab}}$ [V]を求めよ。

### (2)

三相負荷を接続した場合の変圧器二次電流$I_{\mathrm{2a}}$ [A]を求めよ。

### (3)

一次及び二次の漏れリアクタンスを合成したリアクタンスの二次側換算値 [Ω]を求めよ。

### (4)

負荷接続時の変圧器二次電圧$V_{\mathrm{2ab}}$ [V]及び$V_{\mathrm{2cb}}$ [V]を求めよ。

### (5)

2台の変圧器がそれぞれ負荷に供給する電力 [kW]を求めよ。

![三相交流電源（Y結線）に単相変圧器2台をV結線した回路。一次側に電流I1a，線間電圧V1ab・V1cb，二次側に電流I2a，電圧V2ab・V2cbと三相負荷](/diagrams/questions/2013/2013-secondary-machine-control-q02-fig01.png)

## 解答

### (1)

$V_{\mathrm{1ab}}:V_{\mathrm{2ab}}=2:1$であるので，

$$
V_{\mathrm{2ab}}=\frac{1}{2}V_{\mathrm{1ab}}=\frac{1}{2}\times400=200\ [\mathrm{V}]\quad\text{（答）}
$$

### (2)

$I_{\mathrm{1a}}:I_{\mathrm{2a}}=1:2$であるので，

$$
I_{\mathrm{2a}}=\frac{2}{1}I_{\mathrm{1a}}=2\times50=100\ [\mathrm{A}]\quad\text{（答）}
$$

### (3)

一次漏れリアクタンス$x_1$を二次側換算すると

$$
x_1\left(\frac{1}{2}\right)^2=0.32\times\frac{1}{4}=\frac{0.32}{4}=0.08\ [\Omega]
$$

一次漏れリアクタンスの二次側換算値と二次漏れリアクタンスの和は，

$$
0.08+0.12=0.20\ [\Omega]\quad\text{（答）}
$$

### (4)

漏れリアクタンスに誘起する電圧の大きさは，$0.20\times100=20$ [V]

下図のように変圧器の二次電圧のフェーザは，

$$
\begin{aligned}
\dot{V}_{\mathrm{2ab}}&=100\sqrt{3}+\mathrm{j}(100-20)=100\sqrt{3}+\mathrm{j}80\\
\dot{V}_{\mathrm{2cb}}&=10\sqrt{3}+\mathrm{j}(200+10)
\end{aligned}
$$

であるので，

$$
\begin{aligned}
V_{\mathrm{2ab}}&=\sqrt{(100\sqrt{3})^2+80^2}=190.78\ \rightarrow\ 191\ [\mathrm{V}]\\
V_{\mathrm{2cb}}&=\sqrt{(10\sqrt{3})^2+210^2}=210.71\ \rightarrow\ 211\ [\mathrm{V}]
\end{aligned}
\quad\text{（答）}
$$

![V結線変圧器の電圧・電流フェーザ図。V̇1a，İ1a，V̇1ab/2，V̇2ab，jXİ2a，V̇1cb/2，V̇2cb，jXİ2c，İ1c，V̇1c](/diagrams/questions/2013/2013-secondary-machine-control-q02-fig02.png)

### (5)

変圧器の二次電流は，

$$
\dot{I}_{\mathrm{2a}}=100,\qquad\dot{I}_{\mathrm{2c}}=-50+\mathrm{j}50\sqrt{3}
$$

であるので，2台の変圧器の有効電力$P_{\mathrm{2ab}}$，$P_{\mathrm{2cb}}$及び無効電力$Q_{\mathrm{2ab}}$，$Q_{\mathrm{2cb}}$は，

$$
\begin{aligned}
P_{\mathrm{2ab}}+\mathrm{j}Q_{\mathrm{2ab}}&=\overline{\dot{V}}_{\mathrm{2ab}}\dot{I}_{\mathrm{2a}}=(100\sqrt{3}-\mathrm{j}80)\times100=10\,000\sqrt{3}-\mathrm{j}8\,000\\
P_{\mathrm{2cb}}+\mathrm{j}Q_{\mathrm{2cb}}&=\overline{\dot{V}}_{\mathrm{2cb}}\dot{I}_{\mathrm{2c}}=(10\sqrt{3}-\mathrm{j}210)\times(-50+\mathrm{j}50\sqrt{3})=10\,000\sqrt{3}+\mathrm{j}12\,000
\end{aligned}
$$

したがって，

$$
\begin{aligned}
P_{\mathrm{2ab}}&=10\,000\sqrt{3}=17\,320\ [\mathrm{W}]\ \rightarrow\ 17.3\ [\mathrm{kW}]\\
P_{\mathrm{2cb}}&=10\,000\sqrt{3}=17\,320\ [\mathrm{W}]\ \rightarrow\ 17.3\ [\mathrm{kW}]
\end{aligned}
\quad\text{（答）}
$$

［別解］なお，変圧器の損失は無視できるので，負荷へ供給する電力は一次入力電力に等しく，$P_{\mathrm{2ab}}=P_{\mathrm{1ab}}$かつ$P_{\mathrm{2cb}}=P_{\mathrm{1cb}}$である。このとき，一次電圧と一次電流の位相差は$\dfrac{\pi}{6}$ [rad]であるので，

$$
\begin{aligned}
P_{\mathrm{2ab}}&=P_{\mathrm{1ab}}=V_{\mathrm{ab}}\times I_{\mathrm{a}}\times\cos\frac{\pi}{6}=400\times50\times\frac{\sqrt{3}}{2}=17\,320\ [\mathrm{W}]\ \rightarrow\ 17.3\ [\mathrm{kW}]\\
P_{\mathrm{2cb}}&=P_{\mathrm{1ca}}=V_{\mathrm{cb}}\times I_{\mathrm{c}}\times\cos\frac{\pi}{6}=400\times50\times\frac{\sqrt{3}}{2}=17\,320\ [\mathrm{W}]\ \rightarrow\ 17.3\ [\mathrm{kW}]
\end{aligned}
\quad\text{（答）}
$$

としてもよい。
