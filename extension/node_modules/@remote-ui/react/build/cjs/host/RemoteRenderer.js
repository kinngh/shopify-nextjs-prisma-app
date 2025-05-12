'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var core = require('@remote-ui/core');
var hooks = require('./hooks.js');
var jsxRuntime = require('react/jsx-runtime');

const RemoteRenderer = /*#__PURE__*/react.memo(function RemoteRenderer({
  controller,
  receiver
}) {
  const {
    root
  } = receiver.attached;
  const {
    children
  } = hooks.useAttached(receiver, root);
  const {
    renderComponent,
    renderText
  } = controller.renderer;
  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: children.map(child => {
      switch (child.kind) {
        case core.KIND_COMPONENT:
          return renderComponent({
            parent: root,
            component: child,
            receiver,
            controller,
            key: child.id
          });

        case core.KIND_TEXT:
          return renderText({
            parent: root,
            text: child,
            receiver,
            key: child.id
          });

        default:
          return null;
      }
    })
  });
});

exports.RemoteRenderer = RemoteRenderer;
