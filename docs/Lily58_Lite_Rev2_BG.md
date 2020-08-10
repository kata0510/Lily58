### 動画も合わせて参照ください。(キーマップの書き込み周りの情報が古くなっています)  
[![](https://img.youtube.com/vi/t6HLQvqlsVM/0.jpg)](https://www.youtube.com/watch?v=t6HLQvqlsVM)  
  
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
