import {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description:
    'This is an interactive component that directs users to a specified URL. It even supports custom protocols.',
  requires: '',
  thumbnail: 'link-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'LinkProps',
      description: '',
      type: 'LinkProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'link-default.png',
    codeblock: {
      title: 'Link to an app page',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/app-link.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/app-link.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        description: 'Link to an external URL',
        image: 'external-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/external-link.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: './examples/external-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'External Link',
        },
      },
      {
        description: 'Link to a relative URL',
        image: 'relative-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/relative-link.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: './examples/relative-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'Relative Link',
        },
      },
      {
        description: 'Link to a Shopify admin page',
        image: 'shopify-section-link.png',
        codeblock: {
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/Link/examples/shopify-section-link.example.tsx',
              language: 'typescript',
            },
            {
              title: 'JS',
              code: './examples/shopify-section-link.example.ts',
              language: 'typescript',
            },
          ],
          title: 'Shopify Section Link',
        },
      },
    ],
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
