import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DateField',
  description:
    'This is a form field that lets users select a date using the DatePicker component.',
  requires: '',
  thumbnail: 'datefield-thumbnail.png',
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
      title: 'Add a single-date DateField',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DateField/examples/basic-datefield.example.tsx',
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

  related: [],
};

export default data;
