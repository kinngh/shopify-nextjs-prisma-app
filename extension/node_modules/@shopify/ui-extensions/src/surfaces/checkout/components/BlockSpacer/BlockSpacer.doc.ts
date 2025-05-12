import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'BlockSpacer',
  description:
    'BlockSpacer is used to create empty block space, typically when variable spacing is needed between multiple elements.\n\nNote that you should favor BlockStack when spacing between all elements is the same.',
  isVisualComponent: true,
  thumbnail: 'blockspacer-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'BlockSpacerProps',
      description: '',
      type: 'BlockSpacerProps',
    },
    {
      title: 'StyleHelper',
      description:
        'Style is a helper for authoring conditional values for prop styles.\n\nWrite complex conditional styles based on one or more conditions, such as viewport sizes and interactive states, in a concise and expressive way.',
      type: 'DocsStyle',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'blockspacer-default.png',
    codeblock: {
      title: 'Basic BlockSpacer',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/BlockSpacer/examples/basic-blockspacer.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-blockspacer.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
