import React, { useEffect, useState } from "react";

import {
  BlockStack,
  Grid,
  Page,
  Text,
  reactExtension,
} from "@shopify/ui-extensions-react/customer-account";

// Simple translation utility
import en from '../locales/en.default.json';
import fr from '../locales/fr.json';
import nl from '../locales/nl.json';
import de from '../locales/de.json';
import hu from '../locales/hu.json';
import pl from '../locales/pl.json';
import es from '../locales/es.json';

const locales = { en, fr, nl, de, hu, pl, es };

function getLocale() {
  const lang = (navigator.language || 'en').split('-')[0];
  return locales[lang] ? lang : 'en';
}

function t(key) {
  const locale = getLocale();
  return locales[locale][key] || locales['en'][key] || key;
}

function formatDate(dateStr) {
  // Expects YYYYMMDD
  if (!dateStr || dateStr.length !== 8) return dateStr;
  return `${dateStr.slice(6, 8)}/${dateStr.slice(4, 6)}/${dateStr.slice(0, 4)}`;
}

function formatMoney(amount) {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(Number(amount));
}

function InvoicesPage() {
  const [invoices, setInvoices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [market, setMarket] = useState(null);

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
            if (!metafield || !metafield.value) return null;
            let value = metafield.value;
            try {
              // Check if it's a stringified JSON array
              if (typeof value === 'string' && value.startsWith('[') && value.endsWith(']')) {
                const parsed = JSON.parse(value);
                if (Array.isArray(parsed) && parsed.length > 0) {
                  value = parsed[0]; // Take the first element
                }
              } else if (Array.isArray(value) && value.length > 0) {
                value = value[0]; // Take the first element if it's already an array
              }
            } catch (e) {
              console.error("Failed to parse metafield value:", value, e);
              // Keep original value if parsing fails
            }
            return typeof value === 'string' ? value : null;
          };

          const customerIdValue = parseMetafieldValue(as400Metafield);
          const marketValue = parseMetafieldValue(eshopMetafield);

          if (customerIdValue) {
            setCustomerId(customerIdValue);
          } else {
            console.error("as400_customer_id not found, has no value, or is not a parsable string/array.");
            setError("Could not retrieve customer ID.");
            setIsLoading(false);
          }
          if (marketValue) {
            setMarket(marketValue);
          } else {
            console.error("company_eshop not found, has no value, or is not a parsable string/array.");
            setError("Could not retrieve market information.");
            setIsLoading(false);
          }
        } else {
          console.error("Company data not found in GraphQL response");
          setError("Could not retrieve company information.");
          setIsLoading(false);
        }
      })
      .catch(err => {
        console.error("Failed to fetch company metafields:", err);
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // Runs once on mount

  // Effect to fetch invoices once customerId and market are available
  useEffect(() => {
    if (customerId && market) {
      const fetchInvoices = async () => {
        setIsLoading(true); // Set loading to true before fetching invoices
        setError(null); // Clear previous errors
        try {
          // Construct the dynamic URL
          const invoiceApiUrl = `https://c7a4-94-247-4-243.ngrok-free.app/invoices/${market}/${customerId}`;
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
    return <Page title={t('invoicesTitle')}><Text>{t('loading')}</Text></Page>;
  }

  if (error) {
    return <Page title={t('invoicesTitle')}><Text appearance="critical">{t('errorFetching')}: {error}</Text></Page>;
  }

  const renderInvoices = () => {
    return (
      <Grid background="subdued" cornerRadius="loose" columns={['fill', 'fill', 'fill', 'fill']} padding="loose" spacing="loose">
        <Text appearance="info">{t('invoiceNumber')}</Text>
        <Text appearance="info">{t('date')}</Text>
        <Text appearance="info">{t('amount')}</Text>
        <Text appearance="info">{t('status')}</Text>
        {/* Table rows: 4 columns per row, even cells subdued */}
        {invoices.map((inv, rowIdx) => [
          <Text key={`nr-${inv.inv_nr}`}>{inv.inv_nr}</Text>,
          <Text key={`date-${inv.inv_nr}`}>{formatDate(inv.inv_date)}</Text>,
          <Text key={`amount-${inv.inv_nr}`}>{formatMoney(inv.inv_amount)}</Text>,
          <Text key={`status-${inv.inv_nr}`} appearance={inv.inv_status === 'Open' ? "warning" : "info"}>{t(inv.inv_status.toLowerCase())}</Text>,
        ])}
      </Grid>
    )
  }

  return (
    <Page title={t('invoicesTitle')}>
      <BlockStack>
        {invoices.length > 0 ? renderInvoices() : <Text appearance="info">{t('noInvoicesFound')}</Text>}
      </BlockStack>
    </Page>
  );
}

export default reactExtension(
  "customer-account.page.render",
  () => <InvoicesPage />
);