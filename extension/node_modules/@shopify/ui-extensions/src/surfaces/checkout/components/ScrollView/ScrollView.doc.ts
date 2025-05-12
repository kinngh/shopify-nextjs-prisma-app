import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ScrollView',
  description:
    'ScrollView is a container for long form content, such as order summary line items, that allows for scrolling so customers can expose more content as they view.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'scrollview-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'ScrollViewProps',
      description: '',
      type: 'ScrollViewProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'scrollview-default.png',
    codeblock: {
      title: 'Basic Scrollview',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ScrollView/examples/basic-scrollview.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-scrollview.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      subtitle: 'Utility',
      name: 'StyleHelper',
      url: '/docs/api/checkout-ui-extensions/unstable/components/utilities/stylehelper',
      type: 'utility',
    },
  ],
};

export default data;
