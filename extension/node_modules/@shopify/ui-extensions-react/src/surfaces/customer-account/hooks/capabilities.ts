import type {Capability} from '@shopify/ui-extensions/customer-account';

import {useSubscription} from './subscription';
import {useApi} from './api';

/**
 * Returns a list of an extension's granted capabilities.
 */
export function useExtensionCapabilities(): Capability[] {
  return useSubscription(useApi().extension.capabilities);
}

/**
 * Returns whether or not a given capability of an extension is granted.
 */
export function useExtensionCapability(capability: Capability): boolean {
  return useExtensionCapabilities().includes(capability);
}
