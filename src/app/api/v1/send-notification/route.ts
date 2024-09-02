// /api/v1/send-notification
import { NextRequest, NextResponse } from "next/server";
import { getMessaging } from "firebase-admin/messaging";
import admin, {firestore} from "firebase-admin";
import serviceAccount from "@/../serviceAccountKey.json";
import TokenMessage = admin.messaging.TokenMessage;
import { getFirestore } from "firebase-admin/firestore";
import QuerySnapshot = firestore.QuerySnapshot;
import QueryDocumentSnapshot = firestore.QueryDocumentSnapshot;

//二度初期化されるのを防ぐための処理
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}


const db = getFirestore();

export async function POST(request: NextRequest) {
  //bodyからデータを取得
  const body = await request.json();
  const state: string = body.state;
  let email: string = body.email;

  //emailに含まれる%40を@に変換
  const emailArray = email.split('%40');
  email = emailArray.join('@');

  console.log(`email: ${email}`);

  //emailをユーザのFCMトークンをDBから取得
  const usersRef = db.collection('users');
  //snapshotを一つだけ取得
  const snapshot = await usersRef.where('email', '==', email).get();
  const userData = snapshot.docs[0];
  //登録されているメールアドレスがdbに存在しないとき
  if (userData === undefined) {
    console.log("メールアドレスが見つかりませんでした。");
    return NextResponse.json({ message: `メールアドレスが見つかりませんでした。` });
  }
  const token = userData.data().token;
  console.log(`token: ${token}`);


  const newMes: TokenMessage = {
    notification: {
      title: 'ぬ',
      body: 'ほーん'
    },
    token: token
  }

  //FCMトークンに通知を送信
  const messaging = getMessaging();
  try {
    const mesRes = await messaging.send(newMes);
    console.log("mesRes: " + mesRes);
  } catch (error) {
    console.log("myError: " + error);
  }

  return NextResponse.json({ message: `通知(${body.state})を送信しました。` });
}

// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))
//   return new Response(JSON.stringify({ message: "Hello World" }))
// }