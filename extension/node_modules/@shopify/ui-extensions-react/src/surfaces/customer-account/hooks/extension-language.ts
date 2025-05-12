import type {
  Language,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the buyer's language, as supported by the extension.
 */
export function useExtensionLanguage<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): Language {
  const {localization} = useApi<Target>();

  return useSubscription(localization.extensionLanguage);
}
