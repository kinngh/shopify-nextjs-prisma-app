import {createRemoteComponent} from '@remote-ui/core';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

export interface HeadingProps {
  /** A unique identifier for the field. */
  id?: string;

  /**
   * The visual size of the heading.
   *
   * There are no guarantee that the level set will render the same level in the HTML `<h*>` element.
   * The heading level that gets rendered is determined by the parent `HeadingGroup` or `Section` component.
   */
  size?: Level;
}

export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
