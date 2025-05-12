import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Badge',
  description:
    'Use badges to highlight contextual information, like a label or a status, about an object. An object can be anything that has a status or label attributed to it, like an order or subscription.',
  isVisualComponent: true,
  thumbnail: 'badge-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'BadgeProps',
      description: '',
      type: 'BadgeProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',

  defaultExample: {
    image: 'badge-default.png',
    codeblock: {
      title: 'Basic Badge',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Badge/examples/basic-badge.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-badge.example.ts',
          language: 'js',
        },
      ],
    },
  },
  examples: {
    description: '',
    examples: [
      {
        image: 'badge-status.png',
        codeblock: {
          title: 'Using the Badge component as a status indicator',
          tabs: [
            {
              title: 'React',
              code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Badge/examples/status-badge.example.tsx',
              language: 'tsx',
            },
            {
              title: 'JS',
              code: './examples/status-badge.example.ts',
              language: 'js',
            },
          ],
        },
      },
    ],
  },

  subSections: [
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',

      sectionContent:
        '- Aim for one word per badge.\n\n- For complex states that require 2 words, use sentence case.\n\n- For status badge labels, use an adjective (for example, "Available" or "Complete") or a verb in the past tense (for example, "Delivered" or "Delayed")\n\n- Use the tone prop to indicate the level of importance. `subdued` provides the least emphasis, while `critical` indicates the highest level of urgency.\n\n- Write a useful `accessibilityLabel` so that customers using assistive technology can access the full meaning of the badge in context. For badges with the `critical` tone, include information that conveys the urgency of the badge (for example, "Warning" or "Alert").\n\n- A badge should always be attributed to an object on the page.',
    },
  ],
  related: [],
};

export default data;
