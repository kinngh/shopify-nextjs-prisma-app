import "@shopify/shopify-api/adapters/node";
import setupCheck from "./utils/setupCheck.js";

setupCheck();

console.log(`--> Running in ${process.env.NODE_ENV} mode`);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  env: {
    CONFIG_SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    CONFIG_SHOPIFY_APP_URL: process.env.SHOPIFY_APP_URL,
    CONFIG_SHOPIFY_API_OPTIONAL_SCOPES: JSON.stringify(
      process?.env?.SHOPIFY_API_OPTIONAL_SCOPES
    ),
  },
  allowedDevOrigins: [
    process.env.SHOPIFY_APP_URL.toString().replace("https://", ""),
  ],
};

export default nextConfig;
