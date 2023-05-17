import Coords from "./Coords";

export default function GoFrontRight(
  startingRow,
  startingColumn,
  numberOfMoves
) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let nextRow = startingRow + index;
    let prevColumn = startingColumn - index;
    if (nextRow < 9 && prevColumn > 0) {
      moves.push(Coords(nextRow, prevColumn));
    }
  }
  return moves;
}
