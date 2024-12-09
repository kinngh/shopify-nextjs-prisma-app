/**
 * Middleware to add Content Security Policy headers to matched requests.
 */

import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Exceptions:
     * /api/auth, /api/webhooks, /api/proxy_route, /api/gdpr, /_next,
     * /_proxy, /_auth, /_static, /_vercel, /public (/favicon.ico, etc)
     */
    "/((?!api/auth|api/webhooks|api/proxy_route|api/gdpr|_next|_proxy|_auth|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

/**
 * @param {NextRequest} request - The incoming request object.
 * @returns {NextResponse} The response object with modified headers.
 */
export function middleware(request) {
  const {
    nextUrl: { search },
  } = request;

  /**
   * Convert the query string into an object.
   * @type {URLSearchParams}
   */
  const urlSearchParams = new URLSearchParams(search);
  const params = Object.fromEntries(urlSearchParams.entries());

  const shop = params.shop || "*.myshopify.com";

  /**
   * Construct the Next.js response and set the Content-Security-Policy header.
   * @type {NextResponse}
   */
  const res = NextResponse.next();
  res.headers.set(
    "Content-Security-Policy",
    `frame-ancestors https://${shop} https://admin.shopify.com;`
  );
  res.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  return res;
}
