import {createRemoteComponent} from '@remote-ui/core';

export interface PrintPreviewProps {
  /**
   * The source to print.
   *
   * The src must be either:
   * - A relative path that will be appended to your app's [application_url](/docs/apps/build/cli-for-apps/app-configuration#application_url)
   * - A full URL to your app's backend that will be used to return the document
   *
   * Supported document types:
   * - HTML documents (recommended for best printing experience)
   * - Text files
   * - Image files (PNG, JPEG, etc.)
   * - PDF files
   */
  src: string;
}

export const PrintPreview = createRemoteComponent<
  'PrintPreview',
  PrintPreviewProps
>('PrintPreview');
