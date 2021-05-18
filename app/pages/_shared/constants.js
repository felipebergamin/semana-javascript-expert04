export const constants = {
  socketUrl: "http://localhost:3000",
  socketNamespaces: {
    room: "room",
    lobby: "lobby",
  },
  events: {
    LOBBY_UPDATED: "lobbyUpdated",
    USER_CONNECTED: "userConnection",
    USER_DISCONNECTED: "userDisconnection",
    JOIN_ROOM: "joinRoom",
  },
};
