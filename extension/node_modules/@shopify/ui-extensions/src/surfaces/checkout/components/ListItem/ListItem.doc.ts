import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ListItem',
  description:
    'List items are used as children of the `List` component.\n\nThey usually begins with a bullet or a number.',
  requires: '',
  thumbnail: 'listitem-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'listitem-default.png',
    codeblock: {
      title: 'Basic ListItem',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ListItem/examples/basic-listitem.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-listitem.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      name: 'List',
      subtitle: 'Component',
      url: 'list',
      type: 'Component',
    },
  ],
};

export default data;
