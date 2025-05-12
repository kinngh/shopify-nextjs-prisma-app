import type {
  AuthenticationState,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useSubscription} from './subscription';
import {useApi} from './api';

/**
 * Returns authentication state of Order status page.
 */
export function useAuthenticationState<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): AuthenticationState {
  return useSubscription(useApi<Target>().authenticationState);
}
