# `@shopify/ui-extensions`

This package contains the public type definitions and utilities needed to create a Shopify UI extension. This is a generalized package that is intended to be the long-term home of the surface-specific UI extension packages, like [`@shopify/checkout-ui-extensions`](https://github.com/Shopify/ui-extensions/tree/main/packages/checkout-ui-extensions) and [`@shopify/admin-ui-extensions`](https://github.com/Shopify/ui-extensions/tree/main/packages/admin-ui-extensions).

> **Is your extension currently using `@shopify/checkout-ui-extensions`?** You can learn what you need to do to upgrade to this API versioned package in the [migration guide](../../documentation/upgrade/checkout-ui-extension-api-versioning.md).

Currently, this package only contains the extension APIs for the [`checkout`](./src/surfaces/checkout) and [`admin`](./src/surfaces/admin) surfaces, but other Shopify surfaces will be added here soon.

All extensions, regardless of where they appear in Shopify, make use of the same [underlying technology](../../documentation/how-extensions-work.md), and most of the same “core” components (e.g., `BlockStack`, `Button`, `TextField`, etc) and capabilities (e.g., direct API access, session tokens). Separating APIs by surface makes it easier for a developer to see what is available to them in each context, and gives us a flexible system for introducing components and APIs available in only some areas of Shopify.

A checkout extension using “vanilla” JavaScript would be written as follows:

```ts
import {extension, TextField} from '@shopify/ui-extensions/checkout';

export default extension(
  'purchase.checkout.block.render',
  (root, {i18n, metafields, applyMetafieldChange}) => {
    const metafield = metafields.current.find(
      (metafield) =>
        metafield.namespace === 'custom' && metafield.key === 'gift_note',
    );

    const textfield = root.createComponent(TextField, {
      label: i18n.translate('gift_note.label'),
      value: metafield?.value ?? '',
      onChange(value) {
        textfield.updateProps({value});

        applyMetafieldChange({
          namespace: 'custom',
          key: 'gift_note',
          value,
          valueType: 'string',
        });
      },
    });

    root.appendChild(textfield);
  },
);
```
