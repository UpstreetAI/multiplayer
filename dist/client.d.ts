const METHODS = {
  // handshake protocol
  SET_PLAYER_DATA: 1, // client -> server proxy
  INIT_PLAYERS: 2, // server -> client
  // server -> client
  JOIN: 3,
  LEAVE: 4,
  // client -> server proxy
  CHAT: 5,
  LOG: 6,
  AUDIO: 7,
  AUDIO_START: 8,
  AUDIO_END: 9,
  VIDEO: 10,
  VIDEO_START: 11,
  VIDEO_END: 12,
};

const METHOD_NAMES = {};
for (const [key, value] of Object.entries(METHODS)) {
  METHOD_NAMES[value] = key;
}

type MethodArgs = {
    method: number;
    args: object;
};

type AgentMultiplayerApi = EventTarget & {
    send: (methodArgs: MethodArgs) => void;
};
declare const connect: (url: string, { signal, }?: {
    signal?: AbortSignal;
}) => Promise<AgentMultiplayerApi>;

export { type AgentMultiplayerApi, METHODS, METHOD_NAMES, connect };
