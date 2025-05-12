import {Button as BaseButton} from '@shopify/ui-extensions/admin';
import type {ButtonProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const Button = createRemoteReactComponent<'Button', ButtonProps>(
  BaseButton,
);
export type {ButtonProps} from '@shopify/ui-extensions/admin';
