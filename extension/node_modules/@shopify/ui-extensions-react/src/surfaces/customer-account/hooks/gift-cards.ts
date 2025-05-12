import type {
  AppliedGiftCard,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the current gift cards applied to the cart, and automatically re-renders
 * your component if gift cards are added or removed.
 */
export function useAppliedGiftCards<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): AppliedGiftCard[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('appliedGiftCards' in api)) {
    throw new ExtensionHasNoFieldError('appliedGiftCards', extensionTarget);
  }

  return useSubscription(api.appliedGiftCards);
}
