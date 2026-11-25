---
title: "2015年度 電力・管理 問4 送電線の抵抗とリアクタンスの求め方"
year: 2015
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 6ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，電力・管理の問4。送電線の抵抗とリアクタンスの求め方の問題と公式標準解答。"
---

## 問題

送電線の抵抗とリアクタンスの求め方に関して，次の問に答えよ。

送電線両端の電圧や位相角が測定できると，送電線の抵抗やリアクタンスが求められる。送電端電圧$\dot{V}_1$の大きさを$V_1$，その受電端電圧$\dot{V}_2$に対する位相差を$\delta$，送電端から受電端への潮流の送電端側の有効電力を$P$，無効電力を$Q$とする。また，送電線の並列アドミタンスは無視できるものとし，送電線の抵抗を$r$，リアクタンスを$x$とする。

ただし，電力や電流は送電端から受電端への向きを正，無効電力は遅れ側を正，及び$P\neq0$あるいは$Q\neq0$とする。また，$\delta$の単位は[rad]，その他の単位は[p.u.]とする。

### (1)

送電端と受電端の複素電圧をそれぞれ$\dot{V}_1=V_1\angle\delta$，$\dot{V}_2=V_2\angle0$，送電線電流を$\dot{I}$としたとき，$\dot{V}_1$を$\dot{V}_2$，$\dot{I}$，$r$，$x$を用いて表せ。

### (2)

$\dot{I}$を，$P$，$Q$，$\dot{V}_1$を用いて表せ。

### (3)

上記(1)及び(2)にて表した式から$\dot{I}$を消去して$V_1$，$V_2$，$\delta$，$P$，$Q$，$r$，$x$間の関係を表す式を示せ。

### (4)

上記(3)の式で，実数部と虚数部に分けて考えると，$x$と$r$に関する下記の式が導かれる。$\alpha$と$\beta$は，$V_1$，$V_2$，$\delta$の関数である。$\alpha$と$\beta$を表す式を示せ。

$$
x=\frac{P\alpha+Q\beta}{P^2+Q^2},\qquad r=\frac{P\beta-Q\alpha}{P^2+Q^2}
$$

### (5)

$V_1=1.05$ p.u.，$V_2=1.01$ p.u.，$\delta=\dfrac{\pi}{12}$ rad，$P=1.23$ p.u.，$Q=0.195$ p.u.のときの$x$ [p.u.]と$r$ [p.u.]を求めよ。

なお，$\sin\dfrac{\pi}{12}=0.258\,82$，$\cos\dfrac{\pi}{12}=0.965\,93$を使用すること。

## 解答

### (1)

$$
\dot{V}_1=\dot{V}_2+(r+\mathrm{j}x)\dot{I}\quad\cdots\ (1)\quad\text{（答）}
$$

### (2)

$$
P+\mathrm{j}Q=\dot{V}_1\overline{\dot{I}}
$$

より，

$$
\dot{I}=\frac{P-\mathrm{j}Q}{\overline{\dot{V}}_1}\quad\cdots\ (2)\quad\text{（答）}
$$

### (3)

(2)式を(1)式に代入して，

$$
\dot{V}_1=\dot{V}_2+(r+\mathrm{j}x)\frac{P-\mathrm{j}Q}{\overline{\dot{V}}_1}
$$

より，

$$
V_1^2=V_1V_2\mathrm{e}^{-\mathrm{j}\delta}+(r+\mathrm{j}x)(P-\mathrm{j}Q)\quad\cdots\ (3)\quad\text{（答）}
$$

### (4)

(3)式の実数部と虚数部の式から，

$$
\begin{aligned}
Pr+Qx&=V_1(V_1-V_2\cos\delta)\\
-Qr+Px&=V_1V_2\sin\delta
\end{aligned}
$$

したがって，

$$
\begin{aligned}
r&=\frac{PV_1(V_1-V_2\cos\delta)-QV_1V_2\sin\delta}{P^2+Q^2}\\
x&=\frac{PV_1V_2\sin\delta+QV_1(V_1-V_2\cos\delta)}{P^2+Q^2}
\end{aligned}
$$

よって，

$$
\left.
\begin{aligned}
\alpha&=V_1V_2\sin\delta\\
\beta&=V_1(V_1-V_2\cos\delta)
\end{aligned}
\right\}\quad\text{（答）}
$$

### (5)

$x=0.228$ p.u.，$r=0.027\,5$ p.u.　…（答）
