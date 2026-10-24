import { label } from "next-api-middleware";
import verifyProxy from "./verifyProxy.js";
import verifyRequest from "./verifyRequest.js";
import verifyCheckout from "./verifyCheckout.js";

const withMiddleware = label({
  verifyRequest: verifyRequest,
  verifyProxy: verifyProxy,
  verifyCheckout: verifyCheckout,
});

export default withMiddleware;
