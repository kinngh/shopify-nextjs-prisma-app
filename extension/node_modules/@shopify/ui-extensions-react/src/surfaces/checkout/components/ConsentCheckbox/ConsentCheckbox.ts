import {ConsentCheckbox as BaseConsentCheckbox} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ConsentCheckboxProps = ReactPropsFromRemoteComponentType<
  typeof BaseConsentCheckbox
>;

export const ConsentCheckbox = createRemoteReactComponent(BaseConsentCheckbox);
