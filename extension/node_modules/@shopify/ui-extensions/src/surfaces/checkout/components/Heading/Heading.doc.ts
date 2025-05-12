import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Heading',
  description:
    'Headings control the visual style of headings. Use headings to introduce major sections, like Contact information, Shipping address, or Shipping method.\n\nUnlike HTML headings, you don’t explicitly specify the position of the heading in the document outline. Nest headings within the heading group component to control the document outline structure used by assistive technologies.',
  thumbnail: 'heading-thumbnail.png',
  requires: '',
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
      title: 'Basic Heading',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Heading/examples/basic-heading.example.tsx',
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
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Add a heading at the top of each section that clearly describe what’s below.\n\n- Use the heading to highlight the most important concepts or pieces of information that customers need to know.',
    },
  ],
  related: [
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
    {
      name: 'TextBlock',
      subtitle: 'Component',
      url: 'textblock',
      type: 'Component',
    },
  ],
};

export default data;
