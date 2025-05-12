import {List as BaseList} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export const List = createRemoteReactComponent(BaseList, {
  fragmentProps: ['listHeaderComponent'],
});
