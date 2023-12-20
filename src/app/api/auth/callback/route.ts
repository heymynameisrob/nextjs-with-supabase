import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  // The `/auth/callback` route is required for the server-side auth flow implemented
  // by the Auth Helpers package. It exchanges an auth code for the user's session.
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-sign-in-with-code-exchange
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  const supabase = createRouteHandlerClient({ cookies });

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return NextResponse.redirect(requestUrl.origin);

    cookies().set("userId", user.id, { secure: true, httpOnly: true }); // Set a cookie with the user's ID
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
