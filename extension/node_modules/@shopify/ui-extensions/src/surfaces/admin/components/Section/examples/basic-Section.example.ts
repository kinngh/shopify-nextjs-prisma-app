import {
  extend,
  Section,
} from '@shopify/ui-extensions/admin';

export default extend(
  'Playground',
  (root) => {
    const section = root.createComponent(
      Section,
      {
        heading: 'Section heading',
      },
      'Section content'
    );

    root.appendChild(section);
  },
);
