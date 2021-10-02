import { Page, Card, Button } from "@shopify/polaris";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";
import { Redirect } from "@shopify/app-bridge/actions";
import { useAppBridge } from "@shopify/app-bridge-react";

const returnUrl = "https://github.com/kinngh/shopify-node-mongodb-next-app";

const subscribeMerchantMutation = gql`
  mutation {
    appSubscriptionCreate(
      name: "Basic Plan"
      returnUrl: "${returnUrl}"
      test: true
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              price: { amount: 10, currencyCode: USD }
            }
          }
        }
      ]
    ) {
      userErrors {
        field
        message
      }
      confirmationUrl
      appSubscription {
        id
        status
      }
    }
  }
`;
const RecurringSubscription = () => {
  const router = useRouter();
  const abContext = useAppBridge();
  const redirect = Redirect.create(abContext);

  const [subMerchant, { data, loading, error }] = useMutation(
    subscribeMerchantMutation
  );

  if (data) {
    redirect.dispatch(
      Redirect.Action.REMOTE,
      data.appSubscriptionCreate.confirmationUrl
    );
  }

  return (
    <Page>
      <Card sectioned title="Subscribe Merchant to $10 plan">
        <p>
          Subscribe your merchant to a test $10 plan and redirect to your home
          page.
        </p>
        <br />
        <Button
          onClick={() => {
            router.push("/");
          }}
        >
          Home
        </Button>{" "}
        <Button
          onClick={() => {
            subMerchant();
          }}
        >
          Subscribe Merchant
        </Button>
      </Card>
    </Page>
  );
};

export default RecurringSubscription;
