import {
  extension,
  ProgressIndicator,
} from '@shopify/ui-extensions/admin';

export default extension(
  'Playground',
  (root) => {
    const progressIndicator = root.createComponent(
      ProgressIndicator,
      {
        size: 'small-200',
      },
    );

    root.appendChild(progressIndicator);
  },
);
