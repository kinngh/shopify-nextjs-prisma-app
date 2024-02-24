import {
  Layout,
  Card,
  Page,
  BlockStack,
  Text,
  InlineStack,
  Button,
} from "@shopify/polaris";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useDataFetcher = (initialState, url, options) => {
  const [data, setData] = useState(initialState);

  const fetchData = async () => {
    setData("loading...");
    const result = await (await fetch(url, options)).json();
    setData(result.text);
  };

  return [data, fetchData];
};

const DataCard = ({ method, url, data, onRefetch }) => (
  <Layout.Section>
    <Card>
      <BlockStack gap="200">
        <Text>
          {method} <code>{url}</code>: {data}
        </Text>
        <InlineStack align="end">
          <Button variant="primary" onClick={onRefetch}>
            Refetch
          </Button>
        </InlineStack>
      </BlockStack>
    </Card>
  </Layout.Section>
);

const GetData = () => {
  const router = useRouter();

  const postOptions = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({ content: "Body of POST request" }),
  };

  const [responseData, fetchContent] = useDataFetcher("", "/api/apps");
  const [responseDataPost, fetchContentPost] = useDataFetcher(
    "",
    "/api/apps",
    postOptions
  );
  const [responseDataGQL, fetchContentGQL] = useDataFetcher(
    "",
    "/api/apps/debug/gql"
  );

  useEffect(() => {
    fetchContent();
    fetchContentPost();
    fetchContentGQL();
  }, []);

  return (
    <Page
      title="Data Fetching"
      subtitle="Make an authenticated GET, POST and GraphQL request to the apps backend"
      backAction={{ onAction: () => router.push("/debug") }}
    >
      <Layout>
        <DataCard
          method="GET"
          url="/api/apps"
          data={responseData}
          onRefetch={fetchContent}
        />
        <DataCard
          method="POST"
          url="/api/apps"
          data={responseDataPost}
          onRefetch={fetchContentPost}
        />
        <DataCard
          method="GET"
          url="/api/apps/debug/gql"
          data={responseDataGQL}
          onRefetch={fetchContentGQL}
        />
      </Layout>
    </Page>
  );
};

export default GetData;
