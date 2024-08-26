## 実行手順

### 1. .envファイルの作成

適切な値を文字列として設定する。

- `.env.development.local`
```.env.development.local
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_VAPID_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
```

- `.env.development.local`
```.env.development.local
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_VAPID_KEY=
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
```


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

### 4. 開発サーバーの起動

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. ブラウザを開く

[http://localhost:3000](http://localhost:3000) を開いて確認する。

