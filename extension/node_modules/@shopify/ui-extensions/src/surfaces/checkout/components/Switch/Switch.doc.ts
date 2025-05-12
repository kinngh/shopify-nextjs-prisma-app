import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Switch',
  description:
    'Use a switch to represent an on or off state that takes effect immediately when tapped.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'switch-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'SwitchProps',
      description: '',
      type: 'SwitchProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'switch-default.png',
    codeblock: {
      title: 'Basic Switch',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Switch/examples/basic-switch.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-switch.example.ts',
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
- The outcome of a switch should take effect immediately when tapped.
- Use for independent settings, like turning on a stand-alone feature.
- Most of the time no call-to-action should be needed as the switch should take effect immediately, but if the experience needs one, use “done” instead of “submit” or “apply”.

### Content
The label should be a noun. Try explaining the setting out loud to test the name. The name should make sense when you insert it into these statements:

- You can turn [setting_label] on or off in settings.
- [setting_label] is on.
- [setting_label] is off.

### Switch vs checkbox
- If the experience requires multiple connected inputs, like a survey, use a checkbox instead of a switch.
- If the experience requires an error state, like agreeing to terms and conditions, use a checkbox instead of a switch. Both on and off options for a switch should always be valid.
- If you’re unsure, default to a checkbox as it’s the more familiar web pattern.

<img src="/assets/landing-pages/templated-apis/checkout-ui-extensions/ui-components/switch-checkbox-example.png" />
      `,
    },
  ],
  examples: {
    description: '',
    examples: [getExample('ui-components/switch-custom-label', ['jsx', 'js'])],
  },
  related: [
    {
      name: 'Checkbox',
      subtitle: 'Component',
      url: 'checkbox',
      type: 'Component',
    },
  ],
};

export default data;
