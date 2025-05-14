import React, { useEffect, useState } from "react";

import {
  BlockStack,
  Grid,
  Page,
  Spinner,
  Text,
  reactExtension,
  useTranslate,
} from "@shopify/ui-extensions-react/customer-account";

function formatDate(dateStr) {
  // Expects YYYYMMDD
  if (!dateStr || dateStr.length !== 8) return dateStr;
  return `${dateStr.slice(6, 8)}/${dateStr.slice(4, 6)}/${dateStr.slice(0, 4)}`;
}

function formatMoney(amount) {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(Number(amount));
}

function InvoicesPage() {
  const translate = useTranslate();
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [market, setMarket] = useState(null);

  const apiBaseUrl = "https://c7a4-94-247-4-243.ngrok-free.app";

  // Effect to fetch customerId and market
  useEffect(() => {
    const getCompanyMetafieldsQuery = {
      query: `
        query {
          customer {
            companyContacts(first: 10) {
              nodes {
                company {
                  name
                  metafields(identifiers: [
                    {namespace: \"custom\", key: \"company_eshop\"},
                    {namespace: \"custom\", key: \"as400_customer_id\"}
                  ]) {
                    key
                    namespace
                    value
                  }
                }
              }
            }
          }
        }
      `
    };

    fetch("shopify://customer-account/api/unstable/graphql.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getCompanyMetafieldsQuery),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("GraphQL Data:", data);
        const companyNode = data?.data?.customer?.companyContacts?.nodes?.[0]?.company;
        if (companyNode) {
          const as400Metafield = companyNode.metafields.find(metafield => metafield.key === "as400_customer_id");
          const eshopMetafield = companyNode.metafields.find(metafield => metafield.key === "company_eshop");

          // Helper function to parse metafield value
          const parseMetafieldValue = (metafield) => {
            if (!metafield?.value || typeof metafield.value !== 'string') {
              if (metafield?.value) {
                  console.warn("Metafield value is not a string:", metafield.value);
              }
              return null;
            }

            const valueStr = metafield.value;

            try {
              const parsed = JSON.parse(valueStr);
              if (Array.isArray(parsed)) {
                if (parsed.length > 0 && typeof parsed[0] === 'string') {
                  return parsed[0]; // Successfully extracted first string from list
                } else {
                  console.warn("Metafield parsed as array but no valid first string element:", parsed);
                  return null; 
                }
              }
              // If JSON.parse(valueStr) results in something that is NOT an array,
              // it means the metafield was not a list-of-strings representation.
              // We assume the original string 'valueStr' might be the direct value or a different JSON type.
              // For this function's purpose (extracting a single string), we will fall through
              // and return the original string if it wasn't a parsable array of strings.
            } catch (e) {
              // JSON.parse failed: valueStr is not a valid JSON string (e.g., it's a direct string like "actual_id").
              // Fall through to return valueStr below.
            }

            // If parsing failed, or if it parsed to a non-array JSON, assume valueStr is the direct string.
            return valueStr;
          };

          const customerIdValue = parseMetafieldValue(as400Metafield);
          const marketValue = parseMetafieldValue(eshopMetafield);

          let hasError = false;
          if (customerIdValue) {
            setCustomerId(customerIdValue);
          } else {
            console.error("as400_customer_id not found, has no value, or is not a parsable string/array.");
            hasError = true;
          }

          if (marketValue) {
            setMarket(marketValue);
          } else {
            console.error("company_eshop not found, has no value, or is not a parsable string/array.");
            hasError = true;
          }

          if (hasError) {
            setError(translate('errorMissingCompanyMetafields')); // Use a generic error key
            setIsLoading(false);
          } else if (customerIdValue && marketValue) {
            // Only proceed to fetch invoices if both are successfully retrieved
            // The second useEffect will pick this up.
            // We can remove setIsLoading(false) here if the second effect handles it
            // However, if the second effect *only* runs when customerId/market change, this is fine.
          }

        } else {
          console.error("Company data not found in GraphQL response");
          setError(translate('errorFetchingCompany')); // Use a generic error key
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error("Failed to fetch company metafields:", err);
        setError(err.message); // Or a generic translate('errorFetching')
        setIsLoading(false);
      });
  }, [translate]); // Added translate to dependency array as it's used in error messages

  // Effect to fetch invoices once customerId and market are available
  useEffect(() => {
    if (customerId && market) {
      const fetchInvoices = async () => {
        setIsLoading(true); // Set loading to true before fetching invoices
        setError(null); // Clear previous errors
        try {
          // Construct the dynamic URL
          const invoiceApiUrl = `${apiBaseUrl}/invoices/${market}/${customerId}`;
          console.log("Fetching invoices from:", invoiceApiUrl);

          const response = await fetch(invoiceApiUrl, {
            method: 'POST',
            // Add headers or body here if your POST request requires them
            // For example:
            // headers: {
            //   'Content-Type': 'application/json',
            // },
            // body: JSON.stringify({ key: 'value' }),
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          console.log("Invoices Data:", data);
          setInvoices(data.invoices);
        } catch (e) {
          setError(e.message);
          console.error("Failed to fetch invoices:", e);
        } finally {
          setIsLoading(false);
        }
      };

      fetchInvoices();
    }
  }, [customerId, market]); // Runs when customerId or market changes

  if (isLoading) {
    return <Page title={translate('invoicesTitle')}><BlockStack inlineAlignment="center"><Spinner /></BlockStack></Page>;
  }

  if (error) {
    return <Page title={translate('invoicesTitle')}><Text appearance="critical">{translate('errorFetching')}: {error}</Text></Page>;
  }

  const renderInvoices = () => {
    return (
      <Grid background="subdued" cornerRadius="loose" columns={['fill', 'fill', 'fill', 'fill']} padding="loose" spacing="loose">
        <Text appearance="info">{translate('invoiceNumber')}</Text>
        <Text appearance="info">{translate('date')}</Text>
        <Text appearance="info">{translate('amount')}</Text>
        <Text appearance="info">{translate('status')}</Text>
        {/* Table rows: 4 columns per row, even cells subdued */}
        {invoices.map((inv, rowIdx) => [
          <Text key={`nr-${inv.inv_nr}`}>{inv.inv_nr}</Text>,
          <Text key={`date-${inv.inv_nr}`}>{formatDate(inv.inv_date)}</Text>,
          <Text key={`amount-${inv.inv_nr}`}>{formatMoney(inv.inv_amount)}</Text>,
          <Text key={`status-${inv.inv_nr}`} appearance={inv.inv_status === 'Open' ? "warning" : "info"}>{translate(inv.inv_status.toLowerCase())}</Text>,
        ])}
      </Grid>
    )
  }

  return (
    <Page title={translate('invoicesTitle')}>
      <BlockStack>
        {invoices.length > 0 ? renderInvoices() : <Text appearance="info">{translate('noInvoicesFound')}</Text>}
      </BlockStack>
    </Page>
  );
}

export default reactExtension(
  "customer-account.page.render",
  () => <InvoicesPage />
);