import { io } from "socket.io-client";

// Connect to the Socket.IO server and join a specific room
export const socket = io("http://localhost:3500", {
  autoConnect: false,
});
