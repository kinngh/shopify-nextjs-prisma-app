import {Choice as BaseChoice} from '@shopify/ui-extensions/checkout';
import {createRemoteReactComponent} from '@remote-ui/react';
import type {ReactPropsFromRemoteComponentType} from '@remote-ui/react';

export type ChoiceProps = ReactPropsFromRemoteComponentType<typeof BaseChoice>;

export const Choice = createRemoteReactComponent(BaseChoice, {
  fragmentProps: [
    'details',
    'primaryContent',
    'secondaryContent',
    'tertiaryContent',
  ],
});
