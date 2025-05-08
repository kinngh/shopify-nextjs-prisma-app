const AppBridgeProvider = ({ children }) => {
  if (typeof window !== "undefined") {
    const shop = window?.shopify?.config?.shop;

    if (!shop) {
      return <p>No Shop Provided</p>;
    }
  }

  return <>{children}</>;
};

export default AppBridgeProvider;
