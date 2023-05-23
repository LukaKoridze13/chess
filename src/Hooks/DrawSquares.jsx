import React from "react";
import { styled } from "styled-components";
import Coords from "./Coords";
import Figure from "../Components/Figure/";
export default function DrawSquares(obj) {
  let {
    myColor,
    figures,
    availableMoves,
    availableKills,
    selectFigureToMove,
    move,
    turnColor,
  } = obj;
  const squares = [];
  for (let row = 1; row < 9; row++) {
    for (let column = 1; column < 9; column++) {
      const COORDS = Coords(row, column);
      const moveHere = () => {
        move(row, column);
      };

      const FIGURE = figures.find((figure) => {
        const { type, color, row, column, isDead, isSelected } = figure;
        return COORDS === Coords(row, column) && !isDead;
      });
      let squareColor;
      if (row % 2 === 1) {
        if (column % 2 === 1) {
          squareColor = "black";
        } else {
          squareColor = "white";
        }
      }
      if (row % 2 === 0) {
        if (column % 2 === 0) {
          squareColor = "black";
        } else {
          squareColor = "white";
        }
      }
      squares.push(
        <Square color={squareColor} key={COORDS}>
          {/* If Player Can Go On This Square, it will be green, otherwise it will be red  */}
          {availableMoves.includes(COORDS) && (
            <ColoredSquare type="move" onClick={moveHere} />
          )}
          {availableKills.includes(COORDS) && (
            <ColoredSquare type="kill" onClick={moveHere} />
          )}
          {FIGURE && (
            <Figure
              type={FIGURE.type}
              isSelected={FIGURE.isSelected}
              color={FIGURE.color}
              turnColor={turnColor}
              myColor={myColor}
              onClick={() => {
                selectFigureToMove(COORDS);
              }}
            />
          )}
        </Square>
      );
    }
  }
  return squares;
}

const Square = styled.div`
  background-color: ${(props) =>
    props.color === "white" ? "#b6b6b6" : "#8d574a"};
  display: grid;
  place-content: center;
  position: relative;
`;

const ColoredSquare = styled.div`
  width: 101%;
  height: 101%;
  background-color: ${(props) =>
    props.type === "move" ? "#24c8245c" : "#ff000049"};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  cursor: pointer;
`;
