import {
  Currency,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the currency of the checkout, and automatically re-renders
 * your component if the currency changes.
 */
export function useCurrency<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Currency {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('currency' in api.localization)) {
    throw new ExtensionHasNoFieldError('currency', extensionTarget);
  }

  return useSubscription(api.localization.currency);
}
