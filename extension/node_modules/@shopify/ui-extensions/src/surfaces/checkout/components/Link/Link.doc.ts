import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Link',
  description:
    'Link makes text interactive so customers can perform an action, such as navigating to another location.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'link-thumbnail.png',
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
      title: 'Basic Link',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Link/examples/basic-link.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-link.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'appearance',
      title: 'Appearance',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"monochrome"</code> | Takes the color of its parent.|',
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- If the link isn’t in a paragraph, then consider using a plain button instead for a larger hit area.\n\n- Use links primarily for navigation and use buttons primarily for actions.\n\n- The HTML that renders for the Button and `Link` components includes style and accessibility information. Use these components intentionally and consistently to provide a more inclusive experience for assistive technology users and a more cohesive visual experience for sighted users.',
    },
  ],
  related: [
    {
      name: 'Button',
      subtitle: 'Component',
      url: 'button',
      type: 'Component',
    },
  ],
};

export default data;
