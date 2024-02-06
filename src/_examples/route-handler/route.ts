/**
 * Route Handlers create dynamic 'API' routes.
 * Can be used to create serverless functions and APIs.
 * Prefer for server-heavy functions over Server Components
 */

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
// export const runtime = 'edge'; // Prefer edge for expensive server functions

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });

  // Do some kinda of server side logic or call to a database here
  const { data: todos } = await supabase.from("todos").select();

  return NextResponse.json(todos);
}
