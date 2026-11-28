---
title: "2021年度 一次試験 理論 問7 発光ダイオード（LED）の点灯回路"
year: 2021
examStage: primary
subject: theory
questionNumber: 7
topics: [electronics, dc-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_q01.pdf#page=16"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 16〜17ページ（冊子13〜14ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2021年度の電験二種一次試験、理論の問7。発光ダイオード（LED）の点灯回路に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，発光ダイオード(LED)の点灯回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。ただし，LED の明るさは LED を流れる電流に比例するとする。

点灯時の LED の順方向電圧 $V_{\mathrm{D}}$ はほぼ一定値となる。このため点灯時の LED の解析は，LED を図 1 のように大きさ $V_{\mathrm{D}}$ の直流電圧源で置き換えて考えると簡略化できる。

まず，図 2 の回路を用いて LED を点灯させた。LED に直列に接続する抵抗 $R$ の役割は［(1)］である。LED を流れる電流は LED を直流電圧源 $V_{\mathrm{D}}$ に置き換えることで［(2)］と求められる。

次に，2 個の LED を点灯させるために図 3 及び図 4 の回路を作製した。このとき図 3 及び図 4 で用いた全ての LED の特性は等しく，$V_{\mathrm{D}}$ は全て 2 V とする。図 3 の $V_{\mathrm{in}}$ が 5 V であるとき図 3 の LED を流れる電流を 50 mA とするためには図 3 の抵抗 $R$ を［(3)］Ω とすればよい。図 3 と図 4 の抵抗 $R$ を［(3)］Ω とし，図 3 と図 4 の全ての LED の明るさが等しくなるように図 4 の $V_{\mathrm{in}}$ を調整した。このとき図 4 の回路の消費電力は［(4)］mW である。

図 3 及び図 4 の 2 個の LED のうち片方の LED が破損し断線したときにも，もう一方の LED が点灯し続けるのは［(5)］である。

![図1はLEDを大きさVDの直流電圧源に置き換える様子。図2は直流電圧源Vin，LED，抵抗Rの直列回路](/diagrams/questions/2021/2021-primary-theory-q07-fig01.png)

![図3は直流電圧源VinにLED 2個と抵抗Rを直列に接続した回路。図4は直流電圧源Vinに，LEDと抵抗Rを直列にした枝を2本並列に接続した回路](/diagrams/questions/2021/2021-primary-theory-q07-fig02.png)

### 問7の解答群

- (イ) 300
- (ロ) 500
- (ハ) LED の破損防止
- (ニ) 250
- (ホ) 図 3
- (ヘ) 60
- (ト) 20
- (チ) $\dfrac{V_{\mathrm{in}}+V_{\mathrm{D}}}{R}$
- (リ) 図 3 と図 4 の両方
- (ヌ) 50
- (ル) LED の保温
- (ヲ) LED の明るさの向上
- (ワ) $\dfrac{V_{\mathrm{in}}}{R}$
- (カ) 図 4
- (ヨ) $\dfrac{V_{\mathrm{in}}-V_{\mathrm{D}}}{R}$

## 解答

- (1)：(ハ) LED の破損防止
- (2)：(ヨ) $\dfrac{V_{\mathrm{in}}-V_{\mathrm{D}}}{R}$
- (3)：(ト) 20
- (4)：(イ) 300
- (5)：(カ) 図 4
