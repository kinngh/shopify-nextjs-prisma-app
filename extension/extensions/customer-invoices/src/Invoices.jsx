import React, { useState } from 'react';

import {
  reactExtension,
  useApi,
  BlockStack,
  Page,
  Text,
} from "@shopify/ui-extensions-react/customer-account";

export default reactExtension(
  "customer-account.page.render",
  () => <Invoices />
);

function Invoices() {
  // const { i18n } = useApi();

  // const [loading, setLoading] = useState(true);

  // if (loading) {
  //   return <Text>Loading...</Text>;
  // }

  // i18n.translate("translate_handle")

  return (
    <Page title='Invoices'>
      <BlockStack>
        <Text>Invoices</Text>
      </BlockStack>
    </Page>
  );
}