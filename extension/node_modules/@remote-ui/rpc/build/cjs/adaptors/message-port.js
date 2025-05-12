'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function fromMessagePort(messagePort) {
  return {
    postMessage: (...args) => messagePort.postMessage(...args),
    addEventListener: (...args) => messagePort.addEventListener(...args),
    removeEventListener: (...args) => messagePort.removeEventListener(...args),

    terminate() {
      messagePort.close();
    }

  };
}

exports.fromMessagePort = fromMessagePort;
