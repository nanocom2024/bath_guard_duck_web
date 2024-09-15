// /api/v2/send-notification
import { NextRequest, NextResponse } from "next/server";
import { getMessaging } from "firebase-admin/messaging";
import admin, {firestore} from "firebase-admin";
import serviceAccount from "@/../serviceAccountKey.json";
import TokenMessage = admin.messaging.TokenMessage;
import { getFirestore } from "firebase-admin/firestore";
import DocumentData = firestore.DocumentData;

//二度初期化されるのを防ぐための処理
if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}
const db = getFirestore();

export async function POST(request: NextRequest) {
  //ドメイン名を取得
  const domain = request.nextUrl.origin;
  console.log(domain + "/images/duck.png");
  //bodyからデータを取得
  const body = await request.json();
  const state: string = body.state;
  let email: string = body.email;

  //emailに含まれる%40を@に変換
  const emailArray = email.split('%40');
  email = emailArray.join('@');
  //emailより、ユーザのFCMトークンをdbから取得
  const userData = await getDataFromDb("users", "email", email);
  if (userData === undefined) return notFoundResponse("メールアドレス");
  const token: string = userData.token;

  //duckStateより、通知内容を取得
  const mesData = await getDataFromDb("messages", "state", state);
  if (mesData === undefined) return notFoundResponse("通知内容");
  const mesTitle: string = mesData.title;
  const mesBody: string = mesData.body;

  //通知内容を設定
  const newMes: TokenMessage = {
    notification: {
      title: mesTitle,
      body: mesBody,
      imageUrl: domain + "/images/duck.png"
    },
    token: token,
  };

  //FCMトークンに通知を送信
  const messaging = getMessaging();
  try {
    const mesRes = await messaging.send(newMes);
    console.log("mesRes: " + mesRes);
  } catch (error) {
    console.log("myError: " + error);
  }

  return NextResponse.json({
    message: `通知(${state})を送信しました。`,
    title: mesTitle
  });
}

//DBからデータ取得
const getDataFromDb = async (
  collectionName: string,
  compField: string,
  compVal: string,
): Promise<DocumentData | undefined> => {
  //DBからコレクション取得
  const ref = db.collection(collectionName);
  //snapshotを一つだけ取得
  const snapshot = await ref.where(compField, '==', compVal).get();
  const doc = snapshot.docs[0];
  //登録されているメールアドレスがdbに存在しないとき
  if (doc === undefined) {
    return undefined;
  }
  return doc.data();
}

//NotFound時のレスポンス
const notFoundResponse = (notFoundTarget: string): NextResponse => {
  console.log(`"${notFoundTarget}"が見つかりませんでした。`);
  return NextResponse.json({ message: `「${notFoundTarget}」が見つかりませんでした。` });
}



// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))
//   return new Response(JSON.stringify({ message: "Hello World" }))
// }