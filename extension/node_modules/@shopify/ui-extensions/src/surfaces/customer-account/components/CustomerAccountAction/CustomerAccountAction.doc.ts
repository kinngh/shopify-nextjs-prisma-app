import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'CustomerAccountAction',
  description:
    'A modal to complete an order action flow. This component can only be used to populate the [customer-account.order.action.render](/docs/api/customer-account-ui-extensions/unstable/targets/order-action-menu/customer-account-order-action-render) extension target, which renders as a result of the customer clicking the order action button rendered via the [customer-account.order.action.menu-item.render](/docs/api/customer-account-ui-extensions/unstable/targets/order-action-menu/customer-account-order-action-menu-item-render) extension target.',
  thumbnail: 'customeraccountaction-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CustomerAccountActionProps',
      description: '',
      type: 'CustomerAccountActionProps',
    },
    {
      title: 'ButtonProps primaryAction',
      description:
        'Supported props for Buttons used inside CustomerAccountAction `primaryAction` prop.<br><br>`children` only support text.',
      type: 'Docs_CustomerAccountAction_Button_PrimaryAction',
    },
    {
      title: 'ButtonProps secondaryAction',
      description:
        'Supported props for Button used inside CustomerAccountAction `secondaryAction` prop.<br><br>`children` only support text.',
      type: 'Docs_CustomerAccountAction_Button_SecondaryAction',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'customeraccountaction-preview.png',
    altText:
      'An example of the CustomerAccountAction component shows a dismissible modal with a header that says "Edit order", a field for adjusting quantities, and a Save button.',
    codeblock: {
      title: 'Basic CustomerAccountAction',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/CustomerAccountAction/examples/basic-CustomerAccountAction-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-CustomerAccountAction-js.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent: `
- Use CustomerAccountAction to shift focus toward information and functionality needed to confirm or complete an order action.
- If the order action experience you’re building requires complex forms or large amounts of information, consider building a full-page extension instead.
- See Polaris for more best practices and content guidelines for designing [Modals](https://polaris.shopify.com/components/overlays/modal#best-practices).
`,
    },
  ],
  related: [],
};

export default data;
