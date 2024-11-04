import withMiddleware from "@/utils/middleware/withMiddleware.js";
import clientProvider from "@/utils/clientProvider";

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
    const { client } = await clientProvider.offline.graphqlClient({
      shop: req.user_shop,
    });

    const response = await client.request(/* GraphQL */ `
      {
        shop {
          id
        }
      }
    `);
    return res.status(200).send({ text: "Success!" });
  } catch (e) {
    console.error(`---> An error occured at /api/apps/ : ${e.message}`, e);
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);
