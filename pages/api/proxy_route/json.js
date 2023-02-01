import withMiddleware from "@/utils/middleware/withMiddleware.js";

const handler = async (req, res) => {
  res.status(200).send({ content: "Proxy Be Working" });
};
export default withMiddleware("verifyProxy")(handler);
