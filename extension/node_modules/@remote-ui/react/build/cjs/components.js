'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var core = require('@remote-ui/core');
var jsxRuntime = require('react/jsx-runtime');
var render = require('./hooks/render.js');

function createRemoteReactComponent(componentType, {
  fragmentProps
} = {}) {
  if (!fragmentProps || !fragmentProps.length) {
    return componentType;
  }

  const wrapper = createComponentWrapper(componentType, fragmentProps);
  wrapper.displayName = componentType;
  return wrapper;
}

function createComponentWrapper(componentType, fragmentProps) {
  const Component = componentType;
  return /*#__PURE__*/react.memo(function ComponentWrapper({
    children: externalChildren = [],
    ...externalProps
  }) {
    const fragments = react.useRef({});
    const {
      root,
      reconciler
    } = render.useRender();
    const {
      props,
      children
    } = react.useMemo(() => {
      // React portals need to be attached to the tree after intialize in order to render.
      // It's usually done by appending them as children of a parent node.
      // @see https://reactjs.org/docs/portals.html
      const portals = [];
      const props = {};

      for (const key of Object.keys(externalProps)) {
        const element = externalProps[key];

        if (fragmentProps.includes(key) && /*#__PURE__*/react.isValidElement(element)) {
          const currentFragment = fragments.current[key];
          const fragment = core.isRemoteFragment(currentFragment) ? currentFragment : root.createFragment();
          fragments.current[key] = fragment; // Assign createText and createComponent to fragment
          // so that it can become a React container to render the portal

          Object.assign(fragment, {
            createText(...args) {
              return root.createText(...args);
            },

            createComponent(type, ...args) {
              return root.createComponent(type, ...args);
            }

          });
          const portal = reconciler.createPortal(element, fragment, null, null);
          portals.push(portal);
          props[key] = fragment;
        } else {
          props[key] = element;
          delete fragments.current[key];
        }
      }

      return {
        props,
        children: [...react.Children.toArray(externalChildren), ...portals]
      };
    }, [externalChildren, externalProps, root, reconciler, fragments]);
    return /*#__PURE__*/jsxRuntime.jsx(Component, { ...props,
      children: children
    });
  });
}

exports.createRemoteReactComponent = createRemoteReactComponent;
