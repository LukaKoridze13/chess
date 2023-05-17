import Coords from "./Coords";

export default function GoFrontRight(
  startingRow,
  startingColumn,
  numberOfMoves
) {
  let moves = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let nextRow = startingRow + index;
    let nextColumn = startingColumn + index;
    if (nextRow < 9 && nextColumn < 9) {
      moves.push(Coords(nextRow, nextColumn));
    }
  }
  return moves;
}
