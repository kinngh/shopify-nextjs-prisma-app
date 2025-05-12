import type {
  MailingAddress,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `billingAddress` applied to the checkout.
 */
export function useBillingAddress<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): MailingAddress | undefined {
  const billingAddress = useApi<Target>().billingAddress;

  if (!billingAddress) {
    throw new ScopeNotGrantedError(
      'Using billing address requires having billing address permissions granted to your app.',
    );
  }

  return useSubscription(billingAddress);
}
