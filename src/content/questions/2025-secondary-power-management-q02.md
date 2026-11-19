---
title: "2025年度 電力・管理 問2 中性点抵抗接地系統の1線地絡電流"
year: 2025
examStage: "secondary"
subject: "power-management"
questionNumber: 2
topics: ["grounding","power-systems"]
sourceName: "一般財団法人 電気技術者試験センター 令和7年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_q01.pdf#page=5"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf#page=2"
sourceNote: "ユーザー提供の問題PDF 5・6ページと公式標準解答PDF 2ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・科目共通の問題選択案内・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-18"
updatedAt: "2026-11-18"
reviewStatus: published
sample: false
description: "2025年度の電験二種二次試験，電力・管理の問2。中性点抵抗接地系統の1線地絡電流の問題と公式標準解答。"
---

## 問題

図の三相3線式1回線の送電線路において，中間地点である点Fでa相の1線地絡故障が発生した場合を考える。三相変圧器はいずれも図のようにΔ–Y結線であり，電源側ではY結線の中性点が抵抗接地されており，負荷側ではY結線の中性点は非接地である。三相変圧器，三相送電線路のインピーダンスはそれぞれ以下のとおりであり，点Fでの地絡インピーダンスは零，負荷のインピーダンスは無限大とし，その他のインピーダンスは全て無視する。また，単位法の基準値は全て154 kV及び1 000 MV·Aとする。

| 設備 | 定数 | 値 |
| --- | --- | --- |
| 三相変圧器 | 正相・逆相・零相漏れリアクタンス | $\mathrm{j}0.2$ p.u. |
| 三相変圧器 | 電源側の変圧器の中性点接地抵抗 | 15 p.u. |
| 三相送電線路 | 正相・逆相インピーダンス | $0.01+\mathrm{j}0.04$ p.u. |
| 三相送電線路 | 零相インピーダンス | $\mathrm{j}0.2$ p.u. |

点Fにおける故障発生前の線間電圧を162 kVとして，次の問に答えよ。

### (1)

点Fから系統を見た零相，正相，逆相インピーダンス $\dot Z_0$ [p.u.]，$\dot Z_1$ [p.u.]，$\dot Z_2$ [p.u.]を求めよ。

### (2)

地絡電流 $|\dot I_{\mathrm{a}}|$ [p.u.]を求めよ。ここで，点Fにおける故障発生前のa相電圧を $\dot E_{\mathrm{a}}$ [p.u.]とすると，地絡電流の零相分 $\dot I_0$ [p.u.]は次式で表される。

$$
\dot I_0=\frac{\dot E_{\mathrm{a}}}{\dot Z_0+\dot Z_1+\dot Z_2}
$$

### (3)

地絡電流の値 $|\dot I_{\mathrm{a}}|$ [A]を求めよ。

![同期発電機と両端の三相変圧器，中間点Fでの1線地絡](/diagrams/questions/2025/2025-secondary-power-management-q02-fig01.png)

## 解答

### (1)

点Fから見た各インピーダンスは次式のように計算できる。

$$
\dot Z_1=\mathrm{j}0.2+\frac{0.01+\mathrm{j}0.04}{2}=0.005+\mathrm{j}0.22\ \mathrm{p.u.}
$$

$$
\dot Z_2=\mathrm{j}0.2+\frac{0.01+\mathrm{j}0.04}{2}=0.005+\mathrm{j}0.22\ \mathrm{p.u.}
$$

$$
\dot Z_0=3\times15+\mathrm{j}0.2+\mathrm{j}\frac{0.2}{2}=45+\mathrm{j}0.3\ \mathrm{p.u.}
$$

### (2)

点Fにおける故障発生前の電圧を単位法で表すと $\dfrac{162}{154}\doteqdot1.051\,9$ となる。したがって，題意より1線地絡故障による地絡電流の零相分は次式で表される。

$$
\dot I_0=\frac{1.051\,9}{45+\mathrm{j}0.3+0.005+\mathrm{j}0.22+0.005+\mathrm{j}0.22}=\frac{1.051\,9}{45.01+\mathrm{j}0.74}
$$

$$
\therefore |\dot I_0|=0.023\,367
$$

したがって，

$$
|\dot I_{\mathrm{a}}|=3|\dot I_0|=0.070\,101\quad\to\quad0.0701\ \mathrm{p.u.}
$$

### (3)

小問(2)で得られた解に基準電流を乗じて以下のとおり導出できる。

$$
|\dot I_{\mathrm{a}}|[\mathrm{A}]=0.070\,101\ [\mathrm{p.u.}]\cdot\frac{1\,000\cdot10^6}{\sqrt{3}\cdot154\cdot10^3}[\mathrm{A}]=262.81\quad\to\quad263\ \mathrm{A}
$$
