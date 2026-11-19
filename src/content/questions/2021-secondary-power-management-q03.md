---
title: "2021年度 電力・管理 問3 単位法による三相短絡電流と発電機容量"
year: 2021
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["power-systems","protection"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5ページと公式標準解答PDF 2・3ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2021年度の電験二種二次試験，電力・管理の問3。単位法による三相短絡電流と発電機容量の問題と公式標準解答。"
---

## 問題

単位法を用いた三相回路の故障電流の検討について以下の問に答えよ。

### (1)

線間電圧154 kV，三相容量100 MV・Aを基準値とするとき，次を求めよ。

- a）基準電流$I_{\mathrm{B}}$ [kA]
- b）基準インピーダンス$Z_{\mathrm{B}}$ [$\Omega$]

### (2)

図に示す無限大母線と送電線，変圧器，発電機から構成される電力系統を対象として，以下の量を，100 MV・Aを基準容量とし各部の公称電圧ないしは定格電圧を基準電圧とする単位法による値に換算せよ。

- a）公称電圧154 kVのこう長20 kmの1回線送電線のインピーダンスを上記の単位法の値[p.u.]に換算せよ。ただし，送電線（1回線）のインピーダンスはj0.400 $\Omega$/kmとする。
- b）容量150 MV・Aの変圧器（154/66 kV）のインピーダンスを上記の単位法の値[p.u.]に換算せよ。ただし，同変圧器のインピーダンスは自己容量基準でj10.0%とする。
- c）変圧器二次側（定格電圧66 kV）の電流25 kAを上記の単位法の値[p.u.]に換算せよ。

### (3)

図の電力系統で，変圧器二次側（定格電圧66 kV）の母線至近端での三相短絡時における故障電流を25 kA以下に抑えることができる発電機の最大容量$S$ [MV・A]を求めよ。ここに送電線と変圧器のインピーダンスは小問(2)に示すとおりであるが，154 kV送電線は2回線とする。また発電機（昇圧変圧器を含む）は，定格電圧が66 kVの電圧源と自己容量基準でj30.0%のインピーダンスの直列回路で表すこととする。なお無限大母線の電圧は154 kV，電圧源の電圧は66 kVとする。

![無限大母線，154 kV送電線，150 MV・A変圧器，66 kV発電機と二次側三相短絡点](/diagrams/questions/2021/2021-secondary-power-management-q03-fig01.png)

## 解答

### (1)

#### a

$$
I_{\mathrm{B}}=\frac{100}{\sqrt{3}\times154}=0.37490
\quad\longrightarrow\quad0.375\ \mathrm{kA}\quad\text{（答）}
$$

#### b

$$
Z_{\mathrm{B}}=\frac{\dfrac{154}{\sqrt{3}}}{0.37490}=237.16\fallingdotseq237\ \Omega\quad\text{（答）}
$$

### (2)

#### a

$$
Z=\mathrm{j}\frac{0.40\times20}{237.16}=\mathrm{j}0.033733\fallingdotseq\mathrm{j}0.0337\ \mathrm{p.u.}\quad\text{（答）}
$$

#### b

$$
Z=\mathrm{j}\frac{10}{100}\times\frac{100}{150}=\mathrm{j}0.066667\fallingdotseq\mathrm{j}0.0667\ \mathrm{p.u.}\quad\text{（答）}
$$

#### c

(1)a）の基準電流値を用い，下式より求められる。

$$
\frac{25}{0.37490\times\dfrac{154}{66}}=28.579\fallingdotseq28.6\ \mathrm{p.u.}\quad\text{（答）}
$$

### (3)

発電機の最大容量を$S$ [MV・A]とすると，短絡電流$I_{\mathrm{S}}$は下式で計算できる。

$$
\begin{aligned}
I_{\mathrm{S}}&=\frac{\dfrac{154}{154}}{\mathrm{j}\dfrac{0.033733}{2}+\mathrm{j}0.066667}
+\frac{\dfrac{66}{66}}{\mathrm{j}0.30\times\dfrac{100}{S}}\\
&=-\mathrm{j}\frac{1}{0.083534}-\mathrm{j}0.033333S\\
&=-\mathrm{j}(11.971+0.033333S)\ \mathrm{p.u.}
\end{aligned}
$$

この短絡電流が25 kA（28.6 p.u.）を上回らないためには，$S$は次の値以下である必要がある。

$$
11.971+0.033333S=28.579\qquad\therefore S=498.24\ \mathrm{MV\cdot A}
$$

したがって，求める発電機の最大容量は498 MV・A …（答）
