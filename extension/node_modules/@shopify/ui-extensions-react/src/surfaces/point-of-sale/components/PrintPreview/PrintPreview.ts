import {
  PrintPreview as BasePrintPreview,
  PrintPreviewProps,
} from '@shopify/ui-extensions/point-of-sale';
import {createRemoteReactComponent} from '@remote-ui/react';

export const PrintPreview = createRemoteReactComponent<
  typeof BasePrintPreview,
  PrintPreviewProps
>(BasePrintPreview);
