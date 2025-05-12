import type {
  OrderStatusCustomer,
  OrderStatusBuyerIdentity,
  OrderStatusPurchasingCompany,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {ExtensionHasNoFieldError, ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current `Customer`.
 *
 * The value is `undefined` if the buyer isn't a known customer for this shop or if they haven't logged in yet.
 */
export function useCustomer<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): OrderStatusCustomer | undefined {
  const buyerIdentity = useInternalBuyerIdentity<Target>();

  return useSubscription(buyerIdentity.customer);
}

/**
 * Returns the email address of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function useEmail<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): string | undefined {
  const buyerIdentity = useInternalBuyerIdentity<Target>();

  return useSubscription(buyerIdentity.email);
}

/**
 * Returns the phone number of the buyer that is interacting with the cart.
 * The value is `undefined` if the app does not have access to customer data.
 */
export function usePhone<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): string | undefined {
  const buyerIdentity = useInternalBuyerIdentity<Target>();

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
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): OrderStatusPurchasingCompany | undefined {
  const buyerIdentity = useInternalBuyerIdentity<Target>();

  return useSubscription(buyerIdentity.purchasingCompany);
}

function useInternalBuyerIdentity<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): OrderStatusBuyerIdentity {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('buyerIdentity' in api)) {
    throw new ExtensionHasNoFieldError('buyerIdentity', extensionTarget);
  }

  if (!api.buyerIdentity) {
    throw new ScopeNotGrantedError(
      'Using buyer identity requires having personal customer data permissions granted to your app.',
    );
  }

  return api.buyerIdentity;
}
