---
title: "2018年度 電力・管理 問3 電力円線図と無効電力損失"
year: 2018
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["transmission","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 2・3・4・5ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2018年度の電験二種二次試験，電力・管理の問3。電力円線図と無効電力損失の問題と公式標準解答。"
---

## 問題

電力円線図と無効電力損失に関して，次の問に答えよ。ただし，計算には全て単位法を用いること。

### (1)

短距離の高圧送電線は，対地容量と線路抵抗を無視すると図のような等価回路で表現できる。送受電端の電圧の大きさがともに1.0 p.u.に保たれるとして，送電電力$P$，送電端無効電力$Q_{\mathrm{s}}$，受電端無効電力$Q_{\mathrm{r}}$はそれぞれどのように表されるか。送受電端電圧間の位相差$\delta$（受電端を基準とする）と送電線リアクタンス$X$を用いて表せ。ただし，無効電力は遅れを正とする。

### (2)

上記の場合に，送電端複素電力$\dot{S}_{\mathrm{s}}=P+\mathrm{j}Q_{\mathrm{s}}$及び受電端複素電力$\dot{S}_{\mathrm{r}}=P+\mathrm{j}Q_{\mathrm{r}}$が複素平面上で円を描くことを示せ。

### (3)

上で求めた二円はそれぞれ送電円，受電円と呼ばれており，一般に複素平面上に表された複素送電電力の線図を電力円線図と呼ぶ。送電線の亘長が2倍になり，$X$が2倍になっても引き続き同一の有効電力を送電する場合，$\delta$が大きく開くことを送電円を用いて説明せよ。

### (4)

(3)に記したように$X$を2倍にした送電線でも同一の有効電力を送電するとき，無効電力損失が$X$を2倍にする前と比べてどうなるかを送電円，受電円を用いて説明せよ。

### (5)

周波数50 Hz，作用インダクタンス1.3 mH/kmをもつ10 km一回線の送電線で300 MWを送電する場合について送電円，受電円を描き，$\sin\delta$と無効電力損失$Q_{\mathrm{s}}-Q_{\mathrm{r}}$を算出せよ。単位法は基準電圧66 kV，基準容量1000 MV・Aとし，$\pi=3.1416$とする。

![送受電端の電圧と電流，直列リアクタンスjXによる送電線の等価回路](/diagrams/questions/2018/2018-secondary-power-management-q03-fig01.png)

## 解答

### (1)

図より，送電線を流れる電流$\dot{I}_{\mathrm{s}}=\dot{I}_{\mathrm{r}}=\dot{I}$は受電端電圧を位相の基準にとると，

$$
\dot{I}=\frac{\dot{E}_{\mathrm{s}}-\dot{E}_{\mathrm{r}}}{\mathrm{j}X}
=\frac{\mathrm{e}^{\mathrm{j}\delta}-1}{\mathrm{j}X}
=\frac{\sin\delta}{X}+\mathrm{j}\frac{1-\cos\delta}{X}
$$

と表され，送電端複素電力$\dot{S}_{\mathrm{s}}$，受電端複素電力$\dot{S}_{\mathrm{r}}$は，

$$
\begin{aligned}
\dot{S}_{\mathrm{s}}&=P_{\mathrm{s}}+\mathrm{j}Q_{\mathrm{s}}=\dot{E}_{\mathrm{s}}\dot{I}^{*}
=\mathrm{e}^{\mathrm{j}\delta}\left(\frac{\sin\delta}{X}-\mathrm{j}\frac{1-\cos\delta}{X}\right)\\
&=\frac{\sin\delta}{X}+\mathrm{j}\frac{1-\cos\delta}{X}\\
\dot{S}_{\mathrm{r}}&=P_{\mathrm{r}}+\mathrm{j}Q_{\mathrm{r}}=\dot{E}_{\mathrm{r}}\dot{I}^{*}
=\frac{\sin\delta}{X}-\mathrm{j}\frac{1-\cos\delta}{X}
\end{aligned}
$$

であるから，次のようになる。

$$
P=P_{\mathrm{s}}=P_{\mathrm{r}}=\frac{\sin\delta}{X},\qquad
Q_{\mathrm{s}}=\frac{1-\cos\delta}{X},\qquad
Q_{\mathrm{r}}=\frac{\cos\delta-1}{X}\quad\text{（答）}
$$

### (2)

小問(1)で得られた式より以下が成立する。

$$
XP=\sin\delta,\qquad1-XQ_{\mathrm{s}}=\cos\delta,\qquad1+XQ_{\mathrm{r}}=\cos\delta
$$

三角関数について成り立つ恒等式より，

$$
\begin{aligned}
(XP)^2+(1-XQ_{\mathrm{s}})^2&=\sin^2\delta+\cos^2\delta=1\\
(XP)^2+(1+XQ_{\mathrm{r}})^2&=\sin^2\delta+\cos^2\delta=1
\end{aligned}
$$

よって，

$$
P^2+\left(Q_{\mathrm{s}}-\frac{1}{X}\right)^2=\frac{1}{X^2},\qquad
P^2+\left(Q_{\mathrm{r}}+\frac{1}{X}\right)^2=\frac{1}{X^2}
$$

が成り立つ。これらはともに半径$\dfrac{1}{X}$の円を表している。なお，それらの中心は前者では$\left(0,\dfrac{1}{X}\right)$，後者では$\left(0,-\dfrac{1}{X}\right)$である。

### (3)

$X$が2倍になったときの送電円を，$X$が元の値のときの送電円とともに描くと次のようになる。円の中心の$Y$座標は$\dfrac{1}{X}$で，前者が点線，後者が実線の円に対応している。両者同一の送電電力$P$を送電するので，これら円と垂直線$P=$一定との交点が動作点に対応するが，このうちの上側の交点は位相差$\delta$が90度を超える不安定な平衡点なので採用せず，下側（$Q$の小さい側）の交点が実際の動作点である。$X$が2倍の小さな円において$\delta$が大きく開いていることは図より明らかである。

![公式解答 短距離時と長距離時の送電円。同一電力の動作点と位相差の比較](/diagrams/questions/2018/2018-secondary-power-management-q03-answer-fig01.png)

### (4)

小問(3)で述べたように二つの交点のうち$P$軸（水平軸）に近いほうが動作点になる。よって，送電円の動作点と受電円の動作点の間の$Q$軸に平行な距離は，$X$が大きい場合に極めて大きくなる。すなわち$X$が2倍のとき無効電力損失は元に比べて大きくなる。

### (5)

$X$の値はSI単位系で，$X=2\pi\times50\times13\times10^{-3}=4.08408\ \Omega$であり，インピーダンスの基準値は，

$$
Z_{\mathrm{base}}=\frac{66^2}{1000}=4.356\ \Omega
$$

であるから，単位法では，

$$
X=\frac{4.08408}{4.356}=0.937576\ \mathrm{p.u.}
$$

これを用いて送電円の中心の$Y$座標を計算すると，

$$
\frac{1}{X}=\frac{1}{0.937576}=1.066580
$$

であるので，送電円は半径1.067を持ち水平軸に接する円である。送電電力は単位法で0.3 p.u.であるから垂直軸から右に0.3の位置に垂直一点鎖線を引いて表すことができ，送電円を水平軸対称に折り返した受電円とともに示すと下のとおり。動作点は円と直線の交点で水平軸に近い方であるから$\sin\delta$（$\delta$は電圧位相差）は，

$$
\frac{0.3}{1.066580}=0.281273\quad\longrightarrow\quad0.281\quad\text{（答）}
$$

また，送電端無効電力は，

$$
1.066580-\sqrt{1.066580^2-0.3^2}=0.043060\ \mathrm{p.u.}
$$

なので，無効電力損失は，その2倍で0.0861 p.u.である。…（答）

![公式解答 計算例の送電円と受電円。半径1.067，送電電力0.3 p.u.の動作点](/diagrams/questions/2018/2018-secondary-power-management-q03-answer-fig02.png)
