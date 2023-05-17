import Coords from "./Coords";

export default function GoLeft(startingRow, startingColumn, numberOfMoves) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let prevRow = startingRow - index;
    if (prevRow > 0) {
      moves.push(Coords(prevRow, startingColumn));
    }
  }
  return moves;
}
