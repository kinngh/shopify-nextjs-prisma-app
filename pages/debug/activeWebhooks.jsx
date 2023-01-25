import useFetch from "@/components/hooks/useFetch";
import { Card, Layout, Page } from "@shopify/polaris";
import { useEffect } from "react";

const ActiveWebhooks = () => {
  const fetch = useFetch();

  async function fetchWebhooks() {
    const res = await fetch("/api/");
    const data = await res.json();

    console.log(data);
  }

  useEffect(() => {
    fetchWebhooks();
  }, []);

  return (
    <>
      <Page>
        <Layout>
          <Layout.Section>
            <Card sectioned title="Getting data">
              <p>Check console for data</p>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </>
  );
};

export default ActiveWebhooks;
