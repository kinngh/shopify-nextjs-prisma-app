import type {
  Money,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * A `Money` value representing the subtotal value of the items in the cart at the current
 * step of checkout.
 */
export function useSubtotalAmount<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Money {
  return useSubscription(useApi<Target>().cost.subtotalAmount);
}

/**
 * A `Money` value representing the total shipping a buyer can expect to pay at the current
 * step of checkout. This value includes shipping discounts. Returns undefined if shipping
 * has not been negotiated yet, such as on the information step.
 */
export function useTotalShippingAmount<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Money | undefined {
  return useSubscription(useApi<Target>().cost.totalShippingAmount);
}

/**
 * A `Money` value representing the total tax a buyer can expect to pay at the current
 * step of checkout or the total tax included in product and shipping prices. Returns
 * undefined if taxes are unavailable.
 */
export function useTotalTaxAmount<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Money | undefined {
  return useSubscription(useApi<Target>().cost.totalTaxAmount);
}

/**
 * Returns a `Money` value representing the minimum a buyer can expect to pay at the current
 * step of checkout. This value excludes amounts yet to be negotiated. For example,
 * the information step might not have delivery costs calculated.
 */
export function useTotalAmount<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Money {
  return useSubscription(useApi<Target>().cost.totalAmount);
}
