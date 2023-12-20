import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = {
    message: "Hello from the API",
  };

  return NextResponse.json(data, { status: 200 });
}
