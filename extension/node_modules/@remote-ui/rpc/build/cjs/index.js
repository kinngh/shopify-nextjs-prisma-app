'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var endpoint = require('./endpoint.js');
var memory = require('./memory.js');
var basic = require('./encoding/basic.js');
var messagePort = require('./adaptors/message-port.js');
var webWorker = require('./adaptors/web-worker.js');
var iframeParent = require('./adaptors/iframe-parent.js');
var iframeChild = require('./adaptors/iframe-child.js');
var types = require('./types.js');



exports.createEndpoint = endpoint.createEndpoint;
exports.StackFrame = memory.StackFrame;
exports.isBasicObject = memory.isBasicObject;
exports.isMemoryManageable = memory.isMemoryManageable;
exports.release = memory.release;
exports.retain = memory.retain;
exports.createBasicEncoder = basic.createBasicEncoder;
exports.fromMessagePort = messagePort.fromMessagePort;
exports.fromWebWorker = webWorker.fromWebWorker;
exports.fromIframe = iframeParent.fromIframe;
exports.fromInsideIframe = iframeChild.fromInsideIframe;
exports.RELEASE_METHOD = types.RELEASE_METHOD;
exports.RETAINED_BY = types.RETAINED_BY;
exports.RETAIN_METHOD = types.RETAIN_METHOD;
