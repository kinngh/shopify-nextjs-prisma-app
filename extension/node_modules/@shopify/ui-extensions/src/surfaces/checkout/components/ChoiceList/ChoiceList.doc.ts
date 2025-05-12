import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'ChoiceList',
  description:
    'Use choice lists to present a list of choices where buyers can make a single selection or multiple selections.',
  thumbnail: 'choicelist-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ChoiceListProps',
      description: '',
      type: 'ChoiceListProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'choicelist-default.png',
    codeblock: {
      title: 'Basic ChoiceList',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/ChoiceList/examples/basic-choicelist.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-choicelist.example.ts',
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
      sectionContent: '',
      sectionSubContent: [
        {
          title: 'Content',
          sectionContent: `- Include a title that either tells customers what to do or explains their available options.\n\n- Label options clearly based on what the option will do.\n\n- Avoid options that contradict each other when you’re allowing for multiple selections.`,
        },
        {
          title: 'Types of choices',
          sectionContent:
            "![A screenshot of two examples for base and group variants](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/choicelist-bp-choicetypes.png)\n- The `base` variant is suitable for straightforward options, such as binary choices like 'yes' or 'no' answers. For simple options that require minimal visual emphasis, the base variant is the recommended choice.\n- The `group` variant provides increased emphasis on choices through the use of colors, borders, and dividers. If the goal is to draw attention to the available options, the group variant is the ideal choice.",
        },
        {
          title: 'Flexibility vs. cohesive experience',
          sectionContent:
            '- The `base` variant offers the flexibility to compose ChoiceLists with custom layouts, allowing for greater design composition possibilities.\n- Given the high level of flexibility offered by the `base` variant, prioritizing accessibility in the implementation is crucial. It is recommended to avoid using buttons or pressable components within the choices.\n- The `group` variant adheres to a defined structure and provides excellent adaptability to align with the merchant’s brand. It is the ideal choice when strong cohesion with the merchant’s branding is required. Additionally, depending on the placement of the `ChoiceList`, Checkout will automatically update its appearance to seamlessly adapt to the surface it is on.',
        },
        {
          title: 'Using details',
          sectionContent:
            '![A screenshot of an example of using details](/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/choicelist-bp-details.png)\n- The `details` area should be used only when additional input is required from the customer, specifically related to the choice they have made.\n- If the `details` area contains lengthy content, consider placing it outside of the `ChoiceList` to ensure that customers can easily digest the information.',
        },
        {
          title: 'Long lists of options',
          sectionContent:
            '- When faced with a considerable number of options, customers may feel overwhelmed, and it can consume valuable interface space. To address this, consider utilizing components like the [Select](/docs/api/checkout-ui-extensions/components/forms/select) component to condense options, or employ the [Disclosure](/docs/api/checkout-ui-extensions/components/interactive/disclosure) component to progressively reveal more choices upon customer request. Strategies such as paging, filtering, and searching can be employed to enhance usability.',
        },
        {
          title: 'Clickable rows',
          sectionContent:
            '- If an entire row needs to be clickable, utilize the `group` variant, as it is specifically designed to enable clickable rows. In this scenario, the base variant may not provide the desired functionality, as only its content elements can be clicked, not the entire row. Attempting to use buttons or pressables to make an entire row clickable could lead to accessibility issues.',
        },
      ],
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/choicelist-survey', ['jsx', 'js']),
      getExample('ui-components/choicelist-details', ['jsx', 'js']),
      getExample('ui-components/choicelist-time-picking', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'Choice',
      subtitle: 'Component',
      url: 'choice',
      type: 'Component',
    },
    {
      name: 'Checkbox',
      subtitle: 'Component',
      url: 'checkbox',
      type: 'Component',
    },
  ],
};

export default data;
