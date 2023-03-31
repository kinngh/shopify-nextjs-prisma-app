import crypto from "crypto";

const verifyProxy = async (req, res, next) => {
  const { signature } = req.query;

  const queryURI = encodeQueryData(req.query)
    .replace("/?", "")
    .replace(/&signature=[^&]*/, "")
    .split("&")
    .map((x) => decodeURIComponent(x))
    .sort()
    .join("");

  const calculatedSignature = crypto
    .createHmac("sha256", process.env.SHOPIFY_API_SECRET)
    .update(queryURI, "utf-8")
    .digest("hex");

  if (calculatedSignature === signature) {
    req.user_shop = req.query.shop; //myshopify domain
    await next();
  } else {
    return res.status(401).send({
      success: false,
      message: "Signature verification failed",
    });
  }
};

function encodeQueryData(data) {
  const queryString = [];
  for (let d in data) queryString.push(d + "=" + encodeURIComponent(data[d]));
  return queryString.join("&");
}

export default verifyProxy;
