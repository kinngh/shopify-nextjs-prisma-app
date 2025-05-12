import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    "Use this to display a title. It's similar to the h1-h6 tags in HTML",
  requires: '',
  thumbnail: 'heading-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'HeadingProps',
      description: '',
      type: 'HeadingProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'heading-default.png',
    codeblock: {
      title: 'Simple Heading example',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Heading/examples/basic-heading.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-heading.example.ts',
          language: 'js',
        },
      ],
    },
  },

  related: [
    {
      type: 'component',
      name: 'Text',
      url: '/docs/api/admin-extensions/components/titles-and-text/text',
    },
    {
      type: 'component',
      name: 'HeadingGroup',
      url: '/docs/api/admin-extensions/components/titles-and-text/headinggroup',
    },
  ],
};

export default data;
