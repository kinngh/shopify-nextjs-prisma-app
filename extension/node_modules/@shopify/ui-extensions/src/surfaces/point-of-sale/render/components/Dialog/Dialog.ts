import {createRemoteComponent} from '@remote-ui/core';

export type DialogType = 'default' | 'alert' | 'error' | 'destructive';

/**
 * @property title - The text displayed in the title of the dialog.
 * @property content - The text displayed in the body of the dialog.
 * @property actionText - The text displayed in the primary action button of the dialog.
 * @property secondaryActionText - The text displayed in the secondary action section of the dialog.
 * @property showSecondaryAction - Whether a secondary action displays.
 * @property type - Determines the dialog’s appearance and function.
 * @property onAction - A callback that performs when the action is triggered.
 * @property onSecondaryAction - A callback that is executed when the secondary action is triggered.
 * @property isVisible - Whether the dialog should be presented.
 */
export interface DialogProps {
  /**
   * The text displayed in the title of the dialog.
   */
  title: string;

  /**
   * The text displayed in the body of the dialog.
   */
  content?: string;

  /**
   * The text displayed in the primary action button of the dialog.
   */
  actionText: string;

  /**
   * The text displayed in the secondary action section of the dialog.
   */
  secondaryActionText?: string;

  /**
   * Whether a secondary action displays.
   */
  showSecondaryAction?: boolean;

  /**
   * Determines the dialog’s appearance and function.
   */
  type?: DialogType;

  /**
   * A callback that performs when the action is triggered.
   */
  onAction: () => void;

  /**
   * A callback that is executed when the secondary action is triggered.
   */
  onSecondaryAction?: () => void;

  /**
   * Whether the dialog should be presented.
   */
  isVisible: boolean;
}

export const Dialog = createRemoteComponent<'Dialog', DialogProps>('Dialog');
