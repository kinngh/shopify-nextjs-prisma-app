import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'AdminAction',
  description:
    'AdminAction is a component used by Admin action extensions to configure a primary and secondary action and title. Use of this component is required in order to use Admin action extensions.',
  requires: '',
  thumbnail: 'adminaction-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AdminActionProps',
      description: '',
      type: 'AdminActionProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'adminaction-default.png',
    codeblock: {
      title: 'Set the primary and secondary action of the Action modal.',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/AdminAction/examples/basic-adminaction.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-adminaction.example.ts',
          language: 'js',
        },
      ],
    },
  },
  related: [
    {
      type: 'component',
      name: 'AdminBlock',
      url: '/docs/api/admin-extensions/components/other/adminblock',
    },
  ],
};

export default data;
