import type {
  RenderExtensionTarget,
  PaymentOption,
  SelectedPaymentOption,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns all available payment options.
 */
export function useAvailablePaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): PaymentOption[] {
  const api = useApi<Target>();
  return useSubscription(api.availablePaymentOptions);
}

/**
 * Returns payment options selected by the buyer.
 */
export function useSelectedPaymentOptions<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): SelectedPaymentOption[] {
  const api = useApi<Target>();
  return useSubscription(api.selectedPaymentOptions);
}
