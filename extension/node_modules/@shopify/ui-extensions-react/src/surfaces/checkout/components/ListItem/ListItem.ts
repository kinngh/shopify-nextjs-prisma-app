import {ListItem as BaseListItem} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ListItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseListItem
>;

export const ListItem = createRemoteReactComponent(BaseListItem);
