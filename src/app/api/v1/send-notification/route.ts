// /api/v1/send-notification
import { NextRequest } from "next/server";
import { getMessaging } from "firebase-admin/messaging";
import {messaging} from "firebase-admin";
// import TokenMessage = messaging.TokenMessage;
import admin from "firebase-admin";
import serviceAccount from "@/../serviceAccountKey.json";

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export async function POST(request: NextRequest) {

  //bodyからデータを取得
  const body = await request.json();
  const nowState: string = body.state;

  console.log(`nowState: ${nowState}`);

  //仮のFCMトークン
  const myFCMToken: string = "cH1qo-PyrJQV6_2fPC3FKA:APA91bFXBizbhYPyW8RF6n5R2PI3HLh36nGyNguJW4nqQYwMIzIIKjffKik5ERn3hkHGE_VoCL7Fu9YrgE5ephBv-_pirYr3eeZA_IiscUd88xZedMqbXFkpV4WbUkW-gWoKI2Gib8lq";

  //FCMトークンに通知を送信
  const messaging = getMessaging();
  try {
    const mesRes = await messaging.send({
      notification: {
        title: 'ぬ',
        body: 'ほーん'
      },
      token: myFCMToken
    });
    console.log("mesRes: " + mesRes);
  } catch (error) {
    console.log("myError: " + error);
  }

  return new Response(JSON.stringify({ message: `Notification(${body.state}) has been sent.` }))
}


// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))
//   return new Response(JSON.stringify({ message: "Hello World" }))
// }