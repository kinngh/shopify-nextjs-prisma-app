import useFetch from "@/components/hooks/useFetch";
import { useAppBridge } from "@shopify/app-bridge-react";
import { Redirect } from "@shopify/app-bridge/actions";
import { Layout, LegacyCard, Link, Page } from "@shopify/polaris";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const GetData = () => {
  const router = useRouter();
  const app = useAppBridge();
  const redirect = Redirect.create(app);
  const [responseData, setResponseData] = useState("");
  const [responseDataPost, setResponseDataPost] = useState("");
  const [responseDataGQL, setResponseDataGQL] = useState("");
  const fetch = useFetch();

  async function fetchContent() {
    setResponseData("loading...");
    const res = await fetch("/api/apps"); //fetch instance of useFetch()
    const { text } = await res.json();
    setResponseData(text);
  }
  async function fetchContentPost() {
    setResponseDataPost("loading...");
    const postBody = JSON.stringify({ content: "Body of POST request" });
    const res = await fetch("/api/apps", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: postBody,
    }); //fetch instance of useFetch()

    const { content } = await res.json();
    setResponseDataPost(content);
  }

  async function fetchContentGQL() {
    setResponseDataGQL("loading...");
    const res = await fetch("/api/apps/debug/gql"); //fetch instance of useFetch()
    const response = await res.json();
    setResponseDataGQL(response.body.data.shop.name);
  }

  useEffect(() => {
    fetchContent();
    fetchContentPost();
    fetchContentGQL();
  }, []);

  return (
    <Page
      title="Data Fetching"
      backAction={{ content: "Home", onAction: () => router.push("/debug") }}
    >
      <Layout>
        <Layout.Section>
          <LegacyCard
            sectioned
            primaryFooterAction={{
              content: "Refetch",
              onAction: () => {
                fetchContent();
              },
            }}
          >
            <p>
              GET <code>"/apps/api"</code>: {responseData}
            </p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard
            sectioned
            primaryFooterAction={{
              content: "Refetch",
              onAction: () => {
                fetchContentPost();
              },
            }}
          >
            <p>
              POST <code>"/apps/api" </code>: {responseDataPost}
            </p>
          </LegacyCard>
        </Layout.Section>
        <Layout.Section>
          <LegacyCard
            sectioned
            primaryFooterAction={{
              content: "Refetch",
              onAction: () => {
                fetchContentGQL();
              },
            }}
          >
            <p>
              GET <code>"/apps/api/debug/gql"</code>: {responseDataGQL}
            </p>
          </LegacyCard>
          <LegacyCard title="Developer Notes">
            <LegacyCard.Section title="Making Requests">
              <li>
                Create a new route in <code>pages/api/apps</code> and export it
                with
                <code>
                  export default withMiddleware("verifyRequest")(function-name)
                </code>
                .
              </li>
              <li>
                Create a new instance of <code>useFetch()</code> and use that to
                make a request to <code>/api/apps/your-route/goes-here/</code>
              </li>
              <li>
                [Optional] Use a library like{" "}
                <Link
                  onClick={() => {
                    redirect.dispatch(Redirect.Action.REMOTE, {
                      url: "https://tanstack.com/query/latest",
                      newContext: true,
                    });
                  }}
                >
                  <code>@tanstack/react-query</code>
                </Link>{" "}
                or{" "}
                <Link
                  onClick={() => {
                    redirect.dispatch(Redirect.Action.REMOTE, {
                      url: "https://swr.vercel.app",
                      newContext: true,
                    });
                  }}
                >
                  <code>swr</code>
                </Link>{" "}
                for client side data fetching state management.
              </li>
            </LegacyCard.Section>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default GetData;
