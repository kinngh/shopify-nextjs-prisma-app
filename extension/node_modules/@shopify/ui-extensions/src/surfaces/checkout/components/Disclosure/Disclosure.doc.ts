import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const disclosureAndAlignment = getExample(
  'ui-components/disclosure-and-alignment',
  ['jsx', 'js'],
);

const data: ReferenceEntityTemplateSchema = {
  name: 'Disclosure',
  description:
    'Disclosure is an optionally controlled component used to put long sections of information under content blocks that users can expand or collapse by pressing an activator. The activator can be specified as children using an action component (`Button`, `Link` or `Pressable`) or a form control (`Checkbox` or `Switch`) component. The content blocks can be specified as children inside a structure component (`View`, `InlineLayout`, `BlockStack`, `Grid`, etc.).\n\nThe library automatically applies the [WAI-ARIA Accordion pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) to both the activator and the toggled content.',
  thumbnail: 'disclosure-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'DisclosureProps',
      description: '',
      type: 'DisclosureProps',
    },
  ],
  category: 'Components',
  subCategory: 'Interactive',
  defaultExample: {
    image: 'disclosure-default.png',
    codeblock: {
      title: 'Basic Disclosure',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Disclosure/examples/basic-disclosure.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-disclosure.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [disclosureAndAlignment],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '- Disclosures should be initiated by the buyer.\n\n- Use disclosures to hide content until they are relevant to the buyer.\n\n- Avoid hiding critical information that buyers need to complete their checkout.\n\n- Keep content inside disclosures concise.\n\n- Avoid nesting of disclosures.\n\n- Keep the activator and the content it toggles in close proximity to each other.',
    },
  ],
  related: [],
};

export default data;
