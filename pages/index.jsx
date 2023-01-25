import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Card, Layout, Page } from "@shopify/polaris";
import { useRouter } from "next/router";
import React from "react";

const HomePage = () => {
  const router = useRouter();
  const app = useAppBridge();
  const redirect = Redirect.create(app);

  return (
    <Page title="Home">
      <Layout>
        <Layout.Section fullWidth>
          <Card
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
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card
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
          </Card>
          <Card
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
          </Card>
        </Layout.Section>
        <Layout.Section oneHalf>
          <Card
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
          </Card>
          <Card
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
          </Card>
        </Layout.Section>
        <Layout.Section fullWidth>
          <Card
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
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default HomePage;
