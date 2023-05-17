import GoFront from "./GoFront";
import GoDown from "./GoDown";
import GoFrontLeft from "./GoFrontLeft";
import GoFrontRight from "./GoFrontRight";
import GoDownLeft from "./GoDownLeft";
import GoDownRight from "./GoDownRight";
import GoLeft from "./GoLeft";
import GoRight from "./GoRight";
import LShapeMoves from "./LShapeMoves";
export default function GetMoves(figure) {
  const { type, color, row, column, isMoved } = figure;
  const allMoves = [];
  const allKills = [];
  
  
  // for White Pawn
  if (type === "Pawn" && color === "white") {
    if (isMoved) {
      allMoves.push(...GoFront(row, column, 1));
    } else {
      allMoves.push(...GoFront(row, column, 2));
    }

    allKills.push(...GoFrontRight(row, column, 1));
    allKills.push(...GoFrontLeft(row, column, 1));
  }
  // for Blacke Pawn
  if (type === "Pawn" && color === "black") {
    if (isMoved) {
      allMoves.push(...GoDown(row, column, 1));
    } else {
      allMoves.push(...GoDown(row, column, 2));
    }
    allKills.push(...GoDownLeft(row, column, 1));
    allKills.push(...GoDownRight(row, column, 1));
  }
  // for Rook
  if (type === "Rook") {
    allMoves.push(...GoFront(row, column, 8));
    allMoves.push(...GoDown(row, column, 8));
    allMoves.push(...GoLeft(row, column, 8));
    allMoves.push(...GoRight(row, column, 8));

    allKills.push(...GoFront(row, column, 8));
    allKills.push(...GoDown(row, column, 8));
    allKills.push(...GoLeft(row, column, 8));
    allKills.push(...GoRight(row, column, 8));
  }
  // for Knight
  if (type === "Knight") {
    allMoves.push(...LShapeMoves(row, column));
    allKills.push(...LShapeMoves(row, column));
  }
  // for Bishop
  if (type === "Bishop") {
    allMoves.push(...GoFrontRight(row, column, 8));
    allMoves.push(...GoFrontLeft(row, column, 8));
    allMoves.push(...GoDownRight(row, column, 8));
    allMoves.push(...GoDownLeft(row, column, 8));

    allKills.push(...GoFrontRight(row, column, 8));
    allKills.push(...GoFrontLeft(row, column, 8));
    allKills.push(...GoDownRight(row, column, 8));
    allKills.push(...GoDownLeft(row, column, 8));
  }
  // for Queen
  if (type === "Queen") {
    allMoves.push(...GoFrontRight(row, column, 8));
    allMoves.push(...GoFrontLeft(row, column, 8));
    allMoves.push(...GoDownRight(row, column, 8));
    allMoves.push(...GoDownLeft(row, column, 8));

    allKills.push(...GoFrontRight(row, column, 8));
    allKills.push(...GoFrontLeft(row, column, 8));
    allKills.push(...GoDownRight(row, column, 8));
    allKills.push(...GoDownLeft(row, column, 8));

    allMoves.push(...GoFront(row, column, 8));
    allMoves.push(...GoDown(row, column, 8));
    allMoves.push(...GoLeft(row, column, 8));
    allMoves.push(...GoRight(row, column, 8));

    allKills.push(...GoFront(row, column, 8));
    allKills.push(...GoDown(row, column, 8));
    allKills.push(...GoLeft(row, column, 8));
    allKills.push(...GoRight(row, column, 8));
  }
  // for king
  if (type === "King") {
    allMoves.push(...GoFrontRight(row, column, 1));
    allMoves.push(...GoFrontLeft(row, column, 1));
    allMoves.push(...GoDownRight(row, column, 1));
    allMoves.push(...GoDownLeft(row, column, 1));
    allMoves.push(...GoFront(row, column, 1));
    allMoves.push(...GoDown(row, column, 1));
    allMoves.push(...GoLeft(row, column, 1));
    allMoves.push(...GoRight(row, column, 1));
    allKills.push(...GoFrontRight(row, column, 1));
    allKills.push(...GoFrontLeft(row, column, 1));
    allKills.push(...GoDownRight(row, column, 1));
    allKills.push(...GoDownLeft(row, column, 1));
    allKills.push(...GoFront(row, column, 1));
    allKills.push(...GoDown(row, column, 1));
    allKills.push(...GoLeft(row, column, 1));
    allKills.push(...GoRight(row, column, 1));
  }

  return { allMoves, allKills };
}
