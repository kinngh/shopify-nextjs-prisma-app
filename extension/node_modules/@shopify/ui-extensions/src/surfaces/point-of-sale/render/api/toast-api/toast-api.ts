export interface ShowToastOptions {
  duration?: number;
}

export interface ToastApiContent {
  /**
   * Show a toast.
   * @param content The text content to display.
   * @param options An object containing ShowToastOptions.
   */
  show: (content: string, options?: ShowToastOptions) => void;
}

export interface ToastApi {
  toast: ToastApiContent;
}
