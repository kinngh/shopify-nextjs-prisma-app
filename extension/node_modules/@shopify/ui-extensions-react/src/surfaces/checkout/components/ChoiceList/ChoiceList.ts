import {ChoiceList as BaseChoiceList} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ChoiceListProps = ReactPropsFromRemoteComponentType<
  typeof BaseChoiceList
>;

export const ChoiceList = createRemoteReactComponent(BaseChoiceList);
