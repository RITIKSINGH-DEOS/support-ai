import { scalekit } from "@/lib/scalekit";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url)
    const code = searchParams.get("code")
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || req.nextUrl.origin
    const redirectUri = `${appUrl}/api/auth/callback`
    if (!code) {
        return NextResponse.json({ message: "code is not found" }, { status: 400 })
    }
    const session = await scalekit.authenticateWithCode(code, redirectUri)
    console.log(session);
    const response = NextResponse.redirect(appUrl)
    response.cookies.set("access_token", session.accessToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60,
        secure: process.env.NODE_ENV === "production",
        path: "/"
    })
    return response
}


