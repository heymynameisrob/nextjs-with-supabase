"use server";

import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function handleLoginWithGoogle() {
  /**
   * Before this you'll need to set up Google OAuth in Supabase. Then obtain OAuth creds from Google and add them to your Supabase project.
   * See https://supabase.com/docs/guides/auth/social-login/auth-google
   */

  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error || !data) {
    throw error;
  }

  revalidatePath("/", "layout"); // Refreshes all app data

  return data;
}

export async function handleLoginWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const { email, password } = data;

  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !user) {
    throw error;
  }

  revalidatePath("/", "layout"); // Refreshes all app data

  return user;
}

export async function handleSignUpWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const { email, password } = data;

  const supabase = createServerActionClient({ cookies });

  const {
    data: { user },
    error,
  } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${location.origin}/api/auth/callback`,
    },
  });

  if (error) {
    throw error;
  }

  revalidatePath("/", "layout"); // Refreshes all app data

  return user;
}

export async function handleLogout() {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  cookies().delete("userId"); // Set a cookie with the user's ID

  revalidatePath("/", "layout"); // Refreshes all app data
}
