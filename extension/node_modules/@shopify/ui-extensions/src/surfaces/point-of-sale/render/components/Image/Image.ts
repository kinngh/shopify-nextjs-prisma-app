import {createRemoteComponent} from '@remote-ui/core';

export type ImageSize = 's' | 'm' | 'l' | 'xl';

/**
 * FillResizeMode will apply formatting to the image to fill the container.
 *
 * https://reactnative.dev/docs/image#resizemode
 */
export type FillResizeMode =
  | 'cover'
  | 'contain'
  | 'stretch'
  | 'repeat'
  | 'center';

export interface ImageProps {
  /**
   * The source of the image to be displayed.
   */
  src?: string;

  /**
   * The size or fill size of the image.
   *
   * @default 'l'
   */
  size?: ImageSize | FillResizeMode;
}

export const Image = createRemoteComponent<'Image', ImageProps>('Image');
