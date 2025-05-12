import React from 'react';
import {
  reactExtension,
  InternalCustomerSegmentTemplate,
} from '@shopify/ui-extensions-react/admin';

function App({i18n, enabledFeatures}) {
    const productsPurchasedOnTagsEnabled = enabledFeatures.includes('productsPurchasedByTags');
    const query = productsPurchasedOnTagsEnabled
      ? 'products_purchased(tag: (product_tag)) = true'
      : 'products_purchased(id: (product_id)) = true';
    const queryToInsert = productsPurchasedOnTagsEnabled
      ? 'products_purchased(tag:'
      : 'products_purchased(id:';

    return (
      <>
        <InternalCustomerSegmentTemplate
          title={i18n.translate('product.title')}
          description={i18n.translate('product.description')}
          icon='productsMajor'
          query={query}
          queryToInsert={queryToInsert}
          createdOn={new Date('2023-01-15').toISOString()}
          category="reEngageCustomers"
        />
         <InternalCustomerSegmentTemplate
          title={i18n.translate('location.title')}
          description={[i18n.translate('location.firstParagraph'), i18n.translate('location.secondParagraph')]}
          icon='locationMajor'
          query="customer_cities CONTAINS 'US-NY-NewYorkCity'"
          category='location'
        />
      </>
    );
}

reactExtension('admin.customers.segmentation-templates.render', ({i18n, __enabledFeatures}) => <App i18n={i18n} enabledFeatures={__enabledFeatures} />);
