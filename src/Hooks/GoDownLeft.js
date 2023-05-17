import Coords from "./Coords";

export default function GoFrontLeft(
  startingRow,
  startingColumn,
  numberOfMoves
) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let prevRow = startingRow - index;
    let prevColumn = startingColumn - index;
    if (prevRow > 0 && prevColumn > 0) {
      moves.push(Coords(prevRow, prevColumn));
    }
  }
  return moves;
}
