import {RemoteFragment, createRemoteComponent} from '@remote-ui/core';
import {GlobalProps, Tone} from '../shared';

export interface BannerProps extends GlobalProps {
  /**
   * Message to display inside the banner
   */
  title?: string;
  /**
   * Adjusts the color and icon of the banner
   */
  tone?: Tone;
  /**
   * Whether or not the banner can be dismissed
   */
  dismissible?: boolean;
  /**
   * Function invoked when the banner is dismissed
   */
  onDismiss?: () => void;

  /**
   * Sets the Primary action button of the container. This component must be a button component.
   */
  primaryAction?: RemoteFragment;

  /**
   * Sets the Secondary action button of the container. This component must be a button component.
   */
  secondaryAction?: RemoteFragment;
}

export const Banner = createRemoteComponent<'Banner', BannerProps>('Banner');
