import {extension, CustomerSegmentTemplate} from '@shopify/ui-extensions/admin';

export default extension(
  'admin.customers.segmentation-templates.render',
  (root, {i18n}) => {
    const template = root.createComponent(CustomerSegmentTemplate, {
      title: i18n.translate('template.title'),
      description: i18n.translate('template.description'),
      query: "number_of_orders > 0'",
      createdOn: new Date('2023-01-15').toISOString(),
    });

    root.appendChild(template);

    root.mount();
  },
);
