import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'DatePicker',
  description:
    'Date pickers let merchants choose dates from a visual calendar that’s consistently applied wherever dates need to be selected across Shopify.    ',
  requires: '',
  thumbnail: 'datepicker-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DatePickerProps',
      description: '',
      type: 'DatePickerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'datepicker-default.png',
    codeblock: {
      title: 'Add a single-date DatePicker',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/basic-datepicker.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-datepicker.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'Use this when merchants need to select multiple dates.',
        codeblock: {
          title: 'Add a multi-date DatePicker',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/multiple-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/multiple-datepicker.example.ts',
              language: 'js',
            },
          ],
        },
      },
      {
        description: 'Use this when merchants need to select a range of dates.',
        codeblock: {
          title: 'Add a range DatePicker',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/DatePicker/examples/range-datepicker.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/range-datepicker.example.ts',
              language: 'js',
            },
          ],
        },
      },
    ],
  },

  related: [],
};

export default data;
