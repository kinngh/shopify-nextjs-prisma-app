import type {DeliveryGroup} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the delivery group the extension is attached to. This hook can only be used by extensions in the following
 * extension targets:
 * - purchase.checkout.shipping-option-list.render-before
 * - purchase.checkout.shipping-option-list.render-after
 *
 * > Caution: Deprecated as of version `2024-07`, use `useDeliveryGroupListTarget()` instead.
 *
 * @deprecated Deprecated as of version `2024-07`, use `useDeliveryGroupListTarget()` instead.
 */
export function useDeliveryGroupTarget(): DeliveryGroup | undefined {
  const api = useApi<
    | 'purchase.checkout.shipping-option-list.render-before'
    | 'purchase.checkout.shipping-option-list.render-after'
  >();

  const target = useSubscription(api.target);
  return target?.deliveryGroups[0];
}
