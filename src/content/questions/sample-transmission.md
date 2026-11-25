---
title: "三相送電線の抵抗損失を求める（架空サンプル）"
year: 2024
examStage: secondary
subject: power-management
questionNumber: 2
topics: [transmission, power-systems]
difficulty: 1
sourceName: "架空サンプル・自作例題"
sourceUrl: "https://example.org/sample-transmission"
sourceNote: "動作検証用の架空の問題です。実在する試験の年度・問番号・設問とは対応しません。"
publishedAt: "2026-11-17"
updatedAt: "2026-11-18"
reviewStatus: reviewed
sample: true
---

## 問題

平衡三相回路の送電線について、線電流の実効値を $I = 100\,\mathrm{A}$、1相あたりの線路抵抗を $R = 1.0\,\Omega$ とする。3相全体の抵抗損失 $P_{\mathrm{loss}}$ を求めよ。

| 記号 | 値 | 意味 |
| --- | --- | --- |
| $I$ | $100\,\mathrm{A}$ | 線電流の実効値 |
| $R$ | $1.0\,\Omega$ | 1相あたりの抵抗 |

## 解答

$$
P_{\mathrm{loss}} = 3I^2R = 3\times 100^2\times 1.0 = 30{,}000\,\mathrm{W} = 30\,\mathrm{kW}
$$

## 独自解説

1相の抵抗損失は $I^2R$ である。平衡三相では各相の条件が等しいので、その3倍を求める。

電圧や力率は、ここでの抵抗損失の計算には直接必要ない。与えられた抵抗が「1相あたり」かどうかを確かめよう。

## 関連知識

電流を半分にすると、このモデルでの抵抗損失は4分の1になる。
