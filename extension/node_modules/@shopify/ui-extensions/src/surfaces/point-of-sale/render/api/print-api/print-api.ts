/**
 * Access the print API for printing functionality
 */
export interface PrintApiContent {
  /**
   * Trigger a print dialog.
   *
   * The src must be either:
   * - A relative path that will be appended to your app's [application_url](/docs/apps/build/cli-for-apps/app-configuration#application_url)
   * - A full URL to your app's backend that will be used to return the document to print
   *
   * Supported document types:
   * - HTML documents (recommended for best printing experience)
   * - Text files
   * - Image files (PNG, JPEG, etc.)
   * - PDF files (Note: On Android devices, PDFs will be downloaded and must be printed using an external application)
   *
   * @param src the source URL of the content to print.
   * @returns Promise<void> that resolves when content is ready and native print dialog appears.
   */
  print(src: string): Promise<void>;
}

/**
 * Interface for printing
 */
export interface PrintApi {
  print: PrintApiContent;
}
