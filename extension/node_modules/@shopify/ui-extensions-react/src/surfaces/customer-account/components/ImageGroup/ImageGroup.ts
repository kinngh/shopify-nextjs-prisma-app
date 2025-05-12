import {ImageGroup as BaseImageGroup} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type ImageGroupProps = ReactPropsFromRemoteComponentType<
  typeof BaseImageGroup
>;

export const ImageGroup = createRemoteReactComponent(BaseImageGroup);
