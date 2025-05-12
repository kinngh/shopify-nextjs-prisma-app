import type {SelectOptionProps as BaseSelectOptionProps} from '@shopify/ui-extensions/checkout';
import {Select as BaseSelect} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type SelectProps = ReactPropsFromRemoteComponentType<typeof BaseSelect>;
export type SelectOptionProps = BaseSelectOptionProps;

export const Select = createRemoteReactComponent(BaseSelect);
