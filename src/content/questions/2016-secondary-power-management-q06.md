---
title: "2016年度 電力・管理 問6 66 kV受電系統の三相短絡電流と変圧器%インピーダンス"
year: 2016
examStage: "secondary"
subject: "power-management"
questionNumber: 6
topics: ["power-systems","transformers"]
sourceName: "一般財団法人 電気技術者試験センター 平成28年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_q01.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20161120_ch_second_a01.pdf#page=7"
sourceNote: "ユーザー提供の問題PDF 9-10ページと公式標準解答PDF 7-8ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2016年度の電験二種二次試験，電力・管理の問6。66 kV受電系統の三相短絡電流と変圧器%インピーダンスの問題と公式標準解答。"
---

## 問題

図1は，送電線から受電した66 kVを20 MV・A変圧器で降圧して6.6 kV負荷回路に供給する回路である。$Z_0\sim Z_3$がそれぞれの送電線路，配電線路における区分ごとの合成インピーダンスを表すとき，次の問に答えよ。ただし，上位系統の背後電圧を66 kV一定とし，負荷回路からの短絡電流供給はないものとする。

### (1)

66 kV CB3から見た電源側背後インピーダンスの大きさ [Ω]を求めよ。

### (2)

66 kV CB3における三相短絡電流 [kA]を求めよ。

### (3)

6.6 kV CB6における三相短絡電流 [kA]を求めよ。

### (4)

100 MV・Aの発電機（初期過渡リアクタンス$Z_4=\mathrm{j}12$ %）を図2のように66 kV母線に接続することとした。CB2，CB3及びCB7の定格遮断電流が20 kAであるとき，100 MV・A変圧器の自己容量基準パーセントインピーダンスの下限値 [%]を求めよ。

![図1 上位系統（Z0=j2.5 %，100 MV・A基準）から66 kV母線，CB1，送電線（Z1=j3.5 %，100 MV・A基準），CB2，66 kV母線，CB3，20 MV・A変圧器（Z2=j8.8 %，自己容量基準），CB4，6.6 kV母線，CB5，配電線（Z3=5 %+j7 %，10 MV・A基準），CB6，負荷回路](/diagrams/questions/2016/2016-secondary-power-management-q06-fig01.png)

![図2 図1の系統の66 kV母線（CB2とCB3の間）に，CB7と100 MV・A変圧器を介して100 MV・A発電機（Z4=j12 %，自己容量基準）を接続](/diagrams/questions/2016/2016-secondary-power-management-q06-fig02.png)

## 解答

### (1)

66 kV，100 MV・A基準での単位インピーダンスの大きさは，

$$
\frac{66^2}{100}=43.56\ \Omega
$$

したがって，電源側背後インピーダンスの大きさは，

$$
43.56\times(0.025+0.035)\fallingdotseq2.614\ \Omega\ \rightarrow\ 2.61\ \Omega\quad\text{（答）}
$$

### (2)

66 kV，100 MV・A基準での単位電流の大きさは，

$$
\frac{100}{66\times\sqrt{3}}=0.874\,8\ \mathrm{kA}
$$

したがって，CB3における三相短絡電流の大きさは，

$$
\frac{0.874\,8}{0.025+0.035}\fallingdotseq14.58\ \mathrm{kA}\ \rightarrow\ 14.6\ \mathrm{kA}\quad\text{（答）}
$$

### (3)

図1の回路全体を10 MV・A基準で書き直すと，次のようになる。

![10 MV・A基準の等価回路。1.0 p.u.の電源から66 kV母線，66 kV母線，6.6 kV母線を経て，抵抗とリアクタンスの直列でCB6に至る](/diagrams/questions/2016/2016-secondary-power-management-q06-fig03.png)

したがって，電源からCB6までの合計インピーダンスは，

$$
\mathrm{j}0.25+\mathrm{j}0.35+\mathrm{j}4.4+(5+\mathrm{j}7)=5+\mathrm{j}12\ \%
$$

となる。

一方，6.6 kV，10 MV・A基準での単位電流は，

$$
\frac{10}{6.6\times\sqrt{3}}=0.874\,8\ \mathrm{kA}
$$

である。

ゆえに，CB6端での三相短絡電流の大きさは，

$$
0.874\,8\times\frac{1}{\sqrt{0.05^2+0.12^2}}=\frac{0.874\,8}{0.13}\fallingdotseq6.729\ \mathrm{kA}\ \rightarrow\ 6.73\ \mathrm{kA}\quad\text{（答）}
$$

### (4)

発電機昇圧用100 MV・A変圧器の%インピーダンスを$x$ [%]とすると，CB2，CB3，CB7での三相短絡電流は，負荷回路側からの短絡電流供給がないので，

$$
\left(\frac{100}{2.5+3.5}+\frac{100}{x+12}\right)\times\frac{100}{66\times\sqrt{3}}=14.58+\frac{87.48}{x+12}\ \mathrm{kA}\quad\cdots\ (1)
$$

CB2，CB3，CB7の定格遮断電流は20 kAなので，(1)式の値は20 kA以下でなければならない。

$$
14.58+\frac{87.48}{x+12}\leqq20
$$

したがって，$x$は

$$
x\geqq4.140\ \%\ \rightarrow\ 4.14\ \%\quad\text{（答）}
$$
