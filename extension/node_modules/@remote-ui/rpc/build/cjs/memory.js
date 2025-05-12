'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var types = require('./types.js');

class StackFrame {
  constructor() {
    this.memoryManaged = new Set();
  }

  add(memoryManageable) {
    this.memoryManaged.add(memoryManageable);
    memoryManageable[types.RETAINED_BY].add(this);
    memoryManageable[types.RETAIN_METHOD]();
  }

  release() {
    for (const memoryManaged of this.memoryManaged) {
      memoryManaged[types.RETAINED_BY].delete(this);
      memoryManaged[types.RELEASE_METHOD]();
    }

    this.memoryManaged.clear();
  }

}
function isMemoryManageable(value) {
  return Boolean(value && value[types.RETAIN_METHOD] && value[types.RELEASE_METHOD]);
}
function retain(value, {
  deep = true
} = {}) {
  return retainInternal(value, deep, new Map());
}

function retainInternal(value, deep, seen) {
  const seenValue = seen.get(value);
  if (seenValue != null) return seenValue;
  const canRetain = isMemoryManageable(value);

  if (canRetain) {
    value[types.RETAIN_METHOD]();
  }

  seen.set(value, canRetain);

  if (deep) {
    if (Array.isArray(value)) {
      const nestedCanRetain = value.reduce((canRetain, item) => retainInternal(item, deep, seen) || canRetain, canRetain);
      seen.set(value, nestedCanRetain);
      return nestedCanRetain;
    }

    if (isBasicObject(value)) {
      const nestedCanRetain = Object.keys(value).reduce((canRetain, key) => retainInternal(value[key], deep, seen) || canRetain, canRetain);
      seen.set(value, nestedCanRetain);
      return nestedCanRetain;
    }
  }

  seen.set(value, canRetain);
  return canRetain;
}

function release(value, {
  deep = true
} = {}) {
  return releaseInternal(value, deep, new Map());
}
function releaseInternal(value, deep, seen) {
  const seenValue = seen.get(value);
  if (seenValue != null) return seenValue;
  const canRelease = isMemoryManageable(value);

  if (canRelease) {
    value[types.RELEASE_METHOD]();
  }

  seen.set(value, canRelease);

  if (deep) {
    if (Array.isArray(value)) {
      const nestedCanRelease = value.reduce((canRelease, item) => releaseInternal(item, deep, seen) || canRelease, canRelease);
      seen.set(value, nestedCanRelease);
      return nestedCanRelease;
    }

    if (isBasicObject(value)) {
      const nestedCanRelease = Object.keys(value).reduce((canRelease, key) => releaseInternal(value[key], deep, seen) || canRelease, canRelease);
      seen.set(value, nestedCanRelease);
      return nestedCanRelease;
    }
  }

  return canRelease;
}
function isBasicObject(value) {
  if (value == null || typeof value !== 'object') return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype == null || prototype === Object.prototype;
}

exports.RELEASE_METHOD = types.RELEASE_METHOD;
exports.RETAINED_BY = types.RETAINED_BY;
exports.RETAIN_METHOD = types.RETAIN_METHOD;
exports.StackFrame = StackFrame;
exports.isBasicObject = isBasicObject;
exports.isMemoryManageable = isMemoryManageable;
exports.release = release;
exports.releaseInternal = releaseInternal;
exports.retain = retain;
