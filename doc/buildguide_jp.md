# Lily58 ビルドガイド 

## 新しいビルドガイドページを参照ください
[https://kata0510.github.io/Lily58-Document/Lily58_BG.html](https://kata0510.github.io/Lily58-Document/Lily58_BG.html)

## 必要部品

| パーツ名 |  個数  |  備考  |
|--------|-------|-------|
|Lily58 PCB | 2枚 ||
|Lily58 ケース|1セット||
|ProMicro|2個|はんだ付けの回数が減り、破損しやすいコネクタのため交換が可能になるため別売の[コンスルー](https://yushakobo.jp/shop/a01mc-00/)の使用を推奨|
|キースイッチ(CherryMX,PG1350)|58pcs ※|ALPS軸非対応|
|キーキャップ|1U 56個 1.5U 2個※|1.5Uの部分は1Uでも可|
|ダイオード 1N4148|58本(個)||
|タクトスイッチ|2個||
|TRRSジャック|2個||
|M2 スペーサー 6mm,10mm|10個,4個||
|M2 ネジ 5mm|28個||
|TRS(TRRS)ケーブル|1本|AUXケーブルと言われるオーディオ用のケーブルです|
|MicroUSBケーブル|1本|Pro Micro側のコネクタの耐久性が低いためマグネット式を推奨|

※キットには付属していないため用意が必要です。


## ダイオードを取り付ける
**ロープロファイルスイッチを使用する場合スイッチを取り付けるアクリルプレートとPCBの間の高さを稼げないため別売の[表面実装ダイオード(1N4148W)](http://akizukidenshi.com/catalog/g/gI-07084/)を使用することを推奨します。
付属の足付きダイオードを使用する場合ははんだ付けした面の飛び出しを最小限にする必要があります。(足をカットしてからはんだ付けを行う)**

このPCBはリバーシブルなので**片面づつに**部品を実装していきます。ダイオードを実装する面(オレンジの部品が見える方)が裏面の扱いになります。
![img_2008](https://user-images.githubusercontent.com/6285554/52172886-61d20700-27bc-11e9-888f-42a95c7dd569.JPG)
横から見るとこのような図になります
![PCB2](https://user-images.githubusercontent.com/6285554/51115630-2642bd80-184c-11e9-93e5-8f85ee5e45b0.png)

ダイオードの足を曲げます。
ケース3枚を重ねた状態のものに押し当てると簡単にダイオードの足を曲げることができます。  
![img_2009](https://user-images.githubusercontent.com/6285554/52172887-6ac2d880-27bc-11e9-9b3e-378a83c5a881.JPG)
 
 PCBの裏側(スイッチやProMicroを取り付けるのと反対側)に折り曲げたダイオードを差し込みます。  
ダイオードには向きがあります。PCBの表記を確認して正しい方向に差し込んで下さい。  
以下の画像のようにダイオードの黒い線が常に基板の表示の三角形の横棒のある方向に向いた状態ではんだ付けをしてください。向きが正しくないとキーが反応しません。
![46900579-542c0500-cedf-11e8-87a7-07f710f7e78e](https://user-images.githubusercontent.com/6285554/52002682-f7903c80-2505-11e9-907a-8407568322da.jpg)
![diode](https://user-images.githubusercontent.com/6285554/48820707-83187f00-ed99-11e8-802e-90b23ca594a0.png)  
  
裏側からはんだ付けを行いますが落ちてしまうため、マスキングテープなどで止めます。止める際にダイオードが浮かないようにテープの上から力を加えて抑えながら仮固定します。
![img_2010](https://user-images.githubusercontent.com/6285554/52172891-829a5c80-27bc-11e9-81ab-878caa8645f6.jpg)
はんだ付けを行います。
![unadjustednonraw_thumb_2d42](https://user-images.githubusercontent.com/6285554/52172899-b07fa100-27bc-11e9-9210-38bbdfb7d979.jpg)

はんだ付けが終わったらダイオードの足をニッパー等でカットします。カットするときに足が飛びやすいため、手で足をつまみながらカットしましょう。
カットが終わったら10mm(長いスペーサー)を取り付けします。
![unadjustednonraw_thumb_2d48](https://user-images.githubusercontent.com/6285554/52172901-b07fa100-27bc-11e9-88a8-61a0eacfc6a4.jpg)

## TRRSジャック/リセットスイッチをはんだ付けする
表面の左上にTRRSジャックを取り付けします。どちらも裏返してはんだ付けする際に落ちたりずれやすいのでマスキングテープなどで仮固定します。
![unadjustednonraw_thumb_2d4a](https://user-images.githubusercontent.com/6285554/52172948-8da1bc80-27bd-11e9-928b-fba7b8fa2b49.jpg)  
裏側からはんだ付けをします。
![unadjustednonraw_thumb_2d4b](https://user-images.githubusercontent.com/6285554/52172964-e6715500-27bd-11e9-9b0a-4186301a1d56.jpg)


## OLED用を使用する場合(オプション)
OLEDを使用する場合は表面のProMicro近くの4つのパッドをジャンパさせてください。   
![unadjustednonraw_thumb_2d41](https://user-images.githubusercontent.com/6285554/52172989-41a34780-27be-11e9-858a-cc69c2626160.jpg)

## Pro Microをはんだ付けする
   
#### コンスルーを使用する場合
[コンスルー](https://yushakobo.jp/shop/a01mc-00/)を使用する場合は以下のような取り付け方法を行ってください。
Helixの[ビルドガイド](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro)のProMicroの章を参考にはんだ付けを行います。
ProMicro側のみはんだ付けを行い、PCB側ははんだ付けしません。
はんだ付けが終わった後は浮きが無いようにしっかりと差し込みます。

### 付属のピンを使用する場合
Pro Microを袋から取り出し、足が長い方を下にして以下の画像の赤線の内側の**PCBの線で囲まれている列を確認して**PCBに差し込みます。左右で差し込む場所が異なるため注意してください。 

![ProMicro_PCB](https://user-images.githubusercontent.com/6285554/48819671-6a599a80-ed94-11e8-8e5d-6a6abca326a7.png)

Pro Microをその上から部品が乗っている面を下向きにして取り付けします。
ProMicro側をはんだ付けをします。
![46900581-54c49b80-cedf-11e8-88e1-25a1a2fb378d](https://user-images.githubusercontent.com/6285554/52002684-f95a0000-2505-11e9-83f6-6eb3dc8f2a02.jpg)
![46900582-54c49b80-cedf-11e8-9107-83038838a7da](https://user-images.githubusercontent.com/6285554/52002687-f9f29680-2505-11e9-9ecf-b7bf3ad9f270.jpg)

ProMicro側をはんだ付け後マスキングテープ等で固定し基板の裏側からはんだ付けを行います。  
はんだ付け後ニッパーなどで余っているピンをカットします  

## キースイッチを取り付ける
トッププレートにスペーサーとキースイッチを4箇所はめ込み、ピンが曲がらないように注意しながらPCBに取り付けし、浮きや傾きが無いことを確認して4つのスイッチをはんだ付けします。
![unadjustednonraw_thumb_2d3e](https://user-images.githubusercontent.com/6285554/52173011-9a72e000-27be-11e9-9716-4c9a301c35ac.jpg)
![4dabqoswsoi9o8wor3cdfg_thumb_2d49](https://user-images.githubusercontent.com/6285554/52173013-9fd02a80-27be-11e9-958e-54bb7e929f1d.jpg)

トッププレートに残りのスイッチを取り付けをします。   
正常に取り付けできている場合PCBからピンの足が少し出てきますが曲がっている場合やしっかりとはまっていない場合は下側の画像のように足が出てきません。足が曲がっている場合やプレートにしっかりはまっていないので1度取り外すなどして確認して下さい。   
すべてのスイッチを取り付けをしてはんだ付けをします。
![48868154-037fc400-ee1c-11e8-9d45-b888f744387a](https://user-images.githubusercontent.com/6285554/52002691-fb23c380-2505-11e9-8fa1-c75d20d3636d.jpg)
![switch](https://user-images.githubusercontent.com/6285554/48868657-b7ce1a00-ee1d-11e8-9346-9bfc967e95cf.png)

## ProMicroカバーを取り付け
Pro Micro上部用のアクリルを取り付けます。  
幅が広い方を外側にして取り付けます。低頭ネジで上部をネジ止めします。
![promicro_cover](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png)
![unadjustednonraw_thumb_2d47](https://user-images.githubusercontent.com/6285554/52173081-ea9e7200-27bf-11e9-9551-3eb41a0389cb.jpg)
## キーマップの書き込み
キーマップを書き込むために準備が必要です。導入されていることを前提に記述しております。[qmk公式のページなどを参考に導入して下さい。](https://docs.qmk.fm/#/getting_started_build_tools)  
  
QMK Toolboxを使用すれば環境構築の必要が無く、GUIで書き込みが行うことができます。(キーマップの変更はできません)
[qmk/qmk_toolbox](https://github.com/qmk/qmk_toolbox/releases)

Lily58のデフォルトキーマップを書き込むにはqmk_firmwareのフォルダ階層で以下を実行します

    make lily58:default:avrdude  


**Detecting USB port, reset your controller now...** と表示されたらキーボード上のリセットボタンを押すと書き込みが始まります。  
上記の要領でもう片方のキーボードにも同じように書き込みを行って下さい。 

Defaultキーマップは以下のようになっています。
![lily58_default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## 動作確認
左右をTRRSケーブル(TRSケーブル)で接続し左側のProMicro(デフォルトキーマップの場合)にMicroUSBケーブルを接続しキーが反応するかを確認して下さい。  
裏面にゴム足を4箇所取り付けて完成です。お疲れ様でした。
![vu6sptlhszykivrvgkltyw_thumb_2d44](https://user-images.githubusercontent.com/6285554/52173150-795fbe80-27c1-11e9-8376-edc698e943e8.jpg)

![47264498-53384a80-d553-11e8-907a-a03c6f2c5893](https://user-images.githubusercontent.com/6285554/52002699-fd861d80-2505-11e9-96a8-f58a93534255.jpg)

## 困ったときは
### Q.1列(複数列)又は1行(複数行)キースイッチが反応しない
A.ProMicroのはんだ付け、取り付けしっかりとできてない場合があります。再度確認し、必要に応じて再度はんだ付け、取り付けを行ってください。

### Q.キースイッチが単体で反応しない
A.キースイッチのはんだづけ又はダイオードのはんだ付けに問題がある可能性があります。

キースイッチの場合
問題のあるキースイッチのはんだ付けを確認してください。はんだが足りてない場合は再度はんだ付けを行ってください。
  
ダイオードのはんだ付けの場合
ダイオードの向きを確認してください。間違っていた場合は外してはんだ付けし直してください。
はんだ付けが足りない場合は再度はんだ付けを行ってください。

**困った場合などはお気軽にDiscordサーバー([Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW))の「#Lily58」チャンネルもしくはTwitter:@F_YUUCHIにメッセージをお送りください**