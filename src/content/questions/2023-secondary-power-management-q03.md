---
title: "2023年度 電力・管理 問3 等面積法による過渡安定性の計算"
year: 2023
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["stability"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 2・3ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，電力・管理の問3。等面積法による過渡安定性の計算の問題と公式標準解答。"
---

## 問題

等面積法を用いた過渡安定性の計算に関して，次の問に答えよ。

図1のように，変圧器及び2回線送電線を介して，同期発電機から無限大母線へ三相3線式で送電する系統を考える。変圧器のリアクタンスは $X_{\mathrm{t}}$ [p.u.]，送電線1回線当たりのリアクタンスを $X_{\mathrm{l}}$ [p.u.]，同期発電機のリアクタンスは系統じょう乱の影響によらず過渡リアクタンス $X'_{\mathrm{d}}$ [p.u.]で一定とし，いずれも抵抗や静電容量は無視する。同期発電機の内部電圧及び無限大母線の電圧の大きさはそれぞれ $E_{\mathrm{G}}$ [p.u.]及び $E_0$ [p.u.]で一定とし，同期発電機の発電出力（電気的出力）及びその初期値をそれぞれ $P_{\mathrm{G}}$ [p.u.]及び $P_{\mathrm{G0}}$ [p.u.]とする。無限大母線の電圧を位相の基準，単位法による定数は全て同一の基準容量に基づくものとして，以下の問に答えよ。

### (1)

発電機内部電圧の位相角を $\delta_0$ [rad]として，同期発電機の発電出力 $P_{\mathrm{G}}$ を表す数式を $E_{\mathrm{G}}$，$E_0$，$X'_{\mathrm{d}}$，$X_{\mathrm{t}}$，$X_{\mathrm{l}}$，$\delta_0$ を用いて記載せよ。

以降の設問では，$X_{\mathrm{t}}=0.10$ p.u.，$X_{\mathrm{l}}=0.20$ p.u.，$X'_{\mathrm{d}}=0.15$ p.u.，$E_{\mathrm{G}}=E_0=1.0$ p.u.，$P_{\mathrm{G0}}=0.8$ p.u.とする。また，発電機への機械的入力は $P_{\mathrm{G0}}$ に等しく，かつ，一定とする。$\pi=3.14$ として計算し，有効桁数を2桁として答えよ。なお，同期発電機が定常状態にある平衡点では発電機内部電圧の位相角は小さいとみなし，$\sin\delta\approx\delta$ の近似を用いてよい。

### (2)

同期発電機の内部電圧の位相角 $\delta_0$ [rad]を求めよ。

### (3)

図1の送電線1回線で三相地絡故障が生じ，その後，当該の回線が両端の遮断器の動作により切り離されることを想定する。1回線開放後の不安定平衡点における位相角 $\delta_{\mathrm{u}}$ [rad]を求めよ。ここで，1回線開放後の系統における発電出力と内部電圧の位相角との関係を図2に示す。同図の安定平衡点における位相角を $\delta_{\mathrm{s}}$ [rad]とし，$\delta_{\mathrm{u}}=\pi-\delta_{\mathrm{s}}$ を用いること。

### (4)

小問(3)の故障が生じた際，故障継続中の同期発電機の発電出力を0 p.u.とすると，同期発電機の位相角が図3の $\delta_{\mathrm{c}}$ [rad]に到達する前に当該の回線を開放できれば脱調を回避できる。ここで $\delta_{\mathrm{c}}$ [rad]は，等面積法により同図中の面積(A)と(B)が等しくなる位相角である。$\cos\delta_{\mathrm{c}}$ の値を求めよ。ただし，同期発電機の制動効果は無視する。

![図1 同期発電機，変圧器，2回線送電線及び無限大母線](/diagrams/questions/2023/2023-secondary-power-management-q03-fig01.png)

![図2 1回線開放後の発電出力と内部電圧の位相角](/diagrams/questions/2023/2023-secondary-power-management-q03-fig02.png)

![図3 等面積法による加速面積と減速面積](/diagrams/questions/2023/2023-secondary-power-management-q03-fig03.png)

## 解答

### (1)

発電機出力は次式の通り表される。

$$
P_{\mathrm{G}}=\frac{E_{\mathrm{G}}E_0}{X'_{\mathrm{d}}+X_{\mathrm{t}}+0.5X_{\mathrm{l}}}\sin\delta_0 \tag{1}
$$

### (2)

①式に各パラメータを代入して次式を得る。

$$
0.8=\frac{1\times1}{0.35}\sin\delta_0 \tag{2}
$$

したがって，近似式を適用して，

$$
\delta_0\approx\sin\delta_0=0.28\ \mathrm{rad} \tag{3}
$$

### (3)

1回線開放された状態で小問(2)と同様に安定平衡点の位相角を導出すると，

$$
P_{\mathrm{G0}}=\frac{E_{\mathrm{G}}E_0}{X'_{\mathrm{d}}+X_{\mathrm{t}}+X_{\mathrm{l}}}\sin\delta_{\mathrm{s}} \tag{4}
$$

ここで，$X_1=X'_{\mathrm{d}}+X_{\mathrm{t}}+X_{\mathrm{l}}$ とすると，各パラメータを代入して，

$$
0.8=\frac{1\times1}{X_1}\sin\delta_{\mathrm{s}}=\frac{1}{0.45}\sin\delta_{\mathrm{s}} \tag{5}
$$

これより安定平衡点の位相角は次式のように求まる。

$$
\delta_{\mathrm{s}}\approx\sin\delta_{\mathrm{s}}=0.36\ \mathrm{rad} \tag{6}
$$

不安定平衡点の位相角は，$P$–$\delta$ 曲線の対称性から次式で計算できる。

$$
\delta_{\mathrm{u}}=\pi-\delta_{\mathrm{s}}=2.8\ \mathrm{rad} \tag{7}
$$

### (4)

故障発生から故障除去時点までに生じる加速エネルギーは，故障継続中の発電機出力を0として次式で表される。

$$
P_{\mathrm{G0}}(\delta_{\mathrm{c}}-\delta_0) \tag{8}
$$

一方で減速エネルギーの最大値は次式となる。

$$
\int_{\delta_{\mathrm{c}}}^{\delta_{\mathrm{u}}}\left(\frac{1}{X_1}\sin\delta-P_{\mathrm{G0}}\right)\mathrm{d}\delta \tag{9}
$$

⑧式＝⑨式として，次式を得る。

$$
\cos\delta_{\mathrm{c}}=X_1P_{\mathrm{G0}}(\delta_{\mathrm{u}}-\delta_0)+\cos\delta_{\mathrm{u}} \tag{10}
$$

ここで対称性から，次式が成立する。

$$
\cos\delta_{\mathrm{u}}=-\sqrt{1-\sin^2\delta_{\mathrm{u}}}\approx-0.933 \tag{11}
$$

⑩式に代入して，

$$
\cos\delta_{\mathrm{c}}=-0.033 \tag{12}
$$
