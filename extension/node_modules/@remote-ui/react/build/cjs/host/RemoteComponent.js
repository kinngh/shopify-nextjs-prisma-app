'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var core = require('@remote-ui/core');
var hooks = require('./hooks.js');
var jsxRuntime = require('react/jsx-runtime');

const emptyObject = {};
const RemoteComponent = /*#__PURE__*/react.memo(function RemoteComponent({
  receiver,
  component,
  controller
}) {
  const Implementation = controller.get(component.type);
  const attached = hooks.useAttached(receiver, component);
  const props = react.useMemo(() => {
    const props = attached === null || attached === void 0 ? void 0 : attached.props;
    if (!props) return emptyObject;
    const newProps = {};

    for (const key of Object.keys(props)) {
      const prop = props[key];
      newProps[key] = core.isRemoteReceiverAttachableFragment(prop) ? /*#__PURE__*/jsxRuntime.jsx(RemoteFragment, {
        parent: component,
        receiver: receiver,
        fragment: prop,
        controller: controller
      }) : prop;
    }

    return newProps; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiver, controller, attached === null || attached === void 0 ? void 0 : attached.props, component.version]);
  if (attached == null) return null;
  const {
    children
  } = attached;

  if (children.length === 0) {
    return /*#__PURE__*/jsxRuntime.jsx(Implementation, { ...props
    });
  }

  return /*#__PURE__*/jsxRuntime.jsx(Implementation, { ...props,
    children: renderChildren(component, children, receiver, controller)
  });
});
const RemoteFragment = /*#__PURE__*/react.memo(function RemoteFragment({
  parent,
  receiver,
  fragment,
  controller
}) {
  var _useAttached;

  const {
    children
  } = (_useAttached = hooks.useAttached(receiver, fragment)) !== null && _useAttached !== void 0 ? _useAttached : {};
  if (!children) return null;
  return /*#__PURE__*/jsxRuntime.jsx(jsxRuntime.Fragment, {
    children: renderChildren(parent, children, receiver, controller)
  });
});

function renderChildren(component, children, receiver, controller) {
  const {
    renderComponent,
    renderText
  } = controller.renderer;
  return [...children].map(child => {
    switch (child.kind) {
      case core.KIND_COMPONENT:
        return renderComponent({
          parent: component,
          component: child,
          receiver,
          controller,
          key: child.id
        });

      case core.KIND_TEXT:
        return renderText({
          parent: component,
          text: child,
          receiver,
          key: child.id
        });

      default:
        return null;
    }
  });
}

exports.RemoteComponent = RemoteComponent;
