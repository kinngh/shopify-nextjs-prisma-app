import {Checkbox as BaseCheckbox} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type CheckboxProps = ReactPropsFromRemoteComponentType<
  typeof BaseCheckbox
>;

export const Checkbox = createRemoteReactComponent(BaseCheckbox);
