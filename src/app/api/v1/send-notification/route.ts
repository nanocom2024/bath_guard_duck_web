// /api/v1/send-notification
import {NextRequest} from "next/server";

export async function POST(request: NextRequest) {
  //bodyからデータを取得
  const body = await request.json();
  console.log(body);

  return new Response(JSON.stringify({ message: `Notification(${body.state}) has been sent.` }))
}


// export async function GET(request: { url: string | URL }) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))
//   return new Response(JSON.stringify({ message: "Hello World" }))
// }