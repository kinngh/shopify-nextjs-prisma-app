import {createRemoteComponent} from '@remote-ui/core';

export interface DividerProps {
  /**
   * Specify the direction of the divider.
   *
   * @defaultValue 'inline'
   * @defaultValue 'inline'
   */
  direction?: 'inline' | 'block';
}

export const Divider = createRemoteComponent<'Divider', DividerProps>(
  'Divider',
);
