---
title: "2017年度 電力・管理 問4 配電線のループ電流"
year: 2017
examStage: "secondary"
subject: "power-management"
questionNumber: 4
topics: ["transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成29年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf#page=6"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 6・7ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2017年度の電験二種二次試験，電力・管理の問4。配電線のループ電流の問題と公式標準解答。"
---

## 問題

図に示すように変電所の同一のバンクからA配電線とB配電線の2回線が引き出されており，負荷はそれぞれの配電系統の末端に集中して接続されているものとする。配電線路運用における区間切り換えのため，以下に示す条件のもとで連系開閉器を投入したときの連系点の電圧が6.6 kVになった際の，図に示す連系点に流れるループ電流$\dot{I}$の大きさを以下の小問に従って答えよ。ただし，それぞれの配電系統のインピーダンス及び系統末端負荷への供給電力は以下に示される条件とし，連系線のインピーダンスは0 $\Omega$で，かつ，連系開閉器投入後も各負荷の消費電力は変わらないもの（定電力負荷）とする。

［条件］

- A配電線の末端負荷への供給電力：有効電力2400 kW，進み無効電力800 kvar
- A配電線のインピーダンス：$\dot{Z}_{\mathrm{A}}=R_{\mathrm{A}}+\mathrm{j}X_{\mathrm{A}}=0.3+\mathrm{j}0.39\ \Omega$
- B配電線の末端負荷への供給電力：有効電力1715 kW，遅れ無効電力457 kvar
- B配電線のインピーダンス：$\dot{Z}_{\mathrm{B}}=R_{\mathrm{B}}+\mathrm{j}X_{\mathrm{B}}=0.2+\mathrm{j}0.16\ \Omega$

![変電所の同一バンクから延びるA・B配電線。末端負荷，連系開閉器とループ電流の向き](/diagrams/questions/2017/2017-secondary-power-management-q04-fig01.png)

### (1)

連系開閉器投入後の負荷電流$\dot{I}_{\mathrm{A}}$，$\dot{I}_{\mathrm{B}}$を，連系点の電圧の位相を基準（位相0）として求めよ。

### (2)

(1)を用いて連系点に流れるループ電流$\dot{I}$の大きさを求めよ。

## 解答

### (1)

連系開閉器投入後の各配電線の負荷電流$\dot{I}_{\mathrm{A}}$，$\dot{I}_{\mathrm{B}}$は，連系点の電圧$V$が6.6 kVであることから，

$$
\begin{aligned}
\dot{I}_{\mathrm{A}}&=\frac{\overline{P-\mathrm{j}Q}}{\sqrt{3}V}
=\frac{(2400+\mathrm{j}800)\times10^3}{\sqrt{3}\times6.6\times10^3}
\fallingdotseq209.95+\mathrm{j}69.982\\
&\longrightarrow210+\mathrm{j}70.0\ \mathrm{A}\quad\text{（答）}\\
\dot{I}_{\mathrm{B}}&=\frac{\overline{P+\mathrm{j}Q}}{\sqrt{3}V}
=\frac{(1715-\mathrm{j}457)\times10^3}{\sqrt{3}\times6.6\times10^3}
\fallingdotseq150.02-\mathrm{j}39.977\\
&\longrightarrow150-\mathrm{j}40.0\ \mathrm{A}\quad\text{（答）}
\end{aligned}
$$

となる。

### (2)

$\dot{I}_{\mathrm{A}}$，$\dot{I}_{\mathrm{B}}$の合計電流$\dot{I}_{\mathrm{sum}}$は，

$$
\begin{aligned}
\dot{I}_{\mathrm{sum}}&=\dot{I}_{\mathrm{A}}+\dot{I}_{\mathrm{B}}\\
&=(209.95+\mathrm{j}69.982)+(150.02-\mathrm{j}39.977)\\
&=359.97+\mathrm{j}30.005\ \mathrm{A}
\end{aligned}
$$

連系開閉器を投入したときに，下図に示すようにループ電流$\dot{I}$が生じる。

![公式解答の連系開閉器投入後の配電線路図。連系点6.6 kV，A配電系統の線路電流とループ電流](/diagrams/questions/2017/2017-secondary-power-management-q04-answer-fig01.png)

連系開閉器投入後のA配電系統の線路電流$\dot{I}_{\mathrm{a}}$は合計電流$\dot{I}_{\mathrm{sum}}$に対して，線路インピーダンスの逆比で流れる。

したがって，

$$
\begin{aligned}
\dot{I}&=\dot{I}_{\mathrm{a}}-\dot{I}_{\mathrm{A}}\\
&=\frac{\dot{Z}_{\mathrm{B}}}{\dot{Z}_{\mathrm{A}}+\dot{Z}_{\mathrm{B}}}\dot{I}_{\mathrm{sum}}-\dot{I}_{\mathrm{A}}\\
&=\frac{0.2+\mathrm{j}0.16}{0.3+\mathrm{j}0.39+0.2+\mathrm{j}0.16}(359.97+\mathrm{j}30.005)-(209.95+\mathrm{j}69.982)\\
&=\frac{0.188-\mathrm{j}0.03}{0.5525}(359.97+\mathrm{j}30.005)-(209.95+\mathrm{j}69.982)\\
&=-85.833-\mathrm{j}79.318
\end{aligned}
$$

$$
\left|\dot{I}\right|=\sqrt{(-85.833)^2+(-79.318)^2}\fallingdotseq116.87\ \mathrm{A}
\quad\longrightarrow\quad117\ \mathrm{A}\quad\text{（答）}
$$

なお，ループ回路にキルヒホッフの法則を用いた場合も同じ解を導出できるため正解とする。
