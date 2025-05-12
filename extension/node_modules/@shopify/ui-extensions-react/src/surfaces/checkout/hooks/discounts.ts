import type {
  CartDiscountAllocation,
  CartDiscountCode,
  RenderExtensionTarget,
  DiscountCodeChange,
  DiscountCodeChangeResult,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current discount codes applied to the cart, and automatically re-renders
 * your component if discount codes are added or removed.
 */
export function useDiscountCodes<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartDiscountCode[] {
  const {discountCodes} = useApi<Target>();

  return useSubscription(discountCodes);
}

/**
 * Returns the current discount allocations applied to the cart, and automatically re-renders
 * your component if discount allocations changed.
 */
export function useDiscountAllocations<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CartDiscountAllocation[] {
  const {discountAllocations} = useApi<Target>();

  return useSubscription(discountAllocations);
}

/**
 * Returns a function to add or remove discount codes.
 *
 * > Caution:
 * > See [security considerations](https://shopify.dev/docs/api/checkout-ui-extensions/configuration#network-access) if your extension retrieves discount codes through a network call.
 */
export function useApplyDiscountCodeChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: DiscountCodeChange) => Promise<DiscountCodeChangeResult> {
  const api = useApi<Target>();

  if ('applyDiscountCodeChange' in api) {
    return api.applyDiscountCodeChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyDiscountCodeChange',
    api.extension.target,
  );
}
