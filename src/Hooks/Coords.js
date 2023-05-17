const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
export default function Coords(row, column) {
  let symbol1 = LETTERS[row-1];
  let symbol2 = column;
  return symbol1 + symbol2;
}


// This function generates "a1", "b1" and etc. coordinates from row and column numbers.
