import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'InlineSpacer',
  description:
    'InlineSpacer is used to create empty inline space, typically when variable spacing is needed between multiple elements.\n\nNote that you should favor InlineStack when spacing between all elements is the same.',
  isVisualComponent: true,
  thumbnail: 'inlinespacer-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'InlineSpacerProps',
      description: '',
      type: 'InlineSpacerProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'inlinespacer-default.png',
    codeblock: {
      title: 'Basic InlineSpacer',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/InlineSpacer/examples/basic-inlinespacer.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-inlinespacer.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
