import React from "react";
import { useRouter } from "next/router";
import { Page, Card } from "@shopify/polaris";

const CodeManagement = () => {
  const router = useRouter();
  return (
    <Page>
      <Card
        title="Code Management"
        sectioned
        primaryFooterAction={{
          content: "Home",
          onAction: () => {
            router.push("/");
          },
        }}
      >
        <p>Manage installs and uninstalls from this page</p>
        <p>
          I am building up automation for this page so it's easier for
          developers like us who have to manage third party apps on the regular,
          easier to understand how your app functions. Like I get it, you want
          to be sneaky sneaky snake but trust me, there will be an entire set of
          developers who will praise you for making it so easy to track your
          code. Seriously, when I am doing Page Speed Optimization it's the most
          irritating part, like didn't your parents teach you to clean up after
          yourselves? God dammit I need to do everything around in this
          hous----- Wait. No. This isn't how it was supposed to go.
        </p>
        <p>
          Anyways, this commit will be disappearing when I actually push out the
          code so enjoy this easter egg while it lasts.
        </p>
        <p>🍁</p>
      </Card>
    </Page>
  );
};

export default CodeManagement;
