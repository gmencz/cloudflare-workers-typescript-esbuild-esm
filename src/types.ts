// This file adds WebSocket types because @cloudflare/workers-types doesn't currently include them.
// See: https://github.com/cloudflare/workers-types/issues/84

export {};

declare global {
  interface WebSocket {
    accept(): void;
  }

  class WebSocketPair {
    0: WebSocket;
    1: WebSocket;
  }

  interface ResponseInit {
    webSocket?: WebSocket;
  }
}
