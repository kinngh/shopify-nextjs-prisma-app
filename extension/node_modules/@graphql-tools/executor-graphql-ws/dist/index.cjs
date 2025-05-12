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
    const headers = clientOptionsOrClient.headers;
    const webSocketImpl = headers ? class WebSocketWithHeaders extends WebSocket__default.default {
      constructor(url, protocol) {
        super(url, protocol, { headers });
      }
    } : WebSocket__default.default;
    graphqlWSClient = graphqlWs.createClient({
      url: clientOptionsOrClient.url,
      webSocketImpl,
      lazy: clientOptionsOrClient.lazy !== false,
      lazyCloseTimeout: clientOptionsOrClient.lazyCloseTimeout || 0,
      connectionParams: () => {
        const optionsConnectionParams = (typeof clientOptionsOrClient.connectionParams === "function" ? clientOptionsOrClient.connectionParams() : clientOptionsOrClient.connectionParams) || {};
        return Object.assign(optionsConnectionParams, executorConnectionParams);
      },
      on: clientOptionsOrClient.on
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
      signal.addEventListener(
        "abort",
        () => {
          iterableIterator.return?.();
        },
        { once: true }
      );
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
