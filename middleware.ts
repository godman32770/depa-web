import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

//   if (token && request.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/chat", request.url));
//   }
//   if (!token && request.nextUrl.pathname === "/") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/chat"],
};