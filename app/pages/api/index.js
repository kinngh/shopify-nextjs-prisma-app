import withMiddleware from "@/utils/middleware/withMiddleware.js";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  if (req.method !== "GET") {
    //GET, POST, PUT, DELETE
    console.log("Serve this only if the request method is GET");
    return res.status(405).send({ error: true });
  }

  try {
    return res.status(200).send({ text: "This is an example route" });
  } catch (e) {
    console.error(e);
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);
