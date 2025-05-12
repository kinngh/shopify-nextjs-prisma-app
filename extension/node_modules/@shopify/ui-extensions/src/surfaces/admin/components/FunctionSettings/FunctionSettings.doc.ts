import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'FunctionSettings',
  description:
    'FunctionSettings should be used when configuring the metafield configuration of a Shopify Function. It provides a structure for various input fields and controls, such as text fields, checkboxes, and selections. It also integrates with the native Contextual Save Bar to handle form submission and reset actions.',
  requires: '',
  thumbnail: 'form-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'FunctionSettingsProps',
      description: '',
      type: 'FunctionSettingsProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Simple function settings form implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/FunctionSettings/examples/basic-functionsettings.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-functionsettings.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'TextField',
      url: '/docs/api/admin-extensions/components/forms/textfield',
    },
    {
      type: 'component',
      name: 'NumberField',
      url: '/docs/api/admin-extensions/components/forms/numberfield',
    },
    {
      type: 'component',
      name: 'ChoiceList',
      url: '/docs/api/admin-extensions/components/forms/choicelist',
    },
  ],
};

export default data;
