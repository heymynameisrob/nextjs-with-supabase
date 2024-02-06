"use server";

/**
 * Direct calls to DB layer.
 * Using unstable_cache to avoid revalidation on every request.
 * Alternative to fetch() and custom API routes.
 * As this is unstable, it could change but as of Jan 2024 - it seems to work.
 */

import { unstable_cache as cache } from "next/cache";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { REVALIDATE_DAY } from "@/utils/constants";

export const getCurrentUser = cache(
  async () => {
    const supabase = createServerComponentClient({ cookies });

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user)
      return {
        isSignedIn: false,
        error: userError,
        status: 401,
      };

    return {
      isSignedIn: true,
      id: user.id,
      status: 200,
      error: null,
    };
  },
  ["currentUser"],
  {
    tags: ["user"],
    revalidate: REVALIDATE_DAY, // 24 hours
  },
);

export const getUserProfile = cache(
  async () => {
    const supabase = createServerComponentClient({ cookies });

    const { isSignedIn, id } = await getCurrentUser();

    if (!isSignedIn || !id) return { error: "Not signed in", status: 401 };

    const { data, error, status } = await supabase
      .from("users")
      .select()
      .eq("id", id)
      .single();

    if (error) return { isSignedIn: false, error, status };

    return {
      isSignedIn: true,
      data,
      status,
      error,
    };
  },
  ["userProfile"],
  {
    tags: ["user", "profile"],
    revalidate: REVALIDATE_DAY, // 24 hours
  },
);
