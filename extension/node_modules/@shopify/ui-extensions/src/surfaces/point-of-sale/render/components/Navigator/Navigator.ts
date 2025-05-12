import {createRemoteComponent} from '@remote-ui/core';

/**
 * @property `initialScreenName` sets the initial `Screen` whose `name` matches.
 */
export interface NavigatorProps {
  /**
   * Sets the initial `Screen` whose `name` matches.
   */
  initialScreenName?: string;
}

export const Navigator = createRemoteComponent<'Navigator', NavigatorProps>(
  'Navigator',
);
