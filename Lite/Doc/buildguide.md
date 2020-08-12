## 新しいビルドガイドページを参照ください
[https://kata0510.github.io/Lily58-Document/Lily58_Lite_BG.html](https://kata0510.github.io/Lily58-Document/Lily58_Lite_BG.html)


## 内容品の確認
キットの内容品の確認をします。  
![IMG_4126のコピー](https://user-images.githubusercontent.com/6285554/63318661-2e1e8f00-c352-11e9-8275-bc597f2448a3.jpg)


# 組み立て
## 必要な道具
|道具名||
|---|---|
|はんだごて|はんだ付けをするために必要です。温調機能があるタイプを推奨します(FX-600等)|
|はんだ||
|ニッパー|ダイオードの足をカットするために必要です|

## 基板を確認する
Lily58と書かれている面が表面となります。
![IMG_3546](https://user-images.githubusercontent.com/6285554/60533802-71d61e80-9d3b-11e9-9ab9-a4539b27dee7.jpeg)

## ダイオードを取り付ける
付属している9mm幅のアクリルダイオードベンダーでダイオードの足を折り曲げます。
![IMG_3547](https://user-images.githubusercontent.com/6285554/60533803-726eb500-9d3b-11e9-9cef-ea75b94636ce.jpeg)
ない場合はケースを3枚重ねると9mm幅になり、同じようにダイオードの足を折り曲げることができます。

基板を裏側にし、三角形に横棒がある向き(上側)をダイオードの黒い線が来るように差し込みます。向きが正しくないと完成後キーが反応しません。
![IMG_3549](https://user-images.githubusercontent.com/6285554/60533805-726eb500-9d3b-11e9-85c5-049667bc401f.jpeg)

差し込んだ後、裏側からはんだ付けをします。
裏返す際にダイオードが落ちたりしてしまうため、マスキングテープなどで仮固定します。
![IMG_3550](https://user-images.githubusercontent.com/6285554/60533806-726eb500-9d3b-11e9-89f2-feb295ec7948.jpeg)
![IMG_3551](https://user-images.githubusercontent.com/6285554/60533807-726eb500-9d3b-11e9-9315-796a4cc4022d.jpeg)
![IMG_3552](https://user-images.githubusercontent.com/6285554/60533808-73074b80-9d3b-11e9-88e5-28b07ae948e8.jpeg)
はんだ付け後、ダイオードの足をニッパーなどでカットします。
![IMG_3553](https://user-images.githubusercontent.com/6285554/60533809-73074b80-9d3b-11e9-8e90-57176f832cd0.jpeg)

## TRRSジャック/リセットスイッチをはんだ付けする
TRRSジャックとリセットスイッチをはんだ付けします。
基板に差し込んだらマスキングテープで仮固定し、裏側からはんだ付けをします。

![IMG_3558](https://user-images.githubusercontent.com/6285554/60533814-739fe200-9d3b-11e9-8e95-1a08c391fb35.jpeg)
![IMG_3559](https://user-images.githubusercontent.com/6285554/60533815-739fe200-9d3b-11e9-815d-b37a7c29d052.jpeg)

## OLEDソケットを取り付けする

OLEDソケットを差し込み、マスキングテープで仮固定します。
![IMG_3591](https://user-images.githubusercontent.com/6285554/60533819-74387880-9d3b-11e9-9dfe-daed8ed96359.jpeg)
![IMG_3592](https://user-images.githubusercontent.com/6285554/60533820-74387880-9d3b-11e9-89e6-3a9de9416366.jpeg)
はんだの量が多いとソケット内に流れ込んでしまうため、気をつけてください。
![IMG_3593](https://user-images.githubusercontent.com/6285554/60533821-74387880-9d3b-11e9-9880-754296960b02.jpeg)


## Pro Microをはんだ付けする
Pro MicroのUSBコネクタは破損しやすいため、破損時に交換がしやすいスプリングピンヘッダ(コンスルー)を使用することを推奨しています。
遊舎工房でPro Microを購入している場合付属していますのでそちらを使用します。

スプリングピンヘッダ(コンスルー)には取り付け推奨向きがあります。
Helix[ビルドガイド](https://github.com/MakotoKurauchi/helix/blob/master/Doc/buildguide_jp.md#pro-micro)に記述されているように、コンスルーの小さい窓がある方向をPro Micro側(上側)になるようにします。
2本とも差し込んだ後、Pro Microを部品が下側になるように差し込みます。この時に少し強く押し込み、完全に差し込まれるようにします。

![IMG_3594](https://user-images.githubusercontent.com/6285554/60533822-74d10f00-9d3b-11e9-9e82-f9bfcc8ba22d.jpeg)
![IMG_3595](https://user-images.githubusercontent.com/6285554/60533825-74d10f00-9d3b-11e9-8295-f8f5358856e3.jpeg)

曲がっていたり、浮きが無いことを確認し、Pro Micro側のみをはんだ付けをします。抜き差しを可能にするため **基板側にははんだ付けを行わないでください**

## キースイッチを取り付ける
アクリルケースのトッププレート(スイッチ穴が空いている方)を取り出し、保護シートを剥がします。
トッププレートにスペーサーを取り付けます。  
スペーサー(短)とネジを取り出し、ネジを上側から通してからスペーサーを下側から回し、手で取り付けをします。  
キースイッチを写真の位置に4箇所差し込み、基板と合わせます。この際にズレやピンの曲がりがないよう注意しながらPCBに対して上からまっすぐ下ろして取り付けをし、スイッチが浮きや傾きが無いことを確認して4つのスイッチをはんだ付けします。  
その後、残りのスイッチを差し込んではんだ付けをします。
![IMG_3596](https://user-images.githubusercontent.com/6285554/60533827-74d10f00-9d3b-11e9-9e87-7a1d77b4970e.jpeg)
スペーサー(長)とネジを使い、OLEDプレート用のスペーサーを取り付けます。
![IMG_3597](https://user-images.githubusercontent.com/6285554/60533828-7569a580-9d3b-11e9-94cb-0d1d332ba203.jpeg)
ボトムプレートの保護フィルムを剥がし、ネジ止めをします。  
その後、ゴム足を貼り付けます。
![IMG_3598](https://user-images.githubusercontent.com/6285554/60533829-7569a580-9d3b-11e9-9a7e-759951baf6ea.jpeg)

## OLEDモジュールを取り付けする
OLEDモジュールを取り出し、ソケットにピンを差し込んでその上からOLEDモジュールを載せ、はんだ付けをします。  
その後OLEDカバーを取り付けます。
![IMG_3599](https://user-images.githubusercontent.com/6285554/60533830-7569a580-9d3b-11e9-9879-5f2892393f9f.jpeg)

### OLEDを取り付けない場合
OLEDを取り付けない場合はファームウェアのOLED機能をOFFにする必要があります。  
以下のOLED機能をオフにしたファームウェアをダウンロードしていただき、QMKToolboxで書き込んでいただく、   
もしくはご自身で環境を作っていただきファームウェアをコンパイルして頂く必要がございます。  
‘qmk_firmware/keyboards/lily58/rules.mk‘と  
‘qmk_firmware/keyboards/lily58/keymaps/[キーマップ]/rules.mk‘の‘OLED_DRIVER_ENABLE = yes‘をnoにしてコンパイルし、書き込んでください。
  
OLEDオフにしたデフォルトキーマップhexファイル
[ダウンロード(lily58_rev1_default.hex)](https://drive.google.com/uc?export=download&id=1yPxZlVRVBfqq0-pEKkJZc93vqW6Jdboj)
  
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
動作確認をして完了です、組み立てお疲れ様でした。

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

**困った場合などはお気軽にDiscordサーバー([Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW))の「#mon-shin」チャンネルもしくはTwitter:@F_YUUCHIにメッセージをお送りください**