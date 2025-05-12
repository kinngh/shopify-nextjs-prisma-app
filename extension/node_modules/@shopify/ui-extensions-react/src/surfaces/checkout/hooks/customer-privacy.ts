import type {
  CustomerPrivacy,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current customer privacy settings and metadata and
 * re-renders your component if the customer privacy settings change.
 */
export function useCustomerPrivacy<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): CustomerPrivacy {
  return useSubscription(useApi<Target>().customerPrivacy);
}
