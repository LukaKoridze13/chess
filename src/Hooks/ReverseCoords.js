const LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
export default function ReverseCoords(coords) {
  let row = LETTERS.indexOf(coords[0]) + 1;
  let column = Number(coords[1]);
  return { row, column };
}
