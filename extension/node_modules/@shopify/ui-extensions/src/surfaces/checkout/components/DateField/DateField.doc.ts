import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description: 'Use a date field to get a date input from a customer.',
  thumbnail: 'datefield-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DateFieldProps',
      description: '',
      type: 'DateFieldProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datefield-default.png',
    codeblock: {
      title: 'Basic DateField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/DateField/examples/basic-datefield.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-datefield.example.ts',
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
        '- Use clear and concise labels for the DateField component to help customers understand what information is expected.\n\n**When to use a DateField**\n\n- Use when the dates are memorable to the customer.\n\n- Use when all dates are available to be chosen by the customer.\n\n**When not to use a DateField**\n\n- Don’t use when customers require a visual representation of the dates, rather than manual entry, consider using a DatePicker component instead.\n\n- Don’t use when date availability logic is in place. Customers may find it difficult to determine which dates are available if they’re typing. Use a DatePicker instead.',
    },
  ],
  related: [],
};

export default data;
