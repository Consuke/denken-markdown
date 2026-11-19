---
title: "2019年度 電力・管理 問2 送受電端電圧と有効・無効電力"
year: 2019
examStage: "secondary"
subject: "power-management"
questionNumber: 2
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q01.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=1"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 1・2ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2019年度の電験二種二次試験，電力・管理の問2。送受電端電圧と有効・無効電力の問題と公式標準解答。"
---

## 問題

図に示すように，発電機より直列リアクタンス$X$をもつ送電線を介して負荷に有効電力$P$，無効電力$Q$を供給している場合を考える。ここに送電端電圧を$V_{\mathrm{s}}\angle\delta$，受電端（負荷端）電圧を$V_{\mathrm{r}}\angle0$とする。また，無効電力の符号は遅れ無効電力を正とする。

### (1)

負荷の有効電力$P$及び無効電力$Q$を，$V_{\mathrm{s}}$，$V_{\mathrm{r}}$，$\delta$及び$X$で表す式を導出せよ。

### (2)

送電端電圧の大きさ$V_{\mathrm{s}}$を1 p.u.，送電線から負荷に供給する有効電力$P$を0.5 p.u.，無効電力$Q$を0 p.u.とするとき，受電端電圧の大きさ$V_{\mathrm{r}}$及び$\delta$（$0^\circ\leqq\delta<45^\circ$）を求めたい。ここに送電線のリアクタンス$X$は0.5 p.u.とする。

- a）有効電力に関する式から$V_{\mathrm{r}}$を，$\delta$を用いて表せ。
- b）無効電力に関する式から$V_{\mathrm{r}}$を，$\delta$を用いて表せ。
- c）a）及びb）の結果から$\delta$及び$V_{\mathrm{r}}$の値を求めよ。

ただし，$\sin2x=2\sin x\cos x$，$\cos2x=2\cos^2x-1$を用いてもよい。

![発電機から直列リアクタンスjXの送電線を介して有効・無効電力P+jQを負荷に供給する回路](/diagrams/questions/2019/2019-secondary-power-management-q02-fig01.png)

## 解答

### (1)

送電線を流れる電流$\dot{I}$は，単位法を用いる場合，下式で与えられる。

$$
\begin{aligned}
\dot{I}&=\frac{V_{\mathrm{s}}\mathrm{e}^{\mathrm{j}\delta}-V_{\mathrm{r}}}{\mathrm{j}X}
=\frac{V_{\mathrm{s}}\cos\delta+\mathrm{j}V_{\mathrm{s}}\sin\delta-V_{\mathrm{r}}}{\mathrm{j}X}\\
&=\frac{1}{X}V_{\mathrm{s}}\sin\delta-\mathrm{j}\frac{1}{X}(V_{\mathrm{s}}\cos\delta-V_{\mathrm{r}})
\end{aligned}
$$

したがって，複素電力は次式となり，

$$
\begin{aligned}
P+\mathrm{j}Q&=\dot{V}_{\mathrm{r}}\overline{\dot{I}}=V_{\mathrm{r}}\overline{\dot{I}}\\
&=\frac{1}{X}V_{\mathrm{s}}V_{\mathrm{r}}\sin\delta+\mathrm{j}\frac{1}{X}(V_{\mathrm{s}}V_{\mathrm{r}}\cos\delta-V_{\mathrm{r}}^2)
\end{aligned}
$$

つまり答えは次式のとおりとなる。

$$
P=\frac{1}{X}V_{\mathrm{s}}V_{\mathrm{r}}\sin\delta\tag{1}
$$

$$
Q=\frac{1}{X}(V_{\mathrm{s}}V_{\mathrm{r}}\cos\delta-V_{\mathrm{r}}^2)\tag{2}
$$

…（答）

### (2)

与えられた条件を①，②式に代入すると，

$$
0.5=\frac{1}{0.5}V_{\mathrm{r}}\sin\delta,\qquad
0=\frac{1}{0.5}(V_{\mathrm{r}}\cos\delta-V_{\mathrm{r}}^2)
$$

となるため，次式が得られる。$V_{\mathrm{r}}\neq0$なので，

#### a

$$
V_{\mathrm{r}}=\frac{0.25}{\sin\delta}\tag{3}
$$

…（答）

#### b

$$
V_{\mathrm{r}}=\cos\delta\tag{4}
$$

…（答）

#### c

④式を③式に代入すると，$\sin\delta\cos\delta=0.25$となるため，

$$
\sin2\delta=0.5\tag{5}
$$

となる。⑤式より$0^\circ\leqq\delta<45^\circ$を考慮すれば，

$$
2\delta=30^\circ\quad\therefore\quad\delta=15^\circ\quad\text{（答）}
$$

となる。また⑤式より，$\cos2\delta=\sqrt{1-0.5^2}=0.8660$となり，$\cos2x=2\cos^2x-1$を用いれば，

$$
\cos^2\delta=\frac{1.866}{2},\qquad\cos\delta=0.966
$$

となる。④式より，

$$
V_{\mathrm{r}}=0.966\ \mathrm{p.u.}\quad\text{（答）}
$$

となる。
