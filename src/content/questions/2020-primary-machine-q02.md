---
title: "2020年度 一次試験 機械 問2 降圧チョッパの動作とスイッチング損失"
year: 2020
examStage: primary
subject: machine
questionNumber: 2
topics: [dc-converters]
sourceName: "一般財団法人 電気技術者試験センター 令和2年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_q03.pdf#page=6"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 6〜7ページ（冊子3〜4ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2020年度の電験二種一次試験、機械の問2。降圧チョッパの動作とスイッチング損失に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，降圧チョッパに関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図 1 は降圧チョッパの回路図である。この回路は直流電圧源 $V_{\mathrm{dc}}$ を入力とし，出力電流 $I_{\mathrm{dc}}$ が半導体スイッチ S とダイオードの間を転流する代表的な電力変換回路である。インダクタンスは十分に大きく，電流 $I_{\mathrm{dc}}$ にリプル成分は無いものとする。また，ダイオードの順電圧降下は無視する。

図 1 の半導体スイッチ S を理想的であると仮定した場合の電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ の波形を図 2 に示す。スイッチ S は定数 $D\,(0\leqq D\leqq1)$ とスイッチング周期 $T$ の積である $DT$ の期間に導通し，$D$ を［(1)］と呼ぶ。ダイオード電圧 $v$ の平均値 $V$ は $V=$［(2)］と表され，$D$ を変化させることによってダイオード電圧 $v$ の平均値を変えることができる。図 2 のどの時刻でも，理想的な半導体スイッチ S の電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ の一方は零であることから，スイッチング損失は発生しない。

半導体スイッチ S のターンオン期間とターンオフ期間を考慮するため，図 3 に示す電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ のモデル波形を考えてみよう。ターンオフ期間とターンオン期間には，電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ が共に［(3)］期間が存在する。図 3 において，ターンオフ期間では $v_{\mathrm{s}}=V_{\mathrm{dc}}$ となった後に電流 $i_{\mathrm{s}}$ は減少し，ターンオン期間では $i_{\mathrm{s}}=I_{\mathrm{dc}}$ となった後に電圧 $v_{\mathrm{s}}$ は低下する。そのため，半導体スイッチ S は損失を発生し，そのエネルギーは電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ の積 $i_{\mathrm{s}}v_{\mathrm{s}}$ の面積によって求められる。電流 $i_{\mathrm{s}}$ と電圧 $v_{\mathrm{s}}$ の変化は直線的と仮定すると，1 回のターンオフ期間の損失 $W_{\mathrm{off}}$ [J] は $W_{\mathrm{off}}=$［(4)］である。1 回のターンオン期間の損失 $W_{\mathrm{on}}$ [J] も同様に求められる。したがって，半導体スイッチ S におけるスイッチング損失 $P_{\mathrm{s}}$ [W] は $P_{\mathrm{s}}=$［(5)］である。

![図1 降圧チョッパの回路。直流電圧源Vdcから半導体スイッチS（電流is，電圧vs）を通り，インダクタンスを経て負荷抵抗に電流Idcを流す。Sとインダクタンスの接続点と電源の負側の間にダイオード（電圧v）が接続される](/diagrams/questions/2020/2020-primary-machine-q02-fig01.png)

![図2 理想的なスイッチSの波形。電流isは周期Tのうち期間DTだけIdc，それ以外は0。電圧vsは期間DTだけ0，それ以外はVdc](/diagrams/questions/2020/2020-primary-machine-q02-fig02.png)

![図3 ターンオン・ターンオフを考慮したモデル波形。ターンオン期間T1ではisが0からIdcまで直線的に増加した後にvsがVdcから0まで直線的に低下し，ターンオフ期間T2ではvsが0からVdcまで上昇した後にisがIdcから0まで直線的に減少する。積isvsはそれぞれの期間で三角形状のパルスになる](/diagrams/questions/2020/2020-primary-machine-q02-fig03.png)

### 問2の解答群

- (イ) 負である
- (ロ) $\left(\dfrac{1}{1-D}\right)V_{\mathrm{dc}}$
- (ハ) 零である
- (ニ) $\dfrac{W_{\mathrm{off}}-W_{\mathrm{on}}}{T}$
- (ホ) $\dfrac{W_{\mathrm{off}}+W_{\mathrm{on}}}{T}$
- (ヘ) $\dfrac{1}{6}V_{\mathrm{dc}}I_{\mathrm{dc}}T_2$
- (ト) $DV_{\mathrm{dc}}$
- (チ) $\dfrac{1}{2}V_{\mathrm{dc}}I_{\mathrm{dc}}T_1$
- (リ) $\dfrac{1}{2}V_{\mathrm{dc}}I_{\mathrm{dc}}T_2$
- (ヌ) $\dfrac{1}{6}V_{\mathrm{dc}}I_{\mathrm{dc}}T_1$
- (ル) $W_{\mathrm{off}}+W_{\mathrm{on}}$
- (ヲ) 還流率
- (ワ) $\left(\dfrac{D}{1-D}\right)V_{\mathrm{dc}}$
- (カ) 通流率
- (ヨ) 正である

## 解答

- (1)：(カ) 通流率
- (2)：(ト) $DV_{\mathrm{dc}}$
- (3)：(ヨ) 正である
- (4)：(リ) $\dfrac{1}{2}V_{\mathrm{dc}}I_{\mathrm{dc}}T_2$
- (5)：(ホ) $\dfrac{W_{\mathrm{off}}+W_{\mathrm{on}}}{T}$
