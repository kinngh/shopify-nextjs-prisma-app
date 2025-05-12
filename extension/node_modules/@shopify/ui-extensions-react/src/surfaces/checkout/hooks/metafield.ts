import type {Metafield} from '@shopify/ui-extensions/checkout';

import {CheckoutUIExtensionError} from '../errors';

import {useMetafields} from './metafields';

interface MetafieldFilter {
  namespace: string;
  key: string;
}

/**
 * Returns a single filtered `Metafield` or `undefined`.
 * @arg {MetafieldFilter} - filter the list of returned metafields to a single metafield
 */
export function useMetafield(filters: MetafieldFilter): Metafield | undefined {
  const {namespace, key} = filters;

  if (!namespace || !key) {
    throw new CheckoutUIExtensionError(
      'You must pass in both a namespace and key',
    );
  }

  const metafields = useMetafields({namespace, key});

  return metafields.length ? metafields[0] : undefined;
}
