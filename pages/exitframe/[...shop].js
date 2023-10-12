// By using `dynamic`, we force ExitFrame to not render on server and only on the client.

import {
  Card,
  Layout,
  Page,
  Spinner,
  Text,
  BlockStack,
} from "@shopify/polaris";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const ExitFrameComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const shop = window?.shopify?.config?.shop;

      open(
        `${process.env.CONFIG_SHOPIFY_APP_URL}/api/auth?shop=${shop}`,
        "_top"
      );
    }
  }, []);

  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="200">
                <Text variant="headingMd">Security Checkpoint</Text>
                <Text variant="bodyMd">Reauthorizing your tokens</Text>
                <Spinner />
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

const DynamicExitFrame = dynamic(() => Promise.resolve(ExitFrameComponent), {
  ssr: false,
});

export default DynamicExitFrame;
