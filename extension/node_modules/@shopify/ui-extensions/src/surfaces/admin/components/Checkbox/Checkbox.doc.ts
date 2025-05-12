import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use this component when you want to provide users with a clear selection option, such as for agreeing to terms and conditions or selecting multiple options from a list.',
  requires: '',
  thumbnail: 'checkbox-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'CheckboxProps',
      description: '',
      type: 'CheckboxProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'checkbox-default.png',
    codeblock: {
      title: 'Add a simple Checkbox',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Checkbox/examples/basic-checkbox.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-checkbox.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
