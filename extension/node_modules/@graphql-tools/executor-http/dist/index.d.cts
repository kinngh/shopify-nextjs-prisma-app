import { ExecutionRequest, DisposableSyncExecutor, DisposableAsyncExecutor } from '@graphql-tools/utils';
import { OperationDefinitionNode, GraphQLResolveInfo, DocumentNode } from 'graphql';

declare const isLiveQueryOperationDefinitionNode: (node: OperationDefinitionNode) => boolean | undefined;

type SyncFetchFn = (url: string, init?: RequestInit, context?: any, info?: GraphQLResolveInfo) => SyncResponse;
type SyncResponse = Omit<Response, 'json' | 'text'> & {
    json: () => any;
    text: () => string;
};
type AsyncFetchFn = (url: string, options?: RequestInit, context?: any, info?: GraphQLResolveInfo) => Promise<Response> | Response;
type RegularFetchFn = (url: string) => Promise<Response> | Response;
type FetchFn = AsyncFetchFn | SyncFetchFn | RegularFetchFn;
type AsyncImportFn = (moduleName: string) => PromiseLike<any>;
type SyncImportFn = (moduleName: string) => any;
interface HTTPExecutorOptions {
    /**
     * The name of the service
     */
    serviceName?: string;
    /**
     * The endpoint to use when querying the upstream API
     * @default '/graphql'
     */
    endpoint?: string;
    /**
     * The WHATWG compatible fetch implementation to use
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     * @default globalThis.fetch
     */
    fetch?: FetchFn;
    /**
     * Whether to use the GET HTTP method for queries when querying the original schema
     * @default false
     */
    useGETForQueries?: boolean;
    /**
     * Additional headers to include when querying the original schema
     */
    headers?: HeadersConfig | ((executorRequest?: ExecutionRequest) => HeadersConfig);
    /**
     * HTTP method to use when querying the original schema.x
     * @default 'POST'
     */
    method?: 'GET' | 'POST';
    /**
     * Timeout in milliseconds
     */
    timeout?: number;
    /**
     * Request Credentials
     * @default 'same-origin'
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials
     */
    credentials?: RequestCredentials;
    /**
     * Retry attempts
     */
    retry?: number;
    /**
     * WHATWG compatible `File` implementation
     * @see https://developer.mozilla.org/en-US/docs/Web/API/File
     */
    File?: typeof File;
    /**
     * WHATWG compatible `FormData` implementation
     * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
     */
    FormData?: typeof FormData;
    /**
     * Print function for `DocumentNode`
     * Useful when you want to memoize the print function or use a different implementation to minify the query etc.
     */
    print?: (doc: DocumentNode) => string;
    /**
     * Enable Automatic Persisted Queries
     * @see https://www.apollographql.com/docs/apollo-server/performance/apq/
     */
    apq?: boolean;
    /**
     * Enable Explicit Resource Management
     * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#using-declarations-and-explicit-resource-management
     * @deprecated The executors are always disposable, and this option will be removed in the next major version, there is no need to have a flag for this.
     */
    disposable?: boolean;
    /**
     * On dispose abort error
     */
    getDisposeReason?(): Error | undefined;
}
type HeadersConfig = Record<string, string>;
declare function buildHTTPExecutor(options?: Omit<HTTPExecutorOptions, 'fetch'> & {
    fetch: SyncFetchFn;
}): DisposableSyncExecutor<any, HTTPExecutorOptions>;
declare function buildHTTPExecutor(options?: Omit<HTTPExecutorOptions, 'fetch'> & {
    fetch: AsyncFetchFn;
}): DisposableAsyncExecutor<any, HTTPExecutorOptions>;
declare function buildHTTPExecutor(options?: Omit<HTTPExecutorOptions, 'fetch'> & {
    fetch: RegularFetchFn;
}): DisposableAsyncExecutor<any, HTTPExecutorOptions>;
declare function buildHTTPExecutor(options?: Omit<HTTPExecutorOptions, 'fetch'>): DisposableAsyncExecutor<any, HTTPExecutorOptions>;

export { type AsyncFetchFn, type AsyncImportFn, type FetchFn, type HTTPExecutorOptions, type HeadersConfig, type RegularFetchFn, type SyncFetchFn, type SyncImportFn, type SyncResponse, buildHTTPExecutor, isLiveQueryOperationDefinitionNode };
