import type {
  MailingAddress,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {ExtensionHasNoFieldError, ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns 'billingAddress' specified in the order.
 */
export function useBillingAddress<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): MailingAddress | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('billingAddress' in api)) {
    throw new ExtensionHasNoFieldError('billingAddress', extensionTarget);
  }

  const billingAddress = api.billingAddress;

  if (!billingAddress) {
    throw new ScopeNotGrantedError(
      'Using billing address requires having billing address permissions granted to your app.',
    );
  }

  return useSubscription(billingAddress);
}
