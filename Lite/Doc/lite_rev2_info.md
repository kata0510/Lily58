## 新しいビルドガイドページを参照ください
[https://kata0510.github.io/Lily58-Document/Lily58_Lite_Rev2.html](https://kata0510.github.io/Lily58-Document/Lily58_Lite_Rev2.html)

## キット組み立てに関する詳細は以下のYouTube動画を参照下さい  
[![](https://img.youtube.com/vi/t6HLQvqlsVM/0.jpg)](https://www.youtube.com/watch?v=t6HLQvqlsVM)  

## 組み立てに必要な工具/部品一覧
## 必要な道具
||道具名|備考|
|:---:|---|---|
|1|はんだごて|FX-600等の温調機能があるタイプを推奨|
|2|はんだ||
|3|精密プラスドライバー||
|4|マスキングテープ|はんだ付けする前にパーツを固定するために必要です|
  
## 必要な部品
||パーツ|数量|購入先|
|:---:|---|---|---|
|1|Pro Micro(コンスルー付き)|2|[遊舎工房](https://yushakobo.jp/shop/promicro-spring-pinheader/)|
|2|キースイッチ(MX互換スイッチ※1)|58|[遊舎工房](https://yushakobo.jp/product-category/switches/)など|
|3|キーキャップ|58|[遊舎工房](https://yushakobo.jp/product-category/keycaps/),[TALP KEYBOARD](https://talpkeyboard.stores.jp/)など|
|4|MicroUSB|1|データ通信に対応している物を使用してください|
|5|TRRSケーブル|1|[遊舎工房](https://yushakobo.jp/shop/trrs_cable/)など|
|6|OLEDモジュール(オプション)※2|2|[遊舎工房](https://yushakobo.jp/shop/oled/)|

迷ったときのおすすめ  
キースイッチ:Gateron Silent Red  
https://yushakobo.jp/shop/a02gs/  
  
キーキャップ:MDA BigBang 
https://yushakobo.jp/shop/mda-big-bang-2-0/

※1 CherryMX互換スイッチのみの対応です。ロープロファイルスイッチは使用できません。  
  
※2 OLEDを使用しない場合は以下の手順を行ってください。
  
## OLEDを取り付けない場合
OLEDを取り付けない場合はファームウェアのOLED機能をOFFにする必要があります。  
以下のOLED機能をオフにしたファームウェアをダウンロードしていただき、QMKToolboxで書き込んでいただく、   
もしくはご自身で環境を作っていただきファームウェアをコンパイルして頂く必要がございます。  
‘qmk_firmware/keyboards/lily58/rules.mk‘と  
‘qmk_firmware/keyboards/lily58/keymaps/[キーマップ]/rules.mk‘の‘OLED_DRIVER_ENABLE = yes‘をnoにしてコンパイルし、書き込んでください。

OLEDオフにしたデフォルトキーマップhexファイル
[ダウンロード(lily58_rev1_default.hex)](https://drive.google.com/uc?export=download&id=1yPxZlVRVBfqq0-pEKkJZc93vqW6Jdboj)
  

## 困ったときは
### 同梱品の部品が足りない
A. 以下のお問合せ先よりご連絡ください。不足分をお送りさせていただきます。  
Twitter:@F_YUUCHI mail:yuchi.kbd@gmail.com 

### Q.1列(複数列)又は1行(複数行)キースイッチが反応しない
A.ProMicroのはんだ付け、取り付けしっかりとできてない場合があります。  
再度確認し、必要に応じて再度はんだ付け、取り付けを行ってください。  

### Q.キースイッチが単体で反応しない
A.キースイッチのはんだづけのはんだ付けに問題がある可能性があります。  
はんだ付けでも解決しない場合、キースイッチが故障している可能性があるため交換が必要です。  

### キーの入力が1つ目で止まる、連続でキーの入力ができない
OLEDを取り付けてない場合ファームウェアでオフにする必要があります。
上記の「OLEDを取り付けてない場合」の手順を行ってください。


**解決しない場合はお気軽にDiscordサーバー([Self-Made Keyboards in Japan](https://discordapp.com/invite/NM7XtDW))の「#clinic-readme」チャンネルを見ていただき相談いただくか、Twitter:@F_YUUCHIにメッセージをお送りください**


## カスタマイズ情報
### Type-C化する
Elite-C LPを購入しProMicroと交換することで接続コネクタをType-C化することができます。  
動作保証いたしかねます。購入される際は事前に調べてからご購入ください。  
https://yushakobo.jp/shop/elite-c-lp/  

### Bluetooth化する
BLE Micro Proを購入しProMicroと交換することでBluetooth化することができます。  
動作保証いたしかねます。導入難易度が高いため購入される際は事前に調べてからご購入ください。  
[https://yushakobo.jp/shop/ble-micro-pro/](https://yushakobo.jp/shop/ble-micro-pro/)

### ケーブルを自作する
MicroUSBケーブルやTRRSケーブルを自作するキットでオリジナルのケーブルを自作することができます  
[https://yushakobo.jp/shop/self-made-cable/](https://yushakobo.jp/shop/self-made-cable/)