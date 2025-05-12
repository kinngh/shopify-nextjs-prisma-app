# Standard extension target API

This document outlines the API that is provided to every extension target. These properties are part of the second argument to the `extension()` function you use to register a UI extension.

## `locale`

The locale of the checkout in which the extension is running. This value is provided as a string in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag).

## `version`

The UI extension renderer version being used for the extension. Currently, there is only a single version, `'unstable'`.

## `extensionPoint`

The extension target that was run. This can be useful if you register a single function to handle more than one extension target:

```ts
import {extension} from '@shopify/ui-extensions/checkout';

const first = extension('FirstExtensionPoint', handleExtensionPoint);
const second = extension('SecondExtensionPoint', handleExtensionPoint);

export {first, second};

function handleExtensionPoint(input) {
  switch (input.extensionPoint) {
    case 'FirstExtensionPoint': {
      // ...
      break;
    }
    case 'SecondExtensionPoint': {
      // ...
      break;
    }
  }
}
```

## `lineItems`

The `lineItems` property gives you access to the merchandise the buyer is purchasing through checkout. Like other resources in checkout, this value is wrapped in a `StatefulRemoteSubscribable` in order to give your extension a way to subscribe to changes to the line items. These changes can happen when there are stock problems that require the buyer to change the contents of their cart, or when other extensions change the line items through the `applyLineItemChange()` APIs documented below.

```ts
import {extension} from '@shopify/ui-extensions/checkout';

export default extension('ExtensionPoint', (root, {lineItems}) => {
  const text = root.createText(
    `Your line items are: ${JSON.stringify(lineItems.current)}`,
  );
  root.appendChild(text);

  lineItems.subscribe((newLineItems) => {
    text.updateText(`Your new line items are: ${JSON.stringify(newLineItems)}`);
  });
});
```

## `ui`

The `ui` property offers a set of methods to interact with the extension's UI.

```ts
import {
  extension,
  Button,
  Link,
  Modal,
  TextBlock,
} from '@shopify/ui-extensions/checkout';

export default extension('ExtensionPoint', (root, {ui}) => {
  const modalFragment = root.createFragment();
  const modal = root.createComponent(
    Modal,
    {id: 'my-modal', title: 'Return policy', padding: true},
    [
      root.createComponent(
        TextBlock,
        undefined,
        'We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.',
      ),
      root.createComponent(
        Button,
        {
          onPress() {
            ui.overlay.close('my-modal');
          },
        },
        'Close',
      ),
    ],
  );
  modalFragment.appendChild(modal);
  const link = root.createComponent(
    Link,
    {overlay: modalFragment},
    'Return policy',
  );

  root.appendChild(link);
});
```
