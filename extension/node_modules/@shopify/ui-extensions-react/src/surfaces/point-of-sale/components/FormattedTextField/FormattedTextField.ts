import {FormattedTextField as BaseFormattedTextField} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

/**
 * @deprecated Use the `TextField` component instead.
 */
export const FormattedTextField = createRemoteReactComponent(
  BaseFormattedTextField,
);
