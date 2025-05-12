import {
  I18n,
  RenderCustomerAccountExtensionTarget,
} from '@shopify/ui-extensions/customer-account';
import {useApi} from './api';

/**
 Returns utilities for translating content and formatting values
    according to the current localization of the user.
 */
export function useI18n<
  Target extends RenderCustomerAccountExtensionTarget = RenderCustomerAccountExtensionTarget,
>(): I18n {
  return useApi<Target>().i18n;
}
