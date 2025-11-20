import { NextResponse, NextRequest } from "next/server"

export function middleware(request: NextRequest) {

    const authenticated = false

    if (request.nextUrl.pathname.startsWith('/dashboard') && !authenticated) {
        console.log('Acesso negado')
        return NextResponse.redirect(new URL('/', request.url))
    }

    return NextResponse.next()
}