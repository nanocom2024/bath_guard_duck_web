export async function GET(request: { url: string | URL }) {
  const { searchParams } = new URL(request.url)
  console.log("GET request", searchParams.get("name"))

  return new Response(JSON.stringify({ message: "Hello World" }))
}

export async function POST(request: { json: () => any }) {
  const body = await request.json()

  console.log("POST request", body.name)
  return new Response(JSON.stringify({ message: "Hello World" }))
}