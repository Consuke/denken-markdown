---
title: "2014年度 電力・管理 問4 高圧配電線の受電端電圧と電圧降下率"
year: 2014
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q01.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=5"
sourceNote: "ユーザー提供の問題PDF 6ページと公式標準解答PDF 5-6ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，電力・管理の問4。高圧配電線の受電端電圧と電圧降下率の問題と公式標準解答。"
---

## 問題

図に示す等価回路の三相3線式1回線の高圧配電系統がある。電源側S点の線間電圧6.93 kV，1線当たりの抵抗5 Ω，リアクタンス7 Ωであるとき，次の問に答えよ。ただし，負荷は三相抵抗負荷とする。

### (1)

電源側の相電圧$\dot{E}_{\mathrm{s}}$，受電端の相電圧$\dot{E}_{\mathrm{r}}$，負荷電流$\dot{I}_{\mathrm{r}}$のベクトルを図示せよ。

### (2)

負荷電流が50 A流れた際の受電端の線間電圧$\sqrt{3}\left|\dot{E}_{\mathrm{r}}\right|$ [kV]を上記(1)で表したベクトル図の関係式から求めよ。ただし，当該線路に他の負荷はなく，漏れ電流等は無視できるものとする。

### (3)

受電端B点において線路の電圧降下率が10 %となる三相抵抗負荷電力[kW]及びそのときの負荷電流[A]を求めよ。

![三相3線式1回線高圧配電系統の1相分の等価回路。電源側S（相電圧Ės）から抵抗R，リアクタンスjXを経て受電端B（相電圧Ėr）の負荷に電流İrが流れる](/diagrams/questions/2014/2014-secondary-power-management-q04-fig01.png)

## 解答

### (1)

![ベクトル図。İrとĖrは同相で，ĖrにR·İrとjX·İrを加えるとĖsとなる（R·İrとjX·İrの順序はどちらでもよい）](/diagrams/questions/2014/2014-secondary-power-management-q04-fig02.png)

…（答）

### (2)

負荷電流$\dot{I}_{\mathrm{r}}$，線路の抵抗及びリアクタンスを$R$，$X$，電源側，受電端の相電圧を$\dot{E}_{\mathrm{s}}$，$\dot{E}_{\mathrm{r}}$とおくと，$\dot{I}_{\mathrm{r}}$は抵抗負荷であるため$\dot{E}_{\mathrm{r}}$と同相となる。

$$
\begin{aligned}
\dot{E}_{\mathrm{s}}&=\dot{E}_{\mathrm{r}}+\dot{I}_{\mathrm{r}}(R+\mathrm{j}X)\\
&=(\dot{E}_{\mathrm{r}}+R\dot{I}_{\mathrm{r}})+\mathrm{j}(X\dot{I}_{\mathrm{r}})
\end{aligned}
$$

両辺の絶対値の2乗を求める。

$$
E_{\mathrm{s}}^2=(E_{\mathrm{r}}+RI_{\mathrm{r}})^2+(XI_{\mathrm{r}})^2
$$

題意より，$E_{\mathrm{s}}=\dfrac{6.93}{\sqrt{3}}$ kV，$R=5$ Ω，$X=7$ Ω，$I_{\mathrm{r}}=50$ Aを代入すると，

$$
\begin{aligned}
\left(\frac{6\,930}{\sqrt{3}}\right)^2&=(E_{\mathrm{r}}+5\times50)^2+(7\times50)^2\\
16\,008\,300&=E_{\mathrm{r}}^2+2\times250E_{\mathrm{r}}+62\,500+122\,500\\
E_{\mathrm{r}}^2+2\times250E_{\mathrm{r}}-15\,823\,300&=0\\
E_{\mathrm{r}}&=\frac{-250\pm\sqrt{(250)^2-1\times(-15\,823\,300)}}{1}=3\,735.7\ \mathrm{V}=\frac{6\,470.4}{\sqrt{3}}\ \mathrm{V}
\end{aligned}
$$

