import {createRemoteComponent} from '@remote-ui/core';

export interface SelectableProps {
  /**
   * The callback on press.
   */
  onPress: () => void;
  /**
   * Whether the selectable reacts to presses.
   */
  disabled?: boolean;
}

export const Selectable = createRemoteComponent<'Selectable', SelectableProps>(
  'Selectable',
);
