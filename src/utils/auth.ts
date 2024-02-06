import { cookies } from "next/headers";

export function getUserIdFromCookieSSR() {
  const res = cookies().get("userId");
  if (!res) return null;
  return res.value;
}

/**
 * Cookies are used for auth tokens in Supabase.
 * You can get them via the browser but not server side when fetching.
 * So we need to get them from the headers and pass into a fetch()
 * @returns {string} - The cookies as a string
 */
export function getCookiesAsStringSSR() {
  return cookies().toString();
}
