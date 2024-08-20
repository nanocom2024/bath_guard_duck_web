import { initializeApp } from "firebase/app";
import {getMessaging, getToken} from "firebase/messaging";

//firebaseの設定
const firebaseConfig = {
  apiKey: "AIzaSyAeLkkug45n12jHuXbiejbdVnJfDY8PFnA",
  authDomain: "bathguardduck.firebaseapp.com",
  projectId: "bathguardduck",
  storageBucket: "bathguardduck.appspot.com",
  messagingSenderId: "541742638673",
  appId: "1:541742638673:web:a3e681348e0ae1926fba70",
  measurementId: "G-6N151G1YXV"
};

//初期化
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const getUserToken = async () : Promise<string> => {
  //現在の登録トークンを取得
  console.log('通知の許可を求めています...');
  Notification.requestPermission().then((permission) => {
    if (permission !== 'granted') {
      console.log('通知が許可されませんでした。');
      return "";
    }
    console.log('通知が許可されました！');

    //登録トークンの取得
    /*
    Messagingインスタンスをプッシュ通知に登録する。
    そのMessagingインスタンスにプッシュメッセージを送信するために
    使用できるFirebaseCloudMessaging登録トークンを返す。
    通知許可がまだ与えられていない場合、このメソッドはユーザーに許可を求める
    コンソールから生成した秘密鍵をここに追加する
    */
    getToken(messaging, {vapidKey: "BCFIkkx5Mcncuh1c6fXrgR4oySy5VLr1h1mGI_h3M-NEKWfopaPutX9FzL1Xx1RhcaEvs-JOJ5k5DPMzUa61yKE"})
      .then((currentToken) => { //プッシュメッセージ送信用登録トークン
        if (currentToken) {
          //トークンをサーバーに送信し、必要に応じてUIを更新する
          console.log("currentToken:", currentToken);
          return currentToken;
        } else {
          //許可リクエストのUIを表示する
          console.log("登録トークンがありません。生成許可をリクエストしてください。");
          // ...
        }
      }).catch((err) => {
      console.log("トークンの取得中にエラーが発生しました。", err);
    });
  });
  return "";
}


