import {
  ExtensionTarget,
  CartLine,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

class ExtensionHasNoTargetError extends Error {
  name = 'ExtensionHasNoTargetError';

  constructor(target: ExtensionTarget) {
    super(
      `Cannot call 'useTarget()' on target '${target}'. Property 'target' is not found on api.`,
    );
  }
}

/**
 * Returns the cart line the extension is attached to. This hook can only be used by extensions in the
 * `purchase.cart-line-item.line-components.render` and `customer-account.order-status.cart-line-item.render-after`
 * extension targets. Until version `2023-04`, this hook returned a `PresentmentCartLine` object.
 */
export function useTarget(): CartLine {
  const api =
    useApi<'customer-account.order-status.cart-line-item.render-after'>();

  if (!api.target) {
    throw new ExtensionHasNoTargetError(api.extension.target);
  }

  return useSubscription(api.target);
}
