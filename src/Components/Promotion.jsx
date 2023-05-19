import React from "react";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBishop } from "@fortawesome/free-solid-svg-icons";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";
export default function Promotion(props) {
  let { color } = props;
  let black = "#1f2a3d";
  let white = "#e6e5e9";
  return (
    <Popup className="promo">
      <FontAwesomeIcon
        icon={faChessQueen}
        style={{
          color: color === "white" ? white : black,
          cursor: "pointer",
        }}
        onClick={() => {
          props.promote("Queen");
        }}
      />
      <FontAwesomeIcon
        icon={faChessRook}
        style={{
          color: color === "white" ? white : black,
          cursor: "pointer",
        }}
        onClick={() => {
          props.promote("Rook");
        }}
      />
      <FontAwesomeIcon
        icon={faChessKnight}
        style={{
          color: color === "white" ? white : black,
          cursor: "pointer",
        }}
        onClick={() => {
          props.promote("Knight");
        }}
      />
      <FontAwesomeIcon
        icon={faChessBishop}
        style={{
          color: color === "white" ? white : black,
          cursor: "pointer",
        }}
        onClick={() => {
          props.promote("Bishop");
        }}
      />
    </Popup>
  );
}

let Popup = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: #170101d9;
  position: absolute;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: center;
  align-items: center;
`;
