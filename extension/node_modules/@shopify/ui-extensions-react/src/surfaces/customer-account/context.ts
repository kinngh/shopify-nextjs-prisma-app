import {createContext} from 'react';
import type {
  ApiForRenderExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/customer-account';

export const ExtensionApiContext =
  createContext<ApiForRenderExtension<RenderExtensionTarget> | null>(null);
