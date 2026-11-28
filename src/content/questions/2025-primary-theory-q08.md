---
title: "2025年度 一次試験 理論 問8 エミッタ接地増幅回路のバイアスと電圧増幅度"
year: 2025
examStage: primary
subject: theory
questionNumber: 8
topics: [electronics]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2025年度の電験二種一次試験、理論の問8。エミッタ接地増幅回路のバイアスと電圧増幅度に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，エミッタ接地増幅回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

まず，入力電圧 $v_{\mathrm{in}}=0$ とし，図 1 のエミッタ接地増幅回路の各部のバイアス電位及び電流を求める。ただし，回路の電源電圧は $V_{\mathrm{CC}}$ とし，各抵抗器の抵抗値は $R_1$，$R_2$，$R_{\mathrm{E}}$，$R_{\mathrm{C}}$ とする。ベースを流れるバイアス電流 $I_{\mathrm{B}}$ が他の電流に比べ小さく無視できるとき，ベース電位 $V_{\mathrm{B}}$ は［(1)］となる。このとき，エミッタ電流 $I_{\mathrm{E}}$ は，$V_{\mathrm{B}}$ とベース－エミッタ間電圧 $V_{\mathrm{BE}}$ を用いて［(2)］となる。一方，コレクタ電位 $V_{\mathrm{C}}$ は，コレクタ電流 $I_{\mathrm{C}}$ を用いて［(3)］となる。エミッタ電流とコレクタ電流が等しいとみなせるとき，［(2)］と［(3)］から $V_{\mathrm{C}}$ が求まる。

次に，図 1 のエミッタ接地増幅回路の電圧増幅度を求める。各コンデンサの静電容量は $C_1$，$C_2$，$C_{\mathrm{E}}$ であり，信号の周波数において，全てのコンデンサのインピーダンスは小さく無視できるとする。このとき，図 1 の交流等価回路は図 2 となる。図 2 において破線で囲まれた部分はトランジスタの交流等価回路であり，$h_{\mathrm{ie}}$ と $h_{\mathrm{fe}}$ はそれぞれ用いたトランジスタの入力インピーダンスと電流増幅率である。入力電圧 $v_{\mathrm{in}}$ を加えた際の出力電圧は $v_{\mathrm{out}}$ より，電圧増幅度 $\dfrac{v_{\mathrm{out}}}{v_{\mathrm{in}}}$ は［(4)］となる。電圧増幅度の符号から，エミッタ接地増幅回路は［(5)］であることが分かる。

![図1 エミッタ接地増幅回路。入力vinを結合コンデンサC1を介してベースへ，ベースはR1とR2で電源VCCを分圧してバイアス，コレクタ抵抗RC，エミッタ抵抗REとバイパスコンデンサCE，出力はコレクタからC2を介してvout](/diagrams/questions/2025/2025-primary-theory-q08-fig01.png)

![図2 交流等価回路。vinにR1，R2が並列で，破線で囲んだトランジスタの等価回路は入力インピーダンスhieと電流源hfe・ib，出力側にRCが並列で出力電圧vout](/diagrams/questions/2025/2025-primary-theory-q08-fig02.png)

### 問8の解答群

- (イ) $\dfrac{R_2}{R_1+R_2}V_{\mathrm{CC}}$
- (ロ) 非反転増幅回路
- (ハ) $V_{\mathrm{CC}}-R_{\mathrm{C}}I_{\mathrm{C}}$
- (ニ) $\dfrac{h_{\mathrm{fe}}R_{\mathrm{C}}}{h_{\mathrm{ie}}}$
- (ホ) $\dfrac{V_{\mathrm{B}}-V_{\mathrm{BE}}}{R_{\mathrm{E}}+R_{\mathrm{C}}}$
- (ヘ) $\dfrac{R_1}{R_1+R_2}V_{\mathrm{CC}}$
- (ト) $\dfrac{V_{\mathrm{B}}+V_{\mathrm{BE}}}{R_{\mathrm{E}}}$
- (チ) エミッタフォロワ
- (リ) $\dfrac{(1+h_{\mathrm{fe}})R_{\mathrm{C}}}{h_{\mathrm{ie}}+(1+h_{\mathrm{fe}})R_{\mathrm{C}}}$
- (ヌ) $\dfrac{V_{\mathrm{CC}}}{2}$
- (ル) $R_{\mathrm{C}}I_{\mathrm{C}}$
- (ヲ) $V_{\mathrm{CC}}-R_1I_{\mathrm{B}}$
- (ワ) $\dfrac{V_{\mathrm{B}}-V_{\mathrm{BE}}}{R_{\mathrm{E}}}$
- (カ) 反転増幅回路
- (ヨ) $-\dfrac{h_{\mathrm{fe}}R_{\mathrm{C}}}{h_{\mathrm{ie}}}$

## 解答

- (1)：(イ) $\dfrac{R_2}{R_1+R_2}V_{\mathrm{CC}}$
- (2)：(ワ) $\dfrac{V_{\mathrm{B}}-V_{\mathrm{BE}}}{R_{\mathrm{E}}}$
- (3)：(ハ) $V_{\mathrm{CC}}-R_{\mathrm{C}}I_{\mathrm{C}}$
- (4)：(ヨ) $-\dfrac{h_{\mathrm{fe}}R_{\mathrm{C}}}{h_{\mathrm{ie}}}$
- (5)：(カ) 反転増幅回路
