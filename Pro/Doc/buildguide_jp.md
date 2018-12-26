# Lily58 ビルドガイド 


## 必要部品

| パーツ名 |  個数  |  備考  |
|--------|-------|-------|
|Lily56 PCB | 2枚 ||
|Lily56 ケース|1セット||
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
![PCB1](https://user-images.githubusercontent.com/6285554/48868151-011d6a00-ee1c-11e8-99a2-9573da09a4cd.jpg)
![PCB](https://user-images.githubusercontent.com/6285554/48837207-0e106e00-edc8-11e8-9766-34db770ba186.png)


ダイオードをの足を曲げます。
ケース3枚を重ねた状態のものに押し当てると簡単にダイオードの足を曲げることができます。  
 
ダイオードには向きがあります。PCBの表記を確認して正しい方向に差し込んで下さい。  
以下の画像のようにダイオードの黒い線が常に基板の表示の三角形の横棒のある方向に向いた状態ではんだ付けをしてください。向きが正しくないとキーが反応しません。
![img_0905](https://user-images.githubusercontent.com/6285554/46900579-542c0500-cedf-11e8-87a7-07f710f7e78e.jpeg)
![diode](https://user-images.githubusercontent.com/6285554/48820707-83187f00-ed99-11e8-802e-90b23ca594a0.png)  
![img_0906](https://user-images.githubusercontent.com/6285554/46900580-54c49b80-cedf-11e8-865e-58efa7f6a1a6.jpeg)
裏側からはんだ付けを行いますが落ちてしまうので足を広げるかマスキングテープなどで止めます。  

はんだ付けが終わったらダイオードの足をニッパー等でカットします。カットするときに飛ぶ場合があるので抑えながらカットするなどしてください。


## TRRSジャック リセットスイッチをはんだ付けする
表面の左上にTRRSジャックを取り付けします。どちらも裏返してはんだ付けする際に落ちたりずれやすいのでマスキングテープなどで固定します  

## Pro Microをはんだ付けする
(コンスルーソケット使用の場合ははんだ付けの方法が異なります。[コンスルーを使用する場合](https://github.com/kata0510/Lily58/blob/master/doc/buildguide_jp.md#コンスルーを使用する場合)を参照してください。)  

Pro Microを袋から取り出し、足が長い方を下にして以下の画像の赤線の内側の**PCBの線で囲まれている列を確認して**PCBに差し込みます。左右で差し込む場所が異なるため注意してください。 

![ProMicro_PCB](https://user-images.githubusercontent.com/6285554/48819671-6a599a80-ed94-11e8-8e5d-6a6abca326a7.png)

Pro Microをその上から部品が乗っている面を下向きにして取り付けします。
ProMicro側をはんだ付けをします。
![img_0908](https://user-images.githubusercontent.com/6285554/46900581-54c49b80-cedf-11e8-88e1-25a1a2fb378d.jpeg)  
![img_0911](https://user-images.githubusercontent.com/6285554/46900582-54c49b80-cedf-11e8-9107-83038838a7da.jpeg)

ProMicro側をはんだ付け後マスキングテープ等で固定し基板の裏側からはんだ付けを行います。  
はんだ付け後ニッパーなどで余っているピンをカットします  

#### コンスルーを使用する場合
[コンスルー](https://yushakobo.jp/shop/a01mc-00/)を使用する場合は以下のような取り付け方法を行ってください。
Helixの[ビルドガイド](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro)のProMicroの章を参考にはんだ付けを行います。
ProMicro側のみはんだ付けを行い、PCB側ははんだ付けしません。
はんだ付けが終わった後は浮きが無いようにしっかりと差し込みます。

## キースイッチを取り付ける
トッププレートにキースイッチをはめ込み、ピンが曲がらないように取り付けをします。
中列から取り付けていき最後に外側にはんだ付けをしていきます。
正常に取り付けできている場合PCBからピンの足が少し出てきますが曲がっている場合やしっかりとはまっていない場合は下側の画像のように足が出てきません。足が曲がっている場合やプレートにしっかりはまっていないので1度取り外すなどして確認して下さい。 
![img_0940](https://user-images.githubusercontent.com/6285554/48868154-037fc400-ee1c-11e8-9d45-b888f744387a.jpg)
![switch](https://user-images.githubusercontent.com/6285554/48868657-b7ce1a00-ee1d-11e8-9346-9bfc967e95cf.png)

## スペーサーとネジを取り付け
10mmの丸いスペーサー4つをProMicro付近の穴に取り付けします
![img_0941](https://user-images.githubusercontent.com/6285554/48868166-0c709580-ee1c-11e8-9af9-0edfa0135c78.jpg)
5mmスペーサーを片側5箇所に取り付けします。  
Pro Micro上部用のアクリルを取り付けます。  
幅が広い方を外側にして取り付けます。低頭ネジで上部をネジ止めします。
![plate](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png)
![img_0942](https://user-images.githubusercontent.com/6285554/46900554-d2d47280-cede-11e8-96d6-5e3961472ad3.jpeg)

## キーマップの書き込み
キーマップを書き込むために準備が必要です。導入されていることを前提に記述しております。[qmk公式のページなどを参考に導入して下さい。](https://docs.qmk.fm/#/getting_started_build_tools)  
Lily58のデフォルトキーマップを書き込むにはqmk_firmwareのフォルダ階層で以下を実行します

    make lily58:default:avrdude  


**Detecting USB port, reset your controller now...** と表示されたらキーボード上のリセットボタンを押すと書き込みが始まります。  
上記の要領でもう片方のキーボードにも同じように書き込みを行って下さい。 

Defaultキーマップは以下のようになっています。
![lily58_default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## 動作確認
左右をTRRSケーブル(TRSケーブル)で接続し左側のProMicro(デフォルトキーマップの場合)にMicroUSBケーブルを接続しキーが反応するかを確認して下さい。  
裏面にゴム足を4箇所取り付けて完成です。お疲れ様でした。
![dsc02250](https://user-images.githubusercontent.com/6285554/47264498-53384a80-d553-11e8-907a-a03c6f2c5893.JPG)

組み立てに困った場合などはお気軽にDiscordサーバー([Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW))の「#Lily58」チャンネルもしくはTwitter:@F_YUUCHIにメッセージをお送りください