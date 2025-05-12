import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Button',
  description:
    'Buttons are used for actions, such as “Add”, “Continue”, “Pay now”, or “Save”.',
  thumbnail: 'button-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ButtonProps',
      description: '',
      type: 'ButtonProps',
    },
  ],
  category: 'Components',
  subCategory: 'Actions',
  defaultExample: {
    image: 'button-default.png',
    codeblock: {
      title: 'Basic Button',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Button/examples/basic-button.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-button.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'appearance',
      title: 'Appearance',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"critical"</code> | Conveys a problem has arisen. |\n| <code>"monochrome"</code> | Takes the color of its parent.|',
    },
    {
      type: 'Generic',
      anchorLink: 'best-practices',
      title: 'Best Practices',
      sectionContent:
        '**Content Best Practices**\n\n- Clearly label each button to accurately represent the action associated with it.\n\n- Use strong actionable verbs at the beginning of button text to make it clear to the user what action will occur when the button is clicked.\n\n**Hierarchy Best Practices**\n\n- Establish a visual hierarchy between buttons to minimize confusion and help users understand which actions are most important.\n\n- Use only one high-emphasis button (primary button) per context to make it clear that other buttons have less importance.\n\n- Use lower-emphasis buttons for secondary calls to action.\n\n- Use primary buttons for actions that progress users through checkout such as “Pay now” or for concluding an action in a modal such as “Apply”.\n\n- Use secondary buttons to provide alternative actions to the primary button, without disrupting the primary flow such as “Track your order”.\n\n- Use plain buttons for least prominent, non-critical actions such as “Login to your account”.\n\n**When to Use Buttons**\n\n- Use buttons to communicate actions the user can take.\n\n- Use buttons to allow users to interact with the page.\n\n**When Not to Use Buttons**\n\n- Don’t use buttons as navigational elements. Use links instead when the desired action is to take the user to a new page.',
    },
  ],
  related: [
    {
      name: 'Link',
      subtitle: 'Component',
      url: 'link',
      type: 'Component',
    },
  ],
};

export default data;
