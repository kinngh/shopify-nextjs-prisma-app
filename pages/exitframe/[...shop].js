import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Spinner } from "@shopify/polaris";
import { useEffect } from "react";

const ExitFrame = () => {
  const app = useAppBridge();

  useEffect(() => {
    const shop = window.location.href.replace(
      `${process.env.CONFIG_SHOPIFY_APP_URL}/exitframe/`,
      ""
    );
    const redirect = Redirect.create(app);
    redirect.dispatch(
      Redirect.Action.REMOTE,
      `${process.env.CONFIG_SHOPIFY_APP_URL}/api/auth?shop=${shop}`
    );
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default ExitFrame;
