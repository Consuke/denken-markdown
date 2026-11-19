---
title: "2018年度 機械・制御 問3 三相サイリスタ変換器による電力変換"
year: 2018
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["rectifiers"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q02.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=13"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2018年度の電験二種二次試験，機械・制御の問3。三相サイリスタ変換器による電力変換の問題と公式標準解答。"
---

## 問題

図1に三相サイリスタ変換器を2台使用した変換装置を示す。対称三相電圧の①系統，②系統に接続されている変換器をそれぞれ変換器1，変換器2とし，その直流電圧を$v_{\mathrm{dc1}}$，$v_{\mathrm{dc2}}$とする。①系統の相順はu→v→w相とし，変換器1のサイリスタの番号を図1に示す。直流リアクトル$L$のインダクタンスは十分に大きく，直流電流$I_{\mathrm{d}}$のリプルは無視できる。また，図示されていない回路内のインピーダンス及び回路内の損失も無視できるものとする。なお，$I_{\mathrm{d}}$，$v_{\mathrm{dc1}}$，$v_{\mathrm{dc2}}$の極性は，図1に示す方向を正とする。動作は定常状態にあるものとして，次の問に答えよ。

### (1)

ある時刻に変換器1のサイリスタT₁及びT₅がオンしていたとする。電気角で120°に相当する時間後に通電しているのはどのサイリスタであるかを示せ。

### (2)

①系統の三相交流線間電圧の実効値を$V_1$とする。変換器1を図2に示す制御角$\alpha_1$で運転したときに，直流電圧$v_{\mathrm{dc1}}$の平均値$V_{\mathrm{dc1}}$を求める式を，$V_1$及び$\alpha_1$を用いて示せ。

### (3)

損失がないとしているので，この装置における①系統から入力される有効電力$P_{\mathrm{ac1}}$と直流電力$P_{\mathrm{dc}}$とは等しい。有効電力$P_{\mathrm{ac1}}$を表す式を$V_1$，$I_{\mathrm{d}}$及び$\alpha_1$を用いて示せ。

### (4)

①系統に流れる波高値$I_{\mathrm{d}}$の交流の線電流は半サイクルで120°通電の方形波となり，この波形に含まれる基本波実効値$I_1$は$\dfrac{\sqrt{6}}{\pi}I_{\mathrm{d}}$である。この基本波による①系統からの遅れの無効電力$Q_{\mathrm{ac1}}$を表す式を，$V_1$，$I_{\mathrm{d}}$及び$\alpha_1$を用いて示せ。

### (5)

変換器2の直流電圧$v_{\mathrm{dc2}}$の平均値を$V_{\mathrm{dc2}}$とする。①系統から②系統に電力を送る場合，電流$I_{\mathrm{d}}$の極性は正，平均電圧$V_{\mathrm{dc1}}$，$V_{\mathrm{dc2}}$の両方の極性とも正である。逆に，②系統から①系統に電力を送る場合に，電流$I_{\mathrm{d}}$，平均電圧$V_{\mathrm{dc1}}$，$V_{\mathrm{dc2}}$の極性は正であるか負であるかを示せ。

![図1 三相サイリスタ整流回路の変換器を2台使用した変換装置](/diagrams/questions/2018/2018-secondary-machine-control-q03-fig01.png)

![図2 交流線間電圧と直流電圧の関係，制御角α1](/diagrams/questions/2018/2018-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

電気角で120°に相当する時間後に通電しているのは，相順に従って，次のサイリスタT₁→T₂，T₅→T₆に転流しているので，サイリスタT₂とT₆である。

### (2)

直流電圧$v_{\mathrm{dc1}}$の平均値$V_{\mathrm{dc1}}$は，

$$
V_{\mathrm{dc1}}=\frac{1}{\dfrac{\pi}{3}}\int_{-\frac{\pi}{6}+\alpha_1}^{\frac{\pi}{6}+\alpha_1}\sqrt{2}V_1\cos\theta\,\mathrm{d}\theta
=\frac{3\sqrt{2}}{\pi}V_1\cos\alpha_1=1.35V_1\cos\alpha_1\quad\text{（答）}
$$

### (3)

①系統の有効電力$P_{\mathrm{ac1}}$は，直流電流$i_{\mathrm{d}}$が一定値$I_{\mathrm{d}}$とみなせるため，

$$
\begin{aligned}
P_{\mathrm{ac1}}&=P_{\mathrm{dc}}=\frac{1}{2\pi}\int_0^{2\pi}v_{\mathrm{dc1}}\cdot i_{\mathrm{d}}\,\mathrm{d}\theta\\
&=V_{\mathrm{dc1}}\cdot I_{\mathrm{d}}=\frac{3\sqrt{2}}{\pi}V_1I_{\mathrm{d}}\cos\alpha_1
=1.35V_1I_{\mathrm{d}}\cos\alpha_1\quad\text{（答）}
\end{aligned}
$$

### (4)

①系統の基本波皮相電力$S_{\mathrm{ac1}}$は，線間電圧の実効値が$V_1$，線電流の基本波実効値が$I_1=\dfrac{\sqrt{6}}{\pi}I_{\mathrm{d}}$であるので，

$$
S_{\mathrm{ac1}}=\sqrt{3}V_1I_1=\sqrt{3}V_1\times\frac{\sqrt{6}}{\pi}I_{\mathrm{d}}
=\frac{3\sqrt{2}}{\pi}V_1I_{\mathrm{d}}=\sqrt{P_{\mathrm{ac1}}^2+Q_{\mathrm{ac1}}^2}
$$

したがって，基本波による①系統からの遅れの無効電力$Q_{\mathrm{ac1}}$は，

$$
Q_{\mathrm{ac1}}=\sqrt{S_{\mathrm{ac1}}^2-P_{\mathrm{ac1}}^2}
=\frac{3\sqrt{2}}{\pi}V_1I_{\mathrm{d}}\sin\alpha_1=1.35V_1I_{\mathrm{d}}\sin\alpha_1\quad\text{（答）}
$$

### (5)

電力の方向が②系統→①系統の場合，電流$I_{\mathrm{d}}$の極性は正，電圧$V_{\mathrm{dc1}}$の極性は負，電圧$V_{\mathrm{dc2}}$の極性は負である。
