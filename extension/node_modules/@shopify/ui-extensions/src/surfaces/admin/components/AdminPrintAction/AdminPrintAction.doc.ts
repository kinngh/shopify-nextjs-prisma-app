import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminPrintAction',
  description:
    'AdminPrintAction is a component used by admin print action extensions to denote a URL to print. Admin print action extensions require the use of this component.',
  requires: '',
  thumbnail: 'adminprintaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AdminPrintActionProps',
      description: '',
      type: 'AdminPrintActionProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'adminprintaction-default.png',
    codeblock: {
      title: 'Set the source URL of the print action extension.',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminPrintAction/examples/basic-adminprintaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminprintaction.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'AdminAction',
      url: '/docs/api/admin-extensions/components/other/adminaction',
    },
    {
      type: 'component',
      name: 'AdminBlock',
      url: '/docs/api/admin-extensions/components/other/adminblock',
    },
  ],
};

export default data;
