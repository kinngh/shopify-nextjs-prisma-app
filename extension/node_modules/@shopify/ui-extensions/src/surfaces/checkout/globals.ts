import type {ExtensionTargets} from './targets';

export interface ShopifyGlobal {
  extend<ExtensionTarget extends keyof ExtensionTargets>(
    target: ExtensionTarget,
    extend: ExtensionTargets[ExtensionTarget],
  ): void;
  reload(): void;
}

declare global {
  // conflicts with build/ts/globals.d.ts
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const shopify: ShopifyGlobal;
}
