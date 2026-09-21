import { cookies } from "next/headers";
import { scalekit } from "./scalekit";

interface ScalekitClaims {
    sub: string;
    [key: string]: unknown;
}

export async function getSession() {
    const session = await cookies()
    const token = session.get("access_token")?.value
    if (!token) {
        return null
    }
    try {
        const result = await scalekit.validateToken<ScalekitClaims>(token)
        const user = await scalekit.user.getUser(result.sub)
        return user
    } catch (error) {
        console.log(error)
        return null
    }
}