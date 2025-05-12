import {Page as BasePage} from '@shopify/ui-extensions/customer-account';
import {
  createRemoteReactComponent,
  ReactPropsFromRemoteComponentType,
} from '@remote-ui/react';

export type PageProps = ReactPropsFromRemoteComponentType<typeof BasePage>;

export const Page = createRemoteReactComponent(BasePage, {
  fragmentProps: ['primaryAction', 'secondaryAction'],
});
