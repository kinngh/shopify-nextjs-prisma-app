import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'List',
  description:
    'Lists display a set of related content. Each list item usually begins with a bullet or a number.',

  requires: '',
  thumbnail: 'list-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ListProps',
      description: '',
      type: 'ListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Other',
  defaultExample: {
    image: 'list-default.png',
    codeblock: {
      title: 'Basic List',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/List/examples/basic-list.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-list.example.ts',
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
        '- Use lists to break up chunks of related content to make the information easier for customers to scan.\n\n- Phrase list items consistently. Try to start each item with a noun or a verb and be consistent with each item.\n\n- Use bullets for a text-only list of related items that don’t need to be in a specific order.\n\n- Use numbers for a text-only list of related items when you need to communicate order, priority, or sequence.\n\n- Don’t use a marker when only the semantic value of a list matters, such as with a list of links.',
    },
  ],
  related: [
    {
      name: 'ListItem',
      subtitle: 'Component',
      url: 'listItem',
      type: 'Component',
    },
  ],
};

export default data;
