import React from "react";
import Chessboard from "./Components/Chessboard";
import { styled } from "styled-components";

export default function Chess() {
  return (
    <Container>
      <Chessboard />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  place-content: center;
`;
