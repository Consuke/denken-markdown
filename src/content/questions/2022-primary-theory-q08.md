---
title: "2022年度 一次試験 理論 問8 電流比較器による電力計の校正"
year: 2022
examStage: primary
subject: theory
questionNumber: 8
topics: [measurement]
sourceName: "一般財団法人 電気技術者試験センター 令和4年度第二種電気主任技術者一次試験 理論科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_q01.pdf#page=18"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 18〜19ページ（冊子15〜16ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2022年度の電験二種一次試験、理論の問8。電流比較器による電力計の校正に関する穴埋め問題と公式解答。"
---

## 問題

> 問7及び問8は選択問題であり，問7又は問8のどちらかを選んで解答すること。両方解答すると採点されません。

次の文章は，電流比較器による電力計の校正に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図は，校正対象の電力計と，電流比較器，抵抗 $R$，静電容量 $C$ のコンデンサ，検流計及び交流電圧計から成る電力計の校正回路である。電流比較器は，鉄心や巻線の損失や漏れ磁束のない理想的なもので，$N_{\mathrm{R}}$，$N_{\mathrm{C}}$，$N_{\mathrm{X}}$ 及び $N_{\mathrm{D}}$ は各巻線の巻数を表し，$N_{\mathrm{R}}$，$N_{\mathrm{C}}$ 及び $N_{\mathrm{X}}$ は可変である。

電力計の校正の手順及び原理は次のとおりである。

まず，角周波数が等しく $\omega$ である正弦波電圧 $\dot{E}$ 及び正弦波電流 $\dot{I}$ を電力計及び校正回路に加える。次に，検流計が零を指すように $N_{\mathrm{R}}$，$N_{\mathrm{C}}$ 及び $N_{\mathrm{X}}$ を調整し，さらに，$\dot{E}$ の実効値 $|\dot{E}|$ を交流電圧計で測定する。

検流計が零を指すのは，各巻線を流れる電流によって生じる鉄心内の磁束が零になり，各巻線に生じる起電力が零になったときである。このとき，抵抗に流れる電流 $\dot{I}_{\mathrm{R}}$ は［(1)］，コンデンサに流れる電流 $\dot{I}_{\mathrm{C}}$ は［(2)］となる。また，各巻線の巻数と流れる電流の向きや，鉄心内の磁束が零であることを考慮すると，起磁力に関する等式［(3)］が成立する。

［(3)］を $\dot{I}$ について解き，$\dot{I}_{\mathrm{R}}$ 及び $\dot{I}_{\mathrm{C}}$ を代入する。さらに両辺に $\dot{E}$ の共役複素数 $\bar{E}$ を乗じると次式が得られる。

$$
\bar{E}\dot{I}=\text{［(4)］}-\mathrm{j}\,\text{［(5)］}
$$

なお，［(4)］及び［(5)］は，それぞれ，電力計へ入力される有効電力及び無効電力である。

以上のように，この校正回路は，既知の値($R$，$C$，$\omega$ 及び巻数)と $|\dot{E}|$ の測定値から有効電力及び無効電力を求め，電力計の校正を実現している。

![電流比較器による電力計の校正回路。電源Ėの母線に交流電圧計，抵抗R（電流İR），コンデンサC（電流İC）と電力計の電圧端子が接続され，電流源İは電力計の電流端子を通る。İR，İC，İはそれぞれ電流比較器の巻線NR，NC，NXを通って接地され，検出巻線NDに検流計が接続されている](/diagrams/questions/2022/2022-primary-theory-q08-fig01.png)

### 問8の解答群

- (イ) $N_{\mathrm{R}}\dot{I}_{\mathrm{R}}+N_{\mathrm{C}}\dot{I}_{\mathrm{C}}-N_{\mathrm{X}}\dot{I}=0$
- (ロ) $-\mathrm{j}\omega C\dot{E}$
- (ハ) $\dfrac{N_{\mathrm{X}}}{N_{\mathrm{C}}\omega C}|\dot{E}|^2$
- (ニ) $N_{\mathrm{R}}\dot{I}_{\mathrm{R}}-N_{\mathrm{C}}\dot{I}_{\mathrm{C}}-N_{\mathrm{X}}\dot{I}=0$
- (ホ) $R\dot{E}$
- (ヘ) $\dfrac{R}{\dot{E}}$
- (ト) $\dfrac{N_{\mathrm{C}}\omega C}{N_{\mathrm{X}}}|\dot{E}|$
- (チ) $\mathrm{j}\omega C\dot{E}$
- (リ) $\dfrac{N_{\mathrm{C}}\omega C}{N_{\mathrm{X}}}|\dot{E}|^2$
- (ヌ) $\dfrac{N_{\mathrm{R}}}{N_{\mathrm{X}}R}|\dot{E}|^2$
- (ル) $\dfrac{\dot{E}}{\mathrm{j}\omega C}$
- (ヲ) $\dfrac{\dot{E}}{R}$
- (ワ) $N_{\mathrm{R}}\dot{I}_{\mathrm{R}}+N_{\mathrm{C}}\dot{I}_{\mathrm{C}}+N_{\mathrm{X}}\dot{I}=0$
- (カ) $\dfrac{N_{\mathrm{R}}}{N_{\mathrm{X}}R}|\dot{E}|$
- (ヨ) $\dfrac{N_{\mathrm{X}}R}{N_{\mathrm{R}}}|\dot{E}|^2$

## 解答

- (1)：(ヲ) $\dfrac{\dot{E}}{R}$
- (2)：(チ) $\mathrm{j}\omega C\dot{E}$
- (3)：(ニ) $N_{\mathrm{R}}\dot{I}_{\mathrm{R}}-N_{\mathrm{C}}\dot{I}_{\mathrm{C}}-N_{\mathrm{X}}\dot{I}=0$
- (4)：(ヌ) $\dfrac{N_{\mathrm{R}}}{N_{\mathrm{X}}R}|\dot{E}|^2$
- (5)：(リ) $\dfrac{N_{\mathrm{C}}\omega C}{N_{\mathrm{X}}}|\dot{E}|^2$
