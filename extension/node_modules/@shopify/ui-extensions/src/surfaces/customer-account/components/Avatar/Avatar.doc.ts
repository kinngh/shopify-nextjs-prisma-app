import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Avatar',
  description:
    'Avatar component is used to show a thumbnail representation of an individual or business in the interface. It can be a graphical representation or visual depiction, such as an image, initials, or an icon.',
  thumbnail: 'avatar-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'AvatarProps',
      description: '',
      type: 'AvatarProps',
      filePath: 'components/Avatar/Avatar.ts',
    },
  ],
  category: 'components',
  defaultExample: {
    image: 'avatar-preview.png',
    altText:
      'An example of the avatar with two variants: one with initials and the other with an icon.',
    codeblock: {
      title: 'Basic Avatar',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/customer-account/components/Avatar/examples//basic-Avatar-react.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-Avatar-js.example.ts',
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
- By default, if a user does not provide their first or last name, the avatar component will display a placeholder icon. However, if at least one of the names is provided, the avatar will be replaced with one or two initials representing the user.
- There are 4 sizes for the avatar component:
  * Base (32x32 px): Use by default.
  * Large (39×39 px): Use when the avatar is a focal point, such as a customer details card.
  * Extra-large (47x47 px): Use when placing more emphasis on the avatar
  * Fill to fit: Use when there is a particular size that does not match any of the three sizes provided. If using images please ensure the resolution meets the size requirements.

- Provide alt text for avatars to assist customers using assistive technologies.

**Dos**
- When using multiple avatars on the same page, maintain a consistent style and size to create a unified visual pattern for users.

**Don'ts**
- Don't use different size avatars on the same page.

<img src='/assets/templated-apis-screenshots/customer-account-ui-extensions/unstable/avatar-best-practices.png' alt="An example showing dos and don'ts of the Avatar component" />
`,
    },
  ],
  related: [],
};

export default data;
