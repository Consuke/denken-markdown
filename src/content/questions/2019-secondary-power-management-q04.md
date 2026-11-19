---
title: "2019年度 電力・管理 問4 負荷分布と低圧配電線の電力損失"
year: 2019
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 令和元年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20191117_ch_second_a01.pdf#page=4"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 4・5・6ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2019年度の電験二種二次試験，電力・管理の問4。負荷分布と低圧配電線の電力損失の問題と公式標準解答。"
---

## 問題

配電系統の電力損失を低減することはエネルギー資源の効率的な活用に有用である。次の問に答えよ。

### (1)

柱上変圧器を重負荷地点近傍に設置することは，電力損失を低減する方策の一つである。これ以外の配電系統の電力損失低減策を三つ述べよ。

### (2)

柱上変圧器を重負荷地点近傍に設置することによる電力損失低減効果について，a）平等負荷分布（各地点での負荷電流が同じ）及びb）不平等負荷分布における電力損失を求めることにより，b）がa）より小さくなることを示したい。

- a）図1に示すように，平等負荷分布である単相2線式の低圧配電系統において，電線こう長$L$ [m]，A点から$x$ [m]だけ離れた地点の線路電流$I_x$ [A]を求めたうえで，低圧配電線の全区間の電力損失を$I_{\mathrm{s}}$，$L$，$r$を用いて求めよ。ただし，変圧器二次側の送電線電流$I_{\mathrm{s}}$ [A]，電線単位長抵抗$r$ [$\Omega$/m]とし，配電線路の線路特性は均一として，電源電圧は一定であるものとする。
- b）図2に示すように，末端へ行くほど直線的に減少する不平等負荷分布である単相2線式の低圧配電系統において，A′点から$x'$ [m]だけ離れた地点の負荷電流密度$i'_{x'}$ [A/m]及び線路電流$I'_{x'}$ [A]を，A′点の負荷電流密度$i'_0$ [A/m]を用いて求めたうえで，低圧配電線の全区間の電力損失を$I_{\mathrm{s}}$，$L$，$r$を用いて求めよ。ただし，電流分布以外の条件はa）と同様とする。

![図1 平等負荷分布の配電線。長さL，始端電流Isと途中の線路電流Ix](/diagrams/questions/2019/2019-secondary-power-management-q04-fig01.png)

![図2 末端に向けて負荷電流密度が直線的に減少する不平等負荷分布](/diagrams/questions/2019/2019-secondary-power-management-q04-fig02.png)

## 解答

### (1)

以下の項目から3項目記載されていればよい。

- 配電電圧を格上げする（昇圧）。
- 力率改善用コンデンサを設置する。
- 負荷電流の不平衡を是正する。
- 電線の太線化
- 回線数を増加する。（複線化，ネットワーク化，単相3線方式の採用など）
- 低損失の柱上変圧器を適用

など

### (2)

#### a

図1より①式が成り立つことから，A点から$x$点だけ離れた地点の線路電流$I_x$は，②式で求められる。

$$
\frac{I_{\mathrm{s}}}{L}=\frac{I_x}{L-x}\tag{1}
$$

$$
\therefore I_x=I_{\mathrm{s}}\cdot\frac{L-x}{L}\tag{2}
$$

…（答）

配電線の単位長当たりの線路抵抗は$r$ [$\Omega$/m]であり，配電線路の線路特性は均一であるため，電線1線当たりの電力損失$W_{1x}$は，次式で与えられる。

$$
\begin{aligned}
W_{1x}&=\int_0^L I_x^2\cdot r\,\mathrm{d}x=\int_0^L\left(I_{\mathrm{s}}\cdot\frac{L-x}{L}\right)^2\cdot r\,\mathrm{d}x\\
&=\frac{I_{\mathrm{s}}^2\cdot r}{L^2}\int_0^L(L-x)^2\,\mathrm{d}x
=\frac{I_{\mathrm{s}}^2\cdot r}{L^2}\left[L^2x-Lx^2+\frac{x^3}{3}\right]_0^L\\
&=\frac{I_{\mathrm{s}}^2\cdot r}{L^2}\left(L^3-L^3+\frac{L^3}{3}\right)=\frac{I_{\mathrm{s}}^2\cdot L\cdot r}{3}
\end{aligned}
$$

ゆえに，単相2線式の低圧配電系統における全区間の電力損失$W_{2x}$は，次式のとおりとなる。

$$
W_{2x}=2\cdot\frac{I_{\mathrm{s}}^2\cdot L\cdot r}{3}=\frac{2}{3}\cdot I_{\mathrm{s}}^2\cdot L\cdot r\ [\mathrm{W}]\quad\text{（答）}
$$

#### b

解図より，A′点から$x'$点だけ離れた地点の負荷電流密度$i'_{x'}$は，始端の負荷電流密度$i'_0$を用いて次式で表される。

![公式解答 不平等負荷分布の給電。始端の電流密度と距離x′における電流密度](/diagrams/questions/2019/2019-secondary-power-management-q04-answer-fig01.png)

$$
i'_{x'}=\frac{L-x'}{L}\cdot i'_0\ [\mathrm{A/m}]\quad\text{（答）}
$$

$x'$点の線路電流$I'_{x'}$は，次式で表される。

$$
\begin{aligned}
I'_{x'}&=\int_{x'}^L i'_{x'}\,\mathrm{d}x'=\frac{i'_0}{L}\int_{x'}^L(L-x')\,\mathrm{d}x'\\
&=\frac{i'_0}{L}\left[Lx'-\frac{1}{2}x'^2\right]_{x'}^L
=\frac{i'_0}{2L}(L^2-2Lx'+x'^2)\\
&=\frac{i'_0}{2L}(L-x')^2\quad\text{（答）}
\end{aligned}
$$

配電線の単位長当たりの線路抵抗は$r$ [$\Omega$/m]であり，配電線路の線路特性は均一であるため，電線1線当たりの電力損失$W_{1x'}$は，次式で与えられる。

$$
\begin{aligned}
W_{1x'}&=\int_0^L I_{x'}'^2\cdot r\,\mathrm{d}x'
=\int_0^L\left[\frac{i'_0}{2L}(L-x')^2\right]^2\cdot r\,\mathrm{d}x'\\
&=\frac{ri_0'^2}{4L^2}\int_0^L(L-x')^4\,\mathrm{d}x'\\
&=\frac{ri_0'^2}{4L^2}\int_0^L(L^4-4L^3x'+6L^2x'^2-4Lx'^3+x'^4)\,\mathrm{d}x'\\
&=\frac{ri_0'^2}{4L^2}\left[L^4x'-2L^3x'^2+2L^2x'^3-Lx'^4+\frac{1}{5}x'^5\right]_0^L\\
&=\frac{ri_0'^2}{4L^2}\left[\frac{1}{5}L^5\right]=\frac{rL^3}{20}i_0'^2
\end{aligned}
$$

ゆえに，単相2線式の低圧配電系統における全区間の電力損失$W_{2x'}$は，次式のようになる。

$$
W_{2x'}=2\cdot\frac{rL^3}{20}\cdot i_0'^2=\frac{1}{10}i_0'^2\cdot L^3\cdot r\ [\mathrm{W}]
$$

ここで，$I_{\mathrm{s}}=\dfrac{1}{2}Li'_0$であることから，$i'_0=\dfrac{2I_{\mathrm{s}}}{L}$を上式に代入する。

$$
W_{2x'}=\frac{1}{10}\left(\frac{2I_{\mathrm{s}}}{L}\right)^2\cdot L^3\cdot r
=\frac{2}{5}I_{\mathrm{s}}^2\cdot L\cdot r\ [\mathrm{W}]\quad\text{（答）}
$$
