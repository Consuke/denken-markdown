---
title: "2020年度 機械・制御 問4 フィードバック補償と定常速度偏差"
year: 2020
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control","feedback"]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf#page=15"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 15・16・17ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2020年度の電験二種二次試験，機械・制御の問4。フィードバック補償と定常速度偏差の問題と公式標準解答。"
---

## 問題

図のようなフィードバック制御系について，次の問に答えよ。ただし，$R(s)$は目標値，$D(s)$は外乱，$U(s)$は操作量，$Y(s)$は制御量，$E(s)$は偏差とする。外乱$D(s)$の時間関数は次に示すランプ関数であり，

$$
d(t)=\begin{cases}2t&(t\geqq0)\\0&(t<0)\end{cases}
$$

とする。

### (1)

$R(s)=0$，$C(s)=K>0$のとき，外乱$D(s)$による定常速度偏差$e_{\mathrm{v}}$を求めよ。

### (2)

$C(s)=K>0$のとき，閉ループ系の安定性の指標の一つである減衰係数$\zeta$を0.8に設定するための$K$の値を求めよ。

### (3)

$R(s)=0$，$C(s)=A\cdot\dfrac{s+1}{0.1s+1}$（$A>0$）の場合について，外乱$D(s)$による定常速度偏差$e_{\mathrm{v}}$を求めよ。

### (4)

上記(3)の$C(s)$を用いた閉ループ系の減衰係数$\zeta$が0.8になるような$A$の値を求めよ。

### (5)

上記(2)と上記(4)の場合，それぞれにおいて閉ループ系の固有角周波数$\omega_{\mathrm{n}}$を求めよ。その結果，上記(2)の場合に比べて上記(4)の場合は，応答が何倍速くなるかを示せ。

### (6)

上記(2)と上記(4)の場合，それぞれにおいて外乱$D(s)$に対する定常速度偏差$e_{\mathrm{v}}$を求めよ。その結果，上記(2)の場合に比べて上記(4)の場合は，定常速度偏差が何倍になるかを示せ。

![制御対象1/(s(s+1))の出力に外乱D(s)を加える単位負帰還制御系](/diagrams/questions/2020/2020-secondary-machine-control-q04-fig01.png)

## 解答

### (1)

図のブロック線図から次式が成り立つ。

$$
E(s)=-\left[\frac{K}{s(s+1)}E(s)+D(s)\right]
$$

これを$E(s)$について解いて，

$$
E(s)=\frac{-1}{1+\dfrac{K}{s(s+1)}}\cdot D(s)=\frac{-s(s+1)}{s^2+s+K}\cdot\frac{2}{s^2}
$$

となる。定常速度偏差は次のように求められる。

$$
e_{\mathrm{v}}=\lim_{t\to\infty}e(t)=\lim_{s\to0}sE(s)
=\lim_{s\to0}s\cdot\frac{-s(s+1)}{s^2+s+K}\cdot\frac{2}{s^2}=-\frac{2}{K}\quad\text{（答）}
$$

### (2)

$R(s)$から$Y(s)$までの閉ループ伝達関数を求める。

$$
\frac{Y(s)}{R(s)}=\frac{\dfrac{K}{s(s+1)}}{1+\dfrac{K}{s(s+1)}}=\frac{K}{s^2+s+K}\tag{1}
$$

また，2次遅れ系の標準形は，

$$
\frac{\omega_{\mathrm{n}}^2}{s^2+2\zeta\omega_{\mathrm{n}}s+\omega_{\mathrm{n}}^2}\tag{2}
$$

なので，①式と②式を比較することで，

$$
\omega_{\mathrm{n}}=\sqrt{K}\tag{3}
$$

$$
\zeta=\frac{1}{2\omega_{\mathrm{n}}}=\frac{1}{2\sqrt{K}}\tag{4}
$$

を得る。④式から，$\zeta=0.8$を与える$K$は，

$$
K=\frac{1}{(2\zeta)^2}=\frac{1}{1.6^2}=\frac{1}{2.56}=0.39063
\quad\longrightarrow\quad0.391\quad\text{（答）}
$$

となる。

### (3)

$D(s)$から$E(s)$までの伝達関数は，

$$
\frac{E(s)}{D(s)}=\frac{-1}{1+\dfrac{A}{s(0.1s+1)}}
=\frac{-s(0.1s+1)}{0.1s^2+s+A}=\frac{-s(s+10)}{s^2+10s+10A}
$$

となるので，定常速度偏差は次のように求められる。

$$
e_{\mathrm{v}}=\lim_{t\to\infty}e(t)=\lim_{s\to0}sE(s)
=\lim_{s\to0}s\cdot\frac{-s(s+10)}{s^2+10s+10A}\cdot\frac{2}{s^2}=-\frac{2}{A}\tag{5}
$$

…（答）

### (4)

$R(s)$から$Y(s)$までの閉ループ伝達関数を求める。

$$
\frac{Y(s)}{R(s)}=\frac{\dfrac{A}{s(0.1s+1)}}{1+\dfrac{A}{s(0.1s+1)}}
=\frac{A}{0.1s^2+s+A}=\frac{10A}{s^2+10s+10A}\tag{6}
$$

②式と⑥式を比較して，

$$
\omega_{\mathrm{n}}=\sqrt{10A}\tag{7}
$$

$$
\zeta=\frac{10}{2\omega_{\mathrm{n}}}=\frac{5}{\sqrt{10A}}\tag{8}
$$

を得る。⑧式から，$\zeta=0.8$を与える$A$は，

$$
A=\frac{5^2}{10\times\zeta^2}=\frac{25}{10\times0.8^2}=\frac{25}{6.4}=3.9063
\quad\longrightarrow\quad3.91\quad\text{（答）}
$$

となる。

### (5)

上記(2)のときの固有角周波数は，

$$
\omega_{\mathrm{n}}=\sqrt{K}=\sqrt{0.39063}=0.62500
\quad\longrightarrow\quad0.625\ \mathrm{rad/s}\quad\text{（答）}
$$

となり，また，上記(4)のときの固有角周波数は，

$$
\omega_{\mathrm{n}}=\sqrt{10A}=\sqrt{10\times3.9063}=6.2500
\quad\longrightarrow\quad6.25\ \mathrm{rad/s}\quad\text{（答）}
$$

となる。したがって，同じ減衰特性のもとで10倍速くなる。…（答）

### (6)

上記(2)のときの定常速度偏差は，

$$
e_{\mathrm{v}}=-\frac{2}{K}=-\frac{2}{0.39063}=-5.1199
\quad\longrightarrow\quad-5.12\quad\text{（答）}
$$

となり，また，上記(4)のときの定常速度偏差は，

$$
e_{\mathrm{v}}=-\frac{2}{A}=-\frac{2}{3.9063}=-0.51199
\quad\longrightarrow\quad-0.512\quad\text{（答）}
$$

となる。したがって，同じ減衰特性のもとで定常速度偏差は$\dfrac{1}{10}$倍になる。…（答）
