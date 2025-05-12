import {ToggleButton as BaseToggleButton} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ToggleButtonProps = ReactPropsFromRemoteComponentType<
  typeof BaseToggleButton
>;

export const ToggleButton = createRemoteReactComponent(BaseToggleButton);
