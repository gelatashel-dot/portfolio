import { cookies } from "next/headers";
const COOKIE = "admin_session";
export const AUTH_SECRET = process.env.ADMIN_SECRET ?? "dev-only-change-me";
export function isAuthed(): boolean {
  return cookies().get(COOKIE)?.value === AUTH_SECRET;
}
export function signIn(password: string): boolean {
  if (password !== AUTH_SECRET) return false;
  cookies().set(COOKIE, AUTH_SECRET, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
  });
  return true;
}
export function signOut(): void {
  cookies().delete(COOKIE);
}
