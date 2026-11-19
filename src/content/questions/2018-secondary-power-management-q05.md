---
title: "2018年度 電力・管理 問5 進相コンデンサと高調波共振"
year: 2018
examStage: "secondary"
subject: "power-management"
questionNumber: 5
topics: ["harmonics","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=7"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 7・8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2018年度の電験二種二次試験，電力・管理の問5。進相コンデンサと高調波共振の問題と公式標準解答。"
---

## 問題

図は系統電源に接続された自家用電気設備の単線結線図である。変圧器の2次側母線には高調波を発生する負荷設備と力率改善用の直列リアクトル付進相コンデンサ設備が設置されている。$X_{\mathrm{T}}$，$X_{\mathrm{L}}$，$X_{\mathrm{C}}$は，それぞれ変圧器，直列リアクトル，進相コンデンサの基本波におけるリアクタンスの大きさ（$\Omega$値）である。また，電流$I_{\mathrm{H}}$，$I_{\mathrm{S}}$，$I_{\mathrm{C}}$は，それぞれ高調波発生負荷からの高調波電流，系統電源側に流出する高調波電流，進相コンデンサ設備に流入する高調波電流とする。このとき，次の問に答えよ。ただし，系統電源側のインピーダンス及び変圧器の抵抗分は無視するものとする。

### (1)

$n$次高調波電流源を電源とする高調波等価回路を描くとともに，$I_{\mathrm{Hn}}$，$I_{\mathrm{Sn}}$，$I_{\mathrm{Cn}}$それぞれに対し，電流の方向を矢印で示せ。ただし，$n$次高調波電流源の電流を$I_{\mathrm{Hn}}$，系統電源側に流出する$n$次高調波電流を$I_{\mathrm{Sn}}$，進相コンデンサ設備に流入する$n$次高調波電流を$I_{\mathrm{Cn}}$とする。

### (2)

(1)の$n$次高調波等価回路において，$n$次高調波電流源の電流$I_{\mathrm{Hn}}$と各部のリアクタンスの大きさを用い，進相コンデンサ設備に流入する$n$次高調波電流$I_{\mathrm{Cn}}$を表す式を示せ。

### (3)

$I_{\mathrm{Cn}}$を表す式において，回路で共振を起こす条件式を示せ。

### (4)

$I_{\mathrm{Cn}}$を表す式において，進相コンデンサ設備に流入する$n$次高調波電流が，高調波発生源の電流よりも大きくならないようにするための条件式を示せ。

$n=5$（第5高調波）の場合，直列リアクトルのリアクタンスの大きさは進相コンデンサのリアクタンスの大きさの何[%]以上であることが必要か示せ。

### (5)

6%直列リアクトル付進相コンデンサ設備の場合，高調波発生源に第3高調波が多く含まれていた場合，進相コンデンサの容量によっては共振状態となり，第3高調波電流が異常に増大する場合がある。このとき，進相コンデンサのリアクタンスの大きさ$X_{\mathrm{C}}$ [$\Omega$]と変圧器のリアクタンスの大きさ$X_{\mathrm{T}}$ [$\Omega$]の関係式を示せ。また，進相コンデンサ容量は変圧器容量の何[%]か示せ。

変圧器の容量を$P_{\mathrm{T}}$ [kV・A]，変圧器のパーセントリアクタンス$\%X_{\mathrm{T}}$を7.5%（自己容量基準），進相コンデンサ容量を$Q_{\mathrm{C}}$ [kvar]として計算せよ。

![系統電源・変圧器・高調波発生負荷・直列リアクトル付進相コンデンサ設備の結線と電流](/diagrams/questions/2018/2018-secondary-power-management-q05-fig01.png)

## 解答

### (1)

![公式解答 高調波発生源を電源とするn次高調波等価回路。変圧器と直列リアクトル・コンデンサへの分流方向](/diagrams/questions/2018/2018-secondary-power-management-q05-answer-fig01.png)

### (2)

$n$次高調波等価回路より，

$$
I_{\mathrm{Cn}}=\frac{nX_{\mathrm{T}}}{nX_{\mathrm{T}}+\left(nX_{\mathrm{L}}-\dfrac{X_{\mathrm{C}}}{n}\right)}\times I_{\mathrm{Hn}}\quad\text{（答）}
$$

### (3)

$I_{\mathrm{Cn}}$の式において，共振を起こし電流が異常に増大するおそれがあるのは，分母$=0$のときである。

共振を起こす条件式は，

$$
nX_{\mathrm{T}}+\left(nX_{\mathrm{L}}-\frac{X_{\mathrm{C}}}{n}\right)=0\quad\text{（答）}
$$

### (4)

$I_{\mathrm{Cn}}$の式において，進相コンデンサ設備に流入する高調波電流が，高調波発生源の電流よりも大きくならないためには，次式が成立することである。

条件式は，

$$
nX_{\mathrm{L}}-\frac{X_{\mathrm{C}}}{n}\geqq0\quad\text{（答）}
$$

$n=5$のとき，

$$
X_{\mathrm{L}}\geqq\frac{X_{\mathrm{C}}}{n^2}=\frac{X_{\mathrm{C}}}{25}=0.04X_{\mathrm{C}}
\quad\longrightarrow\quad4.00\%\text{以上}\quad\text{（答）}
$$

### (5)

6%直列リアクトル付のとき，$X_{\mathrm{L}}=0.06X_{\mathrm{C}}$

高調波発生源からの第3高調波電流を$I_{\mathrm{H3}}$とすると，進相コンデンサ設備に流入する第3高調波電流$I_{\mathrm{C3}}$は，

$$
\begin{aligned}
I_{\mathrm{C3}}&=\frac{3X_{\mathrm{T}}}{3X_{\mathrm{T}}+\left(3\times0.06X_{\mathrm{C}}-\dfrac{X_{\mathrm{C}}}{3}\right)}\times I_{\mathrm{H3}}\\
&=\frac{3X_{\mathrm{T}}}{3X_{\mathrm{T}}-\dfrac{0.46}{3}X_{\mathrm{C}}}\times I_{\mathrm{H3}}
\end{aligned}
$$

共振状態となるのは，$3X_{\mathrm{T}}-\dfrac{0.46}{3}X_{\mathrm{C}}=0$すなわち，$X_{\mathrm{C}}=\dfrac{9}{0.46}X_{\mathrm{T}}$のときである。…（答）

ここで，母線の電圧を$V$ [kV]，進相コンデンサ設備に流入する電流を$I_{\mathrm{C}}$ [A]とおくと，進相コンデンサの容量$Q_{\mathrm{C}}$ [kvar]とリアクタンス$X_{\mathrm{C}}$ [$\Omega$]は，次の関係式が成立する。

$$
I_{\mathrm{C}}=\frac{V}{\sqrt{3}}\times\frac{10^3}{X_{\mathrm{C}}}\ [\mathrm{A}]
$$

$$
Q_{\mathrm{C}}=\sqrt{3}\times V\times I_{\mathrm{C}}=\sqrt{3}\times V\times\frac{V}{\sqrt{3}}\times\frac{10^3}{X_{\mathrm{C}}}
=\frac{V^2\times10^3}{X_{\mathrm{C}}}
$$

また，変圧器に流れる電流を$I_{\mathrm{S}}$ [A]とおくと，変圧器の容量$P_{\mathrm{T}}$ [kV・A]，リアクタンス$X_{\mathrm{T}}$ [$\Omega$]，パーセントリアクタンス$\%X_{\mathrm{T}}$ [%]は，次の関係式が成立する。

$$
I_{\mathrm{S}}=\frac{P_{\mathrm{T}}}{\sqrt{3}\times V}\ [\mathrm{A}]
$$

$$
\begin{aligned}
\%X_{\mathrm{T}}&=\frac{\sqrt{3}\times I_{\mathrm{S}}\times X_{\mathrm{T}}\times10^{-3}}{V}\times100\\
&=\frac{\sqrt{3}\times\dfrac{P_{\mathrm{T}}}{\sqrt{3}\times V}\times X_{\mathrm{T}}\times10^{-3}}{V}\times100
=\frac{P_{\mathrm{T}}\times X_{\mathrm{T}}}{10\times V^2}
\end{aligned}
$$

よって，

$$
X_{\mathrm{T}}=\frac{10\times V^2\times\%X_{\mathrm{T}}}{P_{\mathrm{T}}}
$$

したがって，

$$
Q_{\mathrm{C}}=\frac{V^2\times10^3}{\dfrac{9}{0.46}\times\dfrac{10\times V^2\times7.5}{P_{\mathrm{T}}}}
=\frac{0.46\times10^2\times P_{\mathrm{T}}}{9\times7.5}=0.68148P_{\mathrm{T}}
\quad\longrightarrow\quad68.1\%\quad\text{（答）}
$$

#### 別解

JIS C 4902-1:2010 高圧及び特別高圧進相コンデンサ設備及び付属機器 第1部：コンデンサの規程に則り，進相コンデンサの電圧を$\dfrac{V}{1-\dfrac{6}{100}}=\dfrac{V}{0.94}$に置き換えて計算すると，

$$
Q_{\mathrm{C}}=0.77125P_{\mathrm{T}}\quad\longrightarrow\quad77.1\%\quad\text{（答）}
$$
