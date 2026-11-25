---
title: "2015年度 機械・制御 問1 同期発電機の機械的入力と内部相差角"
year: 2015
examStage: "secondary"
subject: "machine-control"
questionNumber: 1
topics: ["rotating-machines"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q02.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=10"
sourceNote: "ユーザー提供の問題PDF 3-4ページと公式標準解答PDF 10-11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，機械・制御の問1。同期発電機の機械的入力と内部相差角の問題と公式標準解答。"
---

## 問題

同期リアクタンス$X_{\mathrm{s}}$ [Ω]の同期発電機をインピーダンスが十分に小さい相電圧$V_0$ [V]の三相交流系統に接続し，発電機に$P_0$ [W]の機械的入力を加えたとき，内部相差角は$\delta_0=45^\circ$で動作した。界磁電流及び回転速度は一定で，発電機の突極性及び損失は無視できるものとする。

### (1)

同期発電機を相電圧$V_0$の三相交流系統に接続した場合について，以下のa.及びb.に答えよ。

a. 発電機に加える機械的入力を$P_1$ [W]にすると，内部相差角は$\delta_1=30^\circ$となった。機械的入力の比$\dfrac{P_1}{P_0}$を求めよ。

b. 発電機と交流系統の間に$X_2=X_{\mathrm{s}}$のリアクトルを挿入した。$P_2$ [W]の機械的入力を加えると，交流系統電圧と無負荷誘導起電力の間の位相角が$\delta_2=45^\circ$に増加した。このときの機械的入力の比$\dfrac{P_2}{P_0}$を求めよ。

### (2)

同期発電機を三相交流系統から切り離して$R$ [Ω]の抵抗器をY結線して接続し，抵抗器だけに電力を供給する。ここで，$P_3=P_0$ [W]の機械的入力を加えたところ，発電機端子の相電圧は$V_3$ [V]，内部相差角は$\delta_3=60^\circ$となった。抵抗器だけを接続した場合について，以下のa.及びb.に答えよ。

a. 発電機端子の相電圧の比$\dfrac{V_3}{V_0}$を求めよ。

b. 同期リアクタンス$X_{\mathrm{s}}$に対する抵抗$R$の比$\dfrac{R}{X_{\mathrm{s}}}$を求めよ。

## 解答

### (1)

同期発電機の損失を無視すれば，機械的入力は電気的出力に等しいので，無負荷誘導起電力を$E$とすると，

$$
P=3\frac{VE}{X_{\mathrm{s}}}\sin\delta
$$

である。$V=V_0$，$\delta_0=45^\circ$のときの出力電力$P_0$は，

$$
P_0=3\frac{V_0E}{X_{\mathrm{s}}}\sin45^\circ=3\times\frac{V_0E}{X_{\mathrm{s}}}\times\frac{1}{\sqrt{2}}=\frac{3V_0E}{\sqrt{2}X_{\mathrm{s}}}
$$

である。このとき，発電機端子の相電圧は，

$$
V_0=\frac{\sqrt{2}X_{\mathrm{s}}}{3E}P_0
$$

となる。

a. $\delta_1=30^\circ$のときの機械的入力電力$P_1$は，

$$
P_1=3\frac{V_0E}{X_{\mathrm{s}}}\sin30^\circ=3\times\frac{V_0E}{X_{\mathrm{s}}}\times\frac{1}{2}=\frac{3V_0E}{2X_{\mathrm{s}}}
$$

である。したがって，機械的入力の比は，

$$
\frac{P_1}{P_0}=\frac{\dfrac{3V_0E}{2X_{\mathrm{s}}}}{\dfrac{3V_0E}{\sqrt{2}X_{\mathrm{s}}}}=\frac{\sqrt{2}}{2}=0.707\,10\ \rightarrow\ 0.707\quad\text{（答）}
$$

b. リアクトル$X_2=X_{\mathrm{s}}$を挿入し，$\delta_2=45^\circ$で動作したときの機械的入力$P_2$は，

$$
P_2=3\frac{V_0E}{X_2+X_{\mathrm{s}}}\sin45^\circ=3\times\frac{V_0E}{2X_{\mathrm{s}}}\times\frac{1}{\sqrt{2}}=\frac{3V_0E}{2\sqrt{2}X_{\mathrm{s}}}
$$

となる。したがって，出力電力の比は，

$$
\frac{P_2}{P_0}=\frac{\dfrac{3V_0E}{2\sqrt{2}X_{\mathrm{s}}}}{\dfrac{3V_0E}{\sqrt{2}X_{\mathrm{s}}}}=\frac{X_{\mathrm{s}}}{2X_{\mathrm{s}}}=\frac{1}{2}=0.5\quad\text{（答）}
$$

### (2)

c. 機械的入力が$P_3=P_0$で，$\delta_3=60^\circ$のとき，

$$
P_3=P_0=3\frac{V_3E}{X_{\mathrm{s}}}\sin60^\circ=3\times\frac{V_3E}{X_{\mathrm{s}}}\times\frac{\sqrt{3}}{2}=\frac{3\sqrt{3}V_3E}{2X_{\mathrm{s}}}
$$

となるので，

$$
V_3=\frac{2X_{\mathrm{s}}}{3\sqrt{3}E}P_0
$$

したがって，

$$
\frac{V_3}{V_0}=\frac{\dfrac{2X_{\mathrm{s}}}{3\sqrt{3}E}P_0}{\dfrac{\sqrt{2}X_{\mathrm{s}}}{3E}P_0}=\frac{\sqrt{2}}{\sqrt{3}}=\frac{1.414\,2}{1.732\,1}=0.816\,47\ \rightarrow\ 0.816\quad\text{（答）}
$$

d. 抵抗器を接続した場合，力率1であるので，発電機電流を$I_3$とすれば，

$$
\begin{aligned}
V_3&=RI_3=E\cos\delta_3=E\cos60^\circ=\frac{E}{2}\\
X_{\mathrm{s}}I_3&=E\sin60^\circ=\frac{\sqrt{3}}{2}E
\end{aligned}
$$

したがって，

$$
\frac{R}{X_{\mathrm{s}}}=\frac{\dfrac{E}{2}}{\dfrac{\sqrt{3}}{2}E}=\frac{1}{\sqrt{3}}=\frac{1}{1.732\,1}=0.577\,33\ \rightarrow\ 0.577\quad\text{（答）}
$$

である。

（注：原本の標準解答では，小問(2)のa.・b.に対応する解答がc.・d.と表記されている。）
