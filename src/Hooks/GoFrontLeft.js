import Coords from "./Coords";

export default function GoFrontLeft(
  startingRow,
  startingColumn,
  numberOfMoves
) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let prevRow = startingRow - index;
    let nextColumn = startingColumn + index;
    if (prevRow > 0 && nextColumn < 9) {
      moves.push(Coords(prevRow, nextColumn));
    }
  }
  return moves;
}
