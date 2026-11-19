---
title: "2024年度 電力・管理 問4 配電線ループ系統の電流と短絡電流"
year: 2024
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 3・4ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2024年度の電験二種二次試験，電力・管理の問4。配電線ループ系統の電流と短絡電流の問題と公式標準解答。"
---

## 問題

配電線のループ系統に関して，次の問に答えよ。

異なる配電用変圧器に接続されているこう長1 kmの三相高圧配電線AとBの末端に開閉器が設置されている。開閉器を投入しループ系統にした場合，下記(1)〜(3)の設問に答えよ。

### (1)

図1の系統において，開閉器投入後のA配電線とB配電線の送り出し電流の大きさを求めよ。

なお，配電用変電所から末端負荷に向かう電流の向きを正とする。

また，配電系統の条件を下記に示す。

- 配電用変圧器（1B，2B）の送り出し電圧は，6 600 Vとする。
- 配電用変圧器の送り出し電圧は，開閉器投入前後で変化しない。
- 配電用変圧器（1B，2B）のインピーダンスは，無視できる。
- 開閉器投入前のA配電線，B配電線の送り出しのそれぞれの電圧と電流の位相差は小さく，零としてよい。
- 負荷は全てそれぞれの配電線の末端に接続されている。
- 負荷電流は，開閉器投入前後で変化しない。
- A配電線のインピーダンス：$\dot Z_{\mathrm{A}}$ [Ω/km]，B配電線のインピーダンス：$\dot Z_{\mathrm{B}}$ [Ω/km]，$\dot Z_{\mathrm{A}}=\dot Z_{\mathrm{B}}=\dot Z$ [Ω/km]

![図1 送り出し電圧が等しい配電線の系統](/diagrams/questions/2024/2024-secondary-power-management-q04-fig01.png)

### (2)

小問(1)において，図2の系統のように送り出し電圧が異なる場合，開閉器投入後のA配電線とB配電線の送り出し電流の大きさを求めよ。

なお，小問(1)からの配電系統の条件の違いを下記に示す。

- 配電用変圧器（1B，2B）の送り出し電圧は，1B：6 650 V，2B：6 600 Vとする。
- $\dot Z_{\mathrm{A}}=\dot Z_{\mathrm{B}}=\dot Z=0.5+\mathrm{j}1.0$ [Ω/km]

![図2 送り出し電圧が異なる配電線の系統](/diagrams/questions/2024/2024-secondary-power-management-q04-fig02.png)

### (3)

図3の系統において，開閉器投入後の三相短絡電流を求めよ。なお，短絡箇所は開閉器とする。

また，配電系統の条件を下記に示す。

- 配電用変圧器（1B，2B）の送り出し電圧は，6 600 Vとする。
- 基準容量：6 600 V，10 MV·Aベース
- 背後%インピーダンス（抵抗成分は無視）：$\%Z_{\mathrm{G}}=1$ %
- 配電用変圧器%インピーダンス（抵抗成分は無視）：$\%Z_{\mathrm{T1}}=\%Z_{\mathrm{T2}}=\%Z_{\mathrm{T}}=7.5$ %
- $\dot Z_{\mathrm{A}}=\dot Z_{\mathrm{B}}=\dot Z=\mathrm{j}0.5$ [Ω/km]（抵抗成分は無視）

![図3 開閉器位置に短絡点を持つ配電系統](/diagrams/questions/2024/2024-secondary-power-management-q04-fig03.png)

## 解答

### (1)

ループ電流を $\dot I_l$ [A]とすると，

開閉器投入後のループ方程式

$$
(500-\dot I_l)\times\dot Z_{\mathrm{A}}-(300+\dot I_l)\times\dot Z_{\mathrm{B}}=0
$$

$$
\begin{aligned}
\dot I_l&=\frac{500\times\dot Z_{\mathrm{A}}-300\times\dot Z_{\mathrm{B}}}{\dot Z_{\mathrm{A}}+\dot Z_{\mathrm{B}}}\\
&=\frac{500\dot Z-300\dot Z}{2\dot Z}\\
&=100\ \mathrm{A}
\end{aligned}
$$

