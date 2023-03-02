import { Provider } from "@shopify/app-bridge-react";
import { Layout, Page, Spinner } from "@shopify/polaris";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

function AppBridgeProvider({ children }) {
  const router = useRouter();
  const location = router.asPath;

  const [appBridgeConfig, setConfig] = useState(null);

  useEffect(() => {
    const host = router.query?.host;

    if (host) {
      setConfig({
        host: host,
        apiKey: process.env.CONFIG_SHOPIFY_API_KEY,
        forceRedirect: true,
      });
    }
  }, [router.query]);

  const history = useMemo(
    () => ({
      replace: (path) => {
        router.push(path);
      },
    }),
    [location]
  );

  const routerConfig = useMemo(
    () => ({ history, location }),
    [history, location]
  );

  if (!appBridgeConfig) {
    return (
      <Page>
        <Layout>
          <Layout.Section>
            <Spinner />
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Provider config={appBridgeConfig} router={routerConfig}>
      {children}
    </Provider>
  );
}

export default AppBridgeProvider;
