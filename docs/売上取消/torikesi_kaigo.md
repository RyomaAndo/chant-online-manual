---
sidebar_label: '介護保険の売上取消'
title: '介護保険の売上取消'
---

## 概要

一度確定した保険請求を取消ための操作です。
審査内容が「過誤決定」かつ「損金」にチェックを入れることで取消できます。

## 注意事項

-   操作を行う前に、対象となる請求が本当に取り消すべきものか再確認してください。
-   関連する請求データや入金データへの影響を理解した上で操作を行ってください。

## 操作手順

「**10月に計上した売上を11月に取り消す**」例で具体的な操作手順を示します。  
この例では、取消前は件数が**2件で金額は63,751円**となっており、そのうち**20,178円分を取消**します。

<div>
  <img src={require('./torikesi_kaigo_img/01_hoken.png').default} alt="介護保険請求データ" />
  <br/>
  <img src={require('./torikesi_kaigo_img/02_riyouryo.png').default} alt="利用料請求書" />
  <br/>
  <img src={require('./torikesi_kaigo_img/03_base-output.png').default} alt="売上報告書修正前" />
</div>

### 1. 審査結果で過誤決定を登録

介護報酬請求システムSPで審査結果画面を開きます。  
審査結果取込画面で**内容を「過誤決定」に設定**して登録します。

<img src={require('./torikesi_kaigo_img/04_sinsa-result.png').default} alt="審査結果画面" />

### 2. 入金日の登録

介護給付費入金管理で入金日を登録します。  
※ここで入金日を登録しないとChantに連携されないので注意してください。

<img src={require('./torikesi_kaigo_img/05_nyukin-day.png').default} alt="審査結果画面" />


### 3. 損金の登録

介護給付費入金管理で入金日の左側にある**損金にチェック**をつけて計上日を登録します。  
この操作で20,178円分の請求を取消できます。

<img src={require('./torikesi_kaigo_img/06_nyukin-sonkin.png').default} alt="審査結果損金" />


### 4. 訂正金額の反映を売上報告書で確認

本部送信後、請求年月11月、サービス提供年月10月で売上報告書を出力すると、  
取消が反映されて、取消後の金額が表示されます。  
件数は変化しないため、**2件で43,573円で表示**されています。

<img src={require('./torikesi_kaigo_img/07_cancel-output.png').default} alt="審査結果画面" />

---

以上で操作は完了です。