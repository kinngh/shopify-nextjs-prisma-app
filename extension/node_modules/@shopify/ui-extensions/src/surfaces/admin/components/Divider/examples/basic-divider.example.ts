import {
    extension,
    Divider,
  } from '@shopify/ui-extensions/admin';

  export default extension(
    'Playground',
    (root) => {
      const divier = root.createComponent(Divider);
      const firstText = root.createText('First Text');
      const secondText = root.createText('Second Text');

      root.appendChild(firstText);
      root.appendChild(divier);
      root.appendChild(secondText);
    },
  );
