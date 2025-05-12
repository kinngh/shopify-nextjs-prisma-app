import type {
  CheckoutSettings,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the `checkoutSettings` applied to the checkout.
 */
export function useCheckoutSettings<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CheckoutSettings {
  return useSubscription(useApi<Target>().checkoutSettings);
}
