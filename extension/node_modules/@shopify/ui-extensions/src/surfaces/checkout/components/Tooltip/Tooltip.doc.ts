import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Tooltip',
  description:
    'Tooltips are floating labels that briefly explain the function of a user interface element. They must be specified inside the `overlay` prop of an activator component. Currently, activator components are `Button`, `Link`, and `Pressable`.\n\nThe library automatically applies the [WAI-ARIA Tooltip Widget pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) to both the activator and the tooltip content. Expect screen readers to read the tooltip content when the user focuses the activator.',
  requires: '',
  thumbnail: 'tooltip-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'TooltipProps',
      description: '',
      type: 'TooltipProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'tooltip-default.png',
    codeblock: {
      title: 'Basic Tooltip',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Tooltip/examples/basic-tooltip.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-tooltip.example.ts',
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
        'Use tooltips if:\n\n- It’s used for showing information only.\n\n- The information contained in it is not needed by someone to complete their checkout.\n\n- The information can be written in a sentence.',
    },
  ],
  related: [],
};

export default data;
