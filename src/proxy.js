import { NextResponse } from "next/server";

export function proxy(request) {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/add-course/:path*", "/manage-courses/:path*"],
};
