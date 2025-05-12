# `@shopify/ui-extensions-react`

This package contains the public type definitions and utilities needed to create a Shopify UI extension with [React](https://reactjs.org/). This is a generalized package that is intended to be the long-term home of the surface-specific UI extension packages, like [`@shopify/checkout-ui-extensions-react`](https://github.com/Shopify/ui-extensions/tree/main/packages/checkout-ui-extensions-react) and [`@shopify/admin-ui-extensions-react`](https://github.com/Shopify/ui-extensions/tree/main/packages/admin-ui-extensions-react).

> **Is your extension currently using `@shopify/checkout-ui-extensions-react`?** You can learn what you need to do to upgrade to this API versioned package in the [migration guide](../../documentation/upgrade/checkout-ui-extension-api-versioning.md).

Currently, this package only contains the extension APIs for the [`checkout` surface](./src/surfaces/checkout), but other Shopify surfaces will be added here soon.

All extensions, regardless of where they appear in Shopify, make use of the same [underlying technology](../../documentation/how-extensions-work.md), and most of the same “core” components (e.g., `BlockStack`, `Button`, `TextField`, etc) and capabilities (e.g., direct API access, session tokens). Separating APIs by surface makes it easier for a developer to see what is available to them in each context, and gives us a flexible system for introducing components and APIs available in only some areas of Shopify.

A checkout extension using React would be written as follows:

```tsx
import {useState} from 'react';
import {
  reactExtension,
  useApi,
  TextField,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('purchase.checkout.block.render', () => (
  <GiftNote />
));

function GiftNote() {
  const {i18n, metafields, applyMetafieldChange} = useApi();

  const [value, setValue] = useState(() => {
    const metafield = metafields.current.find(
      (metafield) =>
        metafield.namespace === 'custom' && metafield.key === 'gift_note',
    );

    return metafield?.value ?? '';
  });

  return (
    <TextField
      label={i18n.translate('gift_note.label')}
      value={value}
      onChange={(value) => {
        setValue(value);
        applyMetafieldChange({
          namespace: 'custom',
          key: 'gift_note',
          value,
          valueType: 'string',
        });
      }}
    />
  );
}
```
