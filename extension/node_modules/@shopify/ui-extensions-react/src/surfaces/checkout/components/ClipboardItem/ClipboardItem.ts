import {ClipboardItem as BaseClipboardItem} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ClipboardItemProps = ReactPropsFromRemoteComponentType<
  typeof BaseClipboardItem
>;

export const ClipboardItem = createRemoteReactComponent(BaseClipboardItem);
