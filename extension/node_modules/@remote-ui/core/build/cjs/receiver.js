'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rpc = require('@remote-ui/rpc');
var types = require('./types.js');
var utilities = require('./utilities.js');

const ROOT_ID = Symbol('RootId');
function createRemoteChannel({
  mount,
  insertChild,
  removeChild,
  updateProps,
  updateText
}) {
  const messageMap = new Map([[types.ACTION_MOUNT, mount], [types.ACTION_REMOVE_CHILD, removeChild], [types.ACTION_INSERT_CHILD, insertChild], [types.ACTION_UPDATE_PROPS, updateProps], [types.ACTION_UPDATE_TEXT, updateText]]);
  return (type, ...args) => messageMap.get(type)(...args);
}
function createRemoteReceiver() {
  const queuedUpdates = new Set();
  const listeners = new Map();
  const attachmentSubscribers = new Map();
  let timeout = null;
  let state = 'unmounted';
  const root = {
    id: ROOT_ID,
    kind: types.KIND_ROOT,
    children: [],
    version: 0
  };
  const attachedNodes = new Map([[ROOT_ID, root]]);
  const receive = createRemoteChannel({
    mount: children => {
      const root = attachedNodes.get(ROOT_ID);
      const normalizedChildren = children.map(child => normalizeNode(child, addVersion));
      root.version += 1;
      root.children = normalizedChildren;
      state = 'mounted';

      for (const child of normalizedChildren) {
        rpc.retain(child);
        attach(child);
      } // eslint-disable-next-line promise/catch-or-return


      enqueueUpdate(root).then(() => {
        emit('mount');
      });
    },
    insertChild: (id, index, child, existingId) => {
      const attached = attachedNodes.get(id !== null && id !== void 0 ? id : ROOT_ID);
      const {
        children
      } = attached;
      let existingAttached;
      let normalizedChild;

      if (id === existingId) {
        existingAttached = attached;
      } else if (existingId !== false) {
        existingAttached = attachedNodes.get(existingId !== null && existingId !== void 0 ? existingId : ROOT_ID);
      }

      if (existingAttached) {
        const childId = child.id;
        const existingChildren = existingAttached.children;
        const existingIndex = existingChildren.findIndex(child => child.id === childId);
        const [removed] = existingChildren.splice(existingIndex, 1);
        normalizedChild = removed; // If we are just moving the child to a different index in the same node,
        // we don’t need to enqueue an update, because that will be done for this
        // node below.

        if (id !== existingId) {
          existingAttached.version += 1;
          enqueueUpdate(existingAttached);
        }
      } else {
        normalizedChild = normalizeNode(child, addVersion);
        rpc.retain(normalizedChild);
        attach(normalizedChild);
      }

      if (index === children.length) {
        children.push(normalizedChild);
      } else {
        children.splice(index, 0, normalizedChild);
      }

      attached.version += 1;
      enqueueUpdate(attached);
    },
    removeChild: (id, index) => {
      const attached = attachedNodes.get(id !== null && id !== void 0 ? id : ROOT_ID);
      const {
        children
      } = attached;
      const [removed] = children.splice(index, 1);

      if (!removed) {
        return;
      }

      attached.version += 1;
      detach(removed); // eslint-disable-next-line promise/catch-or-return

      enqueueUpdate(attached).then(() => {
        rpc.release(removed);
      });
    },
    updateProps: (id, newProps) => {
      const component = attachedNodes.get(id);
      const oldProps = { ...component.props
      };
      rpc.retain(newProps);
      Object.keys(newProps).forEach(key => {
        const newProp = newProps[key];
        const oldProp = oldProps[key];

        if (isRemoteReceiverAttachableFragment(oldProp)) {
          detach(oldProp);
        }

        if (isRemoteFragmentSerialization(newProp)) {
          const attachableNewProp = normalizeNode(newProp, addVersion);
          attach(attachableNewProp);
        }
      });
      Object.assign(component.props, newProps);
      component.version += 1; // eslint-disable-next-line promise/catch-or-return

      enqueueUpdate(component).then(() => {
        for (const key of Object.keys(newProps)) {
          rpc.release(oldProps[key]);
        }
      });
    },
    updateText: (id, newText) => {
      const text = attachedNodes.get(id);
      text.text = newText;
      text.version += 1;
      enqueueUpdate(text);
    }
  });
  return {
    get state() {
      return state;
    },

    receive,
    attached: {
      root,

      get({
        id
      }) {
        var _ref;

        return (_ref = attachedNodes.get(id)) !== null && _ref !== void 0 ? _ref : null;
      },

      subscribe({
        id
      }, subscriber) {
        let subscribers = attachmentSubscribers.get(id);

        if (subscribers == null) {
          subscribers = new Set();
          attachmentSubscribers.set(id, subscribers);
        }

        subscribers.add(subscriber);
        return () => {
          const subscribers = attachmentSubscribers.get(id);

          if (subscribers) {
            subscribers.delete(subscriber);

            if (subscribers.size === 0) {
              attachmentSubscribers.delete(id);
            }
          }
        };
      }

    },
    flush,

    on(event, listener) {
      let listenersForEvent = listeners.get(event);

      if (listenersForEvent == null) {
        listenersForEvent = new Set();
        listeners.set(event, listenersForEvent);
      }

      listenersForEvent.add(listener);
      return () => {
        const listenersForEvent = listeners.get(event);

        if (listenersForEvent) {
          listenersForEvent.delete(listener);

          if (listenersForEvent.size === 0) {
            listeners.delete(event);
          }
        }
      };
    }

  };

  function flush() {
    var _timeout;

    return (_timeout = timeout) !== null && _timeout !== void 0 ? _timeout : Promise.resolve();
  }

  function emit(event) {
    const listenersForEvent = listeners.get(event);

    if (listenersForEvent) {
      for (const listener of listenersForEvent) {
        listener();
      }
    }
  }

  function enqueueUpdate(attached) {
    var _timeout2;

    timeout = (_timeout2 = timeout) !== null && _timeout2 !== void 0 ? _timeout2 : new Promise(resolve => {
      setTimeout(() => {
        const attachedToUpdate = [...queuedUpdates];
        timeout = null;
        queuedUpdates.clear();

        for (const attached of attachedToUpdate) {
          const subscribers = attachmentSubscribers.get(attached.id);

          if (subscribers) {
            for (const subscriber of subscribers) {
              subscriber(attached);
            }
          }
        }

        resolve();
      }, 0);
    });
    queuedUpdates.add(attached);
    return timeout;
  }

  function attach(child) {
    attachedNodes.set(child.id, child);

    if (child.kind === types.KIND_COMPONENT && 'props' in child) {
      const {
        props = {}
      } = child;
      Object.keys(props).forEach(key => {
        const prop = props[key];
        if (!isRemoteReceiverAttachableFragment(prop)) return;
        attach(prop);
      });
    }

    if ('children' in child) {
      for (const grandChild of child.children) {
        attach(grandChild);
      }
    }
  }

  function detach(child) {
    attachedNodes.delete(child.id);

    if (child.kind === types.KIND_COMPONENT && 'props' in child) {
      const {
        props = {}
      } = child;
      Object.keys(props).forEach(key => {
        const prop = props[key];
        if (!isRemoteReceiverAttachableFragment(prop)) return;
        detach(prop);
      });
    }

    if ('children' in child) {
      for (const grandChild of child.children) {
        detach(grandChild);
      }
    }
  }
}

function addVersion(value) {
  value.version = 0;
  return value;
}

function normalizeNode(node, normalizer) {
  if (node.kind === types.KIND_FRAGMENT || node.kind === types.KIND_COMPONENT) {
    node.children.forEach(child => normalizeNode(child, normalizer));
  }

  if (node.kind === types.KIND_COMPONENT && 'props' in node) {
    const {
      props
    } = node;

    for (const key of Object.keys(props)) {
      const prop = props[key];
      if (!isRemoteFragmentSerialization(prop)) continue;
      props[key] = normalizeNode(prop, normalizer);
    }
  }

  return normalizer(node);
}

function isRemoteFragmentSerialization(object) {
  return utilities.isRemoteFragment(object) && 'id' in object && 'children' in object;
}
function isRemoteReceiverAttachableFragment(object) {
  return isRemoteFragmentSerialization(object) && 'version' in object;
}

exports.ROOT_ID = ROOT_ID;
exports.createRemoteChannel = createRemoteChannel;
exports.createRemoteReceiver = createRemoteReceiver;
exports.isRemoteFragmentSerialization = isRemoteFragmentSerialization;
exports.isRemoteReceiverAttachableFragment = isRemoteReceiverAttachableFragment;
