import { Button, Card, Layout, Page } from "@shopify/polaris";
import { useRouter } from "next/router";
import React from "react";

export default function Home() {
  const router = useRouter();
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card sectioned title="🏡">
            I'm home, father.
            <Button
              onClick={() => {
                router.push("/debug/activeWebhooks");
              }}
            >
              Active Webhooks
            </Button>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
