import useFetch from "@/components/hooks/useFetch";
import isShopAvailable from "@/utils/middleware/isShopAvailable";
import {
  Button,
  Card,
  HorizontalStack,
  Layout,
  Page,
  Text,
  VerticalStack,
} from "@shopify/polaris";
import { ExternalMinor } from "@shopify/polaris-icons";
import { useRouter } from "next/router";

//On first install, check if the store is installed and redirect accordingly.
//DO NOT REMOVE.
export async function getServerSideProps(context) {
  return await isShopAvailable(context);
}

const HomePage = () => {
  const router = useRouter();
  const fetch = useFetch();

  return (
    <>
      <Page title="Home">
        <Layout>
          <Layout.Section fullWidth>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Debug Cards
                </Text>
                <Text>
                  Explore how the repository handles data fetching from the
                  backend, App Proxy, making GraphQL requests, Billing API and
                  more.
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    onClick={() => {
                      router.push("/debug");
                    }}
                  >
                    Debug Cards
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  App Bridge CDN
                </Text>
                <Text>
                  App Bridge has changed. Read more about it in the docs
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    primary
                    external
                    icon={ExternalMinor}
                    onClick={() => {
                      open(
                        "https://shopify.dev/docs/api/app-bridge-library/reference",
                        "_blank"
                      );
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
                  Repository
                </Text>
                <Text>
                  Found a bug? Open an issue on the repository, or star on
                  GitHub
                </Text>
                <HorizontalStack wrap={false} align="end" gap="2">
                  <Button
                    external
                    icon={ExternalMinor}
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
                    primary
                    icon={ExternalMinor}
                    onClick={() => {
                      open(
                        "https://github.com/kinngh/shopify-nextjs-prisma-app",
                        "_blank"
                      );
                    }}
                  >
                    Star
                  </Button>
                </HorizontalStack>
              </VerticalStack>
            </Card>
          </Layout.Section>
          <Layout.Section oneHalf>
            <Card>
              <VerticalStack gap="2">
                <Text as="h2" variant="headingMd">
                  Course
                </Text>
                <Text>
                  [BETA] I'm building course as a live service on How To Build
                  Shopify Apps
                </Text>
                <HorizontalStack wrap={false} align="end">
                  <Button
                    external
                    primary
                    icon={ExternalMinor}
                    onClick={() => {
                      open(
                        "https://kinngh.gumroad.com/l/how-to-make-shopify-apps?utm_source=boilerplate&utm_medium=nextjs",
                        "_blank"
                      );
                    }}
                  >
                    Buy
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

export default HomePage;
