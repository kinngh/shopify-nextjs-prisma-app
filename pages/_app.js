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
        features={{
          //This is what enables the new monochrome style.
          //If you want to be on bleeding edge, run `npm install @shopify/polaris@beta`
          //  instead to install Polaris v12
          polarisSummerEditions2023: true,
        }}
      >
        <AppBridgeProvider>
          <ui-nav-menu>
            <Link href="/debug/getData">Fetch Data</Link>
            <Link href="/debug/billing">Billing API</Link>
          </ui-nav-menu>
          <Component {...pageProps} />
        </AppBridgeProvider>
      </PolarisProvider>
    </>
  );
}
