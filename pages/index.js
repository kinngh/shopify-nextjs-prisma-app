import React from "react";
import { useRouter } from "next/router";
import { Page, Card } from "@shopify/polaris";

const Index = () => {
  const router = useRouter();
  return (
    <Page>
      <Card title="DEBUG" sectioned>
        <p>
          These are temporary placeholders to debug content. Once you're in the
          page, please check the console for more information.
        </p>
      </Card>
      <Card
        title="Subscriptions"
        sectioned
        primaryFooterAction={{
          content: "Subscriptions",
          onAction: () => {
            router.push("/activeSubscriptions");
          },
        }}
      >
        <p>Check for active/cancelled/expired subscriptions for your app.</p>
      </Card>
    </Page>
  );
};

export default Index;
