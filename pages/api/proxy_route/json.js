import withMiddleware from "@/utils/middleware/withMiddleware.js";

function handler(req, res) {
  res.status(200).send({ content: "Proxy Be Working" });
}
export default withMiddleware("verifyProxy")(handler);
