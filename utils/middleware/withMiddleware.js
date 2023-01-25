import { label } from "next-api-middleware";
import verifyHmac from "./verifyHmac.js";
import verifyProxy from "./verifyProxy.js";
import verifyRequest from "./verifyRequest.js";

const withMiddleware = label({
  verifyRequest: verifyRequest,
  verifyProxy: verifyProxy,
  verifyHmac: verifyHmac,
});

export default withMiddleware;
