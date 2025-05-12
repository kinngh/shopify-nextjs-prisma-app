interface ExtensionError extends Error {
  level: 'error' | 'warning';
  message: string;
}

export interface BaseOutput {
  errors?: ExtensionError[];
}
