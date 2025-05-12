import {ToggleButtonGroup as BaseToggleButtonGroup} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ToggleButtonGroupProps = ReactPropsFromRemoteComponentType<
  typeof BaseToggleButtonGroup
>;

export const ToggleButtonGroup = createRemoteReactComponent(
  BaseToggleButtonGroup,
);
