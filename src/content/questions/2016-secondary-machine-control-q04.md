---
title: "2016年度 機械・制御 問4 状態フィードバックによる極配置と定常偏差"
year: 2016
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 7-8ページと公式標準解答PDF 14-15ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，機械・制御の問4。状態フィードバックによる極配置と定常偏差の問題と公式標準解答。"
---

## 問題

図に示す構造の制御系を考える。ここで$r(t)$は目標値，$e(t)$は制御偏差，$u(t)$は入力，$\boldsymbol{x}(t)$は状態，$y(t)$は出力を表し，制御対象は次の状態方程式で記述される。

$$
\begin{gathered}
\dot{\boldsymbol{x}}(t)=\boldsymbol{A}\boldsymbol{x}(t)+\boldsymbol{b}u(t)\\
y(t)=\boldsymbol{c}\boldsymbol{x}(t)\\
\boldsymbol{A}=\begin{pmatrix}0&1\\0&-1\end{pmatrix},\quad\boldsymbol{b}=\begin{pmatrix}0\\1\end{pmatrix},\quad\boldsymbol{c}=\begin{pmatrix}2&1\end{pmatrix}
\end{gathered}
$$

次の問に答えよ。

![制御系のブロック線図。r(t)から偏差e(t)を直列補償器kに入力し，状態フィードバックfを引いてu(t)とする。見掛け上の制御対象（破線枠）はb，積分器，Aのループで状態x(t)を生成し，cを経て出力y(t)を主フィードバック](/diagrams/questions/2016/2016-secondary-machine-control-q04-fig01.png)

### (1)

図中の直列補償器のゲイン$k$を零として，状態フィードバック係数ベクトル$\boldsymbol{f}=\begin{pmatrix}f_1&f_2\end{pmatrix}$を用いて見掛け上の制御対象の特性改善を図る。行列$\boldsymbol{A}-\boldsymbol{b}\boldsymbol{f}$の固有値を$-3$，$-4$に配置する$\boldsymbol{f}$を計算せよ。

### (2)

上記小問(1)で求めた$\boldsymbol{f}$を用いて特性改善をした見掛け上の制御対象に対して，目標値$r(t)$に出力$y(t)$が追従することを目的に，図に示すフィードバック制御系を構成した。閉ループ系が安定になるように直列補償器のゲイン$k$を設計できたとするとき，入力$u(t)$を$\boldsymbol{x}(t)$，$r(t)$，$\boldsymbol{c}$，$\boldsymbol{f}$，$k$を用いて表せ。

### (3)

上記小問(2)の入力$u(t)$を制御対象に加える。閉ループ系の状態方程式を$\dot{\boldsymbol{x}}(t)$，$\boldsymbol{x}(t)$，$r(t)$，$\boldsymbol{A}$，$\boldsymbol{b}$，$\boldsymbol{c}$，$\boldsymbol{f}$，$k$を用いて表せ。

### (4)

上記小問(3)で求めた状態方程式の中の$\boldsymbol{A}$，$\boldsymbol{b}$，$\boldsymbol{c}$，$\boldsymbol{f}$に，与えられた数値及び上記小問(1)で求めた数値を代入して整理せよ。ただし，$k$は変数のままとする。

### (5)

目標値を大きさ$r_0$でステップ状に変化させる場合を考える。上記小問(2)の仮定より閉ループ系は安定なので，状態$\boldsymbol{x}(t)$は定常，すなわち$\dot{\boldsymbol{x}}(\infty)=\begin{pmatrix}0\\0\end{pmatrix}$となる。このときの定常値$\boldsymbol{x}(\infty)$を$k$と$r_0$を用いて表せ。

### (6)

関係式$e(\infty)=r_0-y(\infty)=r_0-\boldsymbol{c}\boldsymbol{x}(\infty)$を使って，定常偏差$e(\infty)$を$k$と$r_0$を用いて表せ。

## 解答

### (1)

まず，$\boldsymbol{A}-\boldsymbol{b}\boldsymbol{f}$を計算する。

$$
\boldsymbol{A}-\boldsymbol{b}\boldsymbol{f}=\begin{pmatrix}0&1\\0&-1\end{pmatrix}-\begin{pmatrix}0\\1\end{pmatrix}\begin{pmatrix}f_1&f_2\end{pmatrix}=\begin{pmatrix}0&1\\-f_1&-1-f_2\end{pmatrix}
$$

