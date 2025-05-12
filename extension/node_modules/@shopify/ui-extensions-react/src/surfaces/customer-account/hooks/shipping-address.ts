import type {
  MailingAddress,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {ExtensionHasNoFieldError, ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `shippingAddress` applied to the checkout.
 */
export function useShippingAddress<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): MailingAddress | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('shippingAddress' in api)) {
    throw new ExtensionHasNoFieldError('shippingAddress', extensionTarget);
  }

  const shippingAddress = api.shippingAddress;

  if (!shippingAddress) {
    throw new ScopeNotGrantedError(
      'Using shipping address requires having shipping address permissions granted to your app.',
    );
  }

  return useSubscription(shippingAddress);
}
