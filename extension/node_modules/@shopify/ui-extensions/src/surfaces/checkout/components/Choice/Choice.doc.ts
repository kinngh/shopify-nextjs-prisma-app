import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Choice',
  description:
    'Options inside a `ChoiceList`.\n\nThe wrapping `ChoiceList` component will dictate if the choice renders as radio buttons or checkboxes.',
  thumbnail: 'choice-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ChoiceProps',
      description: '',
      type: 'ChoiceProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choice-default.png',
    codeblock: {
      title: 'Basic Choice',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Choice/examples/basic-choice.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-choice.example.ts',
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
        '- Include a title that either tells customers what to do or explains their available options.\n\n- Label options clearly based on what the option will do.\n\n- Avoid options that contradict each other when you’re allowing for multiple selections.',
    },
  ],
  related: [
    {
      name: 'ChoiceList',
      subtitle: 'Component',
      url: 'choicelist',
      type: 'Component',
    },
  ],
};

export default data;
