import type {
  ShippingAddress,
  RenderExtensionTarget,
  ShippingAddressChange,
  ShippingAddressChangeResult,
} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError, ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): ShippingAddress | undefined {
  const shippingAddress = useApi<Target>().shippingAddress;

  if (!shippingAddress) {
    throw new ScopeNotGrantedError(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  }

  return useSubscription(shippingAddress);
}

/**
 * Returns a function to mutate the `shippingAddress` property of checkout.
 */
export function useApplyShippingAddressChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>():
  | ((change: ShippingAddressChange) => Promise<ShippingAddressChangeResult>)
  | undefined {
  const api = useApi<Target>();

  if ('applyShippingAddressChange' in api) {
    return api.applyShippingAddressChange;
  }

  throw new ExtensionHasNoMethodError(
    'applyShippingAddressChange',
    api.extension.target,
  );
}
