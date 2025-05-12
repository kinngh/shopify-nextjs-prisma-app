import {DropZone as BaseDropZone} from '@shopify/ui-extensions/checkout';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';
import {createRemoteReactComponent} from '@remote-ui/react';

export type DropZoneProps = ReactPropsFromRemoteComponentType<
  typeof BaseDropZone
>;

export const DropZone = createRemoteReactComponent(BaseDropZone);
