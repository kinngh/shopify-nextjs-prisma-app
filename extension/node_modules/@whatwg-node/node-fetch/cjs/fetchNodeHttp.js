"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchNodeHttp = fetchNodeHttp;
const node_http_1 = require("node:http");
const node_https_1 = require("node:https");
const node_stream_1 = require("node:stream");
const node_zlib_1 = require("node:zlib");
const Request_js_1 = require("./Request.js");
const Response_js_1 = require("./Response.js");
const URL_js_1 = require("./URL.js");
const utils_js_1 = require("./utils.js");
function getRequestFnForProtocol(url) {
    if (url.startsWith('http:')) {
        return node_http_1.request;
    }
    else if (url.startsWith('https:')) {
        return node_https_1.request;
    }
    throw new Error(`Unsupported protocol: ${url.split(':')[0] || url}`);
}
function fetchNodeHttp(fetchRequest) {
    return new Promise((resolve, reject) => {
        try {
            const requestFn = getRequestFnForProtocol(fetchRequest.parsedUrl?.protocol || fetchRequest.url);
            const headersSerializer = fetchRequest.headersSerializer || utils_js_1.getHeadersObj;
            const nodeHeaders = headersSerializer(fetchRequest.headers);
            if (nodeHeaders['accept-encoding'] == null) {
                nodeHeaders['accept-encoding'] = 'gzip, deflate, br';
            }
            let nodeRequest;
            // If it is our ponyfilled Request, it should have `parsedUrl` which is a `URL` object
            if (fetchRequest.parsedUrl) {
                nodeRequest = requestFn(fetchRequest.parsedUrl, {
                    method: fetchRequest.method,
                    headers: nodeHeaders,
                    signal: fetchRequest.signal,
                    agent: fetchRequest.agent,
                });
            }
            else {
                nodeRequest = requestFn(fetchRequest.url, {
                    method: fetchRequest.method,
                    headers: nodeHeaders,
                    signal: fetchRequest.signal,
                    agent: fetchRequest.agent,
                });
            }
            nodeRequest.once('response', nodeResponse => {
                let outputStream;
                const contentEncoding = nodeResponse.headers['content-encoding'];
                switch (contentEncoding) {
                    case 'x-gzip':
                    case 'gzip':
                        outputStream = (0, node_zlib_1.createGunzip)();
                        break;
                    case 'x-deflate':
                    case 'deflate':
                        outputStream = (0, node_zlib_1.createInflate)();
                        break;
                    case 'x-deflate-raw':
                    case 'deflate-raw':
                        outputStream = (0, node_zlib_1.createInflateRaw)();
                        break;
                    case 'br':
                        outputStream = (0, node_zlib_1.createBrotliDecompress)();
                        break;
                }
                if (nodeResponse.headers.location && (0, utils_js_1.shouldRedirect)(nodeResponse.statusCode)) {
                    if (fetchRequest.redirect === 'error') {
                        const redirectError = new Error('Redirects are not allowed');
                        reject(redirectError);
                        nodeResponse.resume();
                        return;
                    }
                    if (fetchRequest.redirect === 'follow') {
                        const redirectedUrl = new URL_js_1.PonyfillURL(nodeResponse.headers.location, fetchRequest.parsedUrl || fetchRequest.url);
                        const redirectResponse$ = fetchNodeHttp(new Request_js_1.PonyfillRequest(redirectedUrl, fetchRequest));
                        resolve(redirectResponse$.then(redirectResponse => {
                            redirectResponse.redirected = true;
                            return redirectResponse;
                        }));
                        nodeResponse.resume();
                        return;
                    }
                }
                if (outputStream != null) {
                    outputStream = (0, utils_js_1.wrapIncomingMessageWithPassthrough)({
                        incomingMessage: nodeResponse,
                        passThrough: outputStream,
                        signal: fetchRequest.signal,
                        onError: reject,
                    });
                }
                const statusCode = nodeResponse.statusCode || 200;
                let statusText = nodeResponse.statusMessage || node_http_1.STATUS_CODES[statusCode];
                if (statusText == null) {
                    statusText = '';
                }
                const ponyfillResponse = new Response_js_1.PonyfillResponse(outputStream || nodeResponse, {
                    status: statusCode,
                    statusText,
                    headers: nodeResponse.headers,
                    url: fetchRequest.url,
                    signal: fetchRequest.signal,
                });
                resolve(ponyfillResponse);
            });
            nodeRequest.once('error', reject);
            if (fetchRequest['_buffer'] != null) {
                nodeRequest.write(fetchRequest['_buffer']);
                // @ts-expect-error Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
                nodeRequest.end(null, null, null);
            }
            else {
                const nodeReadable = (fetchRequest.body != null
                    ? (0, utils_js_1.isNodeReadable)(fetchRequest.body)
                        ? fetchRequest.body
                        : node_stream_1.Readable.from(fetchRequest.body)
                    : null);
                if (nodeReadable) {
                    nodeReadable.pipe(nodeRequest);
                }
                else {
                    // @ts-expect-error Avoid arguments adaptor trampoline https://v8.dev/blog/adaptor-frame
                    nodeRequest.end(null, null, null);
                }
            }
        }
        catch (e) {
            reject(e);
        }
    });
}
