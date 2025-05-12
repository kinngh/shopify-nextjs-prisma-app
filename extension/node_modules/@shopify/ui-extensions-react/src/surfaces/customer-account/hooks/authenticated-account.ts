import type {
  Customer,
  PurchasingCompany,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current authenticated `Customer`.
 *
 * The value is `undefined` if the customer isn't authenticated.
 */
export function useAuthenticatedAccountCustomer<
  Target extends RenderExtensionTarget,
>(): Customer | undefined {
  const account = useApi<Target>().authenticatedAccount;

  return useSubscription(account.customer);
}

/**
 * Provides information about the company of the authenticated business customer.
 * The value is `undefined` if a business customer isn't authenticated.
 */
export function useAuthenticatedAccountPurchasingCompany<
  Target extends RenderExtensionTarget,
>(): PurchasingCompany | undefined {
  const account = useApi<Target>().authenticatedAccount;

  return useSubscription(account.purchasingCompany);
}
