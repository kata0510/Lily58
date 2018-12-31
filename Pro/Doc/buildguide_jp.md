# Lily58 Pro ビルドガイド[WIP]


## 必要部品

| パーツ名 |  個数  |  備考  |
|--------|-------|-------|
|Lily58 PCB | 2枚 ||
|Lily58 ケース|1セット||
|ProMicro|2個|はんだ付けの回数が減り、破損しやすいコネクタのため交換が可能になるため別売の[コンスルー](https://yushakobo.jp/shop/a01mc-00/)の使用を推奨|
|キースイッチ(CherryMX,PG1350)|58pcs ※|ALPS軸非対応|
|キーキャップ|1U 56個 1.5U 2個※|1.5Uの部分は1Uでも可|
|ダイオード 1N4148W|58個||
|タクトスイッチ|2個||
|TRRSジャック|2個||
|M2 スペーサー 6mm,10mm|10個,4個||
|M2 ネジ 5mm|28個||
|TRS(TRRS)ケーブル|1本|AUXケーブルと言われるオーディオ用のケーブルです|
|MicroUSBケーブル|1本|Pro Micro側のコネクタの耐久性が低いためマグネット式を推奨|


※キットには付属していないため用意が必要です。

## ダイオードを取り付ける

このPCBはリバーシブルなので**片面づつに**部品を実装していきます。ダイオードを実装する面(オレンジの部品が見える方)が裏面の扱いになります。
![2018-12-31 12 39 24](https://user-images.githubusercontent.com/6285554/50555633-8432b980-0d12-11e9-97d2-7bcbdd840fed.jpg)

ダイオードの線が常に基板の表示の三角形の横棒のある方向に向いた状態ではんだ付けをしてください。向きが正しくないとキーが反応しません。

PCBのダイオードの片方のパッドに予備はんだ(基板にはんだを少し溶かして盛る)をします。
その後ピンセットなどを使用してダイオードの片方を予備はんだを使用して片方をはんだ付けをし、ダイオードを固定します。
![2018-12-31 12 45 06](https://user-images.githubusercontent.com/6285554/50555635-8a289a80-0d12-11e9-9d07-64078182bcb3.jpg)

もう片方もはんだ付けをします。
![2018-12-31 12 45 22](https://user-images.githubusercontent.com/6285554/50555636-8dbc2180-0d12-11e9-89b1-7465454dc6e0.jpg)

## ソケットをはんだ付けする
ソケットはダイオードと同じ面に取り付けをします。
ダイオードをと同じようにソケットのパッドの片方に予備はんだをし、ソケットを載せて抑えながらはんだ付けをします。
![2018-12-31 12 51 20](https://user-images.githubusercontent.com/6285554/50555642-96145c80-0d12-11e9-862b-1b60d3fe81c1.jpg)
その後両方をしっかりとはんだ付けをし、浮きがないか確認をします。
![2018-12-31 12 53 07](https://user-images.githubusercontent.com/6285554/50555644-9ad91080-0d12-11e9-83d6-5c8837084b18.jpg)


## TRRSジャック リセットスイッチをはんだ付けする
表面の左上にTRRSジャックを取り付けします。どちらも裏返してはんだ付けする際に落ちたりずれやすいのでマスキングテープなどで固定します  

## Pro Microをはんだ付けする
コンスルーを取り付ける際はHelixのビルドガイドに記載されている方法に従ってはんだ付けをしてからLily58のPCBに取り付けを行ってください。[Helixビルドガイド](https://github.com/kata0510/Lily58/blob/master/doc/buildguide_jp.md#コンスルーを使用する場合)

#### コンスルーを使用する場合
[コンスルー](https://yushakobo.jp/shop/a01mc-00/)を使用する場合は以下のような取り付け方法を行ってください。
Helixの[ビルドガイド](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro)のProMicroの章を参考にはんだ付けを行います。
ProMicro側のみはんだ付けを行い、PCB側ははんだ付けしません。
はんだ付けが終わった後は浮きが無いようにしっかりと差し込みます。

## キースイッチを取り付ける
トッププレートにキースイッチをはめ込み、ピンが曲がらないように取り付けをします。
中列から取り付けていき最後に外側向かって取り付けていくとしっかりと取り付けることができます。

## スペーサーとネジを取り付け
10mmの丸いスペーサー4つをProMicro付近の穴に取り付けします
![2018-12-31 21 12 38](https://user-images.githubusercontent.com/6285554/50560166-63ce2380-0d41-11e9-9306-d824034e67c3.jpg)
5mmスペーサーを片側5箇所に取り付けします。  
Pro Micro上部用のアクリルを取り付けます。  
幅が広い方を外側にして取り付けます。低頭ネジで上部をネジ止めします。
![plate](https://user-images.githubusercontent.com/6285554/48837829-c4288780-edc9-11e8-8efb-6714d8e68e92.png)
![img_0942](https://user-images.githubusercontent.com/6285554/46900554-d2d47280-cede-11e8-96d6-5e3961472ad3.jpeg)

## キーマップの書き込み
キーマップを書き込むために準備が必要です。導入されていることを前提に記述しております。[qmk公式のページなどを参考に導入して下さい。](https://docs.qmk.fm/#/getting_started_build_tools)  
Lily58のデフォルトキーマップを書き込むにはqmk_firmwareのフォルダ階層で以下を実行します

    sudo make lily58:default:avrdude  


**Detecting USB port, reset your controller now...** と表示されたらキーボード上のリセットボタンを押すと書き込みが始まります。  
上記の要領でもう片方のキーボードにも同じように書き込みを行って下さい。 

Defaultキーマップは以下のようになっています。
![lily58_default](https://user-images.githubusercontent.com/6285554/47273241-38ee8300-d5cc-11e8-9099-10c1b35e24fc.png)

## 動作確認
左右をTRRSケーブル(TRSケーブル)で接続し左側のProMicro(デフォルトキーマップの場合)にMicroUSBケーブルを接続しキーが反応するかを確認して下さい。  
裏面にゴム足を4箇所取り付けて完成です。お疲れ様でした。
![dsc02250](https://user-images.githubusercontent.com/6285554/47264498-53384a80-d553-11e8-907a-a03c6f2c5893.JPG)

組み立てに困った場合などはお気軽にDiscordサーバー([Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW))の「#Lily58」チャンネルもしくはTwitter:@F_YUUCHIにメッセージをお送りください