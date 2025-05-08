import { request as httpRequest, STATUS_CODES } from 'node:http';
import { request as httpsRequest } from 'node:https';
import { Readable } from 'node:stream';
import { createBrotliDecompress, createGunzip, createInflate, createInflateRaw } from 'node:zlib';
import { PonyfillRequest } from './Request.js';
import { PonyfillResponse } from './Response.js';
import { PonyfillURL } from './URL.js';
import { getHeadersObj, isNodeReadable, shouldRedirect, wrapIncomingMessageWithPassthrough, } from './utils.js';
function getRequestFnForProtocol(url) {
    if (url.startsWith('http:')) {
        return httpRequest;
    }
    else if (url.startsWith('https:')) {
        return httpsRequest;
    }
    throw new Error(`Unsupported protocol: ${url.split(':')[0] || url}`);
}
export function fetchNodeHttp(fetchRequest) {
    return new Promise((resolve, reject) => {
        try {
            const requestFn = getRequestFnForProtocol(fetchRequest.parsedUrl?.protocol || fetchRequest.url);
            const headersSerializer = fetchRequest.headersSerializer || getHeadersObj;
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
                        outputStream = createGunzip();
                        break;
                    case 'x-deflate':
                    case 'deflate':
                        outputStream = createInflate();
                        break;
                    case 'x-deflate-raw':
                    case 'deflate-raw':
                        outputStream = createInflateRaw();
                        break;
                    case 'br':
                        outputStream = createBrotliDecompress();
                        break;
                }
                if (nodeResponse.headers.location && shouldRedirect(nodeResponse.statusCode)) {
                    if (fetchRequest.redirect === 'error') {
                        const redirectError = new Error('Redirects are not allowed');
                        reject(redirectError);
                        nodeResponse.resume();
                        return;
                    }
                    if (fetchRequest.redirect === 'follow') {
                        const redirectedUrl = new PonyfillURL(nodeResponse.headers.location, fetchRequest.parsedUrl || fetchRequest.url);
                        const redirectResponse$ = fetchNodeHttp(new PonyfillRequest(redirectedUrl, fetchRequest));
                        resolve(redirectResponse$.then(redirectResponse => {
                            redirectResponse.redirected = true;
                            return redirectResponse;
                        }));
                        nodeResponse.resume();
                        return;
                    }
                }
                if (outputStream != null) {
                    outputStream = wrapIncomingMessageWithPassthrough({
                        incomingMessage: nodeResponse,
                        passThrough: outputStream,
                        signal: fetchRequest.signal,
                        onError: reject,
                    });
                }
                const statusCode = nodeResponse.statusCode || 200;
                let statusText = nodeResponse.statusMessage || STATUS_CODES[statusCode];
                if (statusText == null) {
                    statusText = '';
                }
                const ponyfillResponse = new PonyfillResponse(outputStream || nodeResponse, {
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
                    ? isNodeReadable(fetchRequest.body)
                        ? fetchRequest.body
                        : Readable.from(fetchRequest.body)
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
