---
title: "2023年度 機械・制御 問3 電力用能動フィルタによる高調波除去"
year: 2023
examStage: "secondary"
subject: "machine-control"
questionNumber: 3
topics: ["harmonics"]
sourceName: "一般財団法人 電気技術者試験センター 令和5年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_q02.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf#page=13"
sourceNote: "ユーザー提供の問題PDF 7・8ページと公式標準解答PDF 13・14ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2023年度の電験二種二次試験，機械・制御の問3。電力用能動フィルタによる高調波除去の問題と公式標準解答。"
---

## 問題

以下の文章は，負荷の発生する高調波を除去する電力用能動フィルタに関するものである。次の問に答えよ。

図1は能動フィルタを用いた高調波電流除去の概念図である。電力系統から流出する電源電流を $i_{\mathrm{s}}$ とし，電力系統の高調波に対するインピーダンスは十分小さく無視できるものとする。負荷電流 $i_{\mathrm{L}}$ は基本波成分 $i_1$ と高調波成分 $i_{\mathrm{H}}$ の和 $i_{\mathrm{L}}=i_1+i_{\mathrm{H}}$ であるとする。能動フィルタは，補償電流 $i_{\mathrm{c}}$ を制御して $i_{\mathrm{s}}$ を $i_1$ のみとなるようにする。

### (1)

高調波を発生する半導体デバイスを用いた電力変換装置の名称を一つ挙げよ。

### (2)

系統に高調波が存在する場合，系統に接続された他の機器にどのような影響が生じるか，20文字以内で述べよ。

### (3)

$i_{\mathrm{s}}$ を $i_1$ のみにするための $i_{\mathrm{c}}$ の式を示せ。

### (4)

図で示す $i_{\mathrm{L}}$ の波形が最大値 $I_{\mathrm{L}}$ と最小値 $-I_{\mathrm{L}}$ の2レベル矩形波であるとき，$i_1$ の振幅は $\dfrac{4}{\pi}I_{\mathrm{L}}$ である。このとき，答案用紙に図2と同じ図が印刷されているので，$i_{\mathrm{H}}$，$i_{\mathrm{c}}$ の波形を大小・正負が明らかになるように図示せよ。

### (5)

$i_{\mathrm{L}}$，$i_1$，$i_{\mathrm{c}}$ の実効値を，それぞれ $I_{\mathrm{L}}$ を用いて表せ。なお，$i_{\mathrm{c}}$ の実効値を求めるときは，ひずみ波の実効値は直流分及び各調波の実効値の2乗の和の平方根であることを用いても良い。

![図1 能動フィルタを用いた高調波電流除去の概念図](/diagrams/questions/2023/2023-secondary-machine-control-q03-fig01.png)

![図2 負荷電流，基本波成分，高調波成分及び補償電流の波形記入図](/diagrams/questions/2023/2023-secondary-machine-control-q03-fig02.png)

## 解答

### (1)

ダイオード整流器・変換器，サイリスタ整流器・変換器，インバータ，など。

### (2)

コンデンサやリアクトルの過熱や振動，コンピュータや電子機器の誤作動，など。

### (3)

$$
i_{\mathrm{c}}=i_1-i_{\mathrm{L}}=-i_{\mathrm{H}}
$$

【(3)別解】$i_{\mathrm{c}}+i_{\mathrm{H}}=0$，$i_{\mathrm{c}}-i_1+i_{\mathrm{L}}=0$ など。

### (4)

![(4)の解答図 高調波成分及び補償電流の波形](/diagrams/questions/2023/2023-secondary-machine-control-q03-answer-fig01.png)

### (5)

$i_{\mathrm{L}}$ の実効値は $I_{\mathrm{L}}$，$i_1$ の実効値は $\dfrac{4}{\pi\sqrt{2}}I_{\mathrm{L}}=0.900I_{\mathrm{L}}$，$i_{\mathrm{c}}$ の実効値は $I_{\mathrm{L}}\sqrt{1-\dfrac{8}{\pi^2}}=0.435I_{\mathrm{L}}$

#### 【(5)別解】

| 電流 | 実効値 |
| --- | --- |
| $i_1$ | $\dfrac{2\sqrt{2}}{\pi}I_{\mathrm{L}}$，$\dfrac{\sqrt{8}}{\pi}I_{\mathrm{L}}$，$\dfrac{2.83}{\pi}I_{\mathrm{L}}$ |
| $i_{\mathrm{c}}$ | $I_{\mathrm{L}}\sqrt{\dfrac{\pi^2-8}{\pi^2}}$，$\dfrac{I_{\mathrm{L}}}{\pi}\sqrt{\pi^2-8}$，$0.44I_{\mathrm{L}}$ |
