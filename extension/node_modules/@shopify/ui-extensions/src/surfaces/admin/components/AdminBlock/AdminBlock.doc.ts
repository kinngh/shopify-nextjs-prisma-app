import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminBlock',
  description:
    'This component is similar to the AdminBlock, providing a deeper integration with the container your UI is rendered into. However, this only applies to Block Extensions which render inline on a resource page.',
  requires: '',
  thumbnail: 'adminblock-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AdminBlockProps',
      description: '',
      type: 'AdminBlockProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'adminblock-default.png',
    codeblock: {
      title: 'Simple AdminBlock implementation',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminBlock/examples/basic-adminblock.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminblock.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'Adminaction',
      url: '/docs/api/admin-extensions/components/other/adminaction',
    },
  ],
};

export default data;
