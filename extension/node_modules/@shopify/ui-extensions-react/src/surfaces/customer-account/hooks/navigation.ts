import {
  ApiForExtension,
  RenderCustomerAccountExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

import {useApi} from './api';

export function useNavigation<
  Target extends RenderCustomerAccountExtensionTarget = RenderCustomerAccountExtensionTarget,
>(): ApiForExtension<Target>['navigation'] {
  return useApi<Target>().navigation;
}
