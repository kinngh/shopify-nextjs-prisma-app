'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var context = require('../context.js');

function useRender() {
  const render = react.useContext(context.RenderContext);

  if (render == null) {
    throw new Error('No remote-ui Render instance found in context');
  }

  return render;
}

exports.useRender = useRender;
