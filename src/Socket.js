import { io } from "socket.io-client";
let link = process.env.REACT_APP_HOST
// Connect to the Socket.IO server and join a specific room
export const socket = io("http://localhost:3500", {
  autoConnect: false,
});
