import type {Extension} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the metadata about the extension.
 */
export function useExtension(): Extension {
  return useApi().extension as Extension;
}

/**
 * Returns the metadata about the extension.
 * > Caution: This is deprecated, use `useExtension()` instead.
 * @deprecated Use `useExtension()` instead.
 */
export function useExtensionData(): Extension {
  return useExtension();
}
