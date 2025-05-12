import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'InlineStack',
  description:
    'InlineStack is used to lay out a horizontal row of elements. Elements always wrap.',
  isVisualComponent: true,
  thumbnail: 'inlinestack-thumbnail.png',
  requires: '',
  type: '',
  definitions: [
    {
      title: 'InlineStackProps',
      description: '',
      type: 'InlineStackProps',
    },
  ],
  category: 'Components',
  subCategory: 'Structure',
  defaultExample: {
    image: 'inlinestack-default.png',
    codeblock: {
      title: 'Basic InlineStack',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/InlineStack/examples/basic-inlinestack.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-inlinestack.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'accessibility-roles',
      title: 'Accessibility roles',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"main"</code> | Used to indicate the primary content. |\n| <code>"header"</code> | Used to indicate the component is a header. |\n| <code>"footer"</code> | Used to display information such as copyright information, navigation links, and privacy statements. |\n| <code>"section"</code> | Used to indicate a generic section. |\n| <code>"complementary"</code> | Used to designate a supporting section that relates to the main content. |\n| <code>"navigation"</code> | Used to identify major groups of links used for navigating. |\n| <code>"orderedList"</code> | Used to identify a list of ordered items. |\n| <code>"listItem"</code> | Used to identify an item inside a list of items. |\n| <code>"unorderedList"</code> | Used to identify a list of unordered items. |\n| <code>"separator"</code> | Used to indicates the component acts as a divider that separates and distinguishes sections of content. |\n| <code>"status"</code> | Used to define a live region containing advisory information for the user that is not important enough to be an alert. |\n| <code>"alert"</code> | Used for important, and usually time-sensitive, information. |',
    },
  ],
  related: [
    {
      subtitle: 'Utility',
      name: 'StyleHelper',
      url: '/docs/api/checkout-ui-extensions/unstable/components/utilities/stylehelper',
      type: 'utility',
    },
  ],
};

export default data;
