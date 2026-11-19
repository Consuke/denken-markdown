---
title: "2018年度 電力・管理 問1 河川流量と自流式水力発電所の最大出力"
year: 2018
examStage: "secondary"
subject: "power-management"
questionNumber: 1
topics: ["hydro-generation"]
sourceName: "一般財団法人 電気技術者試験センター 平成30年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_q01.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20181118_ch_second_a01.pdf#page=1"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 1ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2018年度の電験二種二次試験，電力・管理の問1。河川流量と自流式水力発電所の最大出力の問題と公式標準解答。"
---

## 問題

河川の流域面積が200 km²，年間降水量が1500 mm，流出係数0.7の河川がある。この河川に最大使用水量が年間平均流量の2倍の自流式発電所を設置するとき，次の問に答えよ。

ただし，取水口標高420 m，水車中心標高185 m，放水口標高200 m，損失落差を総落差の5%，水車効率90%，発電機効率98%，1年は365日とする。

### (1)

この河川の年間平均流量[m³/s]を求めよ。

### (2)

発電所の最大出力[kW]を求めよ。

## 解答

### (1)

河川への年間総流入量$V$は「流域面積×年間降水量×流出係数」であることから$V=200\times10^6\times1500\times10^{-3}\times0.7=210\times10^6$であるので，河川の年間平均流量$Q_{\mathrm{a}}$ [m³/s]は，以下により求められる。

$$
Q_{\mathrm{a}}=\frac{200\times10^6\times1.5\times0.7}{365\times24\times60\times60}
=6.6591\quad\longrightarrow\quad6.66\ \mathrm{m^3/s}\quad\text{（答）}
$$

### (2)

発電機出力$P_{\mathrm{m}}$ [kW] $=9.8\times Q$（使用水量）$\times H$（有効落差）$\times\eta_{\mathrm{w}}$（水車効率）$\times\eta_{\mathrm{g}}$（発電機効率）で求められ，題意より最大使用水量は$Q_{\mathrm{m}}=Q_{\mathrm{a}}\times2$であることから，

$$
\begin{aligned}
P&=9.8Q_{\mathrm{m}}H\eta_{\mathrm{w}}\eta_{\mathrm{g}}\\
&=9.8\times6.6591\times2\times(420-200)\times(1-0.05)\times0.9\times0.98\\
&=24059\quad\longrightarrow\quad24100\ \mathrm{kW}\quad\text{（答）}
\end{aligned}
$$
