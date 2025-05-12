import type {
  Country,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the country of the checkout, and automatically re-renders
 * your component if the country changes.
 */
export function useLocalizationCountry<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Country | undefined {
  const {localization} = useApi<Target>();

  return useSubscription(localization.country);
}
