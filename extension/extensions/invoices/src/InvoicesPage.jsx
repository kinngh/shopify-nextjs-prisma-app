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

const invoices = [
  {
    inv_cust_id: '140134',
    inv_nr: '2401257',
    inv_year: '2024',
    inv_date: '20240417',
    inv_amount: '273.40',
    inv_status: 'Open',
  },
  {
    inv_cust_id: '140134',
    inv_nr: '2500288',
    inv_year: '2025',
    inv_date: '20250218',
    inv_amount: '231.72',
    inv_status: 'Open',
  },
  {
    inv_cust_id: '140134',
    inv_nr: '2500289',
    inv_year: '2025',
    inv_date: '20250218',
    inv_amount: '1868.20',
    inv_status: 'Open',
  },
  {
    inv_cust_id: '140134',
    inv_nr: '2500290',
    inv_year: '2025',
    inv_date: '20250218',
    inv_amount: '2474.89',
    inv_status: 'Open',
  },
  {
    inv_cust_id: '140134',
    inv_nr: '2500291',
    inv_year: '2025',
    inv_date: '20250218',
    inv_amount: '33.50',
    inv_status: 'Open',
  },
];

function formatDate(dateStr) {
  // Expects YYYYMMDD
  if (!dateStr || dateStr.length !== 8) return dateStr;
  return `${dateStr.slice(6, 8)}/${dateStr.slice(4, 6)}/${dateStr.slice(0, 4)}`;
}

function formatMoney(amount) {
  return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(Number(amount));
}

function InvoicesPage() {
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
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <Page title={t('invoicesTitle')}>
      <BlockStack>
        <Grid background="subdued" cornerRadius="loose" columns={['fill', 'fill', 'fill', 'fill']} padding="loose" spacing="loose">
          {/* Table header: 4 columns */}
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
      </BlockStack>
    </Page>
  );
}

export default reactExtension(
  "customer-account.page.render",
  () => <InvoicesPage />
);