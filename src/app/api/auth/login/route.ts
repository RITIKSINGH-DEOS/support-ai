import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin
    const redirectUri = `${appUrl}/api/auth/callback`
    const url = scalekit.getAuthorizationUrl(redirectUri)
    return NextResponse.redirect(url);
}

