/** @type {import('next').NextConfig} */

import "@shopify/shopify-api/adapters/node";
import setupCheck from "./utils/setupCheck.js";

setupCheck();

console.log(`--> Running in ${process.env.NODE_ENV} mode`);

if (process.env.NODE_ENV === "development" ){
    console.log("Use this link to access and install your app in your store: ");
    console.log("================================================");
    console.log(`${process.env.SHOPIFY_APP_URL}/api/auth?shop=${process.env.SHOPIFY_DEV_STORE_URL}`);
    console.log("================================================");
  }

const nextConfig = {
  reactStrictMode: true,
  env: {
    CONFIG_SHOPIFY_API_KEY: process.env.SHOPIFY_API_KEY,
    CONFIG_SHOPIFY_APP_URL: process.env.SHOPIFY_APP_URL
  },
};

export default nextConfig;
