import {createRemoteComponent} from '@remote-ui/core';

export type BannerVariant = 'confirmation' | 'alert' | 'error' | 'information';

/**
 * @property title - The title text displayed on the banner.
 * @property variant - The variant type of the banner.
 * @property action - The text for the action button.
 * @property onPress - The callback function executed when the banner is pressed.
 * @property hideAction - Whether to hide the action button.
 * @property visible - The visibility state of the banner.
 */
export interface BannerProps {
  /**
   * The title text displayed on the banner.
   */
  title: string;

  /**
   * The variant type of the banner.
   */
  variant: BannerVariant;

  /**
   * The text for the action button.
   * @defaultValue 'Dismiss'
   */
  action?: string;

  /**
   * The callback function executed when the banner is pressed.
   * @defaultValue Callback which dismisses the banner
   */
  onPress?: () => void;

  /**
   * Whether to hide the action button.
   * @defaultValue true
   */
  hideAction?: boolean;

  /**
   * The visibility state of the banner.
   */
  visible: boolean;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
