import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'HeadingGroup',
  description:
    'Heading group controls the heading level of headings nested within it, like H1, H2, H3.\n\nUse a heading group whenever you use a heading to ensure the experience is the same for screen reader users. When using a heading, any children related to that heading should be nested within the same heading group.',
  thumbnail: 'headinggroup-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [],
  category: 'Components',
  subCategory: 'Titles and text',
  defaultExample: {
    image: 'headinggroup-default.png',
    codeblock: {
      title: 'Basic HeadingGroup',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/HeadingGroup/examples/basic-headinggroup.example.tsx',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Use this component to create a content hierarchy within the document outline.',
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
      name: 'Text',
      subtitle: 'Component',
      url: 'text',
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
