---
title: "2016年度 電力・管理 問3 電線のたるみの導出"
year: 2016
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 5-6ページと公式標準解答PDF 3ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，電力・管理の問3。電線のたるみの導出の問題と公式標準解答。"
---

## 問題

電線のたるみに関して，次の問に答えよ。

図は電線のたるみを表している。点A，Bは同一水平面上にある二つの支持点であり，その間の距離を$S$ [m]，ここからたるみ$D$ [m]だけ下がったところにある最下点Oを座標軸の原点とした。電線の形状は二次関数で表しても誤差は小さいことが知られているので，縦軸方向の変数$Y$ [m]，横軸方向の変数$X$ [m]，係数$a$ [m]を用いて，

$$
Y=\frac{X^2}{2a}\quad\cdots\ (1)
$$

と表すことにする。支持点における電線の張力を$T$ [N]，電線の単位長さ当たりの質量を$W$ [kg/m]として，たるみ$D$に関する(2)式を導出したい。$g$ [m/s$^2$]は重力加速度を意味している。

$$
D=\frac{WgS^2}{8T}\quad\cdots\ (2)
$$

![電線のたるみ。同一水平面上の支持点A，B（径間S），最下点Oを原点とするX-Y座標，たるみD，支持点での電線と水平線のなす角θ](/diagrams/questions/2016/2016-secondary-power-management-q03-fig01.png)

### (1)

(1)式を基に支持点Bにおける電線の傾きを$a$と$S$を用いて表せ。

### (2)

支持点における張力の垂直分力が電線自重の半分に等しいことを用いて$a$を$T$と$W$で表せ。ただし，支持点での電線が水平直線となす角$\theta$は小さいため，$\tan\theta\fallingdotseq\sin\theta$と近似すること。また，電線の長さは$S$と等しいものとする。

### (3)

たるみ$D$は支持点の$Y$の値に他ならない。これに注意して上記の(2)式を導出せよ。

## 解答

### (1)

支持点Bで$X=\dfrac{S}{2}$であるから，この点での電線の傾き

$$
\frac{\mathrm{d}Y}{\mathrm{d}X}=\frac{X}{a}
$$

に$X=\dfrac{S}{2}$を代入して，

$$
\frac{\mathrm{d}Y}{\mathrm{d}X}=\frac{S}{2a}\quad\text{（答）}
$$

### (2)

支持点の張力の垂直分力は，問題文中で与えられている近似式より，

$$
T\sin\theta=T\tan\theta=T\times\frac{S}{2a}
$$

これが長さ$S$の電線全体の半分の重さに等しくなければならないので，

$$
T\times\frac{S}{2a}=\frac{SWg}{2}
$$

これを解くと，

$$
a=\frac{T}{Wg}\quad\text{（答）}
$$

### (3)

(1)式で$X=\dfrac{S}{2}$とすると，

$$
Y=\frac{S^2}{8a}
$$

前問で得られた$a$をここに代入すると

$$
Y=\frac{WgS^2}{8T}
$$

以上で(2)式が得られた。
