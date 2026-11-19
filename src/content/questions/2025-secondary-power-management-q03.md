---
title: "2025年度 電力・管理 問3 変電所の受電電圧と短絡容量"
year: 2025
examStage: "secondary"
subject: "power-management"
questionNumber: 3
topics: ["power-systems","transformers"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 7ページと公式標準解答PDF 3・4ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2025年度の電験二種二次試験，電力・管理の問3。変電所の受電電圧と短絡容量の問題と公式標準解答。"
---

## 問題

図のような一次側が154 kV，二次側が77 kVの変圧器3台で連系されたB変電所がある。この変電所が40 kmの1回線送電線でA変電所から受電しているとき，次の問に答えよ。なお，各変圧器のインピーダンスと各変電所から電源側を見たインピーダンスはリアクタンスのみとし，その値は自己容量基準で図に示すとおりである。また，B変電所の一次側の電圧は154 kV一定で，送電線のリアクタンス $X_{\mathrm{L}}$ は100 MV·A，154 kV基準で0.16 %/kmとし，抵抗，アドミタンスは無視するものとする。

![A変電所，送電線及び3台の変圧器を持つB変電所の系統図](/diagrams/questions/2025/2025-secondary-power-management-q03-fig01.png)

### (1)

B変電所の一次側母線が100 MW＋j20 Mvar（遅れ無効電力を正）で受電しているとき，送電端のA変電所の送り出し電圧[kV]を求めよ。ただし，電圧計算の近似式は用いないこと。

### (2)

77 kV母線の短絡容量 $P_{\mathrm{s}}$ [MV·A]を求めよ。なお，単位法における基準容量は100 MV·Aとして計算せよ。

## 解答

### (1)

抵抗，アドミタンスを無視した送電線の送電端電圧 $\dot V_{\mathrm{s}}$，受電端電圧 $\dot V_{\mathrm{r}}$ の関係は以下の式で表される。

$$
\dot V_{\mathrm{s}}=\dot V_{\mathrm{r}}+\mathrm{j}X_{\mathrm{L}}\dot I \tag{1}
$$

（$X_{\mathrm{L}}$：リアクタンス，$\dot I$：送電線電流）

受電端の有効電力を $P_{\mathrm{r}}$，遅れ無効電力を $Q_{\mathrm{r}}$ とし，受電端電圧を位相基準にとれば $\dot V_{\mathrm{r}}=V_{\mathrm{r}}$ となることから，

$$
\dot I=\frac{P_{\mathrm{r}}-\mathrm{j}Q_{\mathrm{r}}}{\overline{\dot V_{\mathrm{r}}}}=\frac{P_{\mathrm{r}}-\mathrm{j}Q_{\mathrm{r}}}{V_{\mathrm{r}}} \tag{2}
$$

①式に②式を代入し，

$$
\dot V_{\mathrm{s}}=\dot V_{\mathrm{r}}+\mathrm{j}X_{\mathrm{L}}\left(\frac{P_{\mathrm{r}}-\mathrm{j}Q_{\mathrm{r}}}{V_{\mathrm{r}}}\right)=V_{\mathrm{r}}+\frac{X_{\mathrm{L}}Q_{\mathrm{r}}}{V_{\mathrm{r}}}+\mathrm{j}\frac{X_{\mathrm{L}}P_{\mathrm{r}}}{V_{\mathrm{r}}} \tag{3}
$$

本問において100 MV·A，154 kVを基準とすると，

$$
V_{\mathrm{r}}=\frac{154}{154}=1.0\ \mathrm{p.u.},\qquad X_{\mathrm{L}}=\frac{0.16}{100}\times40=0.064\ \mathrm{p.u.}
$$

$$
P_{\mathrm{r}}=\frac{100}{100}=1.0\ \mathrm{p.u.},\qquad Q_{\mathrm{r}}=\frac{20}{100}=0.2\ \mathrm{p.u.}
$$

これらの値を③式に代入すると，

$$
\dot V_{\mathrm{s}}=1.0+\frac{0.064\times0.2}{1.0}+\mathrm{j}\frac{0.064\times1.0}{1.0}=1.0128+\mathrm{j}0.064\ \mathrm{p.u.}
$$

よって，

$$
V_{\mathrm{s}}=\sqrt{1.0128^2+0.064^2}\times154=1.0148\times154=156.28\quad\to\quad156\ \mathrm{kV}
$$

### (2)

図中の各%リアクタンスを100 MV·Aベースに換算すると，

154 kV電源：$0.3\times\dfrac{100}{10}=3$ %

TrB3：$18\times\dfrac{100}{200}=9$ %

変圧器3台の%リアクタンス $X_{\mathrm{Tr}}$ は，

$$
X_{\mathrm{Tr}}=\frac{16\times16\times9}{16\times9+16\times9+16\times16}=4.235\,3\%
$$

77 kV電源：$2\times\dfrac{100}{10}=20$ %

したがって，77 kV母線からみた電源側の%リアクタンス $X_{\mathrm{s}}$ は，

$$
X_{\mathrm{s}}=(3+6.4+4.235\,3)\times\frac{20}{3+6.4+4.235\,3+20}=8.107\,7\%
$$

よって，77 kV母線の短絡容量 $P_{\mathrm{s}}$ は，

$$
P_{\mathrm{s}}=\frac{100}{X_{\mathrm{s}}}\times100=\frac{100}{8.107\,7}\times100=1\,233.3\quad\to\quad1\,230\ \mathrm{MV\cdot A}
$$
