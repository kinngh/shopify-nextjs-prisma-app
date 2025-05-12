import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tag',
  description:
    'A Tag is used to help label, organize or categorize objects. It is commonly used in Checkout to display the discounts applied to a cart.',
  requires: '',
  thumbnail: 'tag-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TagProps',
      description: '',
      type: 'TagProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'tag-default.png',
    codeblock: {
      title: 'Basic Tag',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Tag/examples/basic-tag.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-tag.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [],
};

export default data;
