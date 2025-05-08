/// <reference types="node" />
/// <reference types="node" />
import { Agent as HttpAgent } from 'http';
import { Agent as HttpsAgent } from 'https';
export declare function getProxyAgent(url: string): HttpAgent | HttpsAgent | undefined;
