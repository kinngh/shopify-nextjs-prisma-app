import type {CartLine} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoTargetError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the cart line the extension is attached to. This hook can only be used by extensions in the following
 * extension targets:
 * - `purchase.cart-line-item.line-components.render`
 * - `purchase.checkout.cart-line-item.render-after`
 * - `purchase.thank-you.cart-line-item.render-after`
 */
export function useCartLineTarget(): CartLine {
  const api = useApi<
    | 'purchase.cart-line-item.line-components.render'
    | 'purchase.checkout.cart-line-item.render-after'
    | 'purchase.thank-you.cart-line-item.render-after'
  >();
  if (!api.target) {
    throw new ExtensionHasNoTargetError(
      'useCartLineTarget',
      api.extension.target,
    );
  }

  return useSubscription(api.target);
}
