import { extension, Page, Heading } from '@shopify/ui-extensions/customer-account';

export default extension(
  'customer-account.page.render',
  (root) => {
    const page = root.createComponent(Page, {
      title: 'Invoices',
    });
    const heading = root.createComponent(Heading, undefined, 'Invoices');
    page.append(heading);
    root.append(page);
  },
);
