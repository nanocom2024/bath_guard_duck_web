// /api/v1/send-notification
import { NextRequest, NextResponse } from "next/server";
import { getMessaging } from "firebase-admin/messaging";
import admin from "firebase-admin";
import serviceAccount from "@/../serviceAccountKey.json";
import TokenMessage = admin.messaging.TokenMessage;

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

export async function POST(request: NextRequest) {
  //bodyからデータを取得
  const body = await request.json();
  const nowState: string = body.state;
  const token: string = body.token; //FCMトークン

  console.log(`nowState: ${nowState}`);

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

  return NextResponse.json({ message: `Notification(${body.state}) has been sent.` });
}


// export async function GET(request: NextRequest) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))
//   return new Response(JSON.stringify({ message: "Hello World" }))
// }