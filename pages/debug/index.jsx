import {
  Button,
  Card,
  HorizontalStack,
  Layout,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { useRouter } from "next/router";

const DebugIndex = () => {
  const router = useRouter();

  return (
    <>
      <Page
        title="Debug Cards"
        subtitle="Interact and explore the current installation"
        backAction={{ content: "Home", onAction: () => router.push("/") }}
      >
        <Layout>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Webhooks
                </Text>
                <Text>Explored actively registered webhooks</Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    onClick={() => {
                      router.push("/debug/webhooks");
                    }}
                  >
                    Explore
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Data Fetching
                </Text>
                <Text>
                  Send GET, POST and GraphQL queries to your app's backend.
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    onClick={() => {
                      router.push("/debug/data");
                    }}
                  >
                    Explore
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Billing API
                </Text>
                <Text>
                  Subscribe merchant to a plan and explore existing plans.
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    onClick={() => {
                      router.push("/debug/billing");
                    }}
                  >
                    Cha-Ching
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf />
        </Layout>
      </Page>
    </>
  );
};

export default DebugIndex;
