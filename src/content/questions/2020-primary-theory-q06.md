---
title: "2020年度 一次試験 理論 問6 ひずみゲージとホイートストンブリッジ"
year: 2020
examStage: primary
subject: theory
questionNumber: 6
topics: [measurement, dc-circuits]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_q01.pdf#page=14"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 14〜15ページ（冊子11〜12ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2020年度の電験二種一次試験、理論の問6。ひずみゲージとホイートストンブリッジに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，直流ブリッジを用いた抵抗測定に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図は，ひずみにより微小な抵抗変化を生じるひずみゲージを用いた測定回路である。このような抵抗の測定には，図のような［(1)］ブリッジの原理が使用される。

図において，直流電圧源を $E$，回路の電流を $I_1$，$I_2$ とする。ひずみがなく，ひずみゲージの固定抵抗 $R_1$ の変化 $\Delta R_1$ が $\Delta R_1=0$ の場合，ブリッジの出力電圧 $V_{\mathrm{o}}$ を $R_1$，$R$，$E$ を用いて表すと，

$$
V_{\mathrm{o}}=\text{［(2)］}\quad\cdots\cdots\text{\textcircled{1}}
$$

となる。ただし，周囲温度の変化による各抵抗の変化は無視できるものとする。

次に，ひずみが生じ，$R_1$ が $(R_1+\Delta R_1)$ になった場合を考える。$R_1=R$ となるようなひずみゲージを選べば，①式より $V_{\mathrm{o}}$ は

$$
V_{\mathrm{o}}=\text{［(3)］}\quad\cdots\cdots\text{\textcircled{2}}
$$

となる。ここで，通常，$R_1\gg\Delta R_1$ であることから，②式より $V_{\mathrm{o}}$ は

$$
V_{\mathrm{o}}\fallingdotseq\text{［(4)］}
$$

となり，$\Delta R_1$ に比例した電圧が得られる。

したがって，$R_1=R=100\ \Omega$，$E=2\ \mathrm{V}$ であるとき，ある大きさのひずみにより，0.2 % の抵抗増加が $R_1$ に生じたとすれば，［(5)］mV の出力電圧 $V_{\mathrm{o}}$ が得られる。

![ひずみゲージを用いたブリッジ回路。ひし形の4辺のうち左下の辺がひずみゲージ（固定抵抗R1と変化分ΔR1，電流I1），他の3辺が抵抗R（左上の辺の電流I2）。左右の頂点間に直流電圧源E，上下の頂点間から出力電圧Voを取り出す](/diagrams/questions/2020/2020-primary-theory-q06-fig01.png)

### 問6の解答群

- (イ) ウィーン
- (ロ) ホイートストン
- (ハ) $\dfrac{R_1-R}{2(R_1+R)}E$
- (ニ) $\dfrac{\Delta R_1}{(2R+\Delta R_1)}E$
- (ホ) $\dfrac{R_1}{2(R_1+R)}E$
- (ヘ) $\dfrac{\Delta R_1}{4R}E$
- (ト) $\dfrac{\Delta R_1}{(4R+2\Delta R_1)}E$
- (チ) $\dfrac{R_1-R}{(R_1+R)}E$
- (リ) 2.0
- (ヌ) $\dfrac{\Delta R_1}{(R+\Delta R_1)}E$
- (ル) 1.0
- (ヲ) シェーリング
- (ワ) 20.0
- (カ) $\dfrac{\Delta R_1}{R}E$
- (ヨ) $\dfrac{\Delta R_1}{2R}E$

## 解答

- (1)：(ロ) ホイートストン
- (2)：(ハ) $\dfrac{R_1-R}{2(R_1+R)}E$
- (3)：(ト) $\dfrac{\Delta R_1}{(4R+2\Delta R_1)}E$
- (4)：(ヘ) $\dfrac{\Delta R_1}{4R}E$
- (5)：(ル) 1.0
