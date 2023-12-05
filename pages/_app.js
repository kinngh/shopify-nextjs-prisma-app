import AppBridgeProvider from "@/components/providers/AppBridgeProvider";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <PolarisProvider
        i18n={translations}
      >
        <AppBridgeProvider>
          <ui-nav-menu>
            <Link href="/debug/data">Fetch Data</Link>
            <Link href="/debug/billing">Billing API</Link>
          </ui-nav-menu>
          <Component {...pageProps} />
        </AppBridgeProvider>
      </PolarisProvider>
    </>
  );
}
