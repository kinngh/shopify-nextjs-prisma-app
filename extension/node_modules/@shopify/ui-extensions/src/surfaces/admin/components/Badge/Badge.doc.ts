import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Use this component to inform merchants of the status of an object or of an action that’s been taken.',
  requires: '',
  thumbnail: 'badge-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'BadgeProps',
      description: '',
      type: 'BadgeProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Simple Badge example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Badge/examples/basic-badge.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-badge.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [],
};

export default data;
