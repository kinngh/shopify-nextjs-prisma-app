import type {
  AppMetafieldEntryTarget,
  Metafield,
  AppMetafieldEntry,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';
import {useMemo} from 'react';

import {
  CustomerAccountUIExtensionError,
  ExtensionHasNoFieldError,
} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

interface AppMetafieldFilters {
  id?: AppMetafieldEntryTarget['id'];
  type?: AppMetafieldEntryTarget['type'];
  namespace?: Metafield['namespace'];
  key?: Metafield['key'];
}

type AppMetafieldFilterKeys = keyof AppMetafieldFilters;

/**
 * Returns the metafields configured with `shopify.ui.extension.toml`.
 * @arg {AppMetafieldFilters} - filter the list of returned metafields
 */
export function useAppMetafields<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(filters: AppMetafieldFilters = {}): AppMetafieldEntry[] {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('appMetafields' in api)) {
    throw new ExtensionHasNoFieldError('appMetafields', extensionTarget);
  }

  const appMetafields = useSubscription(api.appMetafields);

  return useMemo(() => {
    if (filters.key && !filters.namespace) {
      throw new CustomerAccountUIExtensionError(
        'You must pass in a namespace with a key',
      );
    }

    const filterKeys = Object.keys(filters) as AppMetafieldFilterKeys[];

    if (filterKeys.length) {
      return appMetafields.filter((app) => {
        return filterKeys.every((key) => {
          if (key === 'id' || key === 'type') {
            return app.target[key] === filters[key];
          }

          return app.metafield[key] === filters[key];
        });
      });
    }

    return appMetafields;
  }, [filters, appMetafields]);
}
