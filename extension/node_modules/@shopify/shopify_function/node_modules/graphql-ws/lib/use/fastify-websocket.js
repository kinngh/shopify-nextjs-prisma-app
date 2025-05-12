"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHandler = makeHandler;
const websocket_1 = require("./@fastify/websocket");
/**
 * Make a handler to use on a [fastify-websocket](https://github.com/fastify/fastify-websocket) route.
 * This is a basic starter, feel free to copy the code over and adjust it to your needs
 *
 * @deprecated Use `@fastify/websocket` instead.
 *
 * @category Server/fastify-websocket
 */
function makeHandler(options, 
/**
 * The timout between dispatched keep-alive messages. Internally uses the [ws Ping and Pongs](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#pings_and_pongs_the_heartbeat_of_websockets)
 * to check that the link between the clients and the server is operating and to prevent the link
 * from being broken due to idling.
 *
 * @default 12_000 // 12 seconds
 */
keepAlive = 12000) {
    // new handler can be reused, the semantics stayed the same
    return (0, websocket_1.makeHandler)(options, keepAlive);
}
