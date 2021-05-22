import React from "react";
import { Page, Card, Layout } from "@shopify/polaris";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const cancelSubscription = () => {
  const getActiveSubscriptions = gql`
    {
      currentAppInstallation {
        activeSubscriptions {
          id
          name
          status
        }
      }
    }
  `;

  return (
    <React.Fragment>
      <Page>
        <Layout>
          <Layout.Section>
            <Card title="Getting current subscriptions" sectioned>
              <Query query={getActiveSubscriptions}>
                {({ loading, error, data }) => {
                  if (error) return <p>{error.message}</p>;
                  if (loading) return <p>Loading</p>;
                  console.log(data);
                  return (
                    <p>
                      Check your console for current active app subscriptions.
                      This is a temporary placeholder page while subscription
                      routing is being tested
                    </p>
                  );
                }}
              </Query>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    </React.Fragment>
  );
};

export default cancelSubscription;
