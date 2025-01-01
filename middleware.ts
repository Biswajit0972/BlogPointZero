import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/app/_utils/cookiesHelper";

// Define public routes that do not require authentication
const publicRoutes = ["/", "/user/sign-in", "/register"];

export async function middleware(req: NextRequest) {
    // Call your authentication helper function
    const handleAuth = await auth();

    // Get the current path
    const currentPath = req.nextUrl.pathname;

    // Allow access to public routes
    if (publicRoutes.includes(currentPath)) {
        return NextResponse.next(); // Proceed without restriction
    }

    // Redirect if unauthorized
    if (handleAuth === "Unauthorized!") {
        return NextResponse.redirect(new URL("/user/sign-in", req.nextUrl));
    }

    // Proceed if authorized
    const response = NextResponse.next();
    response.cookies.set('vercel', 'fast')
    response.headers.set('x-hello-from-middleware2', 'hello')
    return response;
}

// Config to define routes where middleware should apply
export const config = {
    matcher: [
        // Match all paths and APIs except `/login` and `/register`
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ],
};
