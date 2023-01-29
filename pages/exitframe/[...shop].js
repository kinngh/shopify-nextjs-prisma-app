//MARK:- Pull `shop` from `req` instead of using `replace`
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Spinner } from "@shopify/polaris";
import { useEffect } from "react";

const ExitFrame = () => {
  const app = useAppBridge();
  console.log("In exit frame");

  useEffect(() => {
    console.log(window.location.href);
    const shop = window.location.href.replace(
      `${process.env.NEXT_PUBLIC_APPORIGIN}/exitframe/`,
      ""
    );
    const redirect = Redirect.create(app);
    console.log("Redirecting");
    redirect.dispatch(
      Redirect.Action.REMOTE,
      `${process.env.NEXT_PUBLIC_APPORIGIN}/api/auth?shop=${shop}`
    );
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
};

export default ExitFrame;
