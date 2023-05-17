import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Figure from "./Figure";
import DrawSquares from "../Hooks/DrawSquares";
import Coords from "../Hooks/Coords";
import GetMoves from "../Hooks/GetMoves";

export default function Chessboard() {
  const [myColor, setMyColor] = useState("white");
  const [turnColor, setTurnColor] = useState("white");
  const [availableMoves, setAvailableMoves] = useState([]);
  const [availableKills, setAvailableKills] = useState([]);
  const [figureIsSelected, setfigureIsSelected] = useState(false);
  const [figures, setFigures] = useState([
    {
      type: "Pawn",
      color: "white",
      row: 4,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      row: 4,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "King",
      color: "white",
      row: 5,
      column: 4,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "black",
      row: 5,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
  ]);

  function selectFigureToMove(coords) {
    let figureClicked = figures.find(
      (figure) => Coords(figure.row, figure.column) === coords
    );
    figureClicked.isSelected = true;
    setfigureIsSelected(figureClicked);
    setFigures([...figures]);
  }

  // const squares = [];
  // const [turn, setTurn] = useState("white");

  // const [moves, setMoves] = useState([]);
  // const [kills, setKills] = useState([]);
  // const [figureKillsKing, setFigureKillsKing] = useState(null);
  // let kingKiller;
  // const [figureIsSelected, setFigureIsSelected] = useState(null);
  // function selectFigure(square, color) {
  //   if (color === turn) {
  //     if (figureIsSelected === null) {
  //       let selected = null;
  //       let newFigures = figures.map((figure) => {
  //         figure.isSelected = false;
  //         if (figure.square === square) {
  //           figure.isSelected = true;
  //           selected = figure;
  //         }
  //         return figure;
  //       });
  //       setFigures(newFigures);
  //       setFigureIsSelected(selected);
  //     }
  //     if (figureIsSelected !== null && figureIsSelected.color === color) {
  //       let selected = null;
  //       let newFigures = figures.map((figure) => {
  //         figure.isSelected = false;
  //         if (figure.square === square) {
  //           figure.isSelected = true;
  //           selected = figure;
  //         }
  //         return figure;
  //       });
  //       setFigures(newFigures);
  //       setFigureIsSelected(selected);
  //     }
  //   }
  // }
  // function checkIfOccupied(square) {
  //   let isOccupied = false;
  //   figures.forEach((fig) => {
  //     if (fig.square === square) {
  //       isOccupied = true;
  //     }
  //   });
  //   return isOccupied;
  // }
  // function IsAnotherColor(square, color) {
  //   let yes = false;
  //   figures.forEach((fig) => {
  //     if (fig.square === square && fig.color !== color) {
  //       yes = true;
  //     }
  //   });
  //   return yes;
  // }
  // function canGetKilled(square, color, check) {
  //   let can = false;
  //   let enemies = figures.filter((fig) => fig.color !== color);
  //   enemies.forEach((enemy) => {
  //     let results = calculateGoingAndKilling(enemy, false);
  //     if (check) {
  //       if (enemy.type === "Pawn") {
  //         if (results.moves.includes(square)) {
  //           setFigureKillsKing(enemy);
  //           kingKiller = enemy;
  //           can = true;
  //         }
  //       } else {
  //         if (results.kills.includes(square)) {
  //           kingKiller = enemy;

  //           setFigureKillsKing(enemy);
  //           can = true;
  //         }
  //       }
  //     } else {
  //       if (results.moves.includes(square)) {
  //         can = true;
  //       }
  //     }
  //   });
  //   return can;
  // }
  // function calculateGoingAndKilling(figure, set) {
  //   let moves = [];
  //   let kills = [];
  //   const { type, square, color, isMoved } = figure;
  //   if (type === "Pawn") {
  //     if (color === "white") {
  //       let letter = square[0];
  //       let nextLetter = letters[letters.indexOf(letter) + 1];
  //       let prevLetter = letters[letters.indexOf(letter) - 1];
  //       let number = Number(square[1]);

  //       if (!set) {
  //         moves.push(prevLetter + (number + 1));
  //         moves.push(nextLetter + (number + 1));
  //       } else {
  //         if (!isMoved && !checkIfOccupied(letter + (number + 2))) {
  //           moves.push(letter + (number + 2));
  //         }

  //         if (!checkIfOccupied(letter + (number + 1))) {
  //           moves.push(letter + (number + 1));
  //         }
  //         if (
  //           checkIfOccupied(prevLetter + (number + 1)) &&
  //           IsAnotherColor(prevLetter + (number + 1), color)
  //         ) {
  //           kills.push(prevLetter + (number + 1));
  //         }

  //         if (
  //           checkIfOccupied(nextLetter + (number + 1)) &&
  //           IsAnotherColor(nextLetter + (number + 1), color)
  //         ) {
  //           kills.push(nextLetter + (number + 1));
  //         }
  //       }
  //     }
  //     if (color === "black") {
  //       let letter = square[0];
  //       let nextLetter = letters[letters.indexOf(letter) + 1];
  //       let prevLetter = letters[letters.indexOf(letter) - 1];
  //       let number = Number(square[1]);

  //       if (!set) {
  //         moves.push(prevLetter + (number - 1));
  //         moves.push(nextLetter + (number - 1));
  //       } else {
  //         if (!isMoved && !checkIfOccupied(letter + (number - 2))) {
  //           moves.push(letter + (number - 2));
  //         }

  //         if (!checkIfOccupied(letter + (number - 1))) {
  //           moves.push(letter + (number - 1));
  //         }

  //         if (
  //           checkIfOccupied(prevLetter + (number - 1)) &&
  //           IsAnotherColor(prevLetter + (number - 1), color)
  //         ) {
  //           kills.push(prevLetter + (number - 1));
  //         }

  //         if (
  //           checkIfOccupied(nextLetter + (number - 1)) &&
  //           IsAnotherColor(nextLetter + (number - 1), color)
  //         ) {
  //           kills.push(nextLetter + (number - 1));
  //         }
  //       }
  //     }
  //   }
  //   if (type === "Rook") {
  //     if (color === "white") {
  //       let letter = square[0];
  //       let number = Number(square[1]);
  //       // Top
  //       for (let i = number + 1; i < 9; i++) {
  //         if (checkIfOccupied(letter + i)) {
  //           if (IsAnotherColor(letter + i, "white")) {
  //             kills.push(letter + i);
  //           } else if (!set) {
  //             moves.push(letter + i);
  //           }
  //           break;
  //         } else {
  //           moves.push(letter + i);
  //         }
  //       }
  //       // Down
  //       for (let i = number - 1; i > 0; i--) {
  //         if (checkIfOccupied(letter + i)) {
  //           if (IsAnotherColor(letter + i, "white")) {
  //             kills.push(letter + i);
  //           } else if (!set) {
  //             moves.push(letter + i);
  //           }
  //           break;
  //         } else {
  //           moves.push(letter + i);
  //         }
  //       }
  //       // Left
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (checkIfOccupied(letters[i] + number)) {
  //           if (IsAnotherColor(letters[i] + number, "white")) {
  //             kills.push(letters[i] + number);
  //           } else if (!set) {
  //             moves.push(letters[i] + number);
  //           }
  //           break;
  //         } else {
  //           moves.push(letters[i] + number);
  //         }
  //       }
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (checkIfOccupied(letters[i] + number)) {
  //           if (IsAnotherColor(letters[i] + number, "white")) {
  //             kills.push(letters[i] + number);
  //           } else if (!set) {
  //             moves.push(letters[i] + number);
  //           }
  //           break;
  //         } else {
  //           moves.push(letters[i] + number);
  //         }
  //       }
  //     } else {
  //       let letter = square[0];
  //       let number = Number(square[1]);
  //       // Top
  //       for (let i = number + 1; i < 9; i++) {
  //         if (checkIfOccupied(letter + i)) {
  //           if (IsAnotherColor(letter + i, "black")) {
  //             kills.push(letter + i);
  //           } else if (!set) {
  //             moves.push(letter + i);
  //           }
  //           break;
  //         } else {
  //           moves.push(letter + i);
  //         }
  //       }
  //       // Down
  //       for (let i = number - 1; i > 0; i--) {
  //         if (checkIfOccupied(letter + i)) {
  //           if (IsAnotherColor(letter + i, "black")) {
  //             kills.push(letter + i);
  //           } else if (!set) {
  //             moves.push(letter + i);
  //           }
  //           break;
  //         } else {
  //           moves.push(letter + i);
  //         }
  //       }
  //       // Left
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (checkIfOccupied(letters[i] + number)) {
  //           if (IsAnotherColor(letters[i] + number, "black")) {
  //             kills.push(letters[i] + number);
  //           } else if (!set) {
  //             moves.push(letters[i] + number);
  //           }
  //           break;
  //         } else {
  //           moves.push(letters[i] + number);
  //         }
  //       }
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (checkIfOccupied(letters[i] + number)) {
  //           if (IsAnotherColor(letters[i] + number, "black")) {
  //             kills.push(letters[i] + number);
  //           } else if (!set) {
  //             moves.push(letters[i] + number);
  //           }
  //           break;
  //         } else {
  //           moves.push(letters[i] + number);
  //         }
  //       }
  //     }
  //   }
  //   if (type === "Knight") {
  //     let letter = square[0];
  //     let nextLetter = letters[letters.indexOf(letter) + 1];
  //     let nextSecondLetter = letters[letters.indexOf(letter) + 2];
  //     let prevLetter = letters[letters.indexOf(letter) - 1];
  //     let prevSecondLetter = letters[letters.indexOf(letter) - 2];
  //     let number = Number(square[1]);
  //     let nextNumber = number + 1;
  //     let nextSecondNumber = number + 2;
  //     let prevNumber = number - 1;
  //     let prevSecondNumber = number - 2;
  //     const knightMoves = [
  //       nextLetter + nextSecondNumber,
  //       nextSecondLetter + nextNumber,
  //       nextSecondLetter + prevNumber,
  //       nextLetter + prevSecondNumber,
  //       prevLetter + prevSecondNumber,
  //       prevSecondLetter + prevNumber,
  //       prevSecondLetter + nextNumber,
  //       prevLetter + nextSecondNumber,
  //     ];
  //     if (color === "white") {
  //       knightMoves.forEach((m) => {
  //         if (checkIfOccupied(m)) {
  //           if (IsAnotherColor(m, "white")) {
  //             kills.push(m);
  //           } else if (!set) {
  //             moves.push(m);
  //           }
  //         } else {
  //           moves.push(m);
  //         }
  //       });
  //     } else {
  //       knightMoves.forEach((m) => {
  //         if (checkIfOccupied(m)) {
  //           if (IsAnotherColor(m, "black")) {
  //             kills.push(m);
  //           } else if (!set) {
  //             moves.push(m);
  //           }
  //         } else {
  //           moves.push(m);
  //         }
  //       });
  //     }
  //   }
  //   if (type === "Bishop") {
  //     let letter = square[0];
  //     let number = Number(square[1]);
  //     if (color === "white") {
  //       let x = 1;
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number + x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "white")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number + x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "white")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number - x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "white")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number - x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "white")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //     } else {
  //       let x = 1;
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number + x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "black")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number + x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "black")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number - x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "black")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //       x = 1;
  //       for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //         if (number > 0 && number < 9) {
  //           let m = letters[i] + (number - x);
  //           if (checkIfOccupied(m)) {
  //             if (IsAnotherColor(m, "black")) {
  //               kills.push(m);
  //             } else if (!set) {
  //               moves.push(m);
  //             }
  //             break;
  //           } else {
  //             moves.push(m);
  //           }
  //         }
  //         x++;
  //       }
  //     }
  //   }
  //   if (type === "King") {
  //     let letter = square[0];
  //     let number = Number(square[1]);
  //     let nextLetter = letters[letters.indexOf(letter) + 1];
  //     let prevLetter = letters[letters.indexOf(letter) - 1];
  //     let nextNumber = number + 1;
  //     let prevNumber = number - 1;
  //     let kingMoves = [];
  //     if (nextLetter !== undefined) {
  //       if (nextNumber < 9) {
  //         kingMoves.push(nextLetter + nextNumber);
  //       }
  //       if (number < 9) {
  //         kingMoves.push(nextLetter + number);
  //       }
  //       if (prevNumber > 0) {
  //         kingMoves.push(nextLetter + prevNumber);
  //       }
  //     }
  //     if (letter !== undefined) {
  //       if (nextNumber < 9) {
  //         kingMoves.push(letter + nextNumber);
  //       }
  //       if (prevNumber > 0) {
  //         kingMoves.push(letter + prevNumber);
  //       }
  //     }
  //     if (prevLetter !== undefined) {
  //       if (nextNumber < 9) {
  //         kingMoves.push(prevLetter + nextNumber);
  //       }
  //       if (number < 9) {
  //         kingMoves.push(prevLetter + number);
  //       }
  //       if (prevNumber > 0) {
  //         kingMoves.push(prevLetter + prevNumber);
  //       }
  //     }
  //     if (!set) {
  //       moves = kingMoves;
  //     } else {
  //       kingMoves.forEach((m) => {
  //         if (checkIfOccupied(m)) {
  //           if (IsAnotherColor(m, color)) {
  //             if (!canGetKilled(m, color)) {
  //               kills.push(m);
  //             }
  //           } else if (!set) {
  //             moves.push(m);
  //           }
  //         } else {
  //           if (!canGetKilled(m, color)) {
  //             moves.push(m);
  //           }
  //         }
  //       });
  //     }
  //   }
  //   if (type === "Queen") {
  //     let letter = square[0];
  //     let number = Number(square[1]);
  //     let queenMoves = [];
  //     // Top
  //     for (let i = number + 1; i < 9; i++) {
  //       let m = letter + i;
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //     }
  //     // Bottom
  //     for (let i = number - 1; i > 0; i--) {
  //       let m = letter + i;
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //     }
  //     // Left
  //     for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //       let m = letters[i] + number;
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //     }
  //     // Right
  //     for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //       let m = letters[i] + number;
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //     }

  //     // Right & Top
  //     let x = 1;
  //     for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //       let m = letters[i] + (number + x);
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //       x++;
  //     }
  //     // Right & Bottom
  //     x = 1;
  //     for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
  //       let m = letters[i] + (number - x);
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //       x++;
  //     }
  //     // Left & Top
  //     x = 1;
  //     for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //       let m = letters[i] + (number + x);
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //       x++;
  //     }
  //     // left & Bottom
  //     x = 1;
  //     for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
  //       let m = letters[i] + (number - x);
  //       if (checkIfOccupied(m)) {
  //         if (IsAnotherColor(m, color)) {
  //           kills.push(m);
  //         } else if (!set) {
  //           moves.push(m);
  //         }
  //         break;
  //       } else {
  //         moves.push(m);
  //       }
  //       x++;
  //     }
  //   }
  //   if (set) {
  //     setMoves(moves);
  //     setKills(kills);
  //   }
  //   return { moves, kills };
  // }
  // function changeTurn() {
  //   turn === "white" ? setTurn("black") : setTurn("white");
  // }
  // function move(square) {
  //   if (moves.includes(square) && figureIsSelected !== null) {
  //     figures[figures.indexOf(figureIsSelected)].square = square;
  //     figures[figures.indexOf(figureIsSelected)].isMoved = true;
  //     figures[figures.indexOf(figureIsSelected)].isSelected = false;
  //     if (isCheck()) {
  //       checkLose();
  //     }

  //     setFigures(figures);
  //     setFigureIsSelected(null);
  //     setMoves([]);
  //     setKills([]);
  //     selectFigure();
  //     changeTurn();
  //   }
  // }
  // function kill(square) {
  //   if (kills.includes(square) && figureIsSelected !== null) {
  //     figures.forEach((fig) => {
  //       if (fig.square === square) {
  //         fig.isDead = true;
  //         fig.square = "null";
  //       }
  //     });
  //     figures[figures.indexOf(figureIsSelected)].square = square;
  //     figures[figures.indexOf(figureIsSelected)].isMoved = true;
  //     figures[figures.indexOf(figureIsSelected)].isSelected = false;
  //     if (isCheck()) {
  //       checkLose();
  //     }

  //     setFigures(figures);
  //     setFigureIsSelected(null);
  //     setMoves([]);
  //     setKills([]);
  //     selectFigure();
  //     changeTurn();
  //   }
  // }
  // function checkLose() {
  //   let lose = true;

  //   if (turn === "white") {
  //     // Checking if king can move or kill somewhere safely
  //     let king = figures.find((fig) => {
  //       return fig.type === "King" && fig.color === "black";
  //     });
  //     let movesAndKills = calculateGoingAndKilling(king, true);
  //     if (movesAndKills.moves.length > 0 || movesAndKills.kills.length > 0) {
  //       lose = false;
  //     }
  //     // Checking if anyone can kill attacker figure
  //     if(canGetKilled(kingKiller.square, kingKiller.color)){
  //       lose=false;
  //     };
  //   } else {
  //     // Checking if king can move or kill somewhere safely
  //     let king = figures.find((fig) => {
  //       return fig.type === "King" && fig.color === "white";
  //     });
  //     let movesAndKills = calculateGoingAndKilling(king, true);
  //     if (movesAndKills.moves.length > 0 || movesAndKills.kills.length > 0) {
  //       lose = false;
  //     }
  //     // Checking if anyone can kill attacker figure
  //     if(canGetKilled(kingKiller.square, kingKiller.color)){
  //       lose=false;
  //     };
  //   }
  //   console.log(lose);
  // }
  // function isCheck() {
  //   let x = false;
  //   if (turn === "white") {
  //     let King = figures.find(
  //       (fig) => fig.color === "black" && fig.type === "King"
  //     );
  //     x = canGetKilled(King.square, King.color, true);
  //   }
  //   if (turn === "black") {
  //     let King = figures.find(
  //       (fig) => fig.color === "white" && fig.type === "King"
  //     );
  //     x = canGetKilled(King.square, King.color, true);
  //   }
  //   return x;
  // }
  // useEffect(() => {
  //   if (figureIsSelected !== null) {
  //     calculateGoingAndKilling(figureIsSelected, true);
  //   }
  // }, [figureIsSelected]);
  // useEffect(() => {});

  useEffect(() => {
    if (figureIsSelected) {
      // Calculate all moves and kill
        // Get All moves
        let moves = GetMoves(figureIsSelected)
        setAvailableMoves(moves.allMoves)
        setAvailableKills(moves.allKills);
        console.log(moves)
    }
  }, [figureIsSelected]);

  return (
    <Board color={myColor}>
      {DrawSquares(
        myColor,
        figures,
        availableMoves,
        availableKills,
        selectFigureToMove
      )}
    </Board>
  );
}

const Board = styled.div`
  width: 95vh;
  height: 95vh;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  transform: ${(props) =>
    props.color === "white" ? "rotate(270deg)" : "rotate(90deg)"};

  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 100vw;
  }
`;