$\dot I'_{\mathrm{A}}$：ループ系統におけるA配電線の送り出し電流，$\dot I'_{\mathrm{B}}$：ループ系統におけるB配電線の送り出し電流とすると，

$$
\dot I'_{\mathrm{A}}=500-100=400\ \mathrm{A}
$$

$$
\dot I'_{\mathrm{B}}=300+100=400\ \mathrm{A}
$$

∴ A配電線の送り出し電流 **400 A**  
B配電線の送り出し電流 **400 A**

### (2)

ループ電流を $\dot I_l$ [A]とすると，

開閉器投入後の節点方程式

$$
\frac{6\,650}{\sqrt{3}}-(500-\dot I_l)\times\dot Z_{\mathrm{A}}=\frac{6\,600}{\sqrt{3}}-(300+\dot I_l)\times\dot Z_{\mathrm{B}}
$$

$\dot Z_{\mathrm{A}}=\dot Z_{\mathrm{B}}=\dot Z=0.5+\mathrm{j}1.0$ [Ω]のため，

$$
\begin{aligned}
\dot I_l&=100-\frac{50}{2\sqrt{3}\dot Z}=100-\frac{50}{2\sqrt{3}(0.5+\mathrm{j}1.0)}\\
&=\left(100-\frac{10}{\sqrt{3}}\right)+\mathrm{j}\frac{20}{\sqrt{3}}=94.226+\mathrm{j}11.547
\end{aligned}
$$

A配電線の送り出し電流：

$$
\dot I'_{\mathrm{A}}=500-\dot I_l=405.774-\mathrm{j}11.547
$$

$$
\therefore I_{\mathrm{A}}=\sqrt{405.774^2+11.547^2}=405.94\quad\to\quad406\ \mathrm{A}
$$

B配電線の送り出し電流：

$$
\dot I'_{\mathrm{B}}=300+\dot I_l=394.226+\mathrm{j}11.547
$$

$$
\therefore I_{\mathrm{B}}=\sqrt{394.226^2+11.547^2}=394.40\quad\to\quad394\ \mathrm{A}
$$

∴ A配電線の送り出し電流 **406 A**  
B配電線の送り出し電流 **394 A**

### (3)

まず，配電線A及び配電線Bの%インピーダンスを求める。

配電線Aの%インピーダンス：

$$
\%Z_{\mathrm{A}}=\frac{0.5\ \Omega\times10\ \mathrm{MV\cdot A}}{6.6\ \mathrm{kV}\times6.6\ \mathrm{kV}}\times100\%=11.478\%
$$

配電線Bの%インピーダンス：

$$
\%Z_{\mathrm{B}}=\frac{0.5\ \Omega\times10\ \mathrm{MV\cdot A}}{6.6\ \mathrm{kV}\times6.6\ \mathrm{kV}}\times100\%=11.478\%
$$

$$
\begin{aligned}
\text{短絡点までの\%インピーダンス}&=\%Z_{\mathrm{G}}+\left(\frac{1}{\%Z_{\mathrm{T1}}+\%Z_{\mathrm{A}}}+\frac{1}{\%Z_{\mathrm{T2}}+\%Z_{\mathrm{B}}}\right)^{-1}\\
&=\%Z_{\mathrm{G}}+\left(\frac{1}{\%Z_{\mathrm{T}}+\%\dot Z}+\frac{1}{\%Z_{\mathrm{T}}+\%\dot Z}\right)^{-1}\\
&=\%Z_{\mathrm{G}}+\frac{\%Z_{\mathrm{T}}+\%\dot Z}{2}\\
&=1+\frac{7.5+11.478}{2}=10.489
\end{aligned}
$$

$$
\begin{aligned}
\text{ループ点の三相短絡電流}&=\frac{10\ \mathrm{MV\cdot A}}{\sqrt{3}\times6.6\ \mathrm{kV}\times\text{短絡点までの\%インピーダンス}}\\
&=\frac{10\ \mathrm{MV\cdot A}}{\sqrt{3}\times6.6\ \mathrm{kV}\times10.489\%}\\
&=8\,339.9\\
&=8\,340
\end{aligned}
$$

∴ **8 340 A**
