import type {
  CustomerPrivacy,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the current customer privacy settings and metadata and
 * re-renders your component if the customer privacy settings change.
 */
export function useCustomerPrivacy<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CustomerPrivacy {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('customerPrivacy' in api)) {
    throw new ExtensionHasNoFieldError('customerPrivacy', extensionTarget);
  }

  return useSubscription(useApi<Target>().customerPrivacy);
}
