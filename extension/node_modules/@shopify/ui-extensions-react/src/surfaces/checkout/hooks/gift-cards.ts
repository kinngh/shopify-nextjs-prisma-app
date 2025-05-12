import type {
  AppliedGiftCard,
  GiftCardChange,
  GiftCardChangeResult,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current gift cards applied to the cart, and automatically re-renders
 * your component if gift cards are added or removed.
 */
export function useAppliedGiftCards<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): AppliedGiftCard[] {
  const {appliedGiftCards} = useApi<Target>();

  return useSubscription(appliedGiftCards);
}

/**
 * Returns a function to add or remove gift cards.
 *
 * > Caution:
 * > See [security considerations](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access) if your extension retrieves gift card codes through a network call.
 */
export function useApplyGiftCardChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: GiftCardChange) => Promise<GiftCardChangeResult> {
  const api = useApi<Target>();

  if ('applyGiftCardChange' in api) {
    return api.applyGiftCardChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyGiftCardChange',
    api.extension.target,
  );
}
