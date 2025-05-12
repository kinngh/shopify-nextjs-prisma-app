import type {ReferenceEntityTemplateSchema} from '@shopify/generate-docs';

const data: ReferenceEntityTemplateSchema = {
  name: 'Form',
  description:
    'The form component should be used to wrap one or more form controls. This component provides an "implicit submit" behavior, where customers can submit the form from any input by pressing "Enter" on their keyboards. This behavior is widely expected, and should be respected as often as possible.\n\nUnlike an HTML `form` element, this component does not support configuring the descendant fields to be submitted via HTTP automatically. Instead, you must provide an `onSubmit` callback that will perform the necessary HTTP requests in JavaScript.',
  thumbnail: 'form-thumbnail.png',
  requires: '',
  isVisualComponent: true,
  type: '',
  definitions: [
    {
      title: 'FormProps',
      description: '',
      type: 'FormProps',
    },
  ],
  category: 'Components',
  subCategory: 'Forms',
  defaultExample: {
    image: 'form-default.png',
    codeblock: {
      title: 'Basic Form',
      tabs: [
        {
          title: 'React',
          code: '../../../../../../ui-extensions-react/src/surfaces/checkout/components/Form/examples/basic-form.example.tsx',
          language: 'tsx',
        },
        {
          title: 'JS',
          code: './examples/basic-form.example.ts',
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
        '- Wrap around all form input elements.\n\n- Forms can have only one submit button and it must be at the end of the form.',
    },
  ],
  related: [],
};

export default data;
