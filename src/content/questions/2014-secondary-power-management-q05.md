---
title: "2014年度 電力・管理 問5 太陽電池発電所の逆潮流による電圧上昇"
year: 2014
examStage: "secondary"
subject: "power-management"
questionNumber: 5
topics: ["photovoltaics","transmission"]
sourceName: "一般財団法人 電気技術者試験センター 平成26年度第二種電気主任技術者二次試験 電力・管理"
sourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_q01.pdf#page=7"
answerSourceUrl: "https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf#page=7"
sourceNote: "ユーザー提供の問題PDF 7-8ページと公式標準解答PDF 7-8ページを転記。タイトルは整理用に付記。改行・全半角・数式表記をMarkdown/LaTeXに整形し，図は原本から切り抜き。表紙・答案用紙記入上の注意・柱・ページ番号は省略。共通の有効数字等は原本2ページ参照。式番号の丸数字は括弧数字に整形。"
publishedAt: "2026-11-25"
updatedAt: "2026-11-25"
reviewStatus: published
sample: false
description: "2014年度の電験二種二次試験，電力・管理の問5。太陽電池発電所の逆潮流による電圧上昇の問題と公式標準解答。"
---

## 問題

図に示すような三相3線式高圧配電線の末端に負荷が接続されており，新たに太陽電池発電所を設置した場合の逆潮流による電圧上昇について，次の問に答えよ。

ただし，低圧需要家側の電流は無視し，計算諸元は次のとおりとする。

- 高圧配電線電圧：高圧6 600 V
- 高圧配電線インピーダンス：$r+\mathrm{j}x=2.82+\mathrm{j}3.19$ Ω
- 柱上変圧器のタップ比：一次電圧/二次電圧　6 600 V/210 V
- 負荷：動力800 kW，遅れ力率0.6，力率改善用コンデンサ1 000 kvar
- 太陽電池発電所：出力2 000 kW，力率1
- 電流値計算にあたっては，高圧配電線電圧6 600 Vを用いる

![高圧配電線（6 600 V，r+jx=2.82+j3.19 Ω）の末端に，太陽電池発電所（2 000 kW，力率1），負荷（力率改善用コンデンサ1 000 kvar，動力800 kW 遅れ力率0.6），柱上変圧器（タップ比6 600 V/210 V）を介した低圧需要家が接続された構成図](/diagrams/questions/2014/2014-secondary-power-management-q05-fig01.png)

### (1)

負荷側に流れる有効電流$I_{\mathrm{PL}}$ [A]と無効電流$I_{\mathrm{QL}}$ [A]を求めよ。

### (2)

太陽電池発電所が接続されることによる低圧需要家側の受電電圧$V_{\mathrm{L}}$ [V]を求めよ。ただし，逆潮流による配電線の電圧上昇$\Delta V$は，負荷側に流れる電流を正とした場合，

$\Delta V=-\sqrt{3}$（有効電流×線路の抵抗分＋無効電流×線路のリアクタンス分）で求めよ。

### (3)

上記(2)で求めた受電電圧$V_{\mathrm{L}}$ [V]は，法令で定める維持すべき電圧をいくら超えているか，その値$V_{\mathrm{D}}$ [V]を求めよ。

### (4)

高圧配電線，負荷，太陽電池発電所及び柱上変圧器で考えられる電圧上昇抑制対策を二つ述べよ。

## 解答

### (1)

負荷側に流れる電流$I_{\mathrm{L}}$のうち，有効分を$I_{\mathrm{PL}}$無効分を$I_{\mathrm{QL}}$とすると，

$$
\begin{gathered}
800\times10^3=\sqrt{3}\times6\,600\times I_{\mathrm{PL}}\\
I_{\mathrm{PL}}=\frac{800\times10^3}{\sqrt{3}\times6\,600}\fallingdotseq69.98\ \rightarrow\ 70.0\ \mathrm{A}\quad\text{（答）}
\end{gathered}
$$

無効電力のうち動力分の遅れ無効電力は，$\cos\theta=0.6$から$\sin\theta=0.8$，

$$
800\times10^3\times\frac{0.8}{0.6}=1\,067\ \mathrm{kvar}
$$

力率改善用コンデンサは進みであるから，配電線に流れる無効電力は，

$$
1\,067-1\,000=67\ \mathrm{kvar}
$$

$I_{\mathrm{QL}}$を求めると，

$$
I_{\mathrm{QL}}=\frac{67\times10^3}{\sqrt{3}\times6\,600}\fallingdotseq5.861\ \rightarrow\ 5.86\ \mathrm{A}\quad\text{（答）}
$$

### (2)

太陽電池発電所に流れる電流$I_{\mathrm{G}}$は，

$$
\begin{gathered}
2\,000\times10^3=\sqrt{3}\times6\,600\times I_{\mathrm{G}}\\
I_{\mathrm{G}}=\frac{2\,000\times10^3}{\sqrt{3}\times6\,600}\fallingdotseq174.95
\end{gathered}
$$

電流の向きに注意し，配電線に流れる電流$I$は，

$$
I=69.98+\mathrm{j}5.861-174.95=-104.97+\mathrm{j}5.861
$$

電圧上昇は，与えられている式から

$$
\Delta V=-\sqrt{3}(-104.97\times2.82+5.861\times3.19)\fallingdotseq480.33\ \mathrm{V}
$$

低圧側の受電電圧$V_{\mathrm{L}}$はタップ比を考慮して

$$
V_{\mathrm{L}}=\frac{(6\,600+480.33)\times210}{6\,600}\fallingdotseq225.283\ \rightarrow\ 225\ \mathrm{V}\quad\text{（答）}
$$

### (3)

電気事業法施行規則より上限電圧は$202+20=222$ Vであるから，

$$
V_{\mathrm{D}}=225.283-222=3.283\ \rightarrow\ 3.28\ \mathrm{V}\quad\text{（答）}
$$

### (4)

- 電線を太くしインピーダンスを減少
- 力率改善用コンデンサの開放
- 新たな無効電力補償装置の設置
- 太陽電池発電設備側でインバータによる無効電力補償の増
- 柱上変圧器のタップ変更
