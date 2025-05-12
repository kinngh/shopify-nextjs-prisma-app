'use strict';

var common = require('../common-DqFHi7oM.cjs');
var server = require('../server-Dr_BC2Xw.cjs');
require('graphql');

function makeHandler(options) {
  const server$1 = server.makeServer(options);
  return function handle(socket) {
    socket.onerror = (err) => {
      console.error(
        "Internal error emitted on the WebSocket socket. Please check your implementation.",
        err
      );
      socket.close(common.CloseCode.InternalServerError, "Internal server error");
    };
    let closed = () => {
    };
    socket.onopen = () => {
      closed = server$1.opened(
        {
          protocol: socket.protocol,
          send: (msg) => socket.send(msg),
          close: (code, reason) => socket.close(code, reason),
          onMessage: (cb) => {
            socket.onmessage = async (event) => {
              try {
                await cb(String(event.data));
              } catch (err) {
                console.error(
                  "Internal error occurred during message handling. Please check your implementation.",
                  err
                );
                socket.close(
                  common.CloseCode.InternalServerError,
                  "Internal server error"
                );
              }
            };
          }
        },
        { socket }
      );
    };
    socket.onclose = (event) => {
      if (event.code === common.CloseCode.SubprotocolNotAcceptable && socket.protocol === common.DEPRECATED_GRAPHQL_WS_PROTOCOL)
        console.warn(
          `Client provided the unsupported and deprecated subprotocol "${socket.protocol}" used by subscriptions-transport-ws.Please see https://www.apollographql.com/docs/apollo-server/data/subscriptions/#switching-from-subscriptions-transport-ws.`
        );
      closed(event.code, event.reason);
    };
  };
}

exports.GRAPHQL_TRANSPORT_WS_PROTOCOL = common.GRAPHQL_TRANSPORT_WS_PROTOCOL;
exports.makeHandler = makeHandler;
