import {extension, Chat} from '@shopify/ui-extensions/checkout';

// This component requires the configuration of the `extensions.targeting.preloads.chat` in the extensions configuration file.
// Its value will be used as the `src` attribute of the Chat component.

export default extension('purchase.checkout.chat.render', (root) => {
  const chat = root.createComponent(Chat, {
    inlineSize: 100,
    blockSize: 50,
  });

  root.appendChild(chat);
});
