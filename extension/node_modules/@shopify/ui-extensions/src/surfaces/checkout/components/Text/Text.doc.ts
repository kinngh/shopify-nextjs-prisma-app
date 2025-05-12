import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Text',
  description:
    'Text is used to visually style and provide semantic value for a small piece of text content.',
  requires: '',
  thumbnail: 'text-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextProps',
      description: '',
      type: 'TextProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'text-default.png',
    codeblock: {
      title: 'Basic Text',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Text/examples/basic-text.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-text.example.ts',
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
        '| Value | Description |\n| --- | --- |\n| <code>"accent"</code> | Conveys emphasis and draws attention to the element. |\n| <code>"subdued"</code> | Conveys a subdued or disabled state for the element. |\n| <code>"info"</code> | Conveys that the element is informative or has information. |\n| <code>"success"</code> | Convey a successful interaction. |\n| <code>"warning"</code> | Convey something needs attention or an action needs to be taken. |\n| <code>"critical"</code> | Conveys a problem has arisen. |',
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use larger text to emphasize content that’s not a heading, such as a price total.\n\n- Create contrast between more and less important text with properties such as `size` and `subdued`.',
    },
  ],
  related: [
    {
      name: 'Heading',
      subtitle: 'Component',
      url: 'heading',
      type: 'Component',
    },
    {
      name: 'HeadingGroup',
      subtitle: 'Component',
      url: 'headinggroup',
      type: 'Component',
    },
    {
      name: 'TextBlock',
      subtitle: 'Component',
      url: 'textblock',
      type: 'Component',
    },
  ],
};

export default data;
