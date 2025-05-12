import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextField',
  description: 'Use a text field to get text input from a customer.',
  requires: '',
  thumbnail: 'textfield-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextFieldProps',
      description: '',
      type: 'TextFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'textfield-default.png',
    codeblock: {
      title: 'Basic TextField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/TextField/examples/basic-textfield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-textfield.example.ts',
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
        '- Clearly label text fields so that it’s obvious what customers should enter.\n\n- Label text fields as Optional when input isn’t required. For example, use the label <b>First name (optional)</b>.\n\n- Don’t have optional fields pass true to the required property.',
    },
  ],
  related: [],
};

export default data;
