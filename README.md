# webpro_06
# 東京ディズニーランド 周年イベント一覧アプリ

## 概要
本アプリケーションは、東京ディズニーランド（TDL）の各周年イベント情報と東京ディズニーシー（TDS）の各周年イベント情報と投票ディズニーリゾート（TDR）のフードをそれぞれ一覧・詳細表示できる Web アプリケーションとである。  
各情報を管理し、閲覧・編集・削除を行うことができる。

本課題は、授業で扱った Node.js + Express + Fetch APIを用いた Web アプリケーション開発の理解を目的として作成した。

---

## 主な機能

### 利用者向け機能
- データ一覧の表示
- データ詳細の表示（別ページ遷移）
- データ情報の編集
- データ情報の削除（確認画面あり）

### 管理・拡張向け機能
- JSON 形式によるデータ管理
- REST API によるデータ取得・更新・削除
- 追加機能は API のみ実装

---

## 使用技術
- Node.js
- Express
- HTML / CSS
- JavaScript（Fetch API）

---

## ディレクトリ構成
webpro_06
├── server_report.js
├── public_report
│   ├── index.html
│   ├── tdl.html
│   ├── tdl.js
│   ├── detail_tdl.html
│   ├── detail_tdl.js
│   ├── edit_tdl.html
│   ├── edit_tdl.js
│   ├── delete_tdl.html
│   ├── delete_tdl.js
│   ├── add_tdl.html
│   ├── add_tdl.js
│   ├── tds.html
│   ├── tds.js
│   ├── detail_tds.html
│   ├── detail_tds.js
│   ├── edit_tds.html
│   ├── edit_tds.js
│   ├── delete_tds.html
│   ├── delete_tds.js
│   ├── add_tds.html
│   ├── add_tds.js
│   ├── food.html
│   ├── food.js
│   ├── detail_food.html
│   ├── detail_food.js
│   ├── edit_food.html
│   ├── edit_food.js
│   ├── delete_food.html
│   ├── delete_food.js
│   ├── add_food.html
│   └── add_food.js
└── README.md

---

## 起動方法

1. Node.js がインストールされていることを確認する
2. リポジトリのルートディレクトリで以下を実行
node server01.js
3. ブラウザで以下にアクセス
http://localhost:8080

##　API一覧

メソッド | パス | 内容 
-|-|-
GET|/api/items|データ一覧取得
GET|/api/items/:id|データ詳細取得
POST|/api/items|データ追加
POST|/api/items/:id|データ更新
POST|/api/items/;id/delete|データ削除