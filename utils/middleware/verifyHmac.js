import crypto from "crypto";
import { NextResponse } from "next/server.js";
import shopify from "@/utils/shopify.js";

/**
 * @param {import('next').NextApiRequest} req - The incoming request object.
 * @param {import('next').NextApiResponse} res - The response object.
 * @param {import('next').NextApiHandler} next - Callback to pass control to the next middleware function in the Next.js API route.
 */
const verifyHmac = async (req, res, next) => {
  try {
    const generateHash = crypto
      .createHmac("SHA256", process.env.SHOPIFY_API_SECRET)
      .update(JSON.stringify(req.body), "utf8")
      .digest("base64");

    const hmac = req.headers["x-shopify-hmac-sha256"];

    if (shopify.auth.safeCompare(generateHash, hmac)) {
      await next();
    } else {
      return res
        .status(401)
        .send({ success: false, message: "HMAC verification failed" });
    }
  } catch (e) {
    console.log(`---> An error occured while verifying HMAC`, e.message);
    return new NextResponse(
      JSON.stringify({ success: false, message: "HMAC verification failed" }),
      {
        status: 401,
        headers: {
          "content-type": "application/json",
        },
      }
    );
  }
};

export default verifyHmac;
