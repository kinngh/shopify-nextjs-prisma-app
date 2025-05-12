import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'BlockStack',
  description:
    "This structures layout elements along the vertical axis of the page. It's useful for vertical alignment.",
  requires: '',
  thumbnail: 'blockstack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'BlockStackProps',
      description: '',
      type: 'BlockStackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'blockstack-default.png',
    codeblock: {
      title: 'Laying out elements in a column',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/BlockStack/examples/basic-blockstack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-blockstack.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'InlineStack',
      url: '/docs/api/admin-extensions/components/structure/Stack',
    },
  ],
};

export default data;
