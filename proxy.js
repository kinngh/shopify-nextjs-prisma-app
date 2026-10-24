/**
 * Middleware to add Content Security Policy headers to matched requests.
 */

import shopify from "@/utils/shopify.js";
import { NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Exceptions:
     * /api/auth, /api/webhooks, /api/events, /api/proxy_route, /_next,
     * /_proxy, /_auth, /_static, /_vercel, /public (/favicon.ico, etc)
     */
    "/((?!api/auth|api/webhooks|api/events|api/proxy_route|_next|_proxy|_auth|_static|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

/**
 * @param {import('next/server').NextRequest} request - The incoming request object.
 * @returns {Promise<NextResponse>} The response object with modified headers.
 */
export async function proxy(request) {
  const shop = await getAuthenticatedShop(request.nextUrl.searchParams);

  /**
   * Construct the Next.js response and set the Content-Security-Policy header.
   * @type {NextResponse}
   */
  const res = NextResponse.next();
  res.headers.set(
    "Content-Security-Policy",
    shop
      ? `frame-ancestors https://${shop} https://admin.shopify.com;`
      : "frame-ancestors https://admin.shopify.com;"
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

async function getAuthenticatedShop(params) {
  try {
    if (params.has("id_token")) {
      if (params.getAll("id_token").length !== 1) return null;

      const payload = await shopify.session.decodeSessionToken(
        params.get("id_token")
      );
      if (
        !Number.isFinite(payload.exp) ||
        !Number.isFinite(payload.nbf) ||
        typeof payload.sub !== "string" ||
        !payload.sub ||
        typeof payload.dest !== "string"
      ) {
        return null;
      }

      return shopify.utils
        .sanitizeShop(payload.dest.replace(/^https:\/\//, ""))
        ?.replace(/\/+$/, "");
    }

    // Older launch flows authenticate the shop through the signed query.
    if (
      ["shop", "hmac", "timestamp"].every(
        (key) => params.getAll(key).length === 1
      ) &&
      (await shopify.utils.validateHmac(params))
    ) {
      return shopify.utils
        .sanitizeShop(params.get("shop"))
        ?.replace(/\/+$/, "");
    }
  } catch {
    // Never log SDK errors containing launch tokens or trust an unsigned shop.
  }

  // Keep modern Shopify Admin navigation working without launch parameters.
  return null;
}
