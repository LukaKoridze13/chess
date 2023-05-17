import Coords from "./Coords";

export default function GoRight(startingRow, startingColumn, numberOfMoves) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let nextRow = startingRow + index;
    if (nextRow < 9) {
      moves.push(Coords(nextRow, startingColumn));
    }
  }
  return moves;
}
