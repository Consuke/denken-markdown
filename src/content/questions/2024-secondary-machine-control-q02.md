---
title: "2024年度 機械・制御 問2 変圧器の試験と電圧変動率"
year: 2024
examStage: "secondary"
subject: "machine-control"
questionNumber: 2
topics: ["transformers"]
sourceName: "一般財団法人 電気技術者試験センター 令和6年度第二種電気主任技術者二次試験 機械・制御"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_as_02_ch_second_q02.pdf#page=4"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20241110_ch_second_a01_tk.pdf#page=8"
sourceNote: "ユーザー提供の問題PDF 4ページと公式標準解答PDF 8・9ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: "draft"
sample: false
description: "2024年度の電験二種二次試験，機械・制御の問2。変圧器の試験と電圧変動率の問題と公式標準解答。"
---

## 問題

定格容量10 kV·A，定格一次電圧2 000 V，定格二次電圧110 V，定格周波数60 Hzの単相変圧器があり，試験結果は次のとおりであった。

| 試験 | 項目 | 結果 |
| --- | --- | --- |
| 無負荷試験 | 無負荷損 | $P_0=200$ W |
| 無負荷試験 | 無負荷電流 | $I_0=0.26$ A |
| 短絡試験 | インピーダンス電圧 | $V_{1\mathrm{s}}=100$ V |
| 短絡試験 | 一次電流 | $I_{1\mathrm{s}}=5$ A |
| 短絡試験 | インピーダンスワット | $P_{\mathrm{s}}=400$ W |

この変圧器について次の問に答えよ。

### (1)

図に示す一次換算の簡易等価回路の回路定数を求めよ。

### (2)

百分率抵抗降下 $p$ [%]，百分率リアクタンス降下 $q$ [%]を求めよ。

### (3)

遅れ力率80 %，全負荷における電圧の変動率 $\varepsilon$ [%]を求めよ。

### (4)

遅れ力率80 %，$\dfrac{1}{2}$ 負荷における電圧の変動率 $\varepsilon'$ [%]を求めよ。

ただし，定格負荷時の力率 $\cos\phi$ における電圧の変動率 $\varepsilon$ [%]は，百分率抵抗降下を $p$ [%]，百分率リアクタンス降下を $q$ [%]とすれば，次式で表せるものとする。

$$
\varepsilon=p\cos\phi+q\sin\phi\ [\%]
$$

![一次換算の簡易等価回路](/diagrams/questions/2024/2024-secondary-machine-control-q02-fig01.png)

一次換算全巻線抵抗：$R$  
一次換算全漏れリアクタンス：$X$  
励磁コンダクタンス：$g_0$  
励磁サセプタンス：$b_0$

## 解答

### (1)

無負荷試験においては励磁回路のみを考えるので，励磁コンダクタンス $g_0$ の消費電力から，次のように $g_0$ を求めることができる。

$$
g_0=\frac{P_0}{V_1^2}=\frac{200}{2\,000^2}=0.5\times10^{-4}\ \mathrm{S}
$$

この結果から，次のように励磁サセプタンス $b_0$ を求めることができる。

$$
b_0=\sqrt{\left(\frac{I_0}{V_1}\right)^2-g_0^2}=\sqrt{\left(\frac{0.26}{2\,000}\right)^2-(0.5\times10^{-4})^2}=1.2\times10^{-4}\ \mathrm{S}
$$

短絡試験では回路は $R$，$X$ の直列回路と考えることができるので一次換算全巻線抵抗 $R$ は消費電力から次のように求めることができる。

$$
R=\frac{P_{\mathrm{s}}}{I_{1\mathrm{s}}^2}=\frac{400}{5^2}=16\ \Omega
$$

この結果から，次のように一次換算全リアクタンス $X$ を求めることができる。

$$
X=\sqrt{\left(\frac{V_{1\mathrm{s}}}{I_{1\mathrm{s}}}\right)^2-R^2}=\sqrt{\left(\frac{100}{5}\right)^2-16^2}=12\ \Omega
$$

$g_0=0.5\times10^{-4}$ S，$b_0=1.2\times10^{-4}$ S，$R=16$ Ω，$X=12$ Ω

### (2)

定格電圧，定格電流をそれぞれ，$V_{1\mathrm{N}}$，$I_{1\mathrm{N}}$ とすると題意より，

$$
V_{1\mathrm{N}}=2\,000\ \mathrm{V},\qquad I_{1\mathrm{N}}=5\ \mathrm{A}
$$

となる。したがって，百分率抵抗降下 $p$，百分率リアクタンス降下 $q$ を次のように求めることができる。

$$
p=\frac{RI_{1\mathrm{N}}}{V_{1\mathrm{N}}}\times100=16\times\frac{5}{2\,000}\times100=4\%
$$

$$
q=\frac{XI_{1\mathrm{N}}}{V_{1\mathrm{N}}}\times100=12\times\frac{5}{2\,000}\times100=3\%
$$

$p=4$ %，$q=3$ %

### (3)

力率が0.8と与えられているので，$\cos\phi=0.8$ であり，これより，$\sin\phi=\sqrt{1-0.8^2}=0.6$ となる。したがって，電圧の変動率は次のように求めることができる。

$$
\varepsilon=p\cos\phi+q\sin\phi=4\times0.8+3\times0.6=5.0\%
$$

**5.0 %**

### (4)

変圧器は負荷が変化しても二次電圧は一定と考えることができるので出力が $\dfrac{1}{2}$ になったときは負荷電流は $\dfrac{1}{2}$ になり，電圧降下も $\dfrac{1}{2}$ となる。

したがって，百分率抵抗降下 $p'$，百分率リアクタンス降下 $q'$ は次のようになる。

$$
p'=\frac{1}{2}p=2\%,\qquad q'=\frac{1}{2}q=1.5\%
$$

$$
\varepsilon'=\frac{1}{2}p\cos\phi+\frac{1}{2}q\sin\phi=\frac{1}{2}\times4\times0.8+\frac{1}{2}\times3\times0.6=2.5\%
$$

**2.5 %**
