const setupCheck = () => {
  const {
    SHOPIFY_API_KEY: apiKey,
    SHOPIFY_API_SECRET: apiSecret,
    SHOPIFY_API_SCOPES: apiScopes,
    SHOPIFY_APP_URL: appUrl,
    SHOPIFY_API_VERSION: apiVersion,
    ENCRYPTION_STRING: encString,
    DATABASE_URL: databaseURL,
  } = process.env;

  let errorCount = 0;

  if (typeof apiKey === "undefined") {
    console.error("---> API Key is undefined.");
    errorCount++;
  }
  if (typeof apiSecret === "undefined") {
    console.error("---> API Secret is undefined.");
    errorCount++;
  }
  if (typeof apiScopes === "undefined") {
    console.error("---> API Scopes are undefined.");
    errorCount++;
  }
  if (typeof appUrl === "undefined") {
    console.error("---> App URL is undefined.");
    errorCount++;
  } else if (!appUrl.includes("https://")) {
    console.error("---> Please use HTTPS for SHOPIFY_APP_URL.");
  }
  if (typeof apiVersion === "undefined") {
    console.error("---> API Version is undefined.");
    errorCount++;
  }
  if (typeof encString === "undefined") {
    console.error("---> Encryption String is undefined.");
    errorCount++;
  }

  if (typeof databaseURL === "undefined") {
    console.error("---> Database string is undefined.");
    errorCount++;
  }

  if (errorCount > 4) {
    console.error(
      "\n\n\n\n--> .env file is either not reachable or not setup properly. Please refer to .env.example file for the setup.\n\n\n\n"
    );
  }

  if (errorCount == 0) {
    console.log("--> Setup checks passed successfully.");
  }
};

export default setupCheck;
