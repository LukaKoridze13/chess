import Coords from "./Coords";

export default function GoDown(startingRow, startingColumn, numberOfMoves) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let prevColumn = startingColumn - index;
    if (prevColumn > 0) {
      moves.push(Coords(startingRow, prevColumn));
    }
  }
  return moves;
}
