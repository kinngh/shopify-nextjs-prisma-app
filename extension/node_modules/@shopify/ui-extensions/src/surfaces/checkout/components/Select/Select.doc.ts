import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Select',
  description:
    'Selects let buyers choose one option from an options menu. Consider select when you have 4 or more options, to avoid cluttering the interface.',
  requires: '',
  thumbnail: 'select-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SelectProps',
      description: '',
      type: 'SelectProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'select-default.png',
    codeblock: {
      title: 'Basic Select',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Select/examples/basic-select.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-select.example.ts',
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
        '- Use this component when customers need to choose between four or more predefined options.\n\n- Have a default option selected whenever possible. Use Select as placeholder text if there’s no logical default option.',
    },
  ],
  examples: {
    description: '',
    examples: [
      {
        image: 'select-time-picking.png',
        description:
          'The Select component is a great choice for displaying a long list of time choices, as it helps conserve valuable space. If the number of options is less than or equal to 5, we recommend using the [ChoiceList](/docs/api/checkout-ui-extensions/components/forms/choicelist) component. This allows buyers to see all options immediately without the need for clicking into the select.',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Select/examples/time-picking-select.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/time-picking-select.example.ts',
              language: 'js',
            },
          ],
          title:
            'Using the Select component to display a long list of time choices',
        },
      },
    ],
  },
  related: [],
};

export default data;
