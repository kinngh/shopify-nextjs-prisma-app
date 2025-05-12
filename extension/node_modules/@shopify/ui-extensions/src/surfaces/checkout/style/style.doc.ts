import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'StyleHelper',
  description:
    'This is a helper for authoring conditional values for property styles.\n\nWrite complex conditional styles based on one or more conditions, such as viewport sizes and interactive states, in a concise and expressive way.',
  requires: '',
  isVisualComponent: false,
  type: '',
  definitions: [
    {
      title: 'StyleHelper',
      description: '',
      type: 'DocsStyle',
    },
  ],
  category: 'Components',
  subCategory: 'utilities',
  defaultExample: {
    codeblock: {
      tabs: [
        {
          title: 'React',
          code: './examples/style.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/style.example.ts',
          language: 'js',
        },
      ],
      title: 'Import the Style helper',
    },
  },
  examples: {
    description: 'This section provides examples of conditions.',
    examples: [
      {
        description:
          'Default styling can be combined with specific conditions. In this example, the Grid’s children will be stacked by default and side by side on viewports above the <code>small</code> breakpoint.',
        codeblock: {
          title: 'Default Style With Conditions',
          tabs: [
            {
              title: 'React',
              code: './examples/defaultstyle.example.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Using simple conditional styling enables you to specify a styling change when a condition is met. In this example, the View’s padding will be <code>loose</code> on hover.',
        codeblock: {
          title: 'Simple Condition',
          tabs: [
            {
              title: 'React',
              code: './examples/simplecondition.example.tsx',
              language: 'tsx',
            },
          ],
        },
      },
      {
        description:
          'Using the `display` property with conditional styles enables you to hide content for certain viewport sizes. In this example, the View will be hidden on small and above screen sizes.',
        codeblock: {
          title: 'Conditionally hiding content',
          tabs: [
            {
              title: 'React',
              code: './examples/hiding.example.tsx',
              language: 'tsx',
            },
          ],
        },
      },
    ],
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'conditions',
      title: 'Conditions',
      sectionContent:
        'The following conditions are supported for conditional styles.\n\nMultiple conditions can be set on the same `when` method.\n\n \n\n| Name | Type | Description |\n| --- | --- | --- |\n| <code>"hover"</code> | <code>true</code> | This condition is met when an element is hovered on with the cursor (mouse pointer). |\n| <code>"focus"</code> | <code>true</code> | This condition is met when an element is clicked, tapped on or selected using the Tab key.|\n| <code>viewportInlineSize</code> | <code>{min: "small" &#124; "medium" &#124; "large"}</code> | This condition is met when the device matches the minimum width.|',
    },
  ],
  related: [
    {
      name: 'BlockLayout',
      subtitle: 'Component',
      url: 'blocklayout',
      type: 'Component',
    },
    {
      name: 'BlockSpacer',
      subtitle: 'Component',
      url: 'blockspacer',
      type: 'Component',
    },
    {
      name: 'BlockStack',
      subtitle: 'Component',
      url: 'blockstack',
      type: 'Component',
    },
    {
      name: 'Grid',
      subtitle: 'Component',
      url: 'grid',
      type: 'Component',
    },
    {
      name: 'GridItem',
      subtitle: 'Component',
      url: 'griditem',
      type: 'Component',
    },
    {
      name: 'Image',
      subtitle: 'Component',
      url: 'image',
      type: 'Component',
    },
    {
      name: 'InlineLayout',
      subtitle: 'Component',
      url: 'inlinelayout',
      type: 'Component',
    },
    {
      name: 'InlineSpacer',
      subtitle: 'Component',
      url: 'inlinespacer',
      type: 'Component',
    },
    {
      name: 'InlineStack',
      subtitle: 'Component',
      url: 'inlinestack',
      type: 'Component',
    },
    {
      name: 'List',
      subtitle: 'Component',
      url: 'list',
      type: 'Component',
    },
    {
      name: 'Pressable',
      subtitle: 'Component',
      url: 'pressable',
      type: 'Component',
    },
    {
      name: 'ScrollView',
      subtitle: 'Component',
      url: 'scrollview',
      type: 'Component',
    },
    {
      name: 'SkeletonImage',
      subtitle: 'Component',
      url: 'skeletonimage',
      type: 'Component',
    },
    {
      name: 'View',
      subtitle: 'Component',
      url: 'view',
      type: 'Component',
    },
  ],
};

export default data;
