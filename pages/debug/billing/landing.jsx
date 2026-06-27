import { Button, Card, Page, Text } from "@shopify/polaris";
import { useRouter } from "next/router";
import { useEffect } from "react";

const BillingLanding = () => {
  const router = useRouter();
  const query = router?.query;

  console.log(query?.charge_id);
  console.log(query?.plan_handle);

  async function updateSubscription() {
    const updateSubscriptions = await (
      await fetch("/api/apps/billing/create", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          charge_id: query?.charge_id,
          plan_handle: query?.plan_handle,
        }),
      })
    ).json();
  }

  return (
    <>
      <Page
        title="App Pricing Landing Page"
        backAction={() => {
          router.push("/debug/billing");
        }}
      >
        <Card title="Subscription Details">
          <Text>Charge ID: {query?.charge_id}</Text>
          <Text>Plan Handle: {query?.plan_handle}</Text>
          <Button
            variant="primary"
            onClick={() => {
              updateSubscription();
            }}
          >
            Update subscription
          </Button>
        </Card>
      </Page>
    </>
  );
};

export default BillingLanding;
