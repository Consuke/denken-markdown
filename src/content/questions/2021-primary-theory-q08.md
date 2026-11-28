---
title: "2021年度 一次試験 理論 問8 交流ブリッジによるコンデンサの測定と誘電正接"
year: 2021
examStage: primary
subject: theory
questionNumber: 8
topics: [measurement, ac-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和3年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2021年度の電験二種一次試験、理論の問8。交流ブリッジによるコンデンサの測定と誘電正接に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，交流ブリッジによるコンデンサの測定に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図の破線で囲んだ部分は測定対象のコンデンサで，その等価回路は静電容量 $C_1$ と抵抗 $R_1$ の直列回路である。図の $R_2$，$R_3$ 及び $R_4$ は既知の抵抗，$C_2$ は既知の静電容量，Ⓓは検出器である。また，交流電源の電圧を $\dot{E}$，その角周波数を $\omega$ とする。

今，検出器の指示が零となりブリッジが平衡したとすると，次式が成り立つ。

［(1)］

上式から，$R_1=$［(2)］，$C_1=$［(3)］が求められる。

電圧 $\dot{E}_{\mathrm{R}}$，電圧 $\dot{E}_{\mathrm{C}}$ 及び電流 $\dot{I}$ をフェーザ図で表すと［(4)］となる。

フェーザ図に記した $\delta$ の正接である $\tan\delta=$［(5)］は誘電正接と呼ばれ，コンデンサの性能を表す指標の一つである。なお，理想的なコンデンサの誘電正接は零となる。

![交流ブリッジ。4辺のうち左上の辺が測定対象のコンデンサ（破線内，抵抗R1と静電容量C1の直列，電流İ，R1の電圧ĖR，C1の電圧ĖC），右上の辺が抵抗R2，左下の辺が抵抗R3と静電容量C2の直列，右下の辺が抵抗R4。上下の頂点間に検出器Ⓓ，左右の頂点間に交流電源Ėを接続する](/diagrams/questions/2021/2021-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) $\dfrac{R_4}{R_2R_3}$
- (ロ) $\omega C_2R_3$
- (ハ) $\dfrac{C_2R_2}{R_4}$
- (ニ) $\dfrac{R_3R_4}{R_2}$
- (ホ) $\dfrac{R_3}{\omega C_2}$
- (ヘ) $\dfrac{C_2R_4}{R_2}$
- (ト) $\dfrac{R_2R_3}{R_4}$
- (チ) $\dfrac{1}{\omega C_2R_3}$
- (リ) $\dfrac{R_2}{C_2R_4}$
- (ヌ) $\left(R_1+\dfrac{1}{\mathrm{j}\omega C_1}\right)R_4=\left(R_3+\dfrac{1}{\mathrm{j}\omega C_2}\right)R_2$
- (ル) $R_1+R_2+\dfrac{1}{\mathrm{j}\omega C_1}=R_3+R_4+\dfrac{1}{\mathrm{j}\omega C_2}$
- (ヲ) $\left(R_1+\dfrac{1}{\mathrm{j}\omega C_1}\right)R_2=\left(R_3+\dfrac{1}{\mathrm{j}\omega C_2}\right)R_4$
- (ワ) 下図 ![解答群(ワ)のフェーザ図。ĖRとĖCが直角をなして直角三角形をつくり，ĖRが縦軸から角δだけ右に傾く。電流İは横軸より下向きで，ĖRと同じ向きではない](/diagrams/questions/2021/2021-primary-theory-q08-fig02.png)
- (カ) 下図 ![解答群(カ)のフェーザ図。ĖRとĖCが直角をなして直角三角形をつくり，ĖRが縦軸から角δだけ右に傾く。電流İはĖRと同じ向き](/diagrams/questions/2021/2021-primary-theory-q08-fig03.png)
- (ヨ) 下図 ![解答群(ヨ)のフェーザ図。上の横軸から下向きにĖRとĖCが直角をなし，ĖRが縦軸から角δだけ右に傾いて下を向く。電流İはĖRと同じ向き（下向き）](/diagrams/questions/2021/2021-primary-theory-q08-fig04.png)

## 解答

- (1)：(ヌ) $\left(R_1+\dfrac{1}{\mathrm{j}\omega C_1}\right)R_4=\left(R_3+\dfrac{1}{\mathrm{j}\omega C_2}\right)R_2$
- (2)：(ト) $\dfrac{R_2R_3}{R_4}$
- (3)：(ヘ) $\dfrac{C_2R_4}{R_2}$
- (4)：(カ) 下図 ![解答群(カ)のフェーザ図。ĖRとĖCが直角をなして直角三角形をつくり，ĖRが縦軸から角δだけ右に傾く。電流İはĖRと同じ向き](/diagrams/questions/2021/2021-primary-theory-q08-fig03.png)
- (5)：(ロ) $\omega C_2R_3$
