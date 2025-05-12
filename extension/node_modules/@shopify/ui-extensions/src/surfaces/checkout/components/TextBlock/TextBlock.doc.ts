import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'TextBlock',
  description:
    'Text block is used to render a block of text that occupies the full width available, like a paragraph.',
  requires: '',
  thumbnail: 'textblock-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TextBlockProps',
      description: '',
      type: 'TextBlockProps',
    },
  ],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'textblock-default.png',
    codeblock: {
      title: 'Basic TextBlock',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/TextBlock/examples/basic-textblock.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-textblock.example.ts',
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
        '- Create contrast between more and less important text with properties such as `size`, `emphasis`, and `appearance`.',
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
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
      type: 'Component',
    },
  ],
};

export default data;
