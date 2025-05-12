import {TextArea as BaseTextArea} from '@shopify/ui-extensions/admin';
import type {TextAreaProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const TextArea = createRemoteReactComponent<'TextArea', TextAreaProps>(
  BaseTextArea,
);
export type {TextAreaProps} from '@shopify/ui-extensions/admin';
