import GoFront from "./GoFront";
import GoDown from "./GoDown";
import GoFrontLeft from "./GoFrontLeft";
import GoFrontRight from "./GoFrontRight";
import GoDownLeft from "./GoDownLeft";
import GoDownRight from "./GoDownRight";
import GoLeft from "./GoLeft";
import GoRight from "./GoRight";
import LShapeMoves from "./LShapeMoves";
import Coords from "./Coords";
export default function GetMoves(figure, figures) {
  const { type, color, row, column, isMoved } = figure;
  const allMoves = [];
  const allKills = [];
  const allDefending = [];
  // for White Pawn
  if (type === "Pawn" && color === "white") {
    if (isMoved) {
      let front = GoFront(row, column, 1, figures, figure);
      allMoves.push(...front.moves);
    } else {
      let front = GoFront(row, column, 2, figures, figure);
      allMoves.push(...front.moves);
    }
    let frontRight = GoFrontRight(row, column, 1, figures, figure);
    let frontLeft = GoFrontLeft(row, column, 1, figures, figure);
    if (row + 1 < 9 && column + 1 < 9) {
      allDefending.push(Coords(row + 1, column + 1));
    }
    if (row - 1 > 0 && column + 1 < 9) {
      allDefending.push(Coords(row - 1, column + 1));
    }
    allKills.push(...frontLeft.kills, ...frontRight.kills);
  }
  // for Blacke Pawn
  if (type === "Pawn" && color === "black") {
    if (isMoved) {
      let down = GoDown(row, column, 1, figures, figure);
      allMoves.push(...down.moves);
    } else {
      let down = GoDown(row, column, 2, figures, figure);
      allMoves.push(...down.moves);
    }
    let downRight = GoDownRight(row, column, 1, figures, figure);
    let downLeft = GoDownLeft(row, column, 1, figures, figure);
    if (row - 1 > 0 && column - 1 > 0) {
      allDefending.push(Coords(row - 1, column - 1));
    }
    if (row + 1 < 9 && column - 1 < 9) {
      allDefending.push(Coords(row - 1, column - 1));
    }
    allKills.push(...downLeft.kills, ...downRight.kills);
  }
  // for Rook
  if (type === "Rook") {
    let front = GoFront(row, column, 8, figures, figure);
    let down = GoDown(row, column, 8, figures, figure);
    let right = GoRight(row, column, 8, figures, figure);
    let left = GoLeft(row, column, 8, figures, figure);
    allMoves.push(...front.moves, ...down.moves, ...left.moves, ...right.moves);
    allKills.push(...front.kills, ...down.kills, ...left.kills, ...right.kills);
    allDefending.push(
      ...front.defending,
      ...down.defending,
      ...left.defending,
      ...right.defending
    );
  }
  //  for Knight
  if (type === "Knight") {
    let moves = LShapeMoves(row, column, figures, figure);
    allMoves.push(...moves.moves);
    allKills.push(...moves.kills);
    allDefending.push(...moves.defending);
  }
  // for Bishop
  if (type === "Bishop") {
    let frontRight = GoFrontRight(row, column, 8, figures, figure);
    let downRight = GoDownRight(row, column, 8, figures, figure);
    let frontLeft = GoFrontLeft(row, column, 8, figures, figure);
    let downLeft = GoDownLeft(row, column, 8, figures, figure);
    allMoves.push(
      ...frontRight.moves,
      ...downRight.moves,
      ...frontLeft.moves,
      ...downLeft.moves
    );
    allKills.push(
      ...frontRight.kills,
      ...downRight.kills,
      ...frontLeft.kills,
      ...downLeft.kills
    );
    allDefending.push(
      ...frontRight.defending,
      ...downRight.defending,
      ...frontLeft.defending,
      ...downLeft.defending
    );
  }
  // for Queen
  if (type === "Queen") {
    let front = GoFront(row, column, 8, figures, figure);
    let down = GoDown(row, column, 8, figures, figure);
    let right = GoRight(row, column, 8, figures, figure);
    let left = GoLeft(row, column, 8, figures, figure);
    allMoves.push(...front.moves, ...down.moves, ...left.moves, ...right.moves);
    allKills.push(...front.kills, ...down.kills, ...left.kills, ...right.kills);
    allDefending.push(
      ...front.defending,
      ...down.defending,
      ...left.defending,
      ...right.defending
    );
    let frontRight = GoFrontRight(row, column, 8, figures, figure);
    let downRight = GoDownRight(row, column, 8, figures, figure);
    let frontLeft = GoFrontLeft(row, column, 8, figures, figure);
    let downLeft = GoDownLeft(row, column, 8, figures, figure);
    allMoves.push(
      ...frontRight.moves,
      ...downRight.moves,
      ...frontLeft.moves,
      ...downLeft.moves
    );
    allKills.push(
      ...frontRight.kills,
      ...downRight.kills,
      ...frontLeft.kills,
      ...downLeft.kills
    );
    allDefending.push(
      ...frontRight.defending,
      ...downRight.defending,
      ...frontLeft.defending,
      ...downLeft.defending
    );
  }
  // for king
  if (type === "King") {
    let front = GoFront(row, column, 1, figures, figure);
    let down = GoDown(row, column, 1, figures, figure);
    let right = GoRight(row, column, 1, figures, figure);
    let left = GoLeft(row, column, 1, figures, figure);
    let frontRight = GoFrontRight(row, column, 1, figures, figure);
    let downRight = GoDownRight(row, column, 1, figures, figure);
    let frontLeft = GoFrontLeft(row, column, 1, figures, figure);
    let downLeft = GoDownLeft(row, column, 1, figures, figure);
    allMoves.push(...front.moves, ...down.moves, ...left.moves, ...right.moves);
    allKills.push(...front.kills, ...down.kills, ...left.kills, ...right.kills);
    allDefending.push(
      ...front.defending,
      ...down.defending,
      ...left.defending,
      ...right.defending
    );
    allMoves.push(
      ...frontRight.moves,
      ...downRight.moves,
      ...frontLeft.moves,
      ...downLeft.moves
    );
    allKills.push(
      ...frontRight.kills,
      ...downRight.kills,
      ...frontLeft.kills,
      ...downLeft.kills
    );
    allDefending.push(
      ...frontRight.defending,
      ...downRight.defending,
      ...frontLeft.defending,
      ...downLeft.defending
    );
  }

  return { allMoves, allKills, allDefending };
}
