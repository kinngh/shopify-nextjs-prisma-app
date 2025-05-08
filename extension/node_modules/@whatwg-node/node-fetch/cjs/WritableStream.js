"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonyfillWritableStream = void 0;
const node_stream_1 = require("node:stream");
const utils_js_1 = require("./utils.js");
class PonyfillWritableStream {
    writable;
    constructor(underlyingSink) {
        if (underlyingSink instanceof node_stream_1.Writable) {
            this.writable = underlyingSink;
        }
        else if (underlyingSink) {
            const writable = new node_stream_1.Writable({
                write(chunk, _encoding, callback) {
                    try {
                        const result = underlyingSink.write?.(chunk, controller);
                        if (result instanceof Promise) {
                            result.then(() => {
                                callback();
                            }, err => {
                                callback(err);
                            });
                        }
                        else {
                            callback();
                        }
                    }
                    catch (err) {
                        callback(err);
                    }
                },
                final(callback) {
                    const result = underlyingSink.close?.();
                    if (result instanceof Promise) {
                        result.then(() => {
                            callback();
                        }, err => {
                            callback(err);
                        });
                    }
                    else {
                        callback();
                    }
                },
            });
            this.writable = writable;
            const abortCtrl = new AbortController();
            const controller = {
                signal: abortCtrl.signal,
                error(e) {
                    writable.destroy(e);
                },
            };
            writable.once('error', err => abortCtrl.abort(err));
            writable.once('close', () => abortCtrl.abort());
        }
        else {
            this.writable = new node_stream_1.Writable();
        }
    }
    getWriter() {
        const writable = this.writable;
        return {
            closed: new Promise(resolve => {
                writable.once('close', () => {
                    resolve(undefined);
                });
            }),
            get desiredSize() {
                return writable.writableLength;
            },
            ready: new Promise(resolve => {
                writable.once('drain', () => {
                    resolve(undefined);
                });
            }),
            releaseLock() {
                // no-op
            },
            write(chunk) {
                if (chunk == null) {
                    return (0, utils_js_1.fakePromise)();
                }
                return new Promise((resolve, reject) => {
                    writable.write(chunk, (err) => {
                        if (err) {
                            reject(err);
                        }
                        else {
                            resolve();
                        }
                    });
                });
            },
            close() {
                if (!writable.errored && writable.closed) {
                    return (0, utils_js_1.fakePromise)();
                }
                return new Promise((resolve, reject) => {
                    if (writable.errored) {
                        reject(writable.errored);
                    }
                    else {
                        writable.end((err) => {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve();
                            }
                        });
                    }
                });
            },
            abort(reason) {
                return new Promise(resolve => {
                    writable.destroy(reason);
                    writable.once('close', resolve);
                });
            },
        };
    }
    close() {
        if (!this.writable.errored && this.writable.closed) {
            return (0, utils_js_1.fakePromise)();
        }
        return new Promise((resolve, reject) => {
            if (this.writable.errored) {
                reject(this.writable.errored);
            }
            else {
                this.writable.end((err) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            }
        });
    }
    abort(reason) {
        return new Promise(resolve => {
            this.writable.destroy(reason);
            this.writable.once('close', resolve);
        });
    }
    locked = false;
}
exports.PonyfillWritableStream = PonyfillWritableStream;
