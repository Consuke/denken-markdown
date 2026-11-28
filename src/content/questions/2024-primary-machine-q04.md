---
title: "2024年度 一次試験 機械 問4 昇圧チョッパの回路と電圧・電流の関係"
year: 2024
examStage: primary
subject: machine
questionNumber: 4
topics: [dc-converters]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_q03.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 8〜9ページ（冊子5〜6ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2024年度の電験二種一次試験、機械の問4。昇圧チョッパの回路と電圧・電流の関係に関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，昇圧チョッパに関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

昇圧チョッパは，［(1)］に示す図のようにスイッチ S，ダイオード，インダクタ L，キャパシタ C からなる回路が，直流電圧 $V_{\mathrm{i}}$ [V]の電圧源と負荷抵抗 R の間に接続されることで構成されている。ここで，スイッチ S を $T$ [s]の周期でオン－オフを繰り返し，そのうちオンしている期間を $T_{\mathrm{on}}$ [s]とすると，スイッチ S のデューティ比 $D$ は，［(2)］として表すことができる。スイッチ及びダイオードを含む全ての回路素子が理想的なものであり，キャパシタ C の静電容量が十分大きくキャパシタ電圧のリプルは無視できるものとする。インダクタ L に電流が連続的に流れている場合，デューティ比 $D$ を用いると直流電圧 $V_{\mathrm{i}}$ [V]と，定常状態で負荷抵抗に印加される電圧 $V_{\mathrm{o}}$ [V]の関係を表す式は［(3)］となる。ここで，インダクタ，キャパシタ，抵抗に流れる電流をそれぞれ $i_{\mathrm{L}}$ [A]，$i_{\mathrm{C}}$ [A]，$i_{\mathrm{R}}$ [A]とし，それらの平均値をそれぞれ $I_{\mathrm{L}}$ [A]，$I_{\mathrm{C}}$ [A]，$I_{\mathrm{R}}$ [A]とすると，$I_{\mathrm{R}}=$［(4)］，$I_{\mathrm{C}}=$［(5)］となる。

### 問4の解答群

- (イ) $V_{\mathrm{o}}=\dfrac{1}{1-D}V_{\mathrm{i}}$
- (ロ) $0$
- (ハ) $\dfrac{D}{1-D}I_{\mathrm{L}}$
- (ニ) $\dfrac{T_{\mathrm{on}}}{T}$
- (ホ) $(1-D)I_{\mathrm{L}}$
- (ヘ) $V_{\mathrm{o}}=DV_{\mathrm{i}}$
- (ト) $\dfrac{1}{1-D}I_{\mathrm{L}}$
- (チ) $DI_{\mathrm{L}}$
- (リ) $\dfrac{T-T_{\mathrm{on}}}{T}$
- (ヌ) $V_{\mathrm{o}}=\dfrac{D}{1-D}V_{\mathrm{i}}$
- (ル) $\dfrac{T}{T_{\mathrm{on}}}$
- (ヲ) $\dfrac{T}{T-T_{\mathrm{on}}}$
- (ワ) 下図 ![解答群(ワ)の回路。電圧源ViからインダクタLを経て，スイッチSが対地に並列に入り，ダイオードを経てキャパシタCと負荷抵抗Rに接続（電流iL，iC，iR，出力電圧Vo）](/diagrams/questions/2024/2024-primary-machine-q04-fig01.png)
- (カ) 下図 ![解答群(カ)の回路。電圧源ViからスイッチSを経て，ダイオードが対地に並列に入り，インダクタLを経てキャパシタCと負荷抵抗Rに接続](/diagrams/questions/2024/2024-primary-machine-q04-fig02.png)
- (ヨ) 下図 ![解答群(ヨ)の回路。電圧源ViからスイッチSを経て，インダクタLが対地に並列に入り，逆向きのダイオードを経てキャパシタCと負荷抵抗Rに接続](/diagrams/questions/2024/2024-primary-machine-q04-fig03.png)

## 解答

- (1)：(ワ) 下図 ![解答群(ワ)の回路。電圧源ViからインダクタLを経て，スイッチSが対地に並列に入り，ダイオードを経てキャパシタCと負荷抵抗Rに接続（電流iL，iC，iR，出力電圧Vo）](/diagrams/questions/2024/2024-primary-machine-q04-fig01.png)
- (2)：(ニ) $\dfrac{T_{\mathrm{on}}}{T}$
- (3)：(イ) $V_{\mathrm{o}}=\dfrac{1}{1-D}V_{\mathrm{i}}$
- (4)：(ホ) $(1-D)I_{\mathrm{L}}$
- (5)：(ロ) $0$
