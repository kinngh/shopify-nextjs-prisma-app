import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          src={`https://cdn.shopify.com/shopifycloud/app-bridge.js?apiKey=${process.env.CONFIG_SHOPIFY_API_KEY}`}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
