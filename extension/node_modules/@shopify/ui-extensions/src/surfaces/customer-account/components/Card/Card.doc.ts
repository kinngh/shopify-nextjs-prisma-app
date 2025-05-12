import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Card',
  description:
    'Group related content and functionality together in a familiar and consistent style, for customers to scan, read, and get things done.',
  thumbnail: 'card-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CardProps',
      description: '',
      type: 'CardProps',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'card-preview.png',
    altText:
      'An example of the card component shows a header that says "Addresses", and a button in the upper-right corner that says "+Add". Under the header, there is a full mailing address labeled as the default address, with a pencil icon for editing it.',
    codeblock: {
      title: 'Basic Card',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/Card/examples/basic-Card-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Card-js.example.ts',
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
- Use headings that set clear expectations about the card’s purpose.
- Display information in a way that emphasizes and prioritizes what the customer needs to know first.
`,
    },
  ],
  related: [],
};

export default data;
