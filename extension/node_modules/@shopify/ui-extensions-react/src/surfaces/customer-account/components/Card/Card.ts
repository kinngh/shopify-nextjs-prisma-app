import {Card as BaseCard} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type CardProps = ReactPropsFromRemoteComponentType<typeof BaseCard>;

export const Card = createRemoteReactComponent(BaseCard);
