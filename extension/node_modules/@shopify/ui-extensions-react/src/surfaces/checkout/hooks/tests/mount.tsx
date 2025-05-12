import {createRender} from '@quilted/react-testing';
import type {
  ApiForExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';
import type {StatefulRemoteSubscribable} from '@remote-ui/async-subscription';

import {ExtensionApiContext} from '../../context';

export const mount = createRender<Options, Options>({
  context(options) {
    return options;
  },

  render(element, {extensionApi}) {
    return (
      <ExtensionApiContext.Provider value={extensionApi as any}>
        {element}
      </ExtensionApiContext.Provider>
    );
  },
});

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type PartialExtensionApi = DeepPartial<
  ApiForExtension<RenderExtensionTarget>
>;

interface Options {
  extensionApi?: PartialExtensionApi;
}

export function createMockStatefulRemoteSubscribable<T>(
  value: T,
): StatefulRemoteSubscribable<T> {
  const subscribable: StatefulRemoteSubscribable<T> = {
    get current() {
      return value;
    },
    subscribe: jest.fn(),
    destroy: jest.fn(),
  };

  return subscribable;
}
