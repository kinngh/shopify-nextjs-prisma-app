import type {
  CartLine,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the current line items for the checkout, and automatically re-renders
 * your component if line items are added, removed, or updated.
 */
export function useCartLines<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): CartLine[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('lines' in api)) {
    throw new ExtensionHasNoFieldError('lines', extensionTarget);
  }

  return useSubscription(api.lines);
}
