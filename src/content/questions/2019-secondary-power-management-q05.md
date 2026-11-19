---
title: "2019年度 電力・管理 問5 無効電力による電圧変動と分路リアクトル"
year: 2019
examStage: "secondary"
subject: "power-management"
questionNumber: 5
topics: ["power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q01.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=7"
sourceNote: "ユーザー提供の問題PDF 9・10ページと公式標準解答PDF 7・8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2019年度の電験二種二次試験，電力・管理の問5。無効電力による電圧変動と分路リアクトルの問題と公式標準解答。"
---

## 問題

電力系統における無効電力の変化による電圧変動に関し，次の問に答えよ。

なお，各要素と単位は次のとおりとする。

有効電力$P$：[W]，無効電力$Q$：[var]，送電端電圧$V_{\mathrm{s}}$及び受電端電圧$V_{\mathrm{r}}$：[V]，抵抗$r$及びリアクタンス$x$：[$\Omega$]

### (1)

図1は，電源から負荷（遅れ力率）に電力$P+\mathrm{j}Q$を送電している状態を示している。次のa）及びb）について答えよ。

- a）受電端電圧$V_{\mathrm{r}}$を基準として，1相分の電圧，電流の関係をベクトル図で表せ。ただし，受電端電圧$V_{\mathrm{r}}$及び送電端電圧$V_{\mathrm{s}}$は線間電圧とする。
- b）負荷の有効電力$P$，抵抗$r$及びリアクタンス$x$は一定とし，$V_{\mathrm{s}}$と$V_{\mathrm{r}}$の位相差は近似的に零であるとみなした場合，無効電力の変化$\Delta Q$と，それによる受電端電圧の変化$\Delta v$とは，①式の関係があることを証明せよ。ただし，送電端電圧$V_{\mathrm{s}}$は一定とし，受電端電圧$V_{\mathrm{r}}$の変化は小さく，また，$r\ll x$とする。

$$
\Delta v\propto-x\cdot\Delta Q\tag{1}
$$

![図1 遅れ力率の負荷に電源から抵抗r・リアクタンスjxを介して電力P+jQを送電する回路](/diagrams/questions/2019/2019-secondary-power-management-q05-fig01.png)

### (2)

図2は，電源1（商用電源）に電源2（分散電源）が接続された電力系統を示している。22 kV母線に分路リアクトル（ShR）を投入したとき，22 kV母線の電圧変動率を2%以下にするためには，投入する容量$Q_{\mathrm{R}}$は最大何Mvarとすべきか。1 Mvar未満は四捨五入して答えよ。ただし，①式が成立するものとし，22 kV母線の電圧$V_{22}$の送電端電圧$V_{\mathrm{s}}$に対する電圧変化を$v$とすると，22 kV母線の電圧変動率$\%v_{22}$は次式で表されるものとする。

$$
\%v_{22}\ [\%]=\frac{v}{V_{22}}\times100\ [\%]
$$

また，系統各部のリアクタンスは10 MV・A基準の値とし，電源電圧は変化しないものとする。

![図2 154 kV母線と22 kV母線，2電源，変圧器，分路リアクトルと各%リアクタンス](/diagrams/questions/2019/2019-secondary-power-management-q05-fig02.png)

## 解答

### (1)

#### a

$V_{\mathrm{s}}$，$V_{\mathrm{r}}$を線間電圧，負荷が遅れ力率のとき，1相分の電圧，電流のベクトルは次の図のように表される。

![公式解答 受電端電圧を基準とした1相分の電圧・電流ベクトル図](/diagrams/questions/2019/2019-secondary-power-management-q05-answer-fig01.png)

#### b

ベクトル図より，

$$
\frac{V_{\mathrm{s}}}{\sqrt{3}}=\frac{V_{\mathrm{r}}}{\sqrt{3}}+(rI\cos\theta+xI\sin\theta)+\mathrm{j}(xI\cos\theta-rI\sin\theta)
$$

題意より，$\mathrm{j}(xI\cos\theta-rI\sin\theta)=0$

よって，

$$
\frac{V_{\mathrm{s}}}{\sqrt{3}}=\frac{V_{\mathrm{r}}}{\sqrt{3}}+(rI\cos\theta+xI\sin\theta)
$$

受電端電圧の変化を$v$とすると，

$$
v=-\sqrt{3}(rI\cos\theta+xI\sin\theta)
$$

三相負荷の有効電力$P$，無効電力$Q$は，次式で表される。

$$
P=\sqrt{3}V_{\mathrm{r}}I\cos\theta,\qquad Q=\sqrt{3}V_{\mathrm{r}}I\sin\theta
$$

したがって，

$$
v=-\frac{r\cdot\sqrt{3}V_{\mathrm{r}}I\cos\theta+x\cdot\sqrt{3}V_{\mathrm{r}}I\sin\theta}{V_{\mathrm{r}}}
=-\frac{rP+xQ}{V_{\mathrm{r}}}
$$

ここで題意より，$P$，$r$，$x$が一定，$r\ll x$であることから，上式は次のように表すことができる。

$$
v=-\frac{x\cdot Q}{V_{\mathrm{r}}}
$$

したがって，無効電力の変化$\Delta Q$と受電端の電圧変化$\Delta v$は$\Delta v\propto-x\cdot\Delta Q$の関係が成立する。

### (2)

図2より，22 kV母線から電源側を見たリアクタンス$\%x_{22}$は，

$$
\%x_{22}=\frac{(\%x_1+\%x_{\mathrm{t}})\times\%x_2}{\%x_1+\%x_{\mathrm{t}}+\%x_2}
=\frac{(0.3+2.0)\times1.8}{0.3+2.0+1.8}=1.0098\%
$$

小問(1)bより，22 kV母線の電圧変動率$\%v_{22}$の大きさを絶対値で表記すると，次式で表される。

$$
|\%v_{22}|=\frac{|v|}{V_{22}}\times100=\frac{x_{22}\cdot Q_{\mathrm{R}}}{V_{22}^2}\times100
$$

ここで，基準容量を$P_{\mathrm{B}}$とおくと，

$$
x_{22}=\frac{V_{22}^2\cdot\%x_{22}}{P_{\mathrm{B}}\times100}
$$

したがって，

$$
|\%v_{22}|=\frac{\%x_{22}\cdot Q_{\mathrm{R}}}{P_{\mathrm{B}}}
$$

よって，22 kV母線の電圧変動率を2%以下にするためには，投入する分路リアクトルの最大容量$Q_{\mathrm{R}}$は，次式のように計算される。

$$
Q_{\mathrm{R}}=|\%v_{22}|\times\left(\frac{P_{\mathrm{B}}}{\%x_{22}}\right)
=2.0\%\times\frac{10\ \mathrm{MV\cdot A}}{1.0098\%}=19.806\ \mathrm{MV\cdot A}
$$

リアクトルの容量単位表記をMvarとし，1 Mvar未満を四捨五入すると，分路リアクトルの最大容量$Q_{\mathrm{R}}$は，20 Mvarとなる。…（答）

#### (2)の別解（絶対値表記をしないで計算した場合）

図2より，22 kV母線から電源側を見たリアクタンス$\%x_{22}$は，

$$
\%x_{22}=\frac{(\%x_1+\%x_{\mathrm{t}})\times\%x_2}{\%x_1+\%x_{\mathrm{t}}+\%x_2}
=\frac{(0.3+2.0)\times1.8}{0.3+2.0+1.8}=1.0098\%
$$

小問(1)bより，22 kV母線の電圧変動率$\%v_{22}$は，次式で表される。

$$
\%v_{22}=\frac{v}{V_{22}}\times100=-\frac{x_{22}\cdot Q_{\mathrm{R}}}{V_{22}^2}\times100
$$

ここで，基準容量を$P_{\mathrm{B}}$とおくと，

$$
x_{22}=\frac{V_{22}^2\cdot\%x_{22}}{P_{\mathrm{B}}\times100}
$$

したがって，

$$
\%v_{22}=-\frac{\%x_{22}\cdot Q_{\mathrm{R}}}{P_{\mathrm{B}}}
$$

よって，22 kV母線の電圧変動率を2%以下にするためには，投入する分路リアクトルの最大容量$Q_{\mathrm{R}}$は，次式のように計算される。

$$
Q_{\mathrm{R}}=-\%v_{22}\times\left(\frac{P_{\mathrm{B}}}{\%x_{22}}\right)
=-(-2.0\%)\times\frac{10\ \mathrm{MV\cdot A}}{1.0098\%}=19.806\ \mathrm{MV\cdot A}
$$

リアクトルの容量単位表記をMvarとし，1 Mvar未満を四捨五入すると，分路リアクトルの最大容量$Q_{\mathrm{R}}$は，20 Mvarとなる。…（答）
