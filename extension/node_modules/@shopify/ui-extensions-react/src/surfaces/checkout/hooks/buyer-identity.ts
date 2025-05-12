import type {
  Customer,
  PurchasingCompany,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current `Customer`.
 *
 * The value is `undefined` if the buyer isn't a known customer for this shop or if they haven't logged in yet.
 */
export function useCustomer<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Customer | undefined {
  const buyerIdentity = useApi<Target>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.customer);
}

/**
 * Returns the email address of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function useEmail<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): string | undefined {
  const buyerIdentity = useApi<Target>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.email);
}

/**
 * Returns the phone number of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function usePhone<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): string | undefined {
  const buyerIdentity = useApi<Target>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.phone);
}

/**
 * Provides information about the company and its location that the business customer
 * is purchasing on behalf of during a B2B checkout. It includes details that can be utilized to
 * identify both the company and its corresponding location to which the business customer belongs.
 *
 * The value is `undefined` if a business customer isn't logged in. This function throws an error if the app doesn't have access to customer data.
 */
export function usePurchasingCompany<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): PurchasingCompany | undefined {
  const buyerIdentity = useApi<Target>().buyerIdentity;

  if (!buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return useSubscription(buyerIdentity.purchasingCompany);
}
