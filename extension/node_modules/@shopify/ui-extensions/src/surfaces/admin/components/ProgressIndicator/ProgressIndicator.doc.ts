import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ProgressIndicator',
  description:
    'Use this component to notify merchants that their action is being processed or loaded.',
  requires: '',
  thumbnail: 'progressindicator-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ProgressIndicatorProps',
      description: '',
      type: 'ProgressIndicatorProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'progressindicator-default.png',
    codeblock: {
      title: 'Simple spinner example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ProgressIndicator/examples/basic-progressindicator.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-progressindicator.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Button',
      url: '/docs/api/admin-extensions/components/actions/button',
    },
  ],
};

export default data;
