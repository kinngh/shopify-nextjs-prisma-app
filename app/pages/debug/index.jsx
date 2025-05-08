import {
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
  BlockStack,
} from "@shopify/polaris";
import { useRouter } from "next/router";

const DebugIndex = () => {
  const router = useRouter();

  return (
    <>
      <Page
        title="Debug Cards"
        subtitle="Interact and explore the current installation"
        backAction={{ onAction: () => router.push("/") }}
      >
        <Layout>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Scopes
                </Text>
                <Text>
                  Explore what scopes are registered and how to ask for optional
                  scopes
                </Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/debug/scopes");
                    }}
                  >
                    Explore
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Data Fetching
                </Text>
                <Text>
                  Send GET, POST and GraphQL queries to your app's backend.
                </Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/debug/data");
                    }}
                  >
                    Explore
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Billing API
                </Text>
                <Text>
                  Subscribe merchant to a plan and explore existing plans.
                </Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/debug/billing");
                    }}
                  >
                    Cha-Ching
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Resource Picker
                </Text>
                <Text>See how to use AppBridge CDN's Resource Picker</Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    onClick={() => {
                      router.push("/debug/resourcePicker");
                    }}
                  >
                    Explore
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default DebugIndex;
