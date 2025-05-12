'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var hooks = require('./hooks.js');
var jsxRuntime = require('react/jsx-runtime');

const RemoteText = /*#__PURE__*/react.memo(function RemoteText({
  text,
  receiver
}) {
  const attached = hooks.useAttached(receiver, text);
  return attached ? /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: attached.text
  }) : null;
});

exports.RemoteText = RemoteText;
