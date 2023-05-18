import Coords from "./Coords";
import Occupied from "./Ocuppied";

export default function GoRight(
  startingRow,
  startingColumn,
  numberOfMoves,
  figures,
  figure
) {
  let moves = [];
  let kills = [];
  let defending = [];
  for (let index = 1; index < numberOfMoves + 1; index++) {
    let stop = false;
    let nextRow = startingRow + index;
    const ocuppied = Occupied(nextRow, startingColumn, figures);
    let move = Coords(nextRow, startingColumn);
    if (nextRow < 9) {
      defending.push(move);

      if (ocuppied) {
        if (ocuppied === figure.color) {
          stop = true;
        } else {
          kills.push(move);
          stop = true;
        }
      } else {
        moves.push(move);
      }
    }
    if (stop) {
      break;
    }
  }
  return { moves, kills, defending };
}
