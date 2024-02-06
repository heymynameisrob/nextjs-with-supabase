"use server";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { getBaseUrl } from "@/utils";

export async function handleLoginWithGoogle() {
  /**
   * Before this you'll need to set up Google OAuth in Supabase. Then obtain OAuth creds from Google and add them to your Supabase project.
   * See https://supabase.com/docs/guides/auth/social-login/auth-google
   */

  const supabase = createServerActionClient({ cookies });
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${getBaseUrl()}/api/auth/callback`, // Callback after Google login. Creates session on Supabase.
    },
  });

  if (error || !data) {
    console.log(error);
    throw Error("An error occurred while logging in with Google");
  }

  revalidatePath("/", "layout");
  redirect(data.url || "/dashboard");
}

export async function handleLogout() {
  const supabase = createServerActionClient({ cookies });

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }

  cookies().delete("userId"); // Set a cookie with the user's ID
  revalidatePath("/", "layout"); // Refreshes all app data
  redirect("/"); // Redirects to the homepage
}

export async function updateUserProfile(id: string, data: any) {
  const supabase = createServerActionClient({ cookies });

  const { error, status } = await supabase
    .from("users")
    .update(data)
    .eq("id", id);

  if (error) return { error, status };

  revalidateTag("user");

  return { status };
}

export async function deleteAccount(id: string) {
  const supabase = createServerActionClient({ cookies });

  const { error, status } = await supabase.from("users").delete().eq("id", id);

  await handleLogout();

  revalidatePath("/", "layout");

  if (error) return { error, status };
  return { status };
}
