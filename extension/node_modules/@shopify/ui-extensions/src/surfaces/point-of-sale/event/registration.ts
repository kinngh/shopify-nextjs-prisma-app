export interface ExtensionRegistrationFunction<ExtensionPoints> {
  <Target extends keyof ExtensionPoints>(
    target: Target,
    callback: ExtensionPoints[Target],
  ): ExtensionPoints[Target];
}

export function createExtensionRegistrationFunction<
  ExtensionPoints,
>(): ExtensionRegistrationFunction<ExtensionPoints> {
  const extensionWrapper: ExtensionRegistrationFunction<ExtensionPoints> = (
    target,
    callback,
  ) => {
    (globalThis as any).shopify?.extend(target, callback);
    return callback;
  };

  return extensionWrapper;
}
