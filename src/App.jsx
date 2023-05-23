import React, { useEffect, useState } from "react";
import Chessboard from "./Components/Chessboard";
import { styled } from "styled-components";
import Room from "./Components/Room";
import Landing from "./Components/Landing";
import { socket } from "./Socket";
export default function App() {
  const [user, setUser] = useState(false);
  const [room, setRoom] = useState(false);
  const [connected, setConnected] = useState(false);
  const [online, setOnline] = useState(0);
  const [join, setJoin] = useState(false);
  function onConnect() {
    setConnected(true);
  }
  function onOnline(number) {
    setOnline(number);
  }

  useEffect(() => {
    socket.connect();
    socket.on("connect", onConnect);
    socket.on("online", onOnline);
    return () => {
      socket.disconnect();
      socket.off("connect", onConnect);
      socket.off("online", onOnline);
    };
  }, []);

  return (
    <>
      <Online>Players Online: {online}</Online>
      <Container>
        {Boolean(!user && connected) && <Landing setUser={setUser} />}{" "}
        {Boolean(user && !room && connected) && (
          <Room user={user} setRoom={setRoom} setJoin={setJoin} />
        )}
        {Boolean(user && room && connected) && (
          <Chessboard user={user} room={room} join={join} />
        )}
        {!connected && (
          <Message>
            Loading... The website is currently using a free hosting service, so
            if you are the first user in a while, it will take nearly 30 seconds
            to load the server.
          </Message>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-content: center;
`;

const Online = styled.p`
  width: fit-content;
  position: absolute;
  z-index: 10000;
  top: 20px;
  left: 20px;
  color: #b30651;
`;

const Message = styled.p`
  width: fit-content;
  position: absolute;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #b30651;
`;
