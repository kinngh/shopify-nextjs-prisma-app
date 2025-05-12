import {isValidElement, cloneElement, useCallback} from 'react';
import type {
  RenderExtensionTarget,
  I18nTranslate,
} from '@shopify/ui-extensions/checkout';

import {useApi} from './api';

/**
 * Returns the `I18nTranslate` interface used to translate strings.
 */
export function useTranslate<
  Target extends RenderExtensionTarget = RenderExtensionTarget,
>(): I18nTranslate {
  const {i18n} = useApi<Target>();

  const translate = useCallback<I18nTranslate>(
    (...args) => {
      const translation = i18n.translate(...args);

      if (!Array.isArray(translation)) {
        return translation as any;
      }

      return translation.map((part, index) => {
        if (isValidElement(part)) {
          // eslint-disable-next-line react/no-array-index-key
          return cloneElement(part, {key: index});
        }
        return part;
      });
    },
    [i18n],
  );

  return translate;
}
