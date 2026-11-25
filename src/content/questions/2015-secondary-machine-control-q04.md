---
title: "2015年度 機械・制御 問4 参照モデルに一致させる積分補償とフィードバック補償の設計"
year: 2015
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 平成27年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_q02.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf#page=16"
sourceNote: "ユーザー提供の問題PDF 9-10ページと公式標準解答PDF 16-17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2015年度の電験二種二次試験，機械・制御の問4。参照モデルに一致させる積分補償とフィードバック補償の設計の問題と公式標準解答。"
---

## 問題

図に示すフィードバック制御系において，$R(s)$，$E(s)$，$U(s)$，$Y(s)$はそれぞれ，目標値$r(t)$，制御偏差$e(t)$，操作入力$u(t)$，制御量$y(t)$のラプラス変換を表している。また，$G(s)$は制御対象の伝達関数，$\dfrac{k}{s}$は積分動作の直列補償要素，$F(s)$はフィードバック補償要素を表している。

以下において，$\dfrac{k}{s}$と$F(s)$とに含まれる制御定数を調整することで，フィードバック制御系の目標値$R(s)$から制御量$Y(s)$までの伝達関数を，望ましい動特性を実現する参照モデルの伝達関数に一致させることを考える。次の問に答えよ。

![フィードバック制御系のブロック線図。R(s)から偏差E(s)を積分補償k/sに入力し，F(s)によるマイナーフィードバックを引いてU(s)とし制御対象G(s)の出力Y(s)を主フィードバック](/diagrams/questions/2015/2015-secondary-machine-control-q04-fig01.png)

### (1)

制御対象は零点をもたない遅れ系であって，多項式$h(s)$を用いて次のように表されている。

$$
G(s)=\frac{1}{h(s)}
$$

フィードバック制御系の目標値$R(s)$から制御量$Y(s)$までの伝達関数$W(s)$を$s$，$k$，$F(s)$，$h(s)$を用いて表せ。

### (2)

制御対象は2次遅れ系

$$
G(s)=\frac{1}{h(s)}=\frac{1}{h_0+h_1s+h_2s^2}
$$

であるとする。また，フィードバック補償要素$f(s)$は定数であるとし，

$$
F(s)=f_0
$$

とおく。

次の参照モデルを導入する。

$$
W_{\mathrm{d}}(s)=\frac{1}{1+\sigma s+\alpha_2\sigma^2s^2+\alpha_3\sigma^3s^3}
$$

ここで，$\alpha_2$及び$\alpha_3$は時間応答の形を規定する係数であり，$\sigma$は，その次数を$s$の次数と合わせているので，時間スケールのパラメータである。しかも，1次のモーメントに一致するので，立ち上がりの一つの特性値でもある。この$\sigma$も設計時の計算において決定する。

フィードバック制御系の目標値から制御量までの伝達関数$W(s)$と参照モデル$W_{\mathrm{d}}(s)$を一致させるために，パラメータ$\sigma$と制御定数$k$，$f_0$が満たさなくてはならない連立方程式を求めよ。

### (3)

連立方程式を解いてパラメータ$\sigma$を$\alpha_2$，$\alpha_3$，$h_1$，$h_2$を用いて表せ。

### (4)

制御定数$k$を求める式を$\alpha_2$，$h_1$，$\sigma$を用いて表せ。

### (5)

制御定数$f_0$を求める式を$k$，$h_0$，$\sigma$を用いて表せ。

## 解答

### (1)

内側のフィードバックループを一つのブロックで表すと，

$$
\frac{G(s)}{1+G(s)F(s)}=\frac{\dfrac{1}{h(s)}}{1+\dfrac{1}{h(s)}F(s)}=\frac{1}{h(s)+F(s)}
$$

となる。よって，フィードバック制御系の目標値から制御量までの伝達関数$W(s)$は，

$$
W(s)=\frac{\dfrac{k}{s[h(s)+F(s)]}}{1+\dfrac{k}{s[h(s)+F(s)]}}=\frac{1}{1+\dfrac{s}{k}[h(s)+F(s)]}\quad\cdots\ (1)\quad\text{（答）}
$$

である。

### (2)

(1)式と問題中の

$$
W_{\mathrm{d}}(s)=\frac{1}{1+\sigma s+\alpha_2\sigma^2s^2+\alpha_3\sigma^3s^3}\quad\cdots\ (2)
$$

とを等しいとおくことによって，次の関係式を得る。

$$
\begin{gathered}
1+\frac{s}{k}[h(s)+F(s)]=1+\sigma s+\alpha_2\sigma^2s^2+\alpha_3\sigma^3s^3\\
\therefore\ 1+\frac{s}{k}(h_0+f_0+h_1s+h_2s^2)=1+\sigma s+\alpha_2\sigma^2s^2+\alpha_3\sigma^3s^3
\end{gathered}
$$

上式は$s$に関する恒等式であるから，パラメータ$\sigma$と制御定数$k$，$f_0$が満たさなくてはならない連立方程式は係数比較法によって次となる。

$$
\left.
\begin{aligned}
\frac{h_0+f_0}{k}&=\sigma\quad\cdots\ (3)\\
\frac{h_1}{k}&=\alpha_2\sigma^2\quad\cdots\ (4)\\
\frac{h_2}{k}&=\alpha_3\sigma^3\quad\cdots\ (5)
\end{aligned}
\right\}\quad\text{（答）}
$$

### (3)

(4)式と(5)式から

$$
\sigma=\frac{\alpha_2h_2}{\alpha_3h_1}\quad\text{（答）}
$$

を得る。

### (4)

(4)式から

$$
k=\frac{h_1}{\alpha_2\sigma^2}\quad\text{（答）}
$$

を得る。

### (5)

(3)式から

$$
f_0=k\sigma-h_0\quad\text{（答）}
$$

を得る。
