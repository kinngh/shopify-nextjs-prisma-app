import isInitialLoad from "@/utils/middleware/isInitialLoad";
import {
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { ExternalIcon } from "@shopify/polaris-icons";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  //DO NOT REMOVE THIS.
  return await isInitialLoad(context);
}

const HomePage = () => {
  const router = useRouter();
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <Page title="Home">
        <Layout>
          {isDev ? (
            <Layout.Section variant="fullWidth">
              <Card>
                <BlockStack gap="200">
                  <Text as="h2" variant="headingMd">
                    Debug Cards
                  </Text>
                  <Text>
                    Explore how the repository handles data fetching from the
                    backend, App Proxy, making GraphQL requests, Billing API and
                    more.
                  </Text>
                  <InlineStack wrap={false} align="end">
                    <Button
                      variant="primary"
                      onClick={() => {
                        router.push("/debug");
                      }}
                    >
                      Debug Cards
                    </Button>
                  </InlineStack>
                </BlockStack>
              </Card>
            </Layout.Section>
          ) : null}
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  App Bridge CDN
                </Text>
                <Text>AppBridge has moved from an npm package to CDN</Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    variant="primary"
                    external
                    icon={ExternalIcon}
                    onClick={() => {
                      open(
                        "https://shopify.dev/docs/api/app-bridge-library/reference",
                        "_blank"
                      );
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
                  Repository
                </Text>
                <Text>
                  Found a bug? Open an issue on the repository, or star on
                  GitHub
                </Text>
                <InlineStack wrap={false} align="end" gap="200">
                  <Button
                    external
                    icon={ExternalIcon}
                    onClick={() => {
                      open(
                        "https://github.com/kinngh/shopify-nextjs-prisma-app/issues?q=is%3Aissue",
                        "_blank"
                      );
                    }}
                  >
                    Issues
                  </Button>
                  <Button
                    external
                    variant="primary"
                    icon={ExternalIcon}
                    onClick={() => {
                      open(
                        "https://github.com/kinngh/shopify-nextjs-prisma-app",
                        "_blank"
                      );
                    }}
                  >
                    Star
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf">
            <Card>
              <BlockStack gap="200">
                <Text as="h2" variant="headingMd">
                  Course
                </Text>
                <Text>
                  [BETA] I'm building course as a live service on How To Build
                  Shopify Apps
                </Text>
                <InlineStack wrap={false} align="end">
                  <Button
                    external
                    variant="primary"
                    icon={ExternalIcon}
                    onClick={() => {
                      open(
                        "https://kinngh.gumroad.com/l/how-to-make-shopify-apps?utm_source=boilerplate&utm_medium=nextjs",
                        "_blank"
                      );
                    }}
                  >
                    Buy
                  </Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneHalf" />
        </Layout>
      </Page>
    </>
  );
};

export default HomePage;
