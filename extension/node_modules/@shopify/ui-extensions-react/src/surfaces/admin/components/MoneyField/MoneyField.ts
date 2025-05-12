import {MoneyField as BaseMoneyField} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const MoneyField = createRemoteReactComponent(BaseMoneyField);
export type {MoneyFieldProps} from '@shopify/ui-extensions/admin';
