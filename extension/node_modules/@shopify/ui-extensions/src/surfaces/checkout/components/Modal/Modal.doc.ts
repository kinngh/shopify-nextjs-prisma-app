import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Modal',
  description:
    'Modals are a special type of overlay that shift focus towards a specific action/set of information before the main flow can proceed. They must be specified inside the `overlay` prop of an activator component (`Button`, `Link` or `Pressable`).\n\nThe library automatically applies the [WAI-ARIA Dialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/) to both the activator and the modal content.',
  requires: '',
  thumbnail: 'modal-thumbnail.png',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'ModalProps',
      description: '',
      type: 'ModalProps',
    },
  ],
  category: 'Components',
  subCategory: 'Overlays',
  defaultExample: {
    image: 'modal-default.png',
    codeblock: {
      title: 'Basic Modal',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Modal/examples/basic-modal.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-modal.example.ts',
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
        'Use modals if:\n\n- The information needed to be shown is not critical in completing the checkout process and information cannot be condensed into one sentence.\n\n- The information the buyer is entering requires less than two rows of input fields.\n\n- The information the buyer is entering is not reliant on information on the page (which is underneath the modal and not visible to them).',
    },
  ],
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
