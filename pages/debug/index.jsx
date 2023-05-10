import { Layout, LegacyCard, Page } from "@shopify/polaris";
import { useRouter } from "next/router";

const DebugIndex = () => {
  const router = useRouter();
  return (
    <Page
      title="Debug Cards"
      subtitle="Interact and explore the current installation"
      backAction={{ content: "Home", onAction: () => router.push("/") }}
    >
      <Layout>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Webhooks"
            primaryFooterAction={{
              content: "Explore",
              onAction: () => {
                router.push("/debug/activeWebhooks");
              },
            }}
          >
            <p>Explore registered webhooks and endpoints.</p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Data Fetching"
            primaryFooterAction={{
              content: "Explore",
              onAction: () => {
                router.push("/debug/getData");
              },
            }}
          >
            <p>
              Run GET and POST requests to your server along with GraphQL
              queries.
            </p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Billing API"
            primaryFooterAction={{
              content: "Cha-Ching",
              onAction: () => {
                router.push("/debug/billing");
              },
            }}
          >
            <p>Subscribe merchant to a plan and explore existing plans.</p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section oneHalf>
          <LegacyCard
            sectioned
            title="Dev Notes"
            primaryFooterAction={{
              content: "Let's go",
              onAction: () => {
                router.push("/debug/devNotes");
              },
            }}
          >
            <p>Notes for devs on expectations.</p>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default DebugIndex;
