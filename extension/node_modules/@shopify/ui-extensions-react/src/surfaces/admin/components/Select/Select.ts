import {Select as BaseSelect} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Select = createRemoteReactComponent(BaseSelect);
export type {
  SelectProps,
  OptionProps,
  OptionGroupProps,
  OptionDescription,
  OptionGroupDescription,
} from '@shopify/ui-extensions/admin';
