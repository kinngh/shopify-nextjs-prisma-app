import {
  NavigationHistoryEntry,
  RenderCustomerAccountFullPageExtensionTarget,
} from '@shopify/ui-extensions/src/surfaces/customer-account';
import {useApi} from './api';
import {useEffect, useReducer} from 'react';

export function useNavigationCurrentEntry<
  Target extends RenderCustomerAccountFullPageExtensionTarget = RenderCustomerAccountFullPageExtensionTarget,
>(): NavigationHistoryEntry {
  const {currentEntry, removeEventListener, addEventListener} =
    useApi<Target>().navigation;

  const [entry, update] = useReducer(() => currentEntry, currentEntry);

  useEffect(() => {
    if (!currentEntry || !removeEventListener || !addEventListener) {
      throw new Error(
        'useNavigationCurrentEntry must be used in an extension with the customer-account.page.render or customer-account.order.page.render target only',
      );
    }
    addEventListener('currententrychange', update);
    return () => removeEventListener('currententrychange', update);
  }, [addEventListener, currentEntry, removeEventListener]);

  return entry;
}
