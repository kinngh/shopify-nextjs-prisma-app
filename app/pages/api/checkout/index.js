import clientProvider from "@/utils/clientProvider";
import withMiddleware from "@/utils/middleware/withMiddleware.js";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  if (req.method !== "GET") {
    //GET, POST, PUT, DELETE
    console.log("Serve this request only if method type is GET");
    return res.status(405).send({ error: true });
  }
  try {
    console.log("Request came from checkout extension");

    //Example GraphQL request
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

    return res.status(200).send({ content: "Checkout Be Working" });
  } catch (e) {
    console.error(
      `---> An error occured in /api/checkout/index :${e.message}`,
      e
    );
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyCheckout")(handler);
