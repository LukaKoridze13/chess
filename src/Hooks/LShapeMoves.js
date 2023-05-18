import Coords from "./Coords";
import Occupied from "./Ocuppied";

export default function LShapeMoves(
  startingRow,
  startingColumn,
  figures,
  figure
) {
  let moves = [];
  let kills = [];
  let defending = [];

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
      let ocuppied = Occupied(nextRow, nextSecondColumn, figures);
      let move = Coords(nextRow, nextSecondColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
    if (prevSecondColumn > 0) {
      let ocuppied = Occupied(nextRow, prevSecondColumn, figures);
      let move = Coords(nextRow, prevSecondColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
  }
  if (nextSecondRow < 9) {
    if (nextColumn < 9) {
      let ocuppied = Occupied(nextSecondRow, nextColumn, figures);
      let move = Coords(nextSecondRow, nextColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
    if (prevColumn > 0) {
      let ocuppied = Occupied(nextSecondRow, prevColumn, figures);
      let move = Coords(nextSecondRow, prevColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
  }
  if (prevRow > 0) {
    if (prevSecondColumn > 0) {
      let ocuppied = Occupied(prevRow, prevSecondColumn, figures);
      let move = Coords(prevRow, prevSecondColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
    if (nextSecondColumn < 9) {
      let ocuppied = Occupied(prevRow, nextSecondColumn, figures);
      let move = Coords(prevRow, nextSecondColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
  }
  if (prevSecondRow > 0) {
    if (prevColumn > 0) {
      let ocuppied = Occupied(prevSecondRow, prevColumn, figures);
      let move = Coords(prevSecondRow, prevColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
    if (nextColumn < 9) {
      let ocuppied = Occupied(prevSecondRow, nextColumn, figures);
      let move = Coords(prevSecondRow, nextColumn);
      if (ocuppied) {
        if (ocuppied !== figure.color) {
          kills.push(move);
        }
      } else {
        moves.push(move);
      }
      defending.push(move);
    }
  }

  return { moves, kills, defending };
}
