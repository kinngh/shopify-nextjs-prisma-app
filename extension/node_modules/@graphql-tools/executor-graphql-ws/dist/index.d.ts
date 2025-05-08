import { DisposableAsyncExecutor } from '@graphql-tools/utils';
import { print } from 'graphql';
import { Client, ClientOptions } from 'graphql-ws';

interface GraphQLWSExecutorOptions extends ClientOptions {
    onClient?: (client: Client) => void;
    print?: typeof print;
    /**
     * Additional headers to include with the upgrade request.
     * It will never be sent again during the lifecycle of the socket.
     *
     * Warning: This is a noop in browser environments
     */
    headers?: Record<string, string>;
}
declare function buildGraphQLWSExecutor(clientOptionsOrClient: GraphQLWSExecutorOptions | Client): DisposableAsyncExecutor;

export { buildGraphQLWSExecutor };
