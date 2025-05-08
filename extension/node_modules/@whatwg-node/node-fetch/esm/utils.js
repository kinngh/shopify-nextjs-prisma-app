import { PassThrough } from 'node:stream';
import { pipeline } from 'node:stream/promises';
function isHeadersInstance(obj) {
    return obj?.forEach != null;
}
export function getHeadersObj(headers) {
    if (headers == null || !isHeadersInstance(headers)) {
        return headers;
    }
    return Object.fromEntries(headers.entries());
}
export function defaultHeadersSerializer(headers, onContentLength) {
    const headerArray = [];
    headers.forEach((value, key) => {
        if (onContentLength && key === 'content-length') {
            onContentLength(value);
        }
        headerArray.push(`${key}: ${value}`);
    });
    return headerArray;
}
export { fakePromise } from '@whatwg-node/promise-helpers';
export function isArrayBufferView(obj) {
    return obj != null && obj.buffer != null && obj.byteLength != null && obj.byteOffset != null;
}
export function isNodeReadable(obj) {
    return obj != null && obj.pipe != null;
}
export function isIterable(value) {
    return value?.[Symbol.iterator] != null;
}
export function shouldRedirect(status) {
    return status === 301 || status === 302 || status === 303 || status === 307 || status === 308;
}
export function wrapIncomingMessageWithPassthrough({ incomingMessage, signal, passThrough = new PassThrough(), onError = (e) => {
    passThrough.destroy(e);
}, }) {
    pipeline(incomingMessage, passThrough, {
        signal,
        end: true,
    })
        .then(() => {
        if (!incomingMessage.destroyed) {
            incomingMessage.resume();
        }
    })
        .catch(onError);
    return passThrough;
}
