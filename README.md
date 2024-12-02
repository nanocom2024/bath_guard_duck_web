# bath-guard-duck-web

<img width="700" alt="スクリーンショット 2024-12-01 14 03 18" src="https://github.com/user-attachments/assets/2d4738ad-85ba-4f6d-9172-5e3f83cc8abb">

## 概要

浴槽での幼児の溺水事故を防止するためのシステムである「おふろみまもりだっく」の、 Leafonyを搭載した本機と通信を行うWebアプリ用プログラム。
本プログラムを書き込んだLeafonyをラバーダックに内蔵し浴槽に浮かべると見守りを開始し、幼児の入水を検知するとWebサーバを経由して端末に通知を行う。

- 作品についての詳細は[こちら](https://hackmd.io/@mukpan/H1-DIYvC0)
- bath-guard-duck-deviceの[リポジトリ](https://github.com/nanocom2024/bath-guard-duck-device)

## 状態遷移の条件

本プロジェクトは3つの状態を持ち、状態遷移の発生に応じて、Webアプリの表示の切り替えや、通知の送信を行う。

| 状態     | 説明           | 遷移条件          |
|--------|--------------|---------------|
| 休止状態   | 見守りを休止している状態 | 陸上に設置         |
| 見守り状態  | 見守りを行っている状態  | 水上に設置         |
| 入水検知状態 | 幼児の入水を検知した状態 | 幼児の入水による振動を検知 |

<img width="700" alt="スクリーンショット 2024-12-01 18 55 54" src="https://github.com/user-attachments/assets/2532bb76-6166-4802-9dee-d670f6d290df">

## 実行手順

### 1. .envファイルの作成

`.env.local`を作成し、以下のように書き込む。

```.env.local: .env.local
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_VAPID_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
```
また、後述する適切な値を**文字列**として設定する。

### 2. 各パラメータの設定

各パラメータは、プロジェクトの設定→全般→Firebaseの初期化コードの`firebaseConfig`から取得する。
![スクリーンショット 2024-08-24 161818.png](mdImage%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-08-24%20161818.png)

![スクリーンショット 2024-08-24 162343.png](mdImage%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-08-24%20162343.png)

![スクリーンショット 2024-08-24 162620.png](mdImage%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-08-24%20162620.png)

また、`NEXT_PUBLIC_FIREBASE_VAPID_KEY`は、プロジェクトの設定→Cloud Messaging→ウェブプッシュ証明書の公開鍵をコピーして割り当てる。

![スクリーンショット 2024-08-24 163139.png](mdImage%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-08-24%20163139.png)

![スクリーンショット 2024-08-24 163441.png](mdImage%2F%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88%202024-08-24%20163441.png)

```.env.development.local
NEXT_PUBLIC_FIREBASE_APP_ID="/* appId */"
NEXT_PUBLIC_FIREBASE_VAPID_KEY="/* ウェブプッシュ証明書の公開鍵 */"
NEXT_PUBLIC_FIREBASE_API_KEY="/* apiKey */"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="/* authDomain */"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="/* projectId */"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="/* storageBucket */"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="/* messagingSenderId */"
```

### 3. ルートに`serviceAccountKey.json`を追加する

プロジェクトの設定→サービスアカウント→新しい秘密鍵の生成 をクリックして、
jsonファイルをダウンロードし、`serviceAccountKey.json`に改名して、ルートに配置する。

- `json:serviceAccountKey.json`
```json:serviceAccountKey.json
{
    "type": "service_account",
    "project_id": "/* projectId */",
    "private_key_id": "/* privateKeyId */",
    "private_key": "/* privateKey */",
    "client_email": "/* clientEmail */",
    "client_id": "/* clientId */",
    "auth_uri": "/* authUri */",
    "token_uri": "/* tokenUri */",
    "auth_provider_x509_cert_url": "/* authProviderX509CertUrl */",
    "client_x509_cert_url": "/* clientX509CertUrl */"
}
```

### 4. 開発サーバの起動

```bash
npm run dev
```

### 5. ブラウザを開く

[http://localhost:3000](http://localhost:3000) を開いて確認する。



## POSTリクエストの送信

[https://localhost:3000/api/v2/send-notification](https://localhost:3000/api/v2/send-notification) に対してPOSTリクエストを送信し、端末に通知を行う。

### リクエスト内容

```json
{
    "state": "`SLEEP`, `CHILD_ENTER`, `CHILD_DETECTION`のいずれか",
    "email": "通知を送信する登録済みのメールアドレス"
}
```

### ex1. 休止状態の通知

#### リクエスト

```json
{
    "state": "SLEEP",
    "email": "hoge@hoge.hoge"
}
```

#### レスポンス

```json
{
    "message": "通知(SLEEP)を送信しました。",
    "title": "ダックが見守りを終了しました！"
}
```

### ex2. 見守り状態の通知

#### リクエスト

```json
{
    "state": "CHILD_ENTER",
    "email": "hoge@hoge.hoge"
}
```

#### レスポンス

```json
{
    "message": "通知(CHILD_ENTER)を送信しました。",
    "title": "お子様ダックが見守りを開始しました！"
}
```

### ex3. 入水検知状態の通知

#### リクエスト

```json
{
    "state": "CHILD_DETECTION",
    "email": "hoge@hoge.hoge"
}
```

#### レスポンス

```json
{
    "message": "通知(CHILD_DETECTION)を送信しました。",
    "title": "お子様ダックがお子様を検知しました！"
}
```