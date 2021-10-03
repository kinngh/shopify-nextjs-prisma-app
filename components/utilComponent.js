/*
    This is an empty component to get current shop url and name. You can call the component when you need it, like recurring subscriptions, and before you show the button, run the query and wait for localstorage to be populated.
*/
import { useQuery, gql } from "@apollo/client";
const store = require("store");

const getShopQuery = gql`
  {
    shop {
      name
      url
    }
  }
`;

const UtilityComponent = () => {
  const { data, loading, error } = useQuery(getShopQuery);
  if (data) {
    store.set("shopUrl", data.shop.url);
    store.set("myshopifyUrl", data.shop.url.replace("https://", ""));
  }
  return <div />;
};

export default UtilityComponent;
