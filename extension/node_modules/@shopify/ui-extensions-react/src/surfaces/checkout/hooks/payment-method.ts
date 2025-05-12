import type {
  PaymentMethodAttributesResult,
  PaymentMethodAttributesChange,
  PaymentMethodAttribute,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError, ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `paymentAttributes` applied to the checkout.
 */
export function usePaymentMethodAttributes():
  | PaymentMethodAttribute[]
  | undefined {
  const {paymentMethodAttributes} = useApi<
    | 'purchase.checkout.payment-option-item.details.render'
    | 'purchase.checkout.payment-option-item.hosted-fields.render-after'
  >();

  if (!paymentMethodAttributes) {
    throw new ScopeNotGrantedError(
      'Using payment method attributes requires having checkout extension payments scope granted to your app.',
    );
  }

  return useSubscription(paymentMethodAttributes);
}

/**
 * Returns the values for the specified `paymentAttributes` applied to the checkout.
 *
 * @param keys - An array of attribute keys.
 */
export function usePaymentMethodAttributeValues(
  keys: string[],
): (PaymentMethodAttribute['value'] | undefined)[] {
  const attributes = usePaymentMethodAttributes();

  if (!attributes?.length) {
    return [];
  }

  return keys.map((key) => {
    const attribute = attributes.find((attribute) => attribute.key === key);
    return attribute?.value;
  });
}

/**
 * Returns a function to set payment method attributes.
 */
export function useApplyPaymentMethodAttributesChange(): (
  change: PaymentMethodAttributesChange,
) => Promise<PaymentMethodAttributesResult> {
  const api = useApi<
    | 'purchase.checkout.payment-option-item.details.render'
    | 'purchase.checkout.payment-option-item.hosted-fields.render-after'
  >();

  if (!api.applyPaymentMethodAttributesChange) {
    throw new ExtensionHasNoMethodError(
      'useApplyPaymentMethodAttributesChange',
      api.extension.target,
    );
  }

  return api.applyPaymentMethodAttributesChange;
}
