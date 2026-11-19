---
title: "2022年度 電力・管理 問1 調整池式水力発電所のピーク運用"
year: 2022
examStage: "secondary"
subject: "power-management"
questionNumber: 1
topics: ["hydro-generation"]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_q01.pdf#page=3"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf#page=1"
sourceNote: "ユーザー提供の問題PDF 3ページと公式標準解答PDF 1ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2022年度の電験二種二次試験，電力・管理の問1。調整池式水力発電所のピーク運用の問題と公式標準解答。"
---

## 問題

調整池式の水力発電所の運用に関して，次の問に答えよ。

有効貯水量$180\times10^3$ m³の調整池を有する有効落差60 mの水力発電所がある。自然流量が20 m³/sであるとき，図に示す負荷曲線で運転した場合のピーク負荷時の出力[kW]及びオフピーク負荷時の出力[kW]を求めよ。ただし，年間を通して毎日同様の運転を繰り返すものとし，調整池は最大限活用し，オフピーク負荷時には越流させないこととする。

なお，水車と発電機の合成効率は，ピーク負荷時出力で85%，オフピーク負荷時出力で80%とする。

また，発電機の定格出力はピーク負荷を十分供給できるものとする。

![負荷曲線。16時から22時までがピーク負荷，その他の時間はオフピーク負荷](/diagrams/questions/2022/2022-secondary-power-management-q01-fig01.png)

## 解答

貯水容量$V$ [m³]，自然流量$Q$ [m³/s]及びピーク負荷時間$T$ [h]としたときのピーク負荷時使用水量$Q_{\mathrm{p}}$，オフピーク負荷時使用水量$Q_{\mathrm{o}}$は以下のとおり。

$$
Q_{\mathrm{p}}=Q+\frac{V}{60\times60\times T},\qquad
Q_{\mathrm{o}}=Q-\frac{V}{60\times60\times(24-T)}
$$

よって，題意より，

$$
Q_{\mathrm{p}}=20+\frac{180\times10^3}{3600\times6}=28.333\ \mathrm{m^3/s}
$$

$$
Q_{\mathrm{o}}=20-\frac{180\times10^3}{3600\times18}=17.222\ \mathrm{m^3/s}
$$

ピーク時出力を$P_{\mathrm{p}}$ [kW]，オフピーク時出力を$P_{\mathrm{o}}$ [kW]とすると，

$$
P_{\mathrm{p}}=9.8\times28.333\times60\times0.85=14161=14200\ \mathrm{kW}\quad\text{（答）}
$$

$$
P_{\mathrm{o}}=9.8\times17.222\times60\times0.80=8101.2=8100\ \mathrm{kW}\quad\text{（答）}
$$
