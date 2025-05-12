import type {
  Metafield,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';
import {useMemo} from 'react';

import {
  CustomerAccountUIExtensionError,
  ExtensionHasNoFieldError,
} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

interface MetafieldsFilters {
  namespace: string;
  key?: string;
}

/**
 * Returns the current array of `metafields` applied to the checkout.
 * You can optionally filter the list.
 * @arg {MetafieldsFilters} - filter the list of returned metafields
 */
export function useMetafields<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(filters?: MetafieldsFilters): Metafield[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('metafields' in api)) {
    throw new ExtensionHasNoFieldError('metafields', extensionTarget);
  }

  const metaFields = useSubscription(api.metafields);

  return useMemo(() => {
    if (filters) {
      const {namespace, key} = filters;

      if (!namespace) {
        throw new CustomerAccountUIExtensionError(
          'You must pass in a namespace with a key',
        );
      }

      const filteredResults = metaFields.filter(
        (metafield) =>
          metafield.namespace === namespace && (!key || metafield.key === key),
      );

      return filteredResults;
    }

    return metaFields;
  }, [filters, metaFields]);
}
