import Coords from "./Coords";
import GetMoves from "./GetMoves";
import ReverseCoords from "./ReverseCoords";
export default function SimulateMove(figures,figureIsSelected, whereToMove) {
  let clonedFigures = figures.map((figure) => {
    return { ...figure };
  }); 
  let index = figures.indexOf(figureIsSelected)
  let clonedFigureToMove = clonedFigures[index]; 
  
  let movedToRow = ReverseCoords(whereToMove).row; 
  let movedToColumn = ReverseCoords(whereToMove).column;

  clonedFigureToMove.row = movedToRow; 
  clonedFigureToMove.column = movedToColumn;

  let king = figures.find(figure => figure.color === figureIsSelected.color && figure.type === 'King')
  let coords = Coords(king.row, king.column);
  let color =  king.color
  return isSafe(coords, color, clonedFigures)
}


function isSafe(coords, color, figures) {
  let enemies = figures.filter((figure) => figure.color !== color);
  let defendings = [];
  enemies.forEach((enemy) => {
    defendings.push(...GetMoves(enemy, figures).allDefending);
  });
  if (defendings.includes(coords)) {
    return false;
  } else {
    return true;
  }
}
