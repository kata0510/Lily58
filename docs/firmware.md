# キーマップの書き込み/編集

## キーマップの書き込み
以下のソフトウェアとファイルを使用して書き込みとキーマップの変更をします。
* [QMK Toolbox](https://github.com/qmk/qmk_toolbox/releases)  
* [VIA Configurator](https://github.com/the-via/releases/releases/)
* [lily58_rev1_via.hex](https://drive.google.com/file/d/1pNQqg-wFip-hwCnLi7aFFjNfxRyyM5Q5/view?usp=sharing)  
* [lily58.json](https://drive.google.com/file/d/18NIJaN46PxQtNAZK0oOR51DQiYI7NUuk/view?usp=sharing)  
QMK Toolboxを立ち上げ、Local fileに`lily58_rev1_via.hex`を指定します。    
Lily58をUSBケーブルで接続し、リセットボタンを押した後Flashボタンを押して書き込みを行います。  
`avrdude.exe done.  Thank you.`
と表示されれば完了です。
これを左右両方行ってください。

## 動作確認
TRRSケーブルを左右に接続した後にUSBケーブルを接続します。  
USBケーブルを接続中に抜き差しを行うとTRRSの構造上ショートする可能性があります、ご注意ください。  
  
キーテスターサイトやツールなどですべてのキーが動作するかチェックします。  
レイヤーキーは押しながらレイヤーが変わることを確認してください。  
後述するVIAにもキーテスターが内蔵されています。  

## VIAを使用してキーマップを編集する
ファームウェアを書き込み後VIA Configuratorを使用してキーマップの書き換えを行います。
VIAを起動後左上のFile→Import Keymapから`lily58.json`を開きます。  
![842e89db6b4aec841a6e40c7e3e9421b](https://user-images.githubusercontent.com/6285554/89755604-f2f50d00-db1a-11ea-8147-bcc197b7feb3.png)  
![886b1b0c30c5ea1ed33a7f39bf5c4d35](https://user-images.githubusercontent.com/6285554/89755603-f1c3e000-db1a-11ea-9976-1a29f10774d4.png)
キーボードを接続すると編集画面が表示されます。  
![483ecee664199a50546267c87bf43b65](https://user-images.githubusercontent.com/6285554/89755605-f2f50d00-db1a-11ea-9c02-7f7ee96179a9.png)  


キーマップの詳しい解説は以下のブログなどを参考にしてください。  
[（初心者編）VIAを使ってキーマップを書き換えよう - 自作キーボード温泉街の歩き方](https://salicylic-acid3.hatenablog.com/entry/via-manual)

## 正しく動かない時
 - [動かない時](help.md)

## カスタマイズ情報
 - [カスタマイズ情報](customize.md)