import {
  extension,
  InternalCustomerSegmentTemplate,
} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n, __enabledFeatures}) => {
    const b2bEnabled =
      __enabledFeatures.includes('b2bEnabled');
    const companiesTemplate = root.createComponent(
      InternalCustomerSegmentTemplate,
      {
        title: i18n.translate('companies.title'),
        description: i18n.translate('companies.description'),
        icon: 'buyButtonMajor',
        query: 'companies IS NOT NULL',
        dateAdded: new Date('2023-01-15').toISOString(),
        category: 'reEngageCustomers',
      },
    );

    const locationTemplate = root.createComponent(
      InternalCustomerSegmentTemplate,
      {
        title: i18n.translate('location.title'),
        description: [
          i18n.translate('location.firstParagraph'),
          i18n.translate('location.secondParagraph'),
        ],
        icon: 'locationMajor',
        query: "customer_cities CONTAINS 'US-NY-NewYorkCity'",
        category: 'location',
      },
    );

    if (b2bEnabled) {
      root.appendChild(companiesTemplate);
    }

    root.appendChild(locationTemplate);

    root.mount();
  },
);
