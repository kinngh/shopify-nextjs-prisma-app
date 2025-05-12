import type {
  CartLine,
  RenderExtensionTarget,
  CartLineChangeResult,
  CartLineChange,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useCartLines<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartLine[] {
  const {lines} = useApi<Target>();

  return useSubscription(lines);
}

/**
 * Returns a function to mutate the `lines` property of checkout.
 */
export function useApplyCartLinesChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: CartLineChange) => Promise<CartLineChangeResult> {
  const api = useApi<Target>();

  if ('applyCartLinesChange' in api) {
    return api.applyCartLinesChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyCartLinesChange',
    api.extension.target,
  );
}
