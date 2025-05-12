import type {
  CartDiscountAllocation,
  CartDiscountCode,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the current discount codes applied to the cart, and automatically re-renders
 * your component if discount codes are added or removed.
 */
export function useDiscountCodes<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): CartDiscountCode[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('discountCodes' in api)) {
    throw new ExtensionHasNoFieldError('discountCodes', extensionTarget);
  }

  return useSubscription(api.discountCodes);
}

/**
 * Returns the current discount allocations applied to the cart, and automatically re-renders
 * your component if discount allocations changed.
 */
export function useDiscountAllocations<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): CartDiscountAllocation[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('discountAllocations' in api)) {
    throw new ExtensionHasNoFieldError('discountAllocations', extensionTarget);
  }

  return useSubscription(api.discountAllocations);
}
