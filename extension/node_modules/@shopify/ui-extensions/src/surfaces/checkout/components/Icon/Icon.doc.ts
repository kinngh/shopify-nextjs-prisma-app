import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Icon',
  description:
    'Icons are pictograms or graphic symbols. They can act as wayfinding tools or as a means of communicating functionality.',
  thumbnail: 'icon-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'IconProps',
      description: '',
      type: 'IconProps',
    },
  ],
  category: 'Components',
  subCategory: 'Media',
  defaultExample: {
    image: 'icon-default.png',
    codeblock: {
      title: 'Basic Icon',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Icon/examples/basic-icon.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-icon.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'icons',
      title: 'Icons',
      sectionContent:
        '<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/icon-all.png" />',
    },
    {
      type: 'Generic',
      anchorLink: 'appearance',
      title: 'Appearance',
      sectionContent:
        '| Value | Description |\n| --- | --- |\n| <code>"accent"</code> | Conveys emphasis and draws attention to the element. |\n| <code>"interactive"</code> | Conveys that the element is pressable, hoverable or otherwise interactive. |\n| <code>"subdued"</code> | Conveys a subdued or disabled state for the element. |\n| <code>"info"</code> | Conveys that the element is informative or has information. |\n| <code>"success"</code> | Convey a successful interaction. |\n| <code>"warning"</code> | Convey something needs attention or an action needs to be taken. |\n| <code>"critical"</code> | Conveys a problem has arisen. |\n| <code>"monochrome"</code> | Takes the color of its parent.|',
    },
  ],
  related: [],
};

export default data;
