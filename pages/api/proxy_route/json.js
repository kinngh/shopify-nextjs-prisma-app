// If you have the recommended extension installed, create a new page and type `createproxy` to generate proxy route boilerplate

import withMiddleware from "@/utils/middleware/withMiddleware.js";

const handler = async (req, res) => {
  res.status(200).send({ content: "Proxy Be Working" });
};
export default withMiddleware("verifyProxy")(handler);
