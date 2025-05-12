import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'InlineStack',
  description:
    "Use this to organize layout elements along the horizontal axis of the page. It's great for horizontal alignment.",
  requires: '',
  thumbnail: 'inlinestack-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'InlineStackProps',
      description: '',
      type: 'InlineStackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'inlinestack-default.png',
    codeblock: {
      title: 'Laying out elements in a row',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/InlineStack/examples/basic-inlinestack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-inlinestack.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'BlockStack',
      url: '/docs/api/admin-extensions/components/structure/BlockStack',
    },
  ],
};

export default data;
