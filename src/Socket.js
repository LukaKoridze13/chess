import { io } from "socket.io-client";

// Connect to the Socket.IO server and join a specific room
let testing = "http://localhost:3500";
let deployment = "https://chess-h2ja.onrender.com";
export const socket = io(deployment, {
  autoConnect: false,
  cors: "*"
});
