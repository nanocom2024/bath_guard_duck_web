// /api/v1/send-notification

export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url)
  console.log("GET request", searchParams.get("name"))
  return new Response(JSON.stringify({ message: "Hello World" }))
}

export async function POST(request: { json: () => any }) {
  //bodyからデータを取得
  const body = await request.json();
  console.log(body);


  return new Response(JSON.stringify({ message: `Notification(${body.state}) has been sent.` }))
}