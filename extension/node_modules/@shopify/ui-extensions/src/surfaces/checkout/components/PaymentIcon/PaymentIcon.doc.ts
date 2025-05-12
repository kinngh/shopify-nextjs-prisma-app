import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'PaymentIcon',
  description:
    'Payment icons can be used for displaying payment-related information or features such as a user’s saved or available payment methods.',
  thumbnail: 'paymenticon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'PaymentIconProps',
      description: '',
      type: 'PaymentIconProps',
    },
    {
      title: 'PaymentMethod',
      description: '',
      type: 'PaymentMethod',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'paymenticon-default.png',
    codeblock: {
      title: 'Basic PaymentIcon',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/PaymentIcon/examples/basic-paymenticon.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-paymenticon.example.ts',
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
      sectionContent:
        '- Maintain the interior appearance of the SVG. The branded portion of the payment icon as provided meets the brand guidelines of the payment provider.\n\n- Maintain the border property of the payment icon. It is designed to adapt to merchant branding in Checkout and ensures a consistent appearance across the customer experience.\n\n- The icon size is designed to be displayed consistently across checkout.',
    },
  ],
  related: [],
};

export default data;
