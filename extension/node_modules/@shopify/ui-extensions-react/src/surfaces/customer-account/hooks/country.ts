import {
  Country,
  RenderOrderStatusExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';
import {ExtensionHasNoFieldError} from '../errors';

/**
 * Returns the country of the checkout, and automatically re-renders
 * your component if the country changes.
 */
export function useLocalizationCountry<
  Target extends RenderOrderStatusExtensionTarget = RenderOrderStatusExtensionTarget,
>(): Country | undefined {
  const api = useApi<Target>();
  const extensionTarget = api.extension.target;

  if (!('country' in api.localization)) {
    throw new ExtensionHasNoFieldError('country', extensionTarget);
  }

  return useSubscription(api.localization.country);
}
