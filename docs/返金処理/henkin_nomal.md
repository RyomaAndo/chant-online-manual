---
sidebar_label: '返金処理～通常編～'
title: '返金処理～通常編～'
---

## 概要

過去に利用料項目で登録した入金済みの実費請求を翌月以降に返金するときの操作です。
売上の取消については[**実費の売上取消**](../売上取消/torikesi_zippi.md)をご覧ください。

## 注意事項

-   返金登録をする前に売上取消をしてください。

## 操作手順

「**10月に5,000円で請求した商品を11月に2,500円分返金**」を例にして具体的な操作手順を示します。  
この例では、外税の項目を使用しているため、**請求額5,500円**となっています。

<img src={require('./henkin_nomal_img/01_octSeikyu.png').default} alt="10月請求" />

### 1.売上取消を登録する

[**実費の売上取消**](../売上取消/torikesi_zippi.md)より返金分の売上を取り消します。

<img src={require('./henkin_nomal_img/02_torikesi.png').default} alt="実費取消" />

### 2. 入金入力画面を開く

入金入力画面で11月請求を開きます。

<img src={require('./henkin_nomal_img/03_nyukinInput.png').default} alt="入金入力"/>

### 3. 返金情報を登録する

以下のように返金用の情報を設定します。
* 入金日（返金日）を設定
* 入金方法を「**その他**」を選択
* 備考入力をクリックし、「**現金返金**もしくは**振込返金**」を入力
* 入金額欄に「返金額」を入力
* 入力内容に誤りがないことを確認し、「登録」を設定します。

<div>
  <img src={require('./henkin_nomal_img/04_henkin.png').default} alt="返金" />
  <br/>
  <img src={require('./henkin_nomal_img/05_bikou.png').default} alt="備考" />
</div>

### 5. 訂正金額の反映を売上報告書で確認

「**＊＊＊帳票**」で返金分が反映されていることを確認

---

以上で操作は完了です。