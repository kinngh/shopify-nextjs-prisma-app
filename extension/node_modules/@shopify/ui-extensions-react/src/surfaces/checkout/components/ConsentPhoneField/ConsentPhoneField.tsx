import {ConsentPhoneField as BaseConsentPhoneField} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ConsentPhoneFieldProps = ReactPropsFromRemoteComponentType<
  typeof BaseConsentPhoneField
>;

export const ConsentPhoneField = createRemoteReactComponent(
  BaseConsentPhoneField,
);
