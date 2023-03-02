import isShopAvailable from "@/utils/middleware/isShopAvailable";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { useRouter } from "next/router";

//On first install, check if the store is installed and redirect accordingly
export async function getServerSideProps(context) {
  return await isShopAvailable(context);
}

const HomePage = () => {
  const router = useRouter();
  const app = useAppBridge();
  const redirect = Redirect.create(app);

  return (
    <Page title="Home">
      <Layout>
        <Layout.Section fullWidth>
          <LegacyCard
            title="Debug Cards"
            sectioned
            primaryFooterAction={{
              content: "Debug Cards",
              onAction: () => {
                router.push("/debug");
              },
            }}
          >
            <p>
              Explore how the repository handles data fetching from the backend,
              App Proxy, making GraphQL requests, Billing API and more.
            </p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Repository"
            primaryFooterAction={{
              content: "GitHub",
              onAction: () => {
                redirect.dispatch(Redirect.Action.REMOTE, {
                  url: "https://github.com/kinngh/shopify-nextjs-prisma-app",
                  newContext: true,
                });
              },
            }}
            secondaryFooterActions={[
              {
                content: "Open Issue",
                onAction: () => {
                  redirect.dispatch(Redirect.Action.REMOTE, {
                    url: "https://github.com/kinngh/shopify-nextjs-prisma-app/issues?q=is%3Aissue",
                    newContext: true,
                  });
                },
              },
            ]}
          >
            <p>Star the repository, open a new issue or start a discussion.</p>
          </LegacyCard>
          <LegacyCard
            sectioned
            title="Changelog"
            primaryFooterAction={{
              content: "Explore",
              onAction: () => {
                redirect.dispatch(Redirect.Action.REMOTE, {
                  url: "https://shopify.dev/changelog/",
                  newContext: true,
                });
              },
            }}
          >
            <p>Explore changelog on Shopify.dev and follow updates.</p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Documentation"
            primaryFooterAction={{
              content: "Explore APIs",
              onAction: () => {
                redirect.dispatch(Redirect.Action.REMOTE, {
                  url: "https://shopify.dev/graphiql/admin-graphiql",
                  newContext: true,
                });
              },
            }}
            secondaryFooterActions={[
              {
                content: "Design Guidelines",
                onAction: () => {
                  redirect.dispatch(Redirect.Action.REMOTE, {
                    url: "https://shopify.dev/apps/design-guidelines",
                    newContext: true,
                  });
                },
              },
            ]}
          >
            <p>
              Explore the GraphQL APIs in Graphiql or read design guidelines.
            </p>
          </LegacyCard>
          <LegacyCard
            sectioned
            title="Hiring?"
            primaryFooterAction={{
              content: "Twitter",
              onAction: () => {
                redirect.dispatch(Redirect.Action.REMOTE, {
                  url: "https://www.twitter.com/kinngh",
                  newContext: true,
                });
              },
            }}
            secondaryFooterActions={[
              {
                content: "LinkedIn",
                onAction: () => {
                  redirect.dispatch(Redirect.Action.REMOTE, {
                    url: "https://www.linkedin.com/in/theharshdeep/",
                    newContext: true,
                  });
                },
              },
            ]}
          >
            <p>🌎 / 🇨🇦 and looking to expand your engineering team?</p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section fullWidth>
          <LegacyCard
            sectioned
            title="Developer Notes"
            primaryFooterAction={{
              content: "Read More",
              onAction: () => {
                router.push("/debug/devNotes");
              },
            }}
          >
            <p>
              Read notes on opening an issue, creating App Extensions and more.
            </p>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default HomePage;