（±のマイナスは不適）

受電端の線間電圧は，

$$
\sqrt{3}\left|\dot{E}_{\mathrm{r}}\right|=\sqrt{3}E_{\mathrm{r}}=6\,470.4\ \mathrm{V}\ \rightarrow\ 6.47\ \mathrm{kV}\quad\text{（答）}
$$

### (3)

負荷電流$\dot{I}_{\mathrm{r}}$，線路の抵抗及びリアクタンスを$R$，$X$，電源側，受電端の相電圧を$\dot{E}_{\mathrm{s}}$，$\dot{E}_{\mathrm{r}}$とおくと，$\dot{I}_{\mathrm{r}}$は抵抗負荷であるため$\dot{E}_{\mathrm{r}}$と同相となる。

$$
\begin{aligned}
\dot{E}_{\mathrm{s}}&=\dot{E}_{\mathrm{r}}+\dot{I}_{\mathrm{r}}(R+\mathrm{j}X)\\
&=(\dot{E}_{\mathrm{r}}+R\dot{I}_{\mathrm{r}})+\mathrm{j}(X\dot{I}_{\mathrm{r}})
\end{aligned}
$$

両辺の絶対値の2乗を求める。

$$
\begin{aligned}
E_{\mathrm{s}}^2&=(E_{\mathrm{r}}+RI_{\mathrm{r}})^2+(XI_{\mathrm{r}})^2\\
E_{\mathrm{s}}^2&=E_{\mathrm{r}}^2+2E_{\mathrm{r}}RI_{\mathrm{r}}+R^2I_{\mathrm{r}}^2+X^2I_{\mathrm{r}}^2\\
&(R^2+X^2)I_{\mathrm{r}}^2+2E_{\mathrm{r}}RI_{\mathrm{r}}+(E_{\mathrm{r}}^2-E_{\mathrm{s}}^2)=0\\
I_{\mathrm{r}}&=\frac{-E_{\mathrm{r}}R\pm\sqrt{(E_{\mathrm{r}}R)^2-(R^2+X^2)(E_{\mathrm{r}}^2-E_{\mathrm{s}}^2)}}{R^2+X^2}
\end{aligned}
$$

線路の電圧降下率10 %より，$\dfrac{\left|\dot{E}_{\mathrm{s}}\right|-\left|\dot{E}_{\mathrm{r}}\right|}{\left|\dot{E}_{\mathrm{r}}\right|}=0.1$，ゆえに$\left|\dot{E}_{\mathrm{r}}\right|=E_{\mathrm{r}}=\dfrac{6\,300}{\sqrt{3}}$ V

$E_{\mathrm{s}}=\dfrac{6.93}{\sqrt{3}}$ kV，$E_{\mathrm{r}}=\dfrac{6.3}{\sqrt{3}}$ kV，$R=5$ Ω，$X=7$ Ωを代入すると，

$$
\begin{aligned}
I_{\mathrm{r}}&=\frac{-\dfrac{6.3}{\sqrt{3}}\times5\pm\sqrt{\left(\dfrac{6.3}{\sqrt{3}}\times5\right)^2-(5^2+7^2)\left[\left(\dfrac{6.3}{\sqrt{3}}\right)^2-\left(\dfrac{6.93}{\sqrt{3}}\right)^2\right]}}{5^2+7^2}\times1\,000\\
&\fallingdotseq67.197\ \rightarrow\ 67.2\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

（±のマイナスは不適）

したがって，抵抗負荷$P_1$は，

$$
P_1=3\times E_{\mathrm{r}}\times I_{\mathrm{r}}=3\times\frac{6\,300}{\sqrt{3}}\times67.2\fallingdotseq733\,281\ \rightarrow\ 733\ \mathrm{kW}\quad\text{（答）}
$$
