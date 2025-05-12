import {Button as BaseButton} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ButtonProps = ReactPropsFromRemoteComponentType<typeof BaseButton>;

export const Button = createRemoteReactComponent(BaseButton, {
  fragmentProps: ['overlay'],
});
