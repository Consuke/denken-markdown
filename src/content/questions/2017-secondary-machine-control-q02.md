---
title: "2017年度 機械・制御 問2 単巻変圧器の巻数比と自己容量"
year: 2017
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=13"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，機械・制御の問2。単巻変圧器の巻数比と自己容量の問題と公式標準解答。"
---

## 問題

図に示すように定格一次電圧3000 V，定格二次電圧3300 Vの単相単巻変圧器がある。この変圧器の二次側に負荷を接続した場合，一次電圧$V_1$が3000 V，一次電流$I_1$が100 Aであった。次の問に答えよ。ただし，励磁電流及び巻線のインピーダンス降下は無視できるものとする。

### (1)

この単巻変圧器の巻数比を求めよ。

### (2)

分路巻線の巻数$w_{\mathrm{c}}$が500回であるとき，直列巻線の巻数$w_{\mathrm{s}}$を求めよ。

### (3)

直列巻線を流れる電流$I_2$及び分路巻線を流れる電流$I_{\mathrm{c}}$をそれぞれ求めよ。

### (4)

自己容量$S_{\mathrm{s}}$を求めよ。

### (5)

巻数分比$K$（負荷容量$S$に対する自己容量$S_{\mathrm{s}}$の比）を求めよ。

![単相単巻変圧器。直列巻線と分路巻線，一次・二次端子と電流の向き](/diagrams/questions/2017/2017-secondary-machine-control-q02-fig01.png)

## 解答

### (1)

定格一次電圧及び定格二次電圧をそれぞれ$V_{1\mathrm{n}}$及び$V_{2\mathrm{n}}$とし，二次側（負荷側）を基準とした巻数比を$a$とすると，

$$
a=\frac{V_{1\mathrm{n}}}{V_{2\mathrm{n}}}=\frac{3000}{3300}=0.90909
\quad\longrightarrow\quad0.909\quad\text{（答）}
$$

あるいは，一次側（低圧側）を基準とした巻数比を$a'$とすると，

$$
a'=\frac{1}{a}=\frac{V_{2\mathrm{n}}}{V_{1\mathrm{n}}}=\frac{3300}{3000}=1.1\quad\text{（答）}
$$

### (2)

直列巻線及び分路巻線の巻数をそれぞれ$w_{\mathrm{s}}$及び$w_{\mathrm{c}}$とすると，

$$
a=\frac{w_{\mathrm{c}}}{w_{\mathrm{c}}+w_{\mathrm{s}}},\qquad
\left(a'=\frac{w_{\mathrm{c}}+w_{\mathrm{s}}}{w_{\mathrm{c}}}=\frac{1}{a}\right)
$$

であるから，$w_{\mathrm{c}}=500$として$w_{\mathrm{s}}$について求めると，

$$
w_{\mathrm{s}}=\left(\frac{1}{a}-1\right)w_{\mathrm{c}}=\left(\frac{3300}{3000}-1\right)\times500=50.0
\quad\longrightarrow\quad50\ \text{回}\quad\text{（答）}
$$

### (3)

直列巻線及び分路巻線を流れる電流をそれぞれ$I_2$及び$I_{\mathrm{c}}$とすると，励磁電流を無視すれば両巻線の起磁力の平衡条件から，

$$
w_{\mathrm{s}}I_2=w_{\mathrm{c}}I_{\mathrm{c}}\tag{1}
$$

の関係がある。また，一次電流及び二次電流をそれぞれ$I_1$及び$I_2$とすると，電流比$\dfrac{I_1}{I_2}$は$a$の逆数に等しいので，

$$
\frac{I_1}{I_2}=\frac{1}{a}\tag{2}
$$

求める$I_2$及び$I_{\mathrm{c}}$は，①及び②式から，

$$
I_2=aI_1=0.90909\times100=90.909\quad\longrightarrow\quad90.9\ \mathrm{A}\quad\text{（答）}
$$

$$
I_{\mathrm{c}}=I_1-I_2=100-90.909=9.0909\quad\longrightarrow\quad9.09\ \mathrm{A}\quad\text{（答）}
$$

### (4)

自己容量$S_{\mathrm{s}}$は，分路巻線を用いて求めると，

$$
S_{\mathrm{s}}=V_1I_{\mathrm{c}}=3000\times9.0909=27273
\quad\longrightarrow\quad27.3\ \mathrm{kV\cdot A}\quad\text{（答）}
$$

### (5)

負荷容量を$S$とすると，

$$
S=V_2I_2=3300\times90.909=300000\quad\longrightarrow\quad300\ \mathrm{kV\cdot A}
$$

巻数分比を$K$とすると，

$$
K=\frac{S_{\mathrm{s}}}{S}=\frac{27273}{300\times10^3}=0.09091
\quad\longrightarrow\quad0.0909\quad\text{（答）}
$$
