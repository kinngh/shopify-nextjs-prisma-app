import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Stepper',
  description:
    'Use a stepper to increase or decrease a value, like changing the quantity from 1 to 2.',
  requires: '',
  thumbnail: 'stepper-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'StepperProps',
      description: '',
      type: 'StepperProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'stepper-default.png',
    codeblock: {
      title: 'Basic Stepper',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Stepper/examples/basic-stepper.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-stepper.example.ts',
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
        '- Use this component when customers are likely to choose a number within a small range, such as when changing a quantity from one to three.\n\n- If there’s no default number, then consider choosing another component such as a TextField or Select.',
    },
  ],
  related: [],
};

export default data;
