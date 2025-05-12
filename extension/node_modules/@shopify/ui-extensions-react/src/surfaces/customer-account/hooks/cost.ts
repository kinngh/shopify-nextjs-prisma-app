import type {
  Money,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns a `Money` value representing the minimum a buyer can expect to pay at the current
 * step of checkout. This value excludes amounts yet to be negotiated. For example,
 * the information step might not have delivery costs calculated.
 */
export function useTotalAmount<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Money {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('cost' in api)) {
    throw new ExtensionHasNoFieldError('cost', extensionTarget);
  }

  return useSubscription(api.cost.totalAmount);
}
