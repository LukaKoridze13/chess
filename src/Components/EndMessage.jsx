import React from "react";
import { styled } from "styled-components";

export default function EndMessage(props) {
  let { end, myColor } = props;
  end = end.replace(end[0], end[0].toUpperCase());
  return (
    <Popup>
      <TextBox>
        <Text>Game is over!</Text>
        <Text>{end === "Draw" ? "Draw" : `${end} won!`}</Text>
      </TextBox>
    </Popup>
  );
}

const Popup = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000c6;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  width: 300px;
  height: 200px;
  background-color: #ffffffc5;
  border-radius: 40px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

const Text = styled.p`
  font-size: 20px;
  font-family: "Arial";
  text-align: center;
`;
