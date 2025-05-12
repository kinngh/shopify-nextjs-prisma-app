import {createRemoteComponent} from '@remote-ui/core';

/** Allows the implementation of an action at the top right of a `Section`.
 * @property `title` the title describing the action.
 * @property `onPress` the callback when the action is tapped by the user.
 */
export interface SectionHeaderAction {
  /**
   * The title describing the action.
   */
  title: string;
  /**
   * The callback when the action is tapped by the user.
   */
  onPress: () => void;
}

/** Renders content that is bound by a border, with a title and a call to action at the top.
 * @property `title` the title of the section.
 * @property `action` the action in the top right of the section that can be triggered by a tap.
 */
export interface SectionProps {
  /**
   * The title of the section.
   */
  title?: string;
  /**
   * The action in the top right of the section that can be triggered by a tap.
   */
  action?: SectionHeaderAction;
}

export const Section = createRemoteComponent<'Section', SectionProps>(
  'Section',
);
