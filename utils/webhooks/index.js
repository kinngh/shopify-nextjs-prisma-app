//Combine all your webhooks here
import shopify from "@/utils/shopify.js";
import { DeliveryMethod } from "@shopify/shopify-api";
import appUninstallHandler from "./app_uninstalled.js";

/*
  Template for adding new topics:
  ```
  TOPIC: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/api/webhooks/topic",
      callback: topicHandler,
    },
  ```

    - Webhook topic and callbackUrl topic should be exactly the same because it's using catch-all
    - Don't change the delivery method unless you know what you're doing
      - the method is `DeliveryMethod.Http` and not `DeliveryMethod.http`, mind the caps on `H` in `http`
*/

const webhookRegistrar = async () => {
  await shopify.webhooks.addHandlers({
    APP_UNINSTALLED: {
      deliveryMethod: DeliveryMethod.Http,
      callbackUrl: "/api/webhooks/app_uninstalled",
      callback: appUninstallHandler,
    },
  });
};

export default webhookRegistrar;
