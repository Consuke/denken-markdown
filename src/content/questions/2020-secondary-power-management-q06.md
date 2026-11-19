---
title: "2020年度 電力・管理 問6 変圧器の負荷増設と力率改善"
year: 2020
examStage: "secondary"
subject: "power-management"
questionNumber: 6
topics: ["transformers","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_q01.pdf#page=9"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 9・10ページと公式標準解答PDF 8・9・10・11ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2020年度の電験二種二次試験，電力・管理の問6。変圧器の負荷増設と力率改善の問題と公式標準解答。"
---

## 問題

図1は，受変電設備の一部を表した単線結線図である。容量$P_{\mathrm{T}}=12000$ kV・Aの変圧器から，容量$P_1=6000$ kWで，力率$\cos\theta_1=0.8$（遅れ）の負荷に電力を供給しており，変圧器の2次側には，力率改善用コンデンサ$Q_1=2000$ kvarが投入されている。この設備において，次の問に答えよ。なお，力率改善用コンデンサの直列リアクトルは考慮しなくてよい。

![図1 受変電設備の単線結線図。変圧器，既設負荷・コンデンサと増設分](/diagrams/questions/2020/2020-secondary-power-management-q06-fig01.png)

### (1)

上記の運用状況をベクトル図に表すと，図2のようになる。この運用に，さらに容量$P_2=4500$ kWで，力率$\cos\theta_2=0.6$（遅れ）の負荷を増設すると，変圧器は過負荷になるおそれがある。そこで，変圧器を過負荷にしないためには，増設分の力率改善用コンデンサの容量$Q_2$ [kvar]は，少なくともいくら必要か。また，このときの総合力率$\cos\theta_{\mathrm{S}}$はいくらになるか。

### (2)

答案用紙に印刷されている図2に，$P_2$ [kW]，$Q_2$ [kvar]のベクトル図と，力率角$\theta_2$を追記せよ。

### (3)

総合力率を$\cos\theta_{\mathrm{S}}=0.95$（遅れ）にするためには，増設する力率改善用コンデンサの容量$Q_2$ [kvar]はいくら必要か。

![図2 既設負荷P1，コンデンサQ1と変圧器容量PTのベクトル図](/diagrams/questions/2020/2020-secondary-power-management-q06-fig02.png)

## 解答

### (1)

負荷容量$P_1$の遅れ無効電力は，

$$
Q_{\mathrm{L1}}=P_1\times\tan\theta_1=P_1\times\frac{\sin\theta_1}{\cos\theta_1}
=6000\times\frac{0.6}{0.8}=4500\ \mathrm{kvar}
$$

増設負荷$P_2$の遅れ無効電力は，

$$
Q_{\mathrm{L2}}=P_2\times\tan\theta_2=P_2\times\frac{\sin\theta_2}{\cos\theta_2}
=4500\times\frac{0.8}{0.6}=6000\ \mathrm{kvar}
$$

力率改善用コンデンサ$Q_1$は投入されているので，遅れ無効電力の合計は，

$$
Q_{\mathrm{L}}=4500+6000-2000=8500\ \mathrm{kvar}
$$

したがって，合成された負荷の皮相電力は，

$$
S_{\mathrm{L}}=\sqrt{(P_1+P_2)^2+Q_{\mathrm{L}}^2}=\sqrt{(6000+4500)^2+8500^2}=13509\ \mathrm{kV\cdot A}
$$

これは，変圧器の容量を超えているので過負荷となる。

変圧器を過負荷にしないためには，負荷の皮相電力を変圧器容量以下とすればよい。

そのために必要な力率改善用コンデンサ容量を$Q_2$ [kvar]とすると，次式が成立する。

$$
\sqrt{(P_1+P_2)^2+(Q_{\mathrm{L}}-Q_2)^2}\leqq P_{\mathrm{T}}
$$

よって，

$$
\begin{aligned}
Q_2&\geqq Q_{\mathrm{L}}-\sqrt{P_{\mathrm{T}}^2-(P_1+P_2)^2}\\
&=8500-\sqrt{12000^2-(6000+4500)^2}=8500-5809.5=2690.5\ \mathrm{kvar}
\end{aligned}
$$

変圧器を過負荷にしないためには，$Q_2=2.70\times10^3$ kvar必要 …（答）

このとき，負荷の有効電力の合計は，$P_1+P_2=6000+4500=10500$ kW

負荷の皮相電力の合計は，変圧器容量と同じで，$P_{\mathrm{T}}=12000$ kV・A

よって，総合力率は，

$$
\cos\theta_{\mathrm{S}}=\frac{P_1+P_2}{P_{\mathrm{T}}}=\frac{10500}{12000}=0.875\quad\text{（答）}
$$

### (2)

図2に$P_2$ [kW]，$Q_2$ [kvar]のベクトル図と，力率角$\theta_2$を追記する。

![公式解答 図2 追記をしたベクトル図。P2，Q2と力率角θ2](/diagrams/questions/2020/2020-secondary-power-management-q06-answer-fig01.png)

### (3)

総合力率$\cos\theta_{\mathrm{S}}=0.95$にするために必要な力率改善用コンデンサ容量を$Q_2$ [kvar]とすると，次式が成立する。

$$
\tan\theta_{\mathrm{S}}=\frac{Q_{\mathrm{L}}-Q_2}{P_1+P_2}
$$

よって，

$$
\begin{aligned}
Q_2&=Q_{\mathrm{L}}-(P_1+P_2)\times\tan\theta_{\mathrm{S}}
=Q_{\mathrm{L}}-(P_1+P_2)\times\frac{\sqrt{1-\cos^2\theta_{\mathrm{S}}}}{\cos\theta_{\mathrm{S}}}\\
&=8500-(6000+4500)\times\frac{\sqrt{1-0.95^2}}{0.95}=8500-3451.2=5048.8\ \mathrm{kvar}
\end{aligned}
$$

$Q_2=5.05\times10^3$ kvar必要 …（答）
