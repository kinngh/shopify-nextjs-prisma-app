import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/point-of-sale';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionTarget> | null>(null);
