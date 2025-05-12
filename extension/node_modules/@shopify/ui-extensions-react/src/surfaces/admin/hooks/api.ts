import {useContext} from 'react';
import {
  RenderExtensionTarget,
  ApiForRenderExtension,
} from '@shopify/ui-extensions/admin';

import {ExtensionApiContext} from '../context';
import {AdminUIExtensionError} from '../errors';

/**
 * Returns the full API object that was passed in to your
 * extension when it was created.
 */
export function useApi<
  ID extends RenderExtensionTarget = RenderExtensionTarget,
>(_target?: ID): ApiForRenderExtension<ID> {
  const api = useContext(ExtensionApiContext);

  if (api == null) {
    throw new AdminUIExtensionError('No extension api found.');
  }

  return api as ApiForRenderExtension<ID>;
}

/**
 * Returns the full API object that was passed in to your
 * extension when it was created.
 * @deprecated you shoud be importing useApi instead
 */
export function useExtensionApi<
  ID extends RenderExtensionTarget = RenderExtensionTarget,
>(): ApiForRenderExtension<ID> {
  return useApi();
}
