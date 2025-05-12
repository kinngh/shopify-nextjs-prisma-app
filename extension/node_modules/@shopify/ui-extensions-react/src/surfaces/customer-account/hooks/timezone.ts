import {
  RenderOrderStatusExtensionTarget,
  Timezone,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the time zone of the checkout, and automatically re-renders
 * your component if the time zone changes.
 */
export function useTimezone<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Timezone {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('timezone' in api.localization)) {
    throw new ExtensionHasNoFieldError('timezone', extensionTarget);
  }

  return useSubscription(api.localization.timezone);
}
