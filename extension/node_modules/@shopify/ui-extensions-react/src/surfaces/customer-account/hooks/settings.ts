import type {
  ExtensionSettings,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the setting values defined by the merchant for the extension.
 */
export function useSettings<
  Settings extends ExtensionSettings,
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Partial<Settings> {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('settings' in api)) {
    throw new ExtensionHasNoFieldError('settings', extensionTarget);
  }

  const settings = useSubscription(api.settings);

  return settings as Settings;
}
