import type {
  RenderExtensionTarget,
  Storage,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

/**
 * Returns the key-value `Storage` interface for the extension target.
 */
export function useStorage<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Storage {
  return useApi<Target>().storage;
}
