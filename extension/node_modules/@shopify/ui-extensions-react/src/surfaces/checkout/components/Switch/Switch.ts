import {Switch as BaseSwitch} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SwitchProps = ReactPropsFromRemoteComponentType<typeof BaseSwitch>;

export const Switch = createRemoteReactComponent(BaseSwitch);
