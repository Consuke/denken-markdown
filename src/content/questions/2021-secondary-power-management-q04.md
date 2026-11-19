---
title: "2021年度 電力・管理 問4 分散形電源の逆潮流と配電線電圧"
year: 2021
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_q01.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20211114_ch_second_a01.pdf#page=3"
sourceNote: "ユーザー提供の問題PDF 6ページと公式標準解答PDF 3・4ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2021年度の電験二種二次試験，電力・管理の問4。分散形電源の逆潮流と配電線電圧の問題と公式標準解答。"
---

## 問題

分散形電源の系統連系に関して，次の問に答えよ。

図に示す6.6 kV三相3線式高圧配電線の末端に，分散形電源を有する需要家が連系されている。

### (1)

需要家から配電線へ逆潮流（力率1）がある場合の，需要家端の相電圧（1線と中性点間の電圧）$\dot{E}_{\mathrm{r}}$と変電所の相電圧$\dot{E}_{\mathrm{s}}$の関係を示すベクトル図及び関係式を，$\dot{E}_{\mathrm{s}}$，$\dot{E}_{\mathrm{r}}$，$\dot{I}$，$R$，$X$を用いて描け。ただし，ベクトル図は$\dot{E}_{\mathrm{r}}$（位相0）を基準とし，電流$\dot{I}$は図中の矢印の向きを正とする。

### (2)

小問(1)のベクトル図から需要家端の線間電圧値を求めよ。ただし，需要家端からの逆潮流は1000 kW，力率は1（分散形電源，負荷設備ともに1）であり，高圧配電線は当該需要家のみの専用線とし，1線当たりの抵抗$R$及びリアクタンス$X$はそれぞれ3 $\Omega$及び$3\sqrt{3}\ \Omega$，変電所端の線間電圧は6.6 kVで一定とする。

![6.6 kV配電線末端の分散形電源と負荷。抵抗3Ω・リアクタンス3√3Ωを介した逆潮流1000 kW](/diagrams/questions/2021/2021-secondary-power-management-q04-fig01.png)

## 解答

### (1)

抵抗を$R$，リアクタンスを$X$，線路電流を$\dot{I}$とすると，需要家から逆潮流があるので，相電圧$\dot{E}_{\mathrm{r}}$を基準に取ると，$\dot{E}_{\mathrm{r}}-(R+\mathrm{j}X)\dot{I}=\dot{E}_{\mathrm{s}}$であることから，

$$
\dot{E}_{\mathrm{r}}=\dot{E}_{\mathrm{s}}+(R+\mathrm{j}X)\dot{I}\tag{1}
$$

①式が得られる。…（答）

ベクトル図は以下のとおりとなる。

![公式解答 需要家端と変電所の相電圧，抵抗・リアクタンスの電圧降下のベクトル図](/diagrams/questions/2021/2021-secondary-power-management-q04-answer-fig01.png)

### (2)

ベクトル図から，次式が成立する。

$$
E_{\mathrm{s}}^2=(E_{\mathrm{r}}-RI)^2+(XI)^2\tag{2}
$$

逆潮流は$P=3E_{\mathrm{r}}I$，つまり$I=\dfrac{P}{3E_{\mathrm{r}}}$であるから，②式は，

$$
E_{\mathrm{s}}^2=\left(E_{\mathrm{r}}+\frac{PR}{3E_{\mathrm{r}}}\right)^2+\left(\frac{PX}{3E_{\mathrm{r}}}\right)^2\tag{3}
$$

となる。②式で電圧を[kV]にとると，$P$は[MW]になるから，題意の$P=1.0$ MW，$R=3\ \Omega$，$X=3\sqrt{3}\ \Omega$，$E_{\mathrm{s}}=\dfrac{6.6}{\sqrt{3}}$ kVを②式に代入する。

$$
\left(\frac{6.6}{\sqrt{3}}\right)^2=\left(E_{\mathrm{r}}-\frac{1.0\times3}{3E_{\mathrm{r}}}\right)^2+\left(\frac{1.0\times3\sqrt{3}}{3E_{\mathrm{r}}}\right)^2\tag{4}
$$

$$
\left(\frac{6.6}{\sqrt{3}}\right)^2=E_{\mathrm{r}}^2-2+\frac{1}{E_{\mathrm{r}}^2}+\frac{3}{E_{\mathrm{r}}^2}
$$

$$
16.52=E_{\mathrm{r}}^2+\frac{4}{E_{\mathrm{r}}^2}
$$

$$
E_{\mathrm{r}}^4-16.52E_{\mathrm{r}}^2+4=0\tag{5}
$$

⑤式より，

$$
E_{\mathrm{r}}^2=\frac{16.52\pm\sqrt{16.52^2-4\times4}}{2}\fallingdotseq16.274,\ 0.246
$$

となるが，明らかに0.246は不適である。

よって，需要家端の線間電圧の大きさ$V_{\mathrm{r}}$は以下のとおりとなる。

$$
V_{\mathrm{r}}=\sqrt{3}E_{\mathrm{r}}=6.9873\ \mathrm{kV}\fallingdotseq6990\ \mathrm{V}\quad\text{（答）}
$$
