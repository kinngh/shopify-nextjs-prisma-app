import {InternalLocationList as BaseInternalLocationList} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const InternalLocationList = createRemoteReactComponent(
  BaseInternalLocationList,
);
export type {InternalLocationListProps} from '@shopify/ui-extensions/admin';
