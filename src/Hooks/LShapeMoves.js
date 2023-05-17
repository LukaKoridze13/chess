import Coords from "./Coords";

export default function LShapeMoves(startingRow, startingColumn) {
  let moves = [];

  let nextRow = startingRow + 1;
  let nextSecondRow = startingRow + 2;
  let prevRow = startingRow - 1;
  let prevSecondRow = startingRow - 2;
  let nextColumn = startingColumn + 1;
  let nextSecondColumn = startingColumn + 2;
  let prevColumn = startingColumn - 1;
  let prevSecondColumn = startingColumn - 2;

  if (nextRow < 9) {
    if (nextSecondColumn < 9) {
      moves.push(Coords(nextRow, nextSecondColumn));
    }
    if (prevSecondColumn > 0) {
      moves.push(Coords(nextRow, prevSecondColumn));
    }
  }
  if (nextSecondRow < 9) {
    if (nextColumn < 9) {
      moves.push(Coords(nextSecondRow, nextColumn));
    }
    if (prevColumn > 0) {
      moves.push(Coords(nextSecondRow, prevColumn));
    }
  }
  if (prevRow > 0) {
    if (prevSecondColumn > 0) {
      moves.push(Coords(prevRow, prevSecondColumn));
    }
    if (nextSecondColumn < 9) {
      moves.push(Coords(prevRow, nextSecondColumn));
    }
  }
  if (prevSecondRow > 0) {
    if (prevColumn > 0) {
      moves.push(Coords(prevSecondRow, prevColumn));
    }
    if (nextColumn < 9) {
      moves.push(Coords(prevSecondRow, nextColumn));
    }
  }

  return moves;
}
