import { memo } from 'react';
import { useAttached } from './hooks.mjs';
import { jsx, Fragment } from 'react/jsx-runtime';

const RemoteText = /*#__PURE__*/memo(function RemoteText({
  text,
  receiver
}) {
  const attached = useAttached(receiver, text);
  return attached ? /*#__PURE__*/jsx(Fragment, {
    children: attached.text
  }) : null;
});

export { RemoteText };
