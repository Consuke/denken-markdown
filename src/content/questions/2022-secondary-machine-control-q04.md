---
title: "2022年度 機械・制御 問4 制御系の安定性と定常偏差"
year: 2022
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=11"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 11・12・13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2022年度の電験二種二次試験，機械・制御の問4。制御系の安定性と定常偏差の問題と公式標準解答。"
---

## 問題

図に示すフィードバック制御系について，次の問に答えよ。ただし，$R(s)$は目標値，$Y(s)$は制御量，$E(s)$は制御偏差であり，時間信号$r(t)$，$y(t)$，$e(t)$をそれぞれラプラス変換したものである。

### (1)

フィードバック制御系の特性方程式を求めよ。

### (2)

フィードバック制御系を安定とする$K$の条件を求めよ。

### (3)

目標値$R(s)$から制御偏差$E(s)$までの伝達関数$T_{\mathrm{ER}}(s)$を求めよ。

### (4)

$K=2$とおく。目標値$r(t)$を傾き2でランプ変化させたときの定常速度偏差$e_{\mathrm{v}}$を求めよ。

### (5)

$K=2$とおく。正弦関数$2\sin t$で表される目標値$r(t)$に対し，定常状態での制御偏差$e(t)$は$B\sin(t+\theta)$で表される正弦関数となった。$B$の値を求めよ。

![積分器K/sと制御対象100/((s+1)(s+40))を直列接続した単位負帰還制御系](/diagrams/questions/2022/2022-secondary-machine-control-q04-fig01.png)

## 解答

### (1)

図から，フィードバック制御系の特性方程式は，

$$
1+\frac{100K}{s(s+1)(s+40)}=0
$$

となるから，分母を払って整理して，

$$
s^3+41s^2+40s+100K=0\tag{1}
$$

を得る。…（答）

### (2)

ラウス・フルビッツの安定判別法を適用する。①式についてラウス表を作成すれば次のようになる。

$$
\begin{array}{c|cc}
s^3\text{行}&1&40\\
s^2\text{行}&41&100K\\
s^1\text{行}&\dfrac{1640-100K}{41}&0\\
s^0\text{行}&100K&
\end{array}
$$

最左端の列の全ての要素が正であることが，制御系が安定となるための必要十分条件である。したがって，$K$の条件として，$0<K<16.4$ …（答）を得る。

#### (2)の別解

①式についてフルビッツの行列式を作成すれば次のようになる。

$$
H_1=41,\qquad
H_2=\begin{vmatrix}41&100K\\1&40\end{vmatrix},\qquad
H_3=\begin{vmatrix}41&100K&0\\1&40&0\\0&41&100K\end{vmatrix}
$$

行列式$H_1$，$H_2$，$H_3$の全てが正であることが，制御系が安定となるための必要十分条件である。したがって，

$$
H_2=\begin{vmatrix}41&100K\\1&40\end{vmatrix}=1640-100K>0\tag{2}
$$

$$
\begin{aligned}
H_3&=\begin{vmatrix}41&100K&0\\1&40&0\\0&41&100K\end{vmatrix}
=1640\times100K-100K\times100K\\
&=(1640-100K)\times100K>0
\end{aligned}\tag{3}
$$

を満たす$K$の条件として，$0<K<16.4$ …（答）を得る。

### (3)

目標値$R(s)$から制御偏差$E(s)$までの伝達関数$T_{\mathrm{ER}}(s)$は，

$$
T_{\mathrm{ER}}(s)=\frac{E(s)}{R(s)}=\frac{1}{1+\dfrac{100K}{s(s+1)(s+40)}}
=\frac{s(s+1)(s+40)}{s(s+1)(s+40)+100K}\tag{4}
$$

となる。…（答）

#### (3)の別解

図から，

$$
E(s)=R(s)-Y(s)\tag{5}
$$

$$
Y(s)=\frac{100K}{s(s+1)(s+40)}E(s)\tag{6}
$$

が成り立つ。

⑥式を⑤式に代入すると，

$$
E(s)=R(s)-\frac{100K}{s(s+1)(s+40)}E(s)
$$

$$
\therefore R(s)=\left(1+\frac{100K}{s(s+1)(s+40)}\right)E(s)
=\frac{s(s+1)(s+40)+100K}{s(s+1)(s+40)}E(s)
$$

と書くことができるので，

$$
T_{\mathrm{ER}}(s)=\frac{E(s)}{R(s)}=\frac{s(s+1)(s+40)}{s(s+1)(s+40)+100K}\tag{7}
$$

となる。…（答）

### (4)

傾きが2のランプ関数は$r(t)=2t$，$t\geqq0$であるから，これをラプラス変換すると$R(s)=\dfrac{2}{s^2}$となる。定常速度偏差$e_{\mathrm{v}}$は，$K=2$とおいた④式にラプラス変換の最終値の定理を適用して次のように求めることができる。

$$
\begin{aligned}
e_{\mathrm{v}}&=\lim_{s\to0}sE(s)\\
&=\lim_{s\to0}\left(s\times\frac{s(s+1)(s+40)}{s(s+1)(s+40)+200}\times\frac{2}{s^2}\right)\\
&=\lim_{s\to0}\frac{2(s+1)(s+40)}{s(s+1)(s+40)+200}=\frac{2\times40}{200}=0.4
\end{aligned}\tag{8}
$$

…（答）

### (5)

④式を，

$$
E(s)=T_{\mathrm{ER}}(s)R(s)=\frac{s(s+1)(s+40)}{s(s+1)(s+40)+100K}R(s)\tag{9}
$$

と書くと，目標値$r(t)$を入力信号，制御偏差$e(t)$を出力信号とする伝達関数$T_{\mathrm{ER}}(s)$が⑨式で与えられていることになる。題意から，入力信号$r(t)$は正弦関数なので，出力信号の正弦関数の振幅は入力信号に比べて$|T_{\mathrm{ER}}(\mathrm{j}\omega)|$倍になる。

そこで，⑨式において$s=\mathrm{j}\omega$とおいた周波数伝達関数$T_{\mathrm{ER}}(\mathrm{j}\omega)$の絶対値を$\omega=1$について求める。

⑨式に$K=2$，$s=\mathrm{j}$を代入すると次のようになる。

$$
T_{\mathrm{ER}}(\mathrm{j})=\frac{\mathrm{j}(\mathrm{j}+1)(\mathrm{j}+40)}{\mathrm{j}(\mathrm{j}+1)(\mathrm{j}+40)+200}
=\frac{-41+\mathrm{j}39}{159+\mathrm{j}39}
$$

上式の絶対値を計算して，

$$
|T_{\mathrm{ER}}(\mathrm{j})|=\left|\frac{-41+\mathrm{j}39}{159+\mathrm{j}39}\right|
=\frac{\sqrt{41^2+39^2}}{\sqrt{159^2+39^2}}=\frac{\sqrt{3202}}{\sqrt{26802}}=0.34564
$$

となる。題意より入力信号の振幅は2であるから，$B=0.691$となる。…（答）
