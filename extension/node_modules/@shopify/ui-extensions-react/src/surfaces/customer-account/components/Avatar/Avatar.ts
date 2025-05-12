import {Avatar as BaseAvatar} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type AvatarProps = ReactPropsFromRemoteComponentType<typeof BaseAvatar>;

export const Avatar = createRemoteReactComponent(BaseAvatar);
