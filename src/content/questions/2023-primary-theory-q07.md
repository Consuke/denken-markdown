---
title: "2023年度 一次試験 理論 問7 MOSFETを用いた論理回路（NAND回路）"
year: 2023
examStage: primary
subject: theory
questionNumber: 7
topics: [electronics, information]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_q01.pdf#page=16"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 16〜17ページ（冊子13〜14ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2023年度の電験二種一次試験、理論の問7。MOSFETを用いた論理回路（NAND回路）に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，MOSFET を用いた回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図に n チャネル MOSFET 及び p チャネル MOSFET からなる回路を示す。本問では，MOSFET のゲート-ソース間電圧 $V_{\mathrm{gs}}$ [V]は図中に示す向きを正とし，n チャネル MOSFET 及び p チャネル MOSFET はいずれも $V_{\mathrm{gs}}$ により制御される理想的なスイッチとみなせるとする。$V_{\mathrm{gs}}>V_{\mathrm{T}}$ を満たすときにスイッチは導通し，ドレイン-ソース間は短絡（ショート）となる。一方，$V_{\mathrm{gs}}\leqq V_{\mathrm{T}}$ のときスイッチは非導通となり，ドレイン-ソース間は開放(オープン)になる。ただし，$V_{\mathrm{T}}$ [V]は正の定数であり，電源電圧 $V_{\mathrm{DD}}$ [V]は $V_{\mathrm{T}}$ より十分に大きいとする。また，回路には $C_{\mathrm{L}}$ [F]の負荷容量が接続されている。

まず，図の回路に入力電圧として $V_{\mathrm{in1}}$ と $V_{\mathrm{in2}}$ のいずれにも 0 V を加える。このとき各 MOSFET の状態は［(1)］となるため，出力電圧 $V_{\mathrm{out}}$ [V]は［(2)］となる。次に，$V_{\mathrm{in1}}$ と $V_{\mathrm{in2}}$ を $V_{\mathrm{DD}}$ 又は 0 V として回路の入出力電圧の関係を調べると，表［(3)］が得られる。$V_{\mathrm{DD}}$ に 1(真)，0 V に 0(偽)をそれぞれ割り当てると，回路の出力の論理式は［(4)］となる。

図の回路にはいずれの状態でも定常的な電流は流れない。回路には負荷容量 $C_{\mathrm{L}}$ を充放電する電流のみが流れる。回路の出力が 0 V と $V_{\mathrm{DD}}$ を $f$ [Hz]で繰り返しているとき，電源から回路に流れ込む平均電流は［(5)］[A]となる。

![電源VDDに並列接続したpチャネルMOSFETのM1とM2，出力Voutから接地へ直列接続したnチャネルMOSFETのM3とM4からなる回路。入力Vin1はM2とM3のゲートに，Vin2はM1とM4のゲートに接続され，出力に負荷容量CLが接続されている](/diagrams/questions/2023/2023-primary-theory-q07-fig01.png)

表(A)

| $V_{\mathrm{in1}}$ | $V_{\mathrm{in2}}$ | $V_{\mathrm{out}}$ |
| --- | --- | --- |
| 0 | 0 | $V_{\mathrm{DD}}$ |
| $V_{\mathrm{DD}}$ | 0 | 0 |
| 0 | $V_{\mathrm{DD}}$ | 0 |
| $V_{\mathrm{DD}}$ | $V_{\mathrm{DD}}$ | 0 |

表(B)

| $V_{\mathrm{in1}}$ | $V_{\mathrm{in2}}$ | $V_{\mathrm{out}}$ |
| --- | --- | --- |
| 0 | 0 | $V_{\mathrm{DD}}$ |
| $V_{\mathrm{DD}}$ | 0 | $V_{\mathrm{DD}}$ |
| 0 | $V_{\mathrm{DD}}$ | $V_{\mathrm{DD}}$ |
| $V_{\mathrm{DD}}$ | $V_{\mathrm{DD}}$ | 0 |

表(C)

| $V_{\mathrm{in1}}$ | $V_{\mathrm{in2}}$ | $V_{\mathrm{out}}$ |
| --- | --- | --- |
| 0 | 0 | 0 |
| $V_{\mathrm{DD}}$ | 0 | 0 |
| 0 | $V_{\mathrm{DD}}$ | 0 |
| $V_{\mathrm{DD}}$ | $V_{\mathrm{DD}}$ | $V_{\mathrm{DD}}$ |

### 問7の解答群

- (イ) $V_{\mathrm{in1}}\cdot V_{\mathrm{in2}}$
- (ロ) $0$
- (ハ) $\dfrac{1}{2}C_{\mathrm{L}}{V_{\mathrm{DD}}}^2$
- (ニ) $\overline{V_{\mathrm{in1}}+V_{\mathrm{in2}}}$
- (ホ) $fC_{\mathrm{L}}V_{\mathrm{DD}}$
- (ヘ) $\overline{V_{\mathrm{in1}}\cdot V_{\mathrm{in2}}}$
- (ト) $V_{\mathrm{DD}}$
- (チ) $\dfrac{V_{\mathrm{DD}}}{2}$
- (リ) $fC_{\mathrm{L}}{V_{\mathrm{DD}}}^2$
- (ヌ) (A)
- (ル) (B)
- (ヲ) (C)
- (ワ) $\mathrm{M_1}$ と $\mathrm{M_2}$ がオンとなり $\mathrm{M_3}$ と $\mathrm{M_4}$ がオフ
- (カ) $\mathrm{M_1}$ と $\mathrm{M_3}$ がオンとなり $\mathrm{M_2}$ と $\mathrm{M_4}$ がオフ
- (ヨ) $\mathrm{M_3}$ と $\mathrm{M_4}$ がオンとなり $\mathrm{M_1}$ と $\mathrm{M_2}$ がオフ

## 解答

- (1)：(ワ) $\mathrm{M_1}$ と $\mathrm{M_2}$ がオンとなり $\mathrm{M_3}$ と $\mathrm{M_4}$ がオフ
- (2)：(ト) $V_{\mathrm{DD}}$
- (3)：(ル) (B)
- (4)：(ヘ) $\overline{V_{\mathrm{in1}}\cdot V_{\mathrm{in2}}}$
- (5)：(ホ) $fC_{\mathrm{L}}V_{\mathrm{DD}}$
