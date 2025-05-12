import type {
  LocalizedField,
  LocalizedFieldKey,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ScopeNotGrantedError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the current localized fields and
 * re-renders your component if the values change.
 */
export function useLocalizedFields<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(keys?: LocalizedFieldKey[]): LocalizedField[] {
  const {localizedFields} = useApi<Target>();

  if (!localizedFields) {
    throw new ScopeNotGrantedError(
      'Using localized fields requires having personal customer data permissions granted to your app.',
    );
  }

  const localizedFieldsData = useSubscription(localizedFields);

  if (!keys) {
    return localizedFieldsData;
  }

  if (!keys.length) {
    return [];
  }

  return localizedFieldsData.filter(({key}) => keys.includes(key));
}

/**
 * Returns the current localized field or undefined for the specified
 * localized field key and re-renders your component if the value changes.
 */
export function useLocalizedField<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(key: LocalizedFieldKey): LocalizedField | undefined {
  const fields = useLocalizedFields<Target>([key]);
  return fields[0];
}
