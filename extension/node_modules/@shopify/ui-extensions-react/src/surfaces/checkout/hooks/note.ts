import type {
  NoteChange,
  NoteChangeResult,
  RenderExtensionTarget,
} from '@shopify/ui-extensions/checkout';

import {ExtensionHasNoMethodError} from '../errors';

import {useApi} from './api';
import {useSubscription} from './subscription';

/**
 * Returns the proposed `note` applied to the checkout.
 */
export function useNote<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): string | undefined {
  return useSubscription(useApi<Target>().note);
}

/**
 * Returns a function to mutate the `note` property of the checkout.
 */
export function useApplyNoteChange<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): (change: NoteChange) => Promise<NoteChangeResult> {
  const api = useApi<Target>();

  if ('applyNoteChange' in api) {
    return api.applyNoteChange;
  }

  throw new ExtensionHasNoMethodError('applyNoteChange', api.extension.target);
}
