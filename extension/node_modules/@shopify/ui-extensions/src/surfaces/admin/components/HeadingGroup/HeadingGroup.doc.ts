import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'HeadingGroup',
  description:
    'This groups headings together, much like the hgroup element in HTML.',
  requires: '',
  thumbnail: 'headinggroup-thumbnail.png',
  isVisualComponent: true,
  type: '',
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'headinggroup-default.png',
    codeblock: {
      title: 'Simple HeadingGroup example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/HeadingGroup/examples/basic-headinggroup.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-headinggroup.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Heading',
      url: '/docs/api/admin-extensions/components/titles-and-text/heading',
    },
  ],
};

export default data;
