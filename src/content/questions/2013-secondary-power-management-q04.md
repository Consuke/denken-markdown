---
title: "2013年度 電力・管理 問4 電力円線図と電圧安定限界"
year: 2013
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["stability","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成25年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_q01.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20131124_ch_second_a01.pdf#page=5"
sourceNote: "ユーザー提供の問題PDF 6ページと公式標準解答PDF 5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2013年度の電験二種二次試験，電力・管理の問4。電力円線図と電圧安定限界の問題と公式標準解答。"
---

## 問題

図に示すように電圧$E$の無限大母線から，リアクタンス$X$の送電線で負荷に電力を供給している。負荷の有効電力を$P$，無効電力を$Q$（遅れ無効電力を正とする。），負荷端の複素電圧を$V\mathrm{e}^{-\mathrm{j}\delta}$として次の問に答えよ。

なお，$X=0.2$ [p.u.]，$E=1.0$ [p.u.]とし，送電線の抵抗と静電容量は無視できるものとする。また，負荷の$P$，$Q$は電圧に対し定電力特性をもつものとする。

![無限大母線の電圧E（Ė=E）からリアクタンスjXの送電線を通して負荷端電圧V̇=Ve^(-jδ)の負荷にP+jQを供給する系統図](/diagrams/questions/2013/2013-secondary-power-management-q04-fig01.png)

### (1)

負荷の$P$，$Q$を与えられた変数（$E$，$V$，$X$，$\delta$）で示せ。

### (2)

(1)で得られた式から$\delta$を消去し，$P$，$Q$と$V$の関係式，すなわち電力円線図を表す方程式を導け。

### (3)

負荷の力率を1.0としたときの負荷端電圧$V$の値を求めることのできる$P$の最大値，すなわち電圧安定性を維持できる限界点の$P$（電圧安定限界値）を与えられた数値を用いて求めよ。（(2)で得られた式は$V^2$に関する二次方程式であることを利用せよ。）

### (4)

(3)と同様に，負荷の力率を0.9（進み）としたときの$P$の最大値（電圧安定限界値）を求めよ。

### (5)

負荷の力率を一定にして$P$を増加したとき，$V=1.0$ [p.u.]で$P$が最大（電圧安定限界）となった。そのときの$P$の最大値（電圧安定限界値）を求めよ。

## 解答

### (1)

$$
P=\frac{EV}{X}\sin\delta,\qquad Q=\frac{EV}{X}\cos\delta-\frac{V^2}{X}\quad\text{（答）}
$$

### (2)

(1)と$\cos^2\delta+\sin^2\delta=1$より

$$
P^2+\left(Q+\frac{V^2}{X}\right)^2=\frac{E^2V^2}{X^2}\quad\cdots\ (1)\quad\text{（答）}
$$

### (3)

$y=\dfrac{1}{X}$，$I=\dfrac{E}{X}$とし，$V$について整理すると

$$
y^2V^4+(2yQ-I^2)V^2+(P^2+Q^2)=0\quad\cdots\ (2)
$$

(2)式で$V^2$が実数解をもつための条件は

$$
(2yQ-I^2)^2-4y^2(P^2+Q^2)\geqq0\quad\cdots\ (3)
$$

電圧安定限界は等号が成立するときである。

与えられた数値より，$y=5$，$I^2=25$，これを代入して整理すると

$$
P^2+5Q-\frac{25}{4}=0\quad\langle\text{電圧安定限界の条件}\rangle\quad\cdots\ (4)
$$

力率1より$Q=0$，

$$
P^2=\frac{25}{4}\ \rightarrow\ P=\pm\frac{5}{2}
$$

題意より，

$$
P=\frac{5}{2}=2.50\ [\mathrm{p.u.}]\quad\text{（答）}
$$

### (4)

力率$\cos\phi=0.9$（進み）より

$$
Q=\frac{-P}{0.9}\sin\phi=\frac{-\sqrt{1-0.9^2}}{0.9}P\fallingdotseq-0.4843P
$$

これを(4)式に代入

$$
P^2-2.422P-6.25=0
$$

限界は

$$
P=1.211\pm\sqrt{1.211^2+6.25}=1.211\pm2.778=3.989,\ -1.567
$$

題意より$P=3.99$ [p.u.]　…（答）

### (5)

(2)式で$E=V=1.0$とすると

$$
25+(10Q-25)+P^2+Q^2=0\quad\cdots\ (5)
$$

(4)式と(5)式を満足する解を求める。(4)式を(5)式に代入すると

$$
Q^2+5Q+\frac{25}{4}=0\qquad Q=-\frac{5}{2}\ (\text{重根})
$$

(4)より

$$
P^2=-5\cdot\left(-\frac{5}{2}\right)+\frac{25}{4}=\frac{75}{4}\qquad P=\pm4.33\ \rightarrow\ P=4.33\ [\mathrm{p.u.}]\quad\text{（答）}
$$
