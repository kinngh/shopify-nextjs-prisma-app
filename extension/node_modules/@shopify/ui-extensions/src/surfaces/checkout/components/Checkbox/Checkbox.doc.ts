import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const checkboxLinks = getExample('ui-components/checkbox-links', ['jsx', 'js']);

const data: ReferenceEntityTemplateSchema = {
  name: 'Checkbox',
  description:
    'Use checkboxes to give customers a single binary option, such as signing up for marketing, or agreeing to terms and conditions.',
  thumbnail: 'checkbox-thumbnail.png',
  requires: '',
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
      title: 'Basic Checkbox',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Checkbox/examples/basic-checkbox.example.tsx',
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
  examples: {
    description: '',
    examples: [checkboxLinks],
  },
  related: [],
};

export default data;
