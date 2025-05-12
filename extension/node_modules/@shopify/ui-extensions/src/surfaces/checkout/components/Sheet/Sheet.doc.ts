import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Sheet',
  description:
    'The Sheet component displays essential information for customers at the bottom of the screen, appearing above other elements. Use it sparingly to avoid distracting customers during checkout. This component requires access to [Customer Privacy API](/docs/api/checkout-ui-extensions/unstable/configuration#collect-buyer-consent) to be rendered. \n\nThe library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the sheet content.',
  requires:
    'configuration of the [Customer Privacy](/docs/api/checkout-ui-extensions/unstable/configuration#collect-buyer-consent) capability to be rendered.',
  thumbnail: 'sheet-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'SheetProps',
      description: '',
      type: 'SheetProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'sheet-default.png',
    codeblock: {
      title: 'Basic Sheet',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Sheet/examples/basic-sheet.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-sheet.example.ts',
          language: 'js',
        },
      ],
    },
  },
  subSections: [
    {
      type: 'Generic',
      anchorLink: 'shopify-controlled-surfaces',
      title: 'Shopify-controlled surfaces',
      sectionContent:
        'To prevent disruptions during checkout, we maintain strict design control over key areas of the Sheet component. These Shopify-controlled elements include: \n\n<h3>Locations of elements</h3>\n\nThe Sheet elements (header, content, action buttons, and dismiss button) are strategically positioned and sized to present vital information upfront.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces1.png" />\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces2.png" />\n\n<br>\n\n<h3>Padding and spacing</h3>\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces3.png" />\n\n<br>\n\n<h3>Maximum height</h3>\n\nTo balance customer attention and task completion, a maximum height is set for the Sheet component.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces4.png" />\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces5.png" />\n\nWhen content pushes the sheet to exceed this limit, the following UI behaviors are triggered:\n\n<br>\n\n<h3>Heading and content are scrollable</h3>\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces6.png" />\n\n<br>\n\n<h3>Expand pill appears to allow customers to view the entire content</h3>\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces7.png" />\n\n<br>\n\n<h3>Actions slot and dismiss button remain fixed</h3>\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-controlled-surfaces8.png" />',
    },
    {
      type: 'Generic',
      anchorLink: 'privacy-consent-requirements',
      title: 'Privacy consent requirements',
      sectionContent:
        '<h3>Content</h3>\n\nFor the best customer experience, ensure content is brief and to the point.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations1.png" />\n\nVarious strategies can be employed to avoid content scrolling.\n\n<br>\n\n<h4>Use short content</h4>\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations2.png" />\n\n<br>\n\n<h4>Use small text size</h4>\n\n <img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations3.png" />\n\n<br>\n\n<h4>Remove the header</h4>\n\n <img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations4.png" />\n\n<br>\n\n<h3>Actions slot</h3>\n\nThe actions slots allows customers to make decisions and is split into primary and secondary sections.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations5.png" />\n\n<br>\n\n<h3>Primary section</h3>\n\n Contains primary actions for customer decisions on the sheet’s prompt. Up to two buttons are allowed. Keep the button’s content brief so that it doesn’t wrap to more than one line.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations6.png" />\n\n<br>\n\n<h3>Secondary section</h3>\n\nContains action that is unrelated to the sheet’s prompt. Only one button is allowed. A modal can be activated when engaging with the secondary action. Keep the button’s content brief so that it doesn’t wrap to more than one line.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations7.png" />\n\n<br>\n\n<h3>Consent, denial of consent, and sheet dismissal</h3>\n\n <h4>Consent</h4>\n\nWhen a customer expresses consent by pressing the acceptance button, cookies will load and the sheet should not re-appear on refresh.\n\n<br>\n\n<h4>Denial of consent</h4>\n\nWhen a customer expresses denial of consent by pressing the rejection button, cookies will not load and the sheet will not re-appear on refresh.\n\n<br>\n\n<h4>Sheet dismissal</h4>\n\nWhen a customer neither grants nor denies consent by pressing the dismiss button, cookies will not load and the sheet will re-appear on refresh.\n\n<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/sheet-content-recommendations8.png" />',
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/sheet-consent', ['jsx', 'js']),
      getExample('ui-components/sheet-description-preferences', ['jsx', 'js']),
      getExample('ui-components/sheet-icon-button-preferences', ['jsx', 'js']),
      getExample('ui-components/sheet-layout-content', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'Ui',
      subtitle: 'API',
      url: 'ui',
      type: 'API',
    },
  ],
};

export default data;
