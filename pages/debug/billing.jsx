import {
  BlockStack,
  Button,
  Card,
  DataTable,
  InlineStack,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const BillingAPI = () => {
  const router = useRouter();
  const [responseData, setResponseData] = useState("");

  async function fetchContent() {
    setResponseData("loading...");
    const res = await fetch("/api/apps/debug/createNewSubscription");
    const data = await res.json();
    if (data.error) {
      setResponseData(data.error);
    } else if (data.confirmationUrl) {
      setResponseData("Redirecting");
      const { confirmationUrl } = data;
      open(confirmationUrl, "_top");
    }
  }

  return (
    <Page
      title="Billing API"
      subtitle="Ensure your app is set to `public distribution` to use Billing API"
      backAction={{
        onAction: () => router.push("/debug"),
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text>
                Subscribe your merchant to a test $10.25 plan and redirect to
                your home page.
              </Text>

              {
                /* If we have an error, it'll pop up here. */
                responseData && <p>{responseData}</p>
              }
              <InlineStack align="end">
                <Button
                  variant="primary"
                  onClick={() => {
                    fetchContent();
                  }}
                >
                  Subscribe Merchant
                </Button>
              </InlineStack>
            </BlockStack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <ActiveSubscriptions />
        </Layout.Section>
      </Layout>
    </Page>
  );
};

const ActiveSubscriptions = () => {
  const [rows, setRows] = useState([]);

  async function getActiveSubscriptions() {
    const res = await fetch("/api/apps/debug/getActiveSubscriptions");
    const data = await res.json();

    //MARK:- Replace this yet another amazing implementation with swr or react-query
    let rowsData = [];
    const activeSubscriptions = data.data.appInstallation.activeSubscriptions;

    if (activeSubscriptions.length === 0) {
      rowsData.push(["No Plan", "N/A", "N/A", "USD 0.00"]);
    } else {
      console.log("Rendering Data");
      Object.entries(activeSubscriptions).map(([key, value]) => {
        const { name, status, test } = value;
        const { amount, currencyCode } =
          value.lineItems[0].plan.pricingDetails.price;
        rowsData.push([name, status, `${test}`, `${currencyCode} ${amount}`]);
      });
    }
    setRows(rowsData);
  }
  useEffect(() => {
    getActiveSubscriptions();
  }, []);

  return (
    <Card>
      <BlockStack gap="200">
        <Text fontWeight="bold">Active Subscriptions</Text>
        <DataTable
          columnContentTypes={["text", "text", "text", "text"]}
          headings={["Plan Name", "Status", "Test", "Amount"]}
          rows={rows}
        />
      </BlockStack>
    </Card>
  );
};

export default BillingAPI;
