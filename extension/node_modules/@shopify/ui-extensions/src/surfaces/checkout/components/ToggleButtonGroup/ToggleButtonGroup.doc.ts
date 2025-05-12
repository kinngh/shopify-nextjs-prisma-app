import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const togglebuttongroupTimePicking = getExample(
  'ui-components/togglebuttongroup-time-picking',
  ['jsx', 'js'],
);

const data: ReferenceEntityTemplateSchema = {
  name: 'ToggleButtonGroup',
  description:
    '`ToggleButtonGroup` allows you to make a single choice out of the number of options provided. This is similar to the [ChoiceList](/docs/api/checkout-ui-extensions/components/forms/choicelist) component, but without controls such as checkbox or radio button.\n\nYou can utilize our layout components to arrange `ToggleButtonGroup`.',
  thumbnail: 'togglebuttongroup-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ToggleButtonGroupProps',
      description: '',
      type: 'ToggleButtonGroupProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'togglebuttongroup-default.png',
    codeblock: {
      title: 'Basic ToggleButtonGroup',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ToggleButtonGroup/examples/basic-togglebuttongroup.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-togglebuttongroup.example.ts',
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
        'ToggleButtonGroup is a component designed for streamlined single-choice selection, without any additional details associated with the selection. If you need to allow multiple selections or present associated details, it is recommended to use [ChoiceList](/docs/api/checkout-ui-extensions/components/forms/choicelist) instead.',
      sectionSubContent: [
        {
          title: 'Label and order',
          sectionContent:
            'Use descriptive and concise labels for each Toggle button, and maintain consistency in the terminology used across options. Arrange the Toggle buttons in a logical order that makes sense to users. Consider factors such as alphabetical order, chronological order, or order of importance, depending on the context.',
        },
        {
          title: 'Number of Toggle buttons',
          sectionContent:
            'Avoid overwhelming users with too many Toggle buttons. Ideally, limit the number of choices to a manageable amount, typically between 2 and 7, to prevent decision fatigue and maintain clarity.',
        },
      ],
    },
  ],
  examples: {
    description: '',
    examples: [togglebuttongroupTimePicking],
  },
  related: [
    {
      name: 'ToggleButton',
      subtitle: 'Component',
      url: 'togglebutton',
      type: 'Component',
    },
  ],
};

export default data;
