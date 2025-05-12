import type {
  Market,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the market of the checkout, and automatically re-renders
 * your component if it changes.
 */
export function useLocalizationMarket<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Market | undefined {
  const {localization} = useApi<Target>();

  return useSubscription(localization.market);
}
