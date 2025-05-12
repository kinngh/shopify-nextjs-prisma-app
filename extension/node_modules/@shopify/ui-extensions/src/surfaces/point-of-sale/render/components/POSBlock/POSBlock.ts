import {createRemoteComponent} from '@remote-ui/core';

/**
 * Renders a `POSBlock`. Note that the text displayed on this `POSBlock`
 * is dependent on the description of the extension. A `POSBlock` only
 * accepts `POSBlockRow` as children.
 */
export interface POSBlockProps {
  /**
   * Sets an optional action button to be displayed on the `POSBlock`.
   */
  action?: {
    /**
     * The title of the action button.
     */
    title: string;
    /**
     * Whether the action button is disabled.
     * @defaultValue false
     */
    disabled?: boolean;
    /**
     * A callback that is called when the action button is pressed.
     */
    onPress: () => void;
  };
}

export const POSBlock = createRemoteComponent<'POSBlock', POSBlockProps>(
  'POSBlock',
);
