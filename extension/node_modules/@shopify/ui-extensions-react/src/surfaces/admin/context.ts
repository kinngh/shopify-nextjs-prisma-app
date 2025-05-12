import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/admin';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionTarget> | null>(null);
