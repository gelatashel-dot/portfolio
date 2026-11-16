// lib/auth.ts
import { cookies } from "next/headers";

const COOKIE = "admin_session";

// ⚠️ This MUST match the SECRET in middleware.ts exactly
export const AUTH_SECRET = process.env.ADMIN_SECRET ?? "dev-only-change-me";

/** Read the session cookie — safe in server components */
export function isAuthed(): boolean {
  const value = cookies().get(COOKIE)?.value;
  return value === AUTH_SECRET;
}

/**
 * Verify password and set the session cookie.
 * Returns true on success, false on wrong password.
 * ⚠️ Must be called from a Server Action or Route Handler — not a plain server component.
 */
export function signIn(password: string): boolean {
  if (password !== AUTH_SECRET) return false;

  cookies().set(COOKIE, AUTH_SECRET, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production", // ← key: false on localhost
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });

  return true;
}

/** Remove the session cookie. Must be called from a Server Action. */
export function signOut(): void {
  cookies().delete(COOKIE);
}