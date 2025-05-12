import {ChoiceList as BaseChoiceList} from '@shopify/ui-extensions/admin';
import type {ChoiceListProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ChoiceList = createRemoteReactComponent<
  'ChoiceList',
  ChoiceListProps
>(BaseChoiceList);
export type {ChoiceListProps} from '@shopify/ui-extensions/admin';
