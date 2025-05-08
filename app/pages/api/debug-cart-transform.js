import { shopifyApi } from "@shopify/shopify-api";
import "@shopify/shopify-api/adapters/node"; // Select your adapter, e.g., node, vercel, cloudflare
import { PrismaClient } from "@prisma/client";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";

// --- IMPORTANT ---
// 1. Ensure your Shopify App is configured with the necessary environment variables:
//    SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_APP_URL, SHOPIFY_API_SCOPES (must include 'write_cart_transforms')
// 2. You need a valid offline session for your shop. This usually means installing the app on a dev store.
// 3. Replace 'YOUR_SHOP_DOMAIN' with your actual shop domain (e.g., 'my-dev-store.myshopify.com')
// 4. Replace 'YOUR_PRODUCT_FEES_FUNCTION_ID' with the actual functionId from your extension deployment.

// Initialize Prisma Client (ensure your Prisma schema is set up)
const prisma = new PrismaClient();
const sessionStorage = new PrismaSessionStorage(prisma);

// Initialize Shopify API (you might have this in a central place like utils/shopify.js)
// Ensure this matches your app\'s existing Shopify API initialization.
const shopify = shopifyApi({
  apiKey: process.env.SHOPIFY_API_KEY,
  apiSecretKey: process.env.SHOPIFY_API_SECRET,
  scopes: process.env.SHOPIFY_API_SCOPES.split(","),
  hostName: new URL(process.env.SHOPIFY_APP_URL).hostname,
  hostScheme: new URL(process.env.SHOPIFY_APP_URL).protocol.slice(0, -1),
  apiVersion: process.env.SHOPIFY_API_VERSION,
  isEmbeddedApp: true, // Or false if not embedded
  sessionStorage: sessionStorage,
  // logger: { level: LogSeverity.Debug }, // Uncomment for detailed logs
});

const CART_TRANSFORM_CREATE_MUTATION = `
  mutation cartTransformCreate($functionId: String!, $blockOnFailure: Boolean) {
    cartTransformCreate(functionId: $functionId, blockOnFailure: $blockOnFailure) {
      cartTransform {
        id
        functionId
        blockOnFailure
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).send("Method Not Allowed");
  }

  try {
    // --- YOU MUST EDIT THESE VALUES ---
    const shopDomain = process.env.SHOPIFY_STORE_URL; // e.g., 'your-development-store.myshopify.com'
    const functionId = process.env.SHOPIFY_PRODUCT_FEES_ID; // Get this from `shopify app deploy` output
    // ---

    if (
      !process.env.SHOPIFY_STORE_URL ||
      !process.env.SHOPIFY_PRODUCT_FEES_ID
    ) {
      return res.status(400).json({
        error:
          "Ensure SHOPIFY_STORE_URL and SHOPIFY_PRODUCT_FEES_ID are set in your .env file and the server was restarted.",
      });
    }

    // 1. Load offline session for the shop
    // The shopify.session.getOfflineId(shop) method generates the session ID
    // based on the shop domain.
    const sessionId = shopify.session.getOfflineId(shopDomain);
    const session = await shopify.config.sessionStorage.loadSession(sessionId);

    console.log("Loaded session:", JSON.stringify(session, null, 2));

    return JSON.stringify(session, null, 2);

    if (!session) {
      return res.status(401).json({
        error: `Could not find offline session for ${shopDomain}. Ensure the app is installed.`,
      });
    }

    // 2. Create a GraphQL client
    const client = new shopify.clients.Graphql({
      session,
      apiVersion: process.env.SHOPIFY_API_VERSION, // Or your specific version like '2025-01'
    });

    // 3. Run the mutation
    const { body } = await client.query({
      data: {
        query: CART_TRANSFORM_CREATE_MUTATION,
        variables: {
          functionId: functionId,
          blockOnFailure: false, // Set to true if needed
        },
      },
    });

    if (
      body.data.cartTransformCreate.userErrors &&
      body.data.cartTransformCreate.userErrors.length > 0
    ) {
      console.error(
        "Cart Transform Creation User Errors:",
        body.data.cartTransformCreate.userErrors
      );
      return res.status(400).json({
        success: false,
        errors: body.data.cartTransformCreate.userErrors,
      });
    }

    if (body.errors) {
      // GraphQL level errors
      console.error("GraphQL Errors:", body.errors);
      return res.status(500).json({ success: false, errors: body.errors });
    }

    console.log(
      "Cart Transform Created:",
      body.data.cartTransformCreate.cartTransform
    );
    return res
      .status(200)
      .json({ success: true, data: body.data.cartTransformCreate });
  } catch (error) {
    console.error("Failed to create cart transform:", error);
    return res
      .status(500)
      .json({ success: false, error: error.message, details: error });
  }
}
