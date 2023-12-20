import { cookies } from "next/headers";

export function getUserIdSSR() {
  const res = cookies().get('user');
  if(!res) return null;
  return res.value
}
