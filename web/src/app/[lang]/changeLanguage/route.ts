import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { newLang } = await request.json();
  cookies().set("lang", newLang);
  return new Response("", {
    status: 200,
  });
}
