import {Sheet as BaseSheet} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SheetProps = ReactPropsFromRemoteComponentType<typeof BaseSheet>;

export const Sheet = createRemoteReactComponent(BaseSheet, {
  fragmentProps: ['primaryAction', 'secondaryAction'],
});
