import withMiddleware from "@/utils/middleware/withMiddleware.js";
import prisma from "@/utils/prisma";

/**
 * @param {import("next").NextApiRequest} req - The HTTP request object.
 * @param {import("next").NextApiResponse} res - The HTTP response object.
 */
const handler = async (req, res) => {
  if (req.method !== "POST") {
    //GET, POST, PUT, DELETE
    console.log("Serve this only if the request method is GET");
    return res.status(405).send({ error: true });
  }

  try {
    let webVitals = {
      INP: 0.0,
      FID: 0.0,
      CLS: 0.0,
      LCP: 0.0,
      FCP: 0.0,
      TTFB: 0.0,
    };
    req?.body?.metrics?.forEach((metr) => {
      webVitals[metr?.name] = Number(parseFloat(metr?.value).toFixed(2));
    });

    const writeMetrics = await prisma.metrics.create({
      data: {
        shop: req.user_session.shop,
        appLoadId: req.body.appLoadId,
        INP: webVitals?.INP,
        FID: webVitals?.FID,
        CLS: webVitals?.CLS,
        LCP: webVitals?.LCP,
        FCP: webVitals?.FCP,
        TTFB: webVitals?.TTFB,
        raw_json: JSON.stringify(req.body),
      },
    });

    return res.status(200).send({ text: "Success!" });
  } catch (e) {
    console.error("---> An error occured at /api/apps/", e);
    return res.status(403).send({ error: true });
  }
};

export default withMiddleware("verifyRequest")(handler);
