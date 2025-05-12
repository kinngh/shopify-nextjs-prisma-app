import {createRemoteComponent} from '@remote-ui/core';

/**
 * Renders a `POSBlockRow` in a `POSBlock`.
 */
export interface POSBlockRowProps {
  /**
   * A callback for when the row is tapped.
   */
  onPress?: () => void;
}

export const POSBlockRow = createRemoteComponent<
  'POSBlockRow',
  POSBlockRowProps
>('POSBlockRow');
