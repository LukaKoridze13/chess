import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBishop } from "@fortawesome/free-solid-svg-icons";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";
import { faChessKnight } from "@fortawesome/free-solid-svg-icons";
import { faChessPawn } from "@fortawesome/free-solid-svg-icons";
import { faChessQueen } from "@fortawesome/free-solid-svg-icons";
import { faChessRook } from "@fortawesome/free-solid-svg-icons";

export default function Figure(props) {
  let black = "#1f2a3d";
  let white = "#e6e5e9";
  let figure;
  switch (props.type) {
    case "Pawn":
      figure = faChessPawn;
      break;
    case "Queen":
      figure = faChessQueen;
      break;
    case "King":
      figure = faChessKing;
      break;
    case "Knight":
      figure = faChessKnight;
      break;
    case "Bishop":
      figure = faChessBishop;
      break;
    case "Rook":
      figure = faChessRook;
      break;
    default:
      break;
  }
  return (
    <FontAwesomeIcon
      className={`figure ${props.isSelected ? "selected" : "unselected"} ${
        props.myColor === "white" ? "deg90" : "deg-90"
      }`}
      icon={figure}
      style={{
        color: props.color === "white" ? white : black,
        position: "relative",
        zIndex: 5,
        pointerEvents: Boolean(props.color !== props.myColor || props.color !== props.turnColor) && "none",
      }}
      onClick={props.onClick}
    />
  );
}
