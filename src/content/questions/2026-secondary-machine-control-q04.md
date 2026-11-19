---
title: "2026年度 機械・制御 問4 二次遅れ系のインパルス応答と周波数応答"
year: 2026
examStage: secondary
subject: machine-control
questionNumber: 4
topics: [control]
sourceName: "一般財団法人 電気技術者試験センター 令和8年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20261115_ch_second_q02.pdf#page=8"
sourceNote: "ユーザー提供PDFの8ページ（冊子7ページ）から問題文のみ転記。タイトルは整理用に付記し、改行・全半角・数式表記をMarkdown/LaTeXに整形。表紙・答案用紙記入上の注意・科目共通の問題選択案内は省略。計算の共通の注意事項は原本PDF2ページを参照。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2026年度の電験二種二次試験、機械・制御の問4。安定な二次遅れ系のインパルス応答，極，周波数応答に関する問題文。"
---

## 問題

安定な二次遅れ伝達関数を減衰係数 $\zeta$ を用いて

$$
G(s)=\frac{1}{s^2+2\zeta s+1}
$$

と与える。ただし，$0<\zeta<1$ とする。このときインパルス応答は時間関数として，

$$
g(t)=\frac{1}{\sqrt{1-\zeta^2}}\,\mathrm{e}^{-\zeta t}\sin\left(\sqrt{1-\zeta^2}\,t\right),\quad t>0
$$

と表される。また，$G(s)$ の式において $s=\mathrm{j}\omega$ とすると周波数伝達関数 $G(\mathrm{j}\omega)$ が得られ，周波数応答のゲイン特性は角周波数 $\omega$ の関数として，

$$
\left|G(\mathrm{j}\omega)\right|=\frac{1}{\sqrt{(1-\omega^2)^2+4\zeta^2\omega^2}}
$$

で表される。このとき，以下の問に答えよ。

### (1)

$\zeta=0.6$ の場合のインパルス応答 $g(t)$ を求めよ。また，このインパルス応答が $t>0$ で最初に $g(t)=0$ になる時刻を求めよ。ただし，$\pi=3.141\,6$ とする。

### (2)

伝達関数 $G(s)$ の極を $-\alpha\pm\mathrm{j}\beta$ のように表した場合の $\alpha$，$\beta$ を $\zeta$ を用いて表せ。ただし，$\alpha>0$ 及び $\beta>0$ とする。また，$\dfrac{\beta}{\alpha}=\sqrt{3}$ となる $\zeta$ を求めよ。

### (3)

$\zeta=0.6$ の場合のゲイン特性 $\left|G(\mathrm{j}\omega)\right|$ を求めよ。また，ゲインの最大値及び最大となるときの角周波数を求めよ。

### (4)

$\zeta=0.8$ の場合のゲイン特性 $\left|G(\mathrm{j}\omega)\right|$ を求めよ。また，この場合は，ゲインは周波数の増加に対して単調減少することを示せ。
