---
title: "2018年度 機械・制御 問4 2自由度制御系とPI補償器"
year: 2018
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=14"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 14・15・16・17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2018年度の電験二種二次試験，機械・制御の問4。2自由度制御系とPI補償器の問題と公式標準解答。"
---

## 問題

図1のような2自由度制御系がある。ここで$G(s)$は制御対象，$C(s)$及び$F(s)$は補償器である。また，$R(s)$は目標値，$D(s)$は外乱，$Y(s)$は制御量，$E(s)$は制御偏差である。この制御系について，次の問に答えよ。

### (1)

図1に示すフィードバック補償器$C(s)$の係数$K_{\mathrm{P}}$及び$T_{\mathrm{I}}$の名称を答えよ。

### (2)

$K_{\mathrm{P}}=10$，$T_{\mathrm{I}}=0.1$のとき，$C(s)$の角周波数$\omega$ [rad/s]に対するゲイン特性の概形を答案用紙に印刷されている図2に折れ線近似で図示せよ。

### (3)

$R(s)=0$として，外乱$D(s)$から制御偏差$E(s)$までの閉ループ伝達関数を求めよ。

### (4)

上記小問(3)で求めた閉ループ伝達関数において，固有角周波数が5 rad/s，減衰係数が0.7となるように，$K_{\mathrm{P}}$と$T_{\mathrm{I}}$の値を定めよ。

### (5)

$D(s)=0$として，目標値$R(s)$から制御量$Y(s)$までの閉ループ伝達関数を$F(s)$，$C(s)$，$G(s)$を用いて求めよ。

### (6)

上記小問(3)で求めた閉ループ伝達関数は$F(s)$に依存しない。また，上記小問(5)で求めた閉ループ伝達関数は$C(s)$に依存しない。これは制御系にどんな特長をもたらすか答えよ。この性質を利用しているのが2自由度制御系である。

![図1 2自由度制御系。F(s)=1/(2s+1)，C(s)=KP(1+1/(TIs))，G(s)=1/(4s+1)](/diagrams/questions/2018/2018-secondary-machine-control-q04-fig01.png)

![図2 ゲイン特性を描くための対数周波数目盛とdB目盛](/diagrams/questions/2018/2018-secondary-machine-control-q04-fig02.png)

## 解答

### (1)

$K_{\mathrm{P}}$は比例ゲイン，$T_{\mathrm{I}}$は積分時間。…（答）

### (2)

補償器$C(s)$の伝達関数を通分してから積の形に変換すると

$$
C(s)=K_{\mathrm{P}}\frac{1+T_{\mathrm{I}}s}{T_{\mathrm{I}}s}
=K_{\mathrm{P}}\cdot\frac{1}{T_{\mathrm{I}}s}\cdot\frac{1+T_{\mathrm{I}}s}{1}
$$

であるから，これの周波数伝達関数は，

$$
C(\mathrm{j}\omega)=K_{\mathrm{P}}\cdot\frac{1}{\mathrm{j}T_{\mathrm{I}}\omega}\cdot\frac{1+\mathrm{j}T_{\mathrm{I}}\omega}{1}
$$

となる。まず，定数$K_{\mathrm{P}}$のゲイン特性は，

$$
20\log_{10}K_{\mathrm{P}}=20\log_{10}10=20\ \mathrm{dB}
$$

で一定値となる。また，周波数伝達関数$\dfrac{1}{\mathrm{j}T_{\mathrm{I}}\omega}$のゲイン特性は，勾配が$-20$ dB/decの直線であって，ゲインが0 dBとなるときの角周波数$\omega$は，$\dfrac{1}{T_{\mathrm{I}}}=\dfrac{1}{0.1}=10$ rad/sと求められる。図aに$K_{\mathrm{P}}$と$\dfrac{1}{\mathrm{j}T_{\mathrm{I}}\omega}$のゲイン特性を示す。

![公式解答 図a。定数ゲイン20 dBと積分器の傾き-20 dB/dec](/diagrams/questions/2018/2018-secondary-machine-control-q04-answer-fig01.png)

周波数伝達関数$\dfrac{1+\mathrm{j}T_{\mathrm{I}}\omega}{1}$については，$\omega=\dfrac{1}{T_{\mathrm{I}}}=10$ rad/sが折れ点角周波数であり，$\omega<10$の領域ではゲインは0 dB，$\omega>10$の領域では20 dB/decの勾配をもつ直線に近似できる（図bを参照）。

![公式解答 図b。折れ点角周波数10 rad/s以降の傾き20 dB/dec](/diagrams/questions/2018/2018-secondary-machine-control-q04-answer-fig02.png)

図aと図bのゲイン特性を図面上で加え合わせることで，補償器$C(s)$のゲイン特性は図cのようになる。

![公式解答 図c。10 rad/s未満は傾き-20 dB/dec，以降は20 dB一定](/diagrams/questions/2018/2018-secondary-machine-control-q04-answer-fig03.png)

### (3)

図1において，$D(s)$から$E(s)$までの閉ループ伝達関数は，次のように計算される。

$$
\frac{E(s)}{D(s)}=\frac{-G(s)}{1+C(s)G(s)}
=\frac{-\dfrac{1}{4s+1}}{1+\dfrac{K_{\mathrm{P}}(T_{\mathrm{I}}s+1)}{T_{\mathrm{I}}s(4s+1)}}
=\frac{-T_{\mathrm{I}}s}{4T_{\mathrm{I}}s^2+T_{\mathrm{I}}(K_{\mathrm{P}}+1)s+K_{\mathrm{P}}}\tag{1}
$$

…（答）

### (4)

小問(3)で求めた閉ループ伝達関数①の分母多項式は，

$$
s^2+\frac{K_{\mathrm{P}}+1}{4}s+\frac{K_{\mathrm{P}}}{4T_{\mathrm{I}}}\tag{2}
$$

である。また，固有角周波数$\omega_{\mathrm{n}}=5$ rad/s，減衰係数$\zeta=0.7$となる2次系の分母多項式は，

$$
s^2+2\zeta\omega_{\mathrm{n}}s+\omega_{\mathrm{n}}^2=s^2+7s+25\tag{3}
$$

となるので，②式と③式の係数を比較することで，

$$
K_{\mathrm{P}}=27,\qquad T_{\mathrm{I}}=0.27\quad\text{（答）}
$$

と求められる。

### (5)

図1のブロック線図より次の関係式が成り立つ。

$$
\left\{[F(s)R(s)-Y(s)]C(s)+\frac{F(s)}{G(s)}R(s)\right\}G(s)=Y(s)
$$

これを変形する。

$$
\begin{aligned}
\left[F(s)R(s)C(s)-Y(s)C(s)+\frac{F(s)}{G(s)}R(s)\right]G(s)&=Y(s)\\
F(s)R(s)C(s)G(s)-Y(s)C(s)G(s)+F(s)R(s)&=Y(s)\\
[F(s)+F(s)C(s)G(s)]R(s)&=[1+C(s)G(s)]Y(s)
\end{aligned}
$$

$$
\therefore\quad\frac{Y(s)}{R(s)}=F(s)\quad\text{（答）}
$$

すなわち，$G(s)$及び$C(s)$の形によらず，$R(s)$から$Y(s)$までの目標値応答特性は$F(s)$となる。

### (6)

目標値応答特性は$F(s)$で指定することができる。一方，外乱に対するフィードバック制御特性は$C(s)$で指定できる。このように，二つの補償器$F(s)$と$C(s)$を用いて，目標値応答特性とフィードバック制御特性を独立に指定できる特徴がある。
