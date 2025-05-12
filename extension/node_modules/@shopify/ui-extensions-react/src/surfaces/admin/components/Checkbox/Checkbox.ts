import {Checkbox as BaseCheckbox} from '@shopify/ui-extensions/admin';
import type {CheckboxProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Checkbox = createRemoteReactComponent<'Checkbox', CheckboxProps>(
  BaseCheckbox,
);
export type {CheckboxProps} from '@shopify/ui-extensions/admin';
