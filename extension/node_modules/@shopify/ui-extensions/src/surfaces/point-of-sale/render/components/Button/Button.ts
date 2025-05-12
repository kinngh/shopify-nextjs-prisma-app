import {createRemoteComponent} from '@remote-ui/core';

export type ButtonType = 'primary' | 'basic' | 'destructive' | 'plain';

/**
 * @property `title` the text set on the `Button`.
 * @property `type` the type of `Button` to render. Determines the appearance of the button.
 * @property `onPress` the callback that is executed when the user taps the button.
 * @property `isDisabled` sets whether the `Button` can be tapped.
 * @property `isLoading` sets whether the `Button` is displaying an animated loading state.
 */
export interface ButtonProps {
  /**
   * The text set on the `Button`.
   *
   * Note: When using a Button for menu-item targets, the title will be ignored. The text on the menu-item will be the extension's description.
   */
  title?: string;
  /**
   * The type of `Button` to render. Determines the appearance of the button.
   */
  type?: ButtonType;
  /**
   * The callback that is executed when the user taps the button.
   */
  onPress?: () => void;
  /**
   * Sets whether the `Button` can be tapped.
   */
  isDisabled?: boolean;
  /**
   * Sets whether the `Button` is displaying an animated loading state.
   */
  isLoading?: boolean;
}

export const Button = createRemoteComponent<'Button', ButtonProps>('Button');
