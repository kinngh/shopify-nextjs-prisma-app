import {Banner as BaseBanner} from '@shopify/ui-extensions/admin';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export const Banner = createRemoteReactComponent(BaseBanner, {
  fragmentProps: ['primaryAction', 'secondaryAction'],
});

export type BannerProps = ReactPropsFromRemoteComponentType<typeof BaseBanner>;
