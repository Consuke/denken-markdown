---
title: "2023年度 一次試験 機械 問4 三相サイリスタ整流器と三相ダイオード整流器＋降圧チョッパ"
year: 2023
examStage: primary
subject: machine
questionNumber: 4
topics: [rectifiers, dc-converters]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者一次試験 機械科目"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_q03.pdf#page=8"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf"
sourceNote: "試験センター公開の問題PDF 8〜9ページ（冊子5〜6ページ）と公式解答PDFから転記。解答は公式解答の記号に，対応する解答群の語句を付記。タイトルは整理用に付記し，改行・全半角・数式表記をMarkdown/LaTeXに整形。空欄は［(1)］の形で表記。図は原本から切り出し。表紙・答案用紙記入上の注意・配点の見出しは省略。"
publishedAt: "2026-11-28"
updatedAt: "2026-11-28"
reviewStatus: published
sample: false
description: "2023年度の電験二種一次試験、機械の問4。三相サイリスタ整流器と三相ダイオード整流器＋降圧チョッパに関する穴埋め問題と公式解答。"
---

## 問題

次の文章は，直流電源を得る回路に関する記述である。文中の［　］に当てはまる最も適切なものを解答群の中から選べ。

図 1 には三相サイリスタ整流器を，図 2 には三相ダイオード整流器に降圧チョッパを接続した回路を示す。ともに直流電源を得る回路である。交流電源は線間電圧実効値を $V$ とする三相対称交流電源であり，電源のインピーダンス及びパワー半導体デバイスなどの回路要素のオン電圧，抵抗分は無視できるものとする。

三相サイリスタ整流器の出力直流電圧平均値 $V_{\mathrm{d1}}$ は，サイリスタの制御遅れ角を $\alpha$ [rad]とすると，次式となる。

$$
V_{\mathrm{d1}}=\text{［(1)］}\qquad\cdots\cdots\text{\textcircled{1}}
$$

正の電圧 $V_{\mathrm{d1}}$ は，制御遅れ角 $\alpha$ を［(2)］の範囲で制御することにより，変化させることができる。

一方，三相ダイオード整流器の出力直流電圧平均値 $V_{\mathrm{d2}}$ は，サイリスタとダイオードとのターンオン動作の違いから，①式において $\alpha=$［(3)］[rad]としたときの電圧に等しい。交流電源の電圧に変動がなければ電圧 $V_{\mathrm{d2}}$ は［(4)］。さらに，後段の降圧チョッパの［(5)］を制御することにより，降圧チョッパの出力直流電圧平均値 $V_{\mathrm{d3}}$ を変化できる。［(5)］を $d$ とすると，電圧 $V_{\mathrm{d3}}$ は次式となる。

$$
V_{\mathrm{d3}}=d\cdot V_{\mathrm{d2}}\qquad\cdots\cdots\text{\textcircled{2}}
$$

したがって，図 1，図 2 のいずれの回路でも電圧制御ループを組むことにより，たとえ交流電源の電圧が変動したときでも，負荷の電圧を一定にできる。

![図1 三相サイリスタ整流器。線間電圧Vの三相交流電源に6個のサイリスタのブリッジを接続し，リアクトルとコンデンサを経て負荷に出力電圧Vd1を加える回路](/diagrams/questions/2023/2023-primary-machine-q04-fig01.png)

![図2 三相ダイオード整流器に降圧チョッパを接続した回路。6個のダイオードのブリッジの出力（電圧Vd2）を，スイッチング素子・ダイオード・リアクトルからなる降圧チョッパで変換して負荷に出力電圧Vd3を加える](/diagrams/questions/2023/2023-primary-machine-q04-fig02.png)

### 問4の解答群

- (イ) 効率
- (ロ) $1.35V\cos\alpha$
- (ハ) $\pi\leqq\alpha\leqq2\pi$
- (ニ) 通流率
- (ホ) $0.9V\cos\alpha$
- (ヘ) $0.45V\cos\alpha$
- (ト) $\dfrac{\pi}{3}$
- (チ) $\dfrac{\pi}{2}\leqq\alpha\leqq\pi$
- (リ) $\dfrac{\pi}{6}$
- (ヌ) 変調率
- (ル) 一定である
- (ヲ) $0$
- (ワ) $0\leqq\alpha\leqq\dfrac{\pi}{2}$
- (カ) 負荷電流に比例して増加する
- (ヨ) 負荷電流に反比例して減少する

## 解答

- (1)：(ロ) $1.35V\cos\alpha$
- (2)：(ワ) $0\leqq\alpha\leqq\dfrac{\pi}{2}$
- (3)：(ヲ) $0$
- (4)：(ル) 一定である
- (5)：(ニ) 通流率
