import type {ReactElement, PropsWithChildren} from 'react';
import {Component} from 'react';
import {render as remoteRender} from '@remote-ui/react';
import {extension} from '@shopify/ui-extensions/customer-account';
import type {
  ExtensionTargets,
  RenderExtensionTarget,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/customer-account';

import {ExtensionApiContext} from './context';

/**
 * Registers your React-based UI Extension to run for the selected extension target.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useApi()`
 * hook.
 *
 * @param target The extension target you are registering for. You can see a full list
 * of the available targets in our [developer documentation](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#placements).
 *
 * @param render The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension, and must return a React element that will be rendered into the extension
 * target you specified. Alternatively, it can return a promise for a React element,
 * which allows you to perform initial asynchronous work like fetching data from your
 * own backend.
 */
export function reactExtension<Target extends RenderExtensionTarget>(
  target: Target,
  render: (
    api: ApiForRenderExtension<Target>,
  ) => ReactElement<any> | Promise<ReactElement<any>>,
): ExtensionTargets[Target] {
  // TypeScript can’t infer the type of the callback because it’s a big union
  // type. To get around it, we’ll just fake like we are rendering the
  // customer-account.order-status.block.render extension, since all render extensions have the same general
  // shape (`RenderExtension`).
  return extension<'customer-account.order-status.block.render'>(
    target as any,
    async (root, api) => {
      const element = await render(api as ApiForRenderExtension<Target>);

      await new Promise<void>((resolve, reject) => {
        try {
          remoteRender(
            <ExtensionApiContext.Provider value={api}>
              <ErrorBoundary>{element}</ErrorBoundary>
            </ExtensionApiContext.Provider>,
            root,
            () => {
              resolve();
            },
          );
        } catch (error) {
          // Workaround for https://github.com/Shopify/ui-extensions/issues/325
          // eslint-disable-next-line no-console
          console.error(error);
          reject(error);
        }
      });
    },
  ) as any;
}

/**
 * Registers your React-based UI Extension to run for the selected extension target.
 * Additionally, this function will automatically provide the extension API as React
 * context, which you can access anywhere in your extension by using the `useApi()`
 * hook.
 *
 * @param target The extension target you are registering for. You can see a full list
 * of the available targets in our [developer documentation](https://shopify.dev/docs/api/checkout-ui-extensions/extension-targets-overview#placements).
 *
 * @param render The function that will be called when Checkout begins rendering
 * your extension. This function is called with the API checkout provided to your
 * extension, and must return a React element that will be rendered into the extension
 * target you specified. Alternatively, it can return a promise for a React element,
 * which allows you to perform initial asynchronous work like fetching data from your
 * own backend.
 *
 * @deprecated This is deprecated. Use `reactExtension` instead.
 */
export function render<Target extends RenderExtensionTarget>(
  target: Target,
  render: (api: ApiForRenderExtension<Target>) => ReactElement<any>,
): ExtensionTargets[Target] {
  return reactExtension(target, render);
}

interface ErrorState {
  hasError: boolean;
}

// Using ErrorBoundary allows us to relay the errors coming from React reconcilation
// to the global object using reportError.
// eslint-disable-next-line @typescript-eslint/ban-types
class ErrorBoundary extends Component<PropsWithChildren<{}>, ErrorState> {
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return {hasError: true};
  }

  state: ErrorState = {hasError: false};

  componentDidCatch(error: Error, errorInfo: {componentStack: string}) {
    // in development, these errors are logged by React itself so we don’t need to re-log them
    // eslint-disable-next-line no-process-env
    if (process.env.NODE_ENV !== 'development') {
      // eslint-disable-next-line no-console
      console.error(
        `The above error occurred in the <${extractComponentName(
          errorInfo.componentStack,
        )}> component:\n${errorInfo.componentStack}`,
      );
    }
    reportError(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}

// This is an example of component stack:
//
// at Hello (webpack:///./src/index.tsx_+_220_modules?:1082:9)
// at Banner
// at Extension (webpack:///./src/index.tsx_+_220_modules?:1075:7)
// at render_esnext_ErrorBoundary (webpack:///./src/index.tsx_+_220_modules?:1052:124)
export function extractComponentName(componentStack: string) {
  const match = componentStack.match(/^\s+at\s(\w+)\s/);
  return (match && match[1]) ?? 'Unknown';
}
