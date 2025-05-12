import type {
  Order,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the order information that's available post-checkout.
 */
export function useOrder<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Order | undefined {
  const api = useApi<Target>();

  if ('order' in api) {
    return useSubscription(api.order);
  }

  throw new ExtensionHasNoMethodError('order', api.extension.target);
}
