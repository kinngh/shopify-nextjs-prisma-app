import type {
  SessionToken,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Provides access to session tokens, which can be used to verify token claims on your app's server.
 */
export function useSessionToken<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): SessionToken {
  return useApi<Target>().sessionToken;
}
