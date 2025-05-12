import {createRemoteComponent} from '@remote-ui/core';

/** Represents the presentation of a screen in the navigation stack.
 * @property `sheet` displays the screen from the bottom on `navigate` when `true`.
 */
export interface ScreenPresentationProps {
  /**
   * Displays the screen from the bottom on `navigate` when `true`.
   */
  sheet?: boolean;
}

/** Represents the secondary action button of a screen in the navigation stack.
 * @property `text` displays the name of the secondary action in the action bar.
 * @property `onPress` triggered when the secondary action button is pressed.
 * @property `isEnabled` sets whether the action can be tapped.
 */
export interface SecondaryActionProps {
  /**
   * Displays the name of the secondary action in the action bar.
   */
  text: string;
  /**
   * Triggered when the secondary action button is pressed.
   */
  onPress: () => void;
  /**
   * Sets whether the action can be tapped.
   */
  isEnabled?: boolean;
}

/** Represents a screen in the navigation stack.
 * @property `name` used to identify this screen as a destination in the navigation stack.
 * @property `title` the title of the screen which will be displayed on the UI.
 * @property `isLoading` displays a loading indicator when `true`. Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
 * @property `presentation` dictates how the `Screen` will be presented when navigated to.
 * @property `secondaryAction` displays a secondary action button on the screen.
 * @property `onNavigate` triggered when the screen is navigated to.
 * @property `onNavigateBack` triggered when the user navigates back from this screen. Runs after screen is unmounted.
 * @property `overrideNavigateBack` a callback that allows you to override the secondary navigation action. Runs when screen is mounted.
 * @property `onReceiveParams` a callback that gets triggered when the navigation event completes and the screen receives the parameters.
 */
export interface ScreenProps {
  /**
   * Used to identify this screen as a destination in the navigation stack.
   */
  name: string;
  /**
   * The title of the screen which will be displayed on the UI.
   */
  title: string;
  /**
   * Displays a loading indicator when `true`.
   * Set this to `true` when performing an asynchronous task, and then to false when the data becomes available to the UI.
   */
  isLoading?: boolean;
  /**
   * Dictates how the `Screen` will be presented when navigated to.
   */
  presentation?: ScreenPresentationProps;
  /**
   * Displays a secondary action button on the screen.
   */
  secondaryAction?: SecondaryActionProps;
  /**
   * Triggered when the screen is navigated to.
   */
  onNavigate?: () => void;
  /**
   * Triggered when the user navigates back from this screen. Runs after screen is unmounted.
   */
  onNavigateBack?: () => void;
  /**
   * A callback that allows you to override the secondary navigation action. Runs when screen is mounted.
   */
  overrideNavigateBack?: () => void;
  /**
   * A callback that gets triggered when the navigation event completes and the screen receives the parameters.
   */
  onReceiveParams?: (params: any) => void;
}

export const Screen = createRemoteComponent<'Screen', ScreenProps>('Screen');
