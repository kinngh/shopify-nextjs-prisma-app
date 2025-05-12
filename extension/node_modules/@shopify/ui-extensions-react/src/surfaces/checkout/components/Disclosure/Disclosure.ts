import {Disclosure as BaseDisclosure} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type DisclosureProps = ReactPropsFromRemoteComponentType<
  typeof BaseDisclosure
>;

export const Disclosure = createRemoteReactComponent(BaseDisclosure);
