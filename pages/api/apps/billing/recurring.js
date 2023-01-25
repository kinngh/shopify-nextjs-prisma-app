// import clientProvider from "../../utils/clientProvider.js";

// // Note:
// // I would recommend creating a seaprate route for every plan you have, to avoid users meddling with React side of code.
// // I usually convert the processing code into it's own function and pass plan name, price and test via different routes, and test charges strictly available to stores from a database.
// // Create a new MongoDB collection and just store test store names in it.

// subscriptionRoute.get("/api/recurringSubscription", async (req, res) => {
//   //false for offline session, true for online session
//   const { client, shop } = await clientProvider.graphqlClient({
//     req,
//     res,
//     isOnline: true,
//   });
//   const returnUrl = `${process.env.SHOPIFY_APP_URL}/auth?shop=${shop}`;

//   const planName = "$10.25 plan";
//   const planPrice = 10.25; //Always a decimal

//   const response = await client.query({
//     data: `mutation CreateSubscription{
//     appSubscriptionCreate(
//       name: "${planName}"
//       returnUrl: "${returnUrl}"
//       test: true
//       lineItems: [
//         {
//           plan: {
//             appRecurringPricingDetails: {
//               price: { amount: ${planPrice}, currencyCode: USD }
//             }
//           }
//         }
//       ]
//     ) {
//       userErrors {
//         field
//         message
//       }
//       confirmationUrl
//       appSubscription {
//         id
//         status
//       }
//     }
//   }
// `,
//   });

//   if (response.body.data.appSubscriptionCreate.userErrors.length > 0) {
//     console.log(
//       `--> Error subscribing ${shop} to plan:`,
//       response.body.data.appSubscriptionCreate.userErrors
//     );
//     res.status(400).send({ error: "An error occured." });
//     return;
//   }

//   res.status(200).send({
//     confirmationUrl: `${response.body.data.appSubscriptionCreate.confirmationUrl}`,
//   });
// });

// export default subscriptionRoute;
