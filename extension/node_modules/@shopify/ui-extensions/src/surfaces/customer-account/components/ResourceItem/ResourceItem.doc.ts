import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ResourceItem',
  description:
    'Use to represent a specific object within a collection, that a customer can take action on. For example, a list of active subscriptions or redeemable offers, in a style consistent with the order index page.',
  thumbnail: 'resourceitem-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ResourceItemProps',
      description: '',
      type: 'ResourceItemProps',
    },
    {
      title: 'ButtonProps action',
      description:
        'Supported props for Buttons used inside ResourceItem `action` prop.<br><br>`children` only support text.',
      type: 'Docs_ResourceItem_Button_Action',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'resourceitem-preview.png',
    altText:
      'An example of how the ResourceItem component is used to represent one order in the grid view of the Order index page.',
    codeblock: {
      title: 'ResourceItem',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/ResourceItem/examples/basic-ResourceItem-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-ResourceItem-js.example.ts',
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
- Group related information.
- Structure your content so it’s easy for customers to scan to the most important information.
- Use images to complement text content.
- If there is a single primary action for the object, display it as a primary button. Display other object-level actions as secondary buttons.
- See [UX guidelines](/docs/apps/customer-accounts/order-action-menu-extensions/ux-guidelines) to learn more about the button logic for order actions.
`,
    },
  ],
  related: [],
};

export default data;
