import {createRemoteComponent} from '@remote-ui/core';
import type {RemoteFragment} from '@remote-ui/core';

export interface CustomerAccountActionProps {
  /**
   * Sets the title of the Action container.
   */
  title: string;
  /**
   * Sets the Primary action button of the container. This component must be a button component.
   */
  primaryAction?: RemoteFragment;
  /**
   * Sets the Secondary action button of the container. This component must be a button component.
   */
  secondaryAction?: RemoteFragment;
}

export const CustomerAccountAction = createRemoteComponent<
  'CustomerAccountAction',
  CustomerAccountActionProps
>('CustomerAccountAction');
