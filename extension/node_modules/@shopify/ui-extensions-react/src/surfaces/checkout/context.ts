import {createContext} from 'react';
import type {
  ApiForExtension,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

export const ExtensionApiContext =
  createContext<ApiForExtension<RenderExtensionTarget> | null>(null);
