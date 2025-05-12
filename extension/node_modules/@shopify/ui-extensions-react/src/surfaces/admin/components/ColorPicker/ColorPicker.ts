import {ColorPicker as BaseColorPicker} from '@shopify/ui-extensions/admin';
import type {ColorPickerProps} from '@shopify/ui-extensions/admin';
import {createRemoteReactComponent} from '@remote-ui/react';

export const ColorPicker = createRemoteReactComponent<
  'ColorPicker',
  ColorPickerProps
>(BaseColorPicker);
export type {ColorPickerProps} from '@shopify/ui-extensions/admin';