よって，この行列の特性多項式は

$$
\left|s\boldsymbol{I}-\boldsymbol{A}+\boldsymbol{b}\boldsymbol{f}\right|=\begin{vmatrix}s&-1\\f_1&s+1+f_2\end{vmatrix}=s^2+(1+f_2)s+f_1
$$

となる。一方，固有値が$-3$，$-4$となる特性多項式は

$$
(s+3)(s+4)=s^2+7s+12
$$

であるから，係数比較法により，$\boldsymbol{f}=\begin{pmatrix}12&6\end{pmatrix}$と求まる。…（答）

### (2)

図に示す制御系の構造から

$$
\begin{aligned}
u(t)&=-\boldsymbol{f}\boldsymbol{x}(t)+ke(t)\\
e(t)&=r(t)-y(t)=r(t)-\boldsymbol{c}\boldsymbol{x}(t)
\end{aligned}
$$

であるから，これらより，

$$
\begin{aligned}
u(t)&=-\boldsymbol{f}\boldsymbol{x}(t)+ke(t)=-\boldsymbol{f}\boldsymbol{x}(t)+k\left[r(t)-\boldsymbol{c}\boldsymbol{x}(t)\right]\\
&=-(\boldsymbol{f}+k\boldsymbol{c})\boldsymbol{x}(t)+kr(t)
\end{aligned}
$$

と求められる。…（答）

### (3)

上記の制御を施すと閉ループ系の状態方程式は，

$$
\begin{aligned}
\dot{\boldsymbol{x}}(t)&=\boldsymbol{A}\boldsymbol{x}(t)-\boldsymbol{b}(\boldsymbol{f}+k\boldsymbol{c})\boldsymbol{x}(t)+\boldsymbol{b}kr(t)\\
&=(\boldsymbol{A}-\boldsymbol{b}\boldsymbol{f}-\boldsymbol{b}k\boldsymbol{c})\boldsymbol{x}(t)+\boldsymbol{b}kr(t)
\end{aligned}
$$

となる。…（答）

### (4)

数値を代入して次のように整理される。

$$
\begin{aligned}
\dot{\boldsymbol{x}}(t)&=(\boldsymbol{A}-\boldsymbol{b}\boldsymbol{f}-\boldsymbol{b}k\boldsymbol{c})\boldsymbol{x}(t)+\boldsymbol{b}kr(t)\\
&=\left[\begin{pmatrix}0&1\\0&-1\end{pmatrix}-\begin{pmatrix}0\\1\end{pmatrix}\begin{pmatrix}12&6\end{pmatrix}-\begin{pmatrix}0\\1\end{pmatrix}k\begin{pmatrix}2&1\end{pmatrix}\right]\boldsymbol{x}(t)+\begin{pmatrix}0\\1\end{pmatrix}kr(t)\\
&=\begin{pmatrix}0&1\\-12-2k&-7-k\end{pmatrix}\boldsymbol{x}(t)+\begin{pmatrix}0\\1\end{pmatrix}kr(t)\quad\text{（答）}
\end{aligned}
$$

### (5)

$\boldsymbol{x}(\infty)$は次のように計算される。

$$
\begin{aligned}
\boldsymbol{x}(\infty)&=-\begin{pmatrix}0&1\\-12-2k&-7-k\end{pmatrix}^{-1}\begin{pmatrix}0\\1\end{pmatrix}kr_0\\
&=-\frac{1}{12+2k}\begin{pmatrix}-7-k&-1\\12+2k&0\end{pmatrix}\begin{pmatrix}0\\1\end{pmatrix}kr_0\\
&=\frac{1}{12+2k}\begin{pmatrix}1\\0\end{pmatrix}kr_0\quad\text{（答）}
\end{aligned}
$$

### (6)

$e(\infty)=r_0-y(\infty)=r_0-\boldsymbol{c}\boldsymbol{x}(\infty)$であるから，

$$
\begin{aligned}
e(\infty)&=r_0-\begin{pmatrix}2&1\end{pmatrix}\frac{1}{12+2k}\begin{pmatrix}1\\0\end{pmatrix}kr_0\\
&=r_0-\frac{2k}{12+2k}r_0\\
&=\frac{6}{6+k}r_0
\end{aligned}
$$

と計算できる。…（答）
