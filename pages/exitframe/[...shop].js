//MARK:- Pull `shop` from `req` instead of using `replace`
import shopify from "@/utils/shopify";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Spinner } from "@shopify/polaris";
import { useEffect } from "react";

const ExitFrame = () => {
  const app = useAppBridge();

  useEffect(() => {
    console.log(window.location.href);
    const shop = window.location.href.replace(
      `https://${shopify.config.hostName}/exitframe/`,
      ""
    );
    const redirect = Redirect.create(app);
    redirect.dispatch(
      Redirect.Action.REMOTE,
      `https://${shopify.config.hostName}/api/auth?shop=${shop}`
    );
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default ExitFrame;
