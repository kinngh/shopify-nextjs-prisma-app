/*
  Webhook handlers are registered at `./utils/shopify.js`
*/
import shopify from "@/utils/shopify.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(400).send("It ain't POST mate.");
  }

  const topic = req.headers["x-shopify-topic"] || "";
  const shop = req.headers["x-shopify-shop-domain"] || "";

  const buff = await buffer(req);
  const rawBody = buff.toString("utf8");

  try {
    await shopify.webhooks.process({
      rawBody: rawBody,
      rawRequest: req,
      rawResponse: res,
    });
    console.log(`--> Processed ${topic} from ${shop}`);
  } catch (e) {
    console.error(
      `---> Error while processing webhooks for ${shop} at ${topic} | ${e.message}`
    );
    if (!res.headersSent) {
      console.log("No headers sent");
      res.status(500).send(e.message);
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};

async function buffer(readable) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}
