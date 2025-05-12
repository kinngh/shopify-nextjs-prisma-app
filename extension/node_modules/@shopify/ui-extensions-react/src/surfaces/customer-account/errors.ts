import {ExtensionTarget} from '@shopify/ui-extensions/customer-account';

export class CustomerAccountUIExtensionError extends Error {
  name = 'CustomerAccountUIExtensionError';
}

export class ScopeNotGrantedError extends Error {
  name = 'ScopeNotGrantedError';
}

export class ExtensionHasNoMethodError extends Error {
  name = 'ExtensionHasNoMethodError';

  constructor(method: string, target: ExtensionTarget) {
    super(
      `Cannot call '${method}()' on target '${target}'. The corresponding property was not found on the API.`,
    );
  }
}

export class ExtensionHasNoFieldError extends Error {
  name = 'ExtensionHasNoFieldrror';

  constructor(field: string, target: ExtensionTarget) {
    super(
      `Cannot access '${field}' on target '${target}'. The corresponding property was not found on the API.`,
    );
  }
}
