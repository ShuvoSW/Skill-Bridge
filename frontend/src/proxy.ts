// import { NextRequest, NextResponse } from "next/server";
// import { getCurrentUser } from "./services/auth/auth";
// // import { getCurrentUser } from "./services/user.service";

// const ALLOWED_ROLES = ["user", "admin"];
// const PUBLIC_ROUTES = ["/login", "/register"];

// export async function proxy(request: NextRequest) {
//   const { pathname , origin } = request.nextUrl;

//   if (PUBLIC_ROUTES.includes(pathname)) {
//     return NextResponse.next();
//   }

//   const userInfo = await getCurrentUser();

//   if (!userInfo) {
//     return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, origin));
//   }

//   if (!ALLOWED_ROLES.includes(userInfo.role)) {
//     return NextResponse.redirect(new URL(`/login?redirectPath=${pathname}`, origin));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/dashboard", "/dashboard/:path*"],
// };
