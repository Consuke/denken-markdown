---
title: "2017年度 機械・制御 問4 RLC直列回路の伝達関数"
year: 2017
examStage: "secondary"
subject: "machine-control"
questionNumber: 4
topics: ["control"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=17"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 17・18・19・20ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，機械・制御の問4。RLC直列回路の伝達関数の問題と公式標準解答。"
---

## 問題

図1に示す$RLC$直列回路において，電圧$v_{\mathrm{i}}(t)$を入力信号，電圧$v_{\mathrm{o}}(t)$を出力信号とみなすとき，次の問に答えよ。ただし，全ての変数の初期値は零とする。

![図1 抵抗・コイル・コンデンサの直列回路。コンデンサの電圧を出力とする](/diagrams/questions/2017/2017-secondary-machine-control-q04-fig01.png)

$v_{\mathrm{i}}(t)$のラプラス変換$V_{\mathrm{i}}(s)$を入力，$v_{\mathrm{o}}(t)$のラプラス変換$V_{\mathrm{o}}(s)$を出力とするブロック線図を図2に示す。このブロックに当てはまる伝達関数$G(s)$を以下の手順で求めよ。

![図2 入力Vi(s)，伝達関数G(s)，出力Vo(s)のブロック線図](/diagrams/questions/2017/2017-secondary-machine-control-q04-fig02.png)

### (1)

回路に流れる電流を$i(t)$として，コンデンサの両端にかかる電圧$v_{\mathrm{o}}(t)$を求めよ。求めた関係式をラプラス変換せよ。$i(t)$をラプラス変換したものを$I(s)$で表し，$V_{\mathrm{o}}(s)$を入力，$I(s)$を出力とするブロック線図で表せ。

### (2)

抵抗及びコイルそれぞれの両端にかかる電圧と$v_{\mathrm{o}}(t)$の和が$v_{\mathrm{i}}(t)$である。この関係式をラプラス変換して，$I(s)$及び$V_{\mathrm{o}}(s)$を入力，$V_{\mathrm{i}}(s)$を出力とするブロック線図で表せ。

### (3)

上記小問(1)及び(2)で求めたブロック線図を用いて，$V_{\mathrm{o}}(s)$を入力，$V_{\mathrm{i}}(s)$を出力とする$RLC$直列回路全体のブロック線図を求めよ。

### (4)

上記小問(3)で求めたブロック線図を等価変換することで，$V_{\mathrm{i}}(s)$を入力，$V_{\mathrm{o}}(s)$を出力とする図2に示すような一つのブロックに簡単化せよ。

### (5)

$V_{\mathrm{i}}(s)$から$V_{\mathrm{o}}(s)$までの伝達関数は2次遅れ系となる。$R=1\ \Omega$，$L=2$ mH，$C=500$ μFであるときの固有角周波数$\omega_{\mathrm{n}}$ [rad/s]及び減衰係数$\zeta$をそれぞれ求めよ。

## 解答

### (1)

$v_{\mathrm{o}}(t)$は，次式で記述される。

$$
v_{\mathrm{o}}(t)=\frac{Q(t)}{C}=\frac{1}{C}\int_0^t i(\tau)\,\mathrm{d}\tau+\frac{Q(0)}{C}\quad\text{（答）}
$$

コンデンサの電荷の初期値$Q(0)$を零とし，両辺をラプラス変換して次式を得る。

$$
V_{\mathrm{o}}(s)=\frac{1}{Cs}I(s)\quad\text{（答）}
$$

よってブロック線図は次のようになる。

![公式解答 図1。Vo(s)を入力としCsのブロックを通ってI(s)を出力する](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig01.png)

### (2)

題意より，次式となる。

$$
v_{\mathrm{i}}(t)=Ri(t)+L\frac{\mathrm{d}i(t)}{\mathrm{d}t}+v_{\mathrm{o}}(t)
$$

上の式をラプラス変換して次式を得る。

$$
V_{\mathrm{i}}(s)=RI(s)+LsI(s)-Li(0)+V_{\mathrm{o}}(s)
$$

ここで，電流の初期値$i(0)$を零とすれば，

$$
V_{\mathrm{i}}(s)=(R+Ls)I(s)+V_{\mathrm{o}}(s)
$$

となる。よって，ブロック線図は次のようになる。

![公式解答 図2a。I(s)をRとLsの並列ブロックに入力し，Vo(s)と加算してVi(s)を出力](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig02.png)

または，

![公式解答 図2b。I(s)をR+Lsに入力し，Vo(s)と加算してVi(s)を出力](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig03.png)

### (3)

$RLC$直列回路全体のブロック線図は次のようになる。

![公式解答 図3a。Vo(s)をCs，RとLsの並列結合へ通し，Vo(s)との加算でVi(s)を出力](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig04.png)

または，

![公式解答 図3b。Vo(s)をCsとR+Lsの直列結合へ通し，Vo(s)との加算でVi(s)を出力](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig05.png)

### (4)

等価変換する。

並列結合，直列結合の等価変換を行う。

![公式解答 図4。Cs(R+Ls)のブロックと入力Vo(s)を加算する](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig06.png)

並列結合の等価変換を行う。

![公式解答 図5。Vo(s)からVi(s)へのブロックは1+Cs(R+Ls)](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig07.png)

入力と出力を逆にする。

![公式解答 図6。Vi(s)からVo(s)への伝達関数は1/(LCs²+RCs+1)](/diagrams/questions/2017/2017-secondary-machine-control-q04-answer-fig08.png)

### (5)

$$
\frac{1}{LCs^2+RCs+1}=\frac{\dfrac{1}{LC}}{s^2+\dfrac{R}{L}s+\dfrac{1}{LC}}
$$

となる。上式と2次遅れ系の標準形$\dfrac{K\omega_{\mathrm{n}}^2}{s^2+2\zeta\omega_{\mathrm{n}}s+\omega_{\mathrm{n}}^2}$とを比較することで，

$$
K=1
$$

$$
\omega_{\mathrm{n}}=\frac{1}{\sqrt{LC}}=\frac{1}{\sqrt{2\times10^{-3}\times500\times10^{-6}}}
=\frac{1}{\sqrt{10^{-6}}}=10^3\ \mathrm{rad/s}\quad\text{（答）}
$$

$$
\begin{aligned}
\zeta&=\frac{R}{2\omega_{\mathrm{n}}L}=\frac{R\sqrt{LC}}{2L}=\frac{R}{2}\sqrt{\frac{C}{L}}\\
&=\frac{1}{2}\sqrt{\frac{500\times10^{-6}}{2\times10^{-3}}}=0.25\quad\text{（答）}
\end{aligned}
$$

#### (5)の別解

$LC$と$RC$は，以下のように計算される。

$$
\begin{aligned}
LC&=2\times10^{-3}\times500\times10^{-6}=1000\times10^{-9}=10^{-6}\\
RC&=1\times500\times10^{-6}=500\times10^{-6}
\end{aligned}
$$

したがって，

$$
\begin{aligned}
\frac{1}{LCs^2+RCs+1}&=\frac{1}{10^{-6}s^2+500\times10^{-6}s+1}\\
&=\frac{10^6}{s^2+500s+10^6}
\end{aligned}
$$

となる。上式と2次遅れ系の標準形$\dfrac{K\omega_{\mathrm{n}}^2}{s^2+2\zeta\omega_{\mathrm{n}}s+\omega_{\mathrm{n}}^2}$とを比較することで，

$$
K=1,\qquad\omega_{\mathrm{n}}=10^3\ \mathrm{rad/s},\qquad\zeta=0.25\quad\text{（答）}
$$
