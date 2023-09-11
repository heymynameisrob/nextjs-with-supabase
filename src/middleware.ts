/**
 * Middleware - Runs before every request. Checking to see if user is authenticated, and redirect them to the relevant page (login or auth route).
 *
 */

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const authRoute = "/";
  const loginRoute = "/login";

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  // Checks to see if user is authenticated
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // If user is authenticated AND the current path is / redirect the user to /events
  if (user && req.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL(authRoute, req.url));
  }

  // if user is not signed in AND the current path is not / redirect the user to / (Login)
  if (!user && req.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL(loginRoute, req.url));
  }

  return res;
}

export const config = {
  matcher: ["/", "/login"],
};
