import {createRemoteComponent} from '@remote-ui/core';

import type {IdProps} from '../shared';

export interface ListItemProps extends IdProps {}

/**
 * List items are used as children of the `List` component.
 *
 * They usually begins with a bullet or a number.
 */
export const ListItem = createRemoteComponent<'ListItem', ListItemProps>(
  'ListItem',
);
