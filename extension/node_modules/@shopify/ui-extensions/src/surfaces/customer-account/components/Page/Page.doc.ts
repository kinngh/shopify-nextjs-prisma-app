import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Page',
  description:
    'The outer wrapper of the page—including the page title, subtitle, and page-level actions—displayed in a familiar and consistent style that sets expectations about the purpose of the page.',
  thumbnail: 'page-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'PageProps',
      description: '',
      type: 'PageProps',
    },
    {
      title: 'ButtonProps primaryAction',
      description:
        'Supported props for Buttons used inside Page `primaryAction` prop.<br><br>`children` only support text.',
      type: 'Docs_Page_Button_PrimaryAction',
    },
    {
      title: 'ButtonProps secondaryAction',
      description:
        'Supported props for Button used inside Page `secondaryAction` prop.<br><br>`children` are not supported.<br>Use `accessibilityLabel` instead.',
      type: 'Docs_Page_Button_SecondaryAction',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'page-preview.png',
    altText:
      'An example of how the Page component is used to structure the page title, description, order action buttons on the Order status page.',
    codeblock: {
      title: 'Basic Page',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/Page/examples/basic-Page-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Page-js.example.ts',
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
      sectionContent: `
**Title**
- Set clear expectations about the purpose and main topic of the page.
- Aim for 1-3 words.
- Use sentence case.

**Subtitle**
- Use to provide additional context or information that enhances the customer’s understanding of the page.
- Use subtitles sparingly and only when they add useful information that is distinct from the title.

**Buttons**
- Use for page-level actions only.
- If there is a single primary action for the page, display it as a primary button. Display all other page-level actions as secondary buttons.
- See [UX guidelines](/docs/apps/customer-accounts/order-action-menu-extensions/ux-guidelines) to learn more about the button logic for order actions.
`,
    },
  ],
  related: [],
};

export default data;
