import { NavigationMenu } from "@shopify/app-bridge-react";
import { AppProvider as PolarisProvider } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import translations from "@shopify/polaris/locales/en.json";
import AppBridgeProvider from "../components/providers/AppBridgeProvider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <PolarisProvider i18n={translations}>
      <AppBridgeProvider>
        <NavigationMenu
          navigationLinks={[
            {
              label: "Fetch Data",
              destination: "/debug/getData",
            },
            {
              label: "Billing API",
              destination: "/debug/billing",
            },
          ]}
          matcher={(link) => router.pathname === link.destination}
        />
        <Component {...pageProps} />
      </AppBridgeProvider>
    </PolarisProvider>
  );
}
