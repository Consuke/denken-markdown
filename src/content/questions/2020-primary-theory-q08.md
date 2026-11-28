---
title: "2020年度 一次試験 理論 問8 演算増幅器を用いた電圧安定化回路"
year: 2020
examStage: primary
subject: theory
questionNumber: 8
topics: [electronics]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2020年度の電験二種一次試験、理論の問8。演算増幅器を用いた電圧安定化回路に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，演算増幅器を用いた電圧安定化回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図の回路の入力電圧と出力電圧をそれぞれ $V_{\mathrm{in}}$ と $V_{\mathrm{out}}$ とする。$R_{\mathrm{L}}$ は負荷であり，$R_{\mathrm{L}}$ を流れる電流を出力電流 $I_{\mathrm{out}}$ とする。演算増幅器は理想的な特性を有し，演算増幅器の入力端子には電流が流れないとする。このとき $V_{\mathrm{A}}$ は $V_{\mathrm{out}}$，$R_1$ 及び $R_2$ を用いて，

$$
V_{\mathrm{A}}=\text{［(1)］}\,V_{\mathrm{out}}\quad\cdots\cdots\text{\textcircled{1}}
$$

と書ける。また，負帰還のかかった演算増幅器の入力端子間の電位差は零となるため，

$$
V_{\mathrm{A}}=\text{［(2)］}\quad\cdots\cdots\text{\textcircled{2}}
$$

と表される。①及び②式から $V_{\mathrm{A}}$ を消去すると出力電圧は，

$$
V_{\mathrm{out}}=\text{［(3)］}\quad\cdots\cdots\text{\textcircled{3}}
$$

と求められる。③式よりこの回路の出力電圧は基準電圧 $V_{\mathrm{ref}}$ と抵抗 $R_1$ と $R_2$ のみで定まり，出力電流 $I_{\mathrm{out}}$ や入力電圧 $V_{\mathrm{in}}$ の大きさによらず一定となることがわかる。

通常 $R_1$ と $R_2$ は $R_{\mathrm{L}}$ に比べ十分に大きい値なので，入力電流 $I_{\mathrm{in}}$ は $I_{\mathrm{out}}$ と等しいと近似できる。このとき回路の入力電力と出力電力の差は［(4)］となり，主に［(5)］で消費される。

![電圧安定化回路。入力電圧Vin（入力電流Iin）からトランジスタを通って出力側に至り，出力電圧Voutを負荷RL（出力電流Iout）に加える。出力端には抵抗R1とR2の直列回路が接続され，その接続点の電圧VAが演算増幅器の−入力に，基準電圧Vrefが＋入力に加えられ，演算増幅器の出力がトランジスタのベースに接続される](/diagrams/questions/2020/2020-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) $R_1$ と $R_2$
- (ロ) $\dfrac{R_1}{R_2}V_{\mathrm{ref}}$
- (ハ) トランジスタ
- (ニ) $\dfrac{R_1+R_2}{R_2}V_{\mathrm{ref}}$
- (ホ) $V_{\mathrm{ref}}$
- (ヘ) $(V_{\mathrm{in}}-V_{\mathrm{out}})I_{\mathrm{out}}$
- (ト) $\dfrac{R_1}{R_1+R_2}$
- (チ) 演算増幅器
- (リ) $\dfrac{R_2}{R_1}$
- (ヌ) $\dfrac{R_1+R_2}{R_1}V_{\mathrm{ref}}$
- (ル) $V_{\mathrm{out}}I_{\mathrm{out}}$
- (ヲ) $V_{\mathrm{in}}$
- (ワ) $V_{\mathrm{in}}I_{\mathrm{out}}$
- (カ) $\dfrac{1}{2}V_{\mathrm{ref}}$
- (ヨ) $\dfrac{R_2}{R_1+R_2}$

## 解答

- (1)：(ヨ) $\dfrac{R_2}{R_1+R_2}$
- (2)：(ホ) $V_{\mathrm{ref}}$
- (3)：(ニ) $\dfrac{R_1+R_2}{R_2}V_{\mathrm{ref}}$
- (4)：(ヘ) $(V_{\mathrm{in}}-V_{\mathrm{out}})I_{\mathrm{out}}$
- (5)：(ハ) トランジスタ
