import webVitalsTracker from "@/components/functions/webVitalsTracker";
import AppBridgeProvider from "@/components/providers/AppBridgeProvider";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Link from "next/link";
import { useEffect } from "react";

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    window?.shopify?.webVitals?.onReport(webVitalsTracker);
  }, []);

  return (
    <>
      <PolarisProvider i18n={translations}>
        <AppBridgeProvider>
          <ui-nav-menu>
            <Link href="/debug">Debug Cards</Link>
          </ui-nav-menu>
          <Component {...pageProps} />
        </AppBridgeProvider>
      </PolarisProvider>
    </>
  );
};

export default App;
