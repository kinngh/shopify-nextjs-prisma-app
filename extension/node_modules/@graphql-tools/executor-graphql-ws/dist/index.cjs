'use strict';

var executorCommon = require('@graphql-tools/executor-common');
var utils = require('@graphql-tools/utils');
var disposablestack = require('@whatwg-node/disposablestack');
var graphqlWs = require('graphql-ws');
var WebSocket = require('isomorphic-ws');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var WebSocket__default = /*#__PURE__*/_interopDefault(WebSocket);

function isClient(client) {
  return "subscribe" in client;
}
function buildGraphQLWSExecutor(clientOptionsOrClient) {
  let graphqlWSClient;
  let executorConnectionParams = {};
  let printFn = executorCommon.defaultPrintFn;
  if (isClient(clientOptionsOrClient)) {
    graphqlWSClient = clientOptionsOrClient;
  } else {
    if (clientOptionsOrClient.print) {
      printFn = clientOptionsOrClient.print;
    }
    const webSocketImpl = clientOptionsOrClient.headers ? class WebSocketWithHeaders extends WebSocket__default.default {
      constructor(url, protocol) {
        super(url, protocol, {
          headers: clientOptionsOrClient.headers
        });
      }
    } : WebSocket__default.default;
    graphqlWSClient = graphqlWs.createClient({
      webSocketImpl,
      lazy: true,
      ...clientOptionsOrClient,
      connectionParams: () => {
        const optionsConnectionParams = (typeof clientOptionsOrClient.connectionParams === "function" ? clientOptionsOrClient.connectionParams() : clientOptionsOrClient.connectionParams) || {};
        return Object.assign(optionsConnectionParams, executorConnectionParams);
      }
    });
    if (clientOptionsOrClient.onClient) {
      clientOptionsOrClient.onClient(graphqlWSClient);
    }
  }
  const executor = function GraphQLWSExecutor(executionRequest) {
    const {
      extensions,
      operationType = utils.getOperationASTFromRequest(executionRequest).operation,
      info,
      signal = info?.signal
    } = executionRequest;
    if (extensions?.["connectionParams"] && typeof extensions?.["connectionParams"] === "object") {
      executorConnectionParams = Object.assign(
        executorConnectionParams,
        extensions["connectionParams"]
      );
    }
    const iterableIterator = graphqlWSClient.iterate(
      executorCommon.serializeExecutionRequest({ executionRequest, printFn })
    );
    if (iterableIterator.return && signal) {
      utils.registerAbortSignalListener(signal, () => {
        iterableIterator.return?.();
      });
    }
    if (operationType === "subscription") {
      return iterableIterator;
    }
    return iterableIterator.next().then(({ value }) => value);
  };
  Object.defineProperty(executor, disposablestack.DisposableSymbols.asyncDispose, {
    value: function disposeWS() {
      return graphqlWSClient.dispose();
    }
  });
  return executor;
}

exports.buildGraphQLWSExecutor = buildGraphQLWSExecutor;
