import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { doesUrlMatch } from "@/utils";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  /**
   * Routes - By default we assume everything is a private route, unless it's contained in the arrays below.
   */

  const authRoutes = ["/login", "/reset-password"]; // Routes for authenticating users (login, reset password, etc.)
  const publicRoutes = [...authRoutes, "/", "/no-access"]; // Routes anyone can access

  /**
   * Auth Check - Assuming Supabase is handling authentication.
   */

  // const supabase = createMiddlewareClient({ req, res });
  // const { data: { user } } = await supabase.auth.getUser();

  // TODO: Remove this line once you've set up Supabase authentication
  const user = { id: "1" };

  /**
   * Redirects - Redirect users to the relevant page based on their authentication status and the route they're trying to access.
   */

  // 01. If user is logged in and trying to access auth routes, redirect to dashboard
  if (user && doesUrlMatch(authRoutes, req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 02. If user is logged out and trying to access private routes, redirect to login
  if (!user && !doesUrlMatch(publicRoutes, req.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};
