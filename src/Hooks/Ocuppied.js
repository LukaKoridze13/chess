export default function Occupied(row, column, figures) {
  let isOccupied = figures.find(
    (fig) => fig.row === row && fig.column === column
  );
  if (isOccupied) {
    return isOccupied.color;
  } else {
    return false;
  }
}
