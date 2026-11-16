// middleware.ts
import { NextResponse, type NextRequest } from "next/server";

const COOKIE_NAME = "admin_session";
const LOGIN_PATH  = "/admin/login";
const PANEL_PATH  = "/admin";

// ⚠️ IMPORTANT: this exact expression must also be used in the login route
//    when you write the cookie, or the comparison below will never match.
const SECRET = process.env.ADMIN_SECRET ?? "dev-only-change-me";

function isLoginPath(pathname: string) {
  // Matches "/admin/login" and "/admin/login/..." but NOT "/admin/login-history"
  return pathname === LOGIN_PATH || pathname.startsWith(`${LOGIN_PATH}/`);
}

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  const token   = req.cookies.get(COOKIE_NAME)?.value;
  const isAuthed = typeof token === "string" && token === SECRET;

  // 1) Login page
  if (isLoginPath(pathname)) {
    // If already authenticated, skip the login page → go to the dashboard.
    if (isAuthed) {
      const url = req.nextUrl.clone();
      url.pathname = PANEL_PATH;
      url.search = "";
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }

  // 2) Any other /admin/* route → require a valid session cookie
  if (!isAuthed) {
    const url = req.nextUrl.clone();
    url.pathname = LOGIN_PATH;
    url.search = "";
    // preserve full original target (path + query) so login can bounce back
    url.searchParams.set("from", pathname + search);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Matches: /admin, /admin/, /admin/posts, /admin/posts/new, /admin/messages, …
  // Does NOT touch /_next/*, /api/*, /images/*, or any public asset.
  matcher: ["/admin/:path*"],
};