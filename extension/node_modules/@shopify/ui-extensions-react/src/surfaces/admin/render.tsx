import type {ReactElement} from 'react';

import {extension} from '@shopify/ui-extensions/admin';
import type {
  ExtensionTargets,
  RenderExtensionTarget,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/admin';

import {ExtensionApiContext} from './context';
import {remoteRootRender} from '../../utilities/remoteRootRender';

/**
 * Registers your React-based UI Extension to run for the selected extension point.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useApi()`
 * hook.
 *
 * @param target The extension target you are registering for. This extension
 * target must be a `RenderExtensionTarget`;
 * @param render The function that will be called when Admin begins rendering
 * your extension. This function is called with the API Admin provided to your
 * extension, and must return a React element that will be rendered into the extension
 * point you specified.
 */
export function reactExtension<ExtensionTarget extends RenderExtensionTarget>(
  target: ExtensionTarget,
  render: (
    api: ApiForRenderExtension<ExtensionTarget>,
  ) => Promise<ReactElement<any>> | ReactElement<any>,
): ExtensionTargets[ExtensionTarget] {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // Playground extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extension<'Playground'>(target as any, async (root, api) => {
    if (!target.match(/\.render$/)) {
      throw new Error(
        `reactExtension can only be used for .render extension targets, got: ${target}`,
      );
    }

    const element = await render(api as ApiForRenderExtension<ExtensionTarget>);

    return remoteRootRender(
      <ExtensionApiContext.Provider value={api}>
        {element}
      </ExtensionApiContext.Provider>,
      root,
    );
  }) as any;
}

export {reactExtension as render};
