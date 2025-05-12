export { createEndpoint } from './endpoint.mjs';
export { StackFrame, isBasicObject, isMemoryManageable, release, retain } from './memory.mjs';
export { createBasicEncoder } from './encoding/basic.mjs';
export { fromMessagePort } from './adaptors/message-port.mjs';
export { fromWebWorker } from './adaptors/web-worker.mjs';
export { fromIframe } from './adaptors/iframe-parent.mjs';
export { fromInsideIframe } from './adaptors/iframe-child.mjs';
export { RELEASE_METHOD, RETAINED_BY, RETAIN_METHOD } from './types.mjs';
