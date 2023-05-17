import Coords from "./Coords";

export default function GoFront(
  startingRow,
  startingColumn,
  numberOfMoves
) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let nextColumn = startingColumn + index;
    if ( nextColumn < 9) {
      moves.push(Coords(startingRow, nextColumn));
    }
  }
  return moves;
}
