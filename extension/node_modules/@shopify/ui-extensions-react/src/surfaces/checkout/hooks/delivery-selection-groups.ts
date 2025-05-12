import type {DeliverySelectionGroup} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the list of delivery selection groups available to the buyers. This hook can only be used by extensions in the following
 * extension targets:
 * - purchase.checkout.shipping-option-list.render-before
 * - purchase.checkout.shipping-option-list.render-after
 */
export function useDeliverySelectionGroups():
  | DeliverySelectionGroup[]
  | undefined {
  const api = useApi<
    | 'purchase.checkout.shipping-option-list.render-before'
    | 'purchase.checkout.shipping-option-list.render-after'
  >();

  return useSubscription(api.deliverySelectionGroups);
}
