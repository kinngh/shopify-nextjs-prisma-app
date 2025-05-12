import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

import {getExample} from '../../helper.docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Progress',
  description: 'Use to visually represent the completion of a task or process.',
  requires: '',
  isVisualComponent: true,
  thumbnail: 'progress-thumbnail.png',
  type: '',
  definitions: [
    {
      title: 'ProgressProps',
      description: '',
      type: 'ProgressProps',
    },
  ],
  category: 'Components',
  subCategory: 'Feedback',
  defaultExample: {
    image: 'progress-indeterminate.gif',
    codeblock: {
      title: 'Indeterminate state',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Progress/examples/basic-progress.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-progress.example.ts',
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
Use components like [TextBlock](../titles-and-text/textblock) or [Text](../titles-and-text/text), along with the Progress component, to display text indicating the status of the progress bar.

### Loading states

For loading states, add text to reassure the user that the progress bar is not frozen.

![A progress bar with "Loading" text](/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/progress-loading.png)

### Error states

For error states, add text or a [Banner](./banner) to describe the error and next steps. Use the \`critical\` tone property to convey urgency.

![A progress bar with error text that says "There was a problem with the file upload. Please try again."](/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/progress-error.png)

### Visualize a goal

Use the Progress component to visualize a goal that's valuable to the customer.

Here's an example of using a progress bar to show a customer's progress toward the next rewards tier:

![A progress bar in customer accounts, showing that the customer is on their way to reaching the Botanical maven rewards tier.](/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/progress-goal.png)

Here's an example of using a progress bar to show how much more a customer needs to spend to get free shipping:

![A progress bar at checkout, showing that the customer is $43 away from free shipping.](/assets/templated-apis-screenshots/checkout-ui-extensions/unstable/progress-free-shipping.png)
      `,
    },
  ],
  examples: {
    description: '',
    examples: [
      getExample('ui-components/progress-determinate-state', ['jsx', 'js']),
    ],
  },
  related: [
    {
      name: 'Spinner',
      subtitle: 'Component',
      url: 'spinner',
      type: 'Component',
    },
  ],
};

export default data;
