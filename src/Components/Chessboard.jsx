import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Figure from "./Figure";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
  const squares = [];
  const [turn, setTurn] = useState("white");
  const [figures, setFigures] = useState([
    {
      type: "Pawn",
      color: "white",
      square: "a2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "b2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "c2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "d2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "e2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "f2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "g2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      square: "h2",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "a7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "b7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "c7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "d7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "e7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "f7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "g7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      square: "h7",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Rook",
      color: "white",
      square: "a1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Rook",
      color: "black",
      square: "a8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Rook",
      color: "white",
      square: "h1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Rook",
      color: "black",
      square: "h8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "white",
      square: "b1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "white",
      square: "g1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "black",
      square: "g8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "black",
      square: "b8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "white",
      square: "c1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "white",
      square: "f1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "black",
      square: "c8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "black",
      square: "f8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "King",
      color: "white",
      square: "e1",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "King",
      color: "black",
      square: "e8",
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
  ]);
  const [moves, setMoves] = useState([]);
  const [kills, setKills] = useState([]);
  const [figureIsSelected, setFigureIsSelected] = useState(null);
  function selectFigure(square, color) {
    if (color === turn) {
      if (figureIsSelected === null) {
        let selected = null;
        let newFigures = figures.map((figure) => {
          figure.isSelected = false;
          if (figure.square === square) {
            figure.isSelected = true;
            selected = figure;
          }
          return figure;
        });
        setFigures(newFigures);
        setFigureIsSelected(selected);
      }
      if (figureIsSelected !== null && figureIsSelected.color === color) {
        let selected = null;
        let newFigures = figures.map((figure) => {
          figure.isSelected = false;
          if (figure.square === square) {
            figure.isSelected = true;
            selected = figure;
          }
          return figure;
        });
        setFigures(newFigures);
        setFigureIsSelected(selected);
      }
    }
  }
  function checkIfOccupied(square) {
    let isOccupied = false;
    figures.forEach((fig) => {
      if (fig.square === square) {
        isOccupied = true;
      }
    });
    return isOccupied;
  }
  function IsAnotherColor(square, color) {
    let yes = false;
    figures.forEach((fig) => {
      if (fig.square === square && fig.color !== color) {
        yes = true;
      }
    });
    return yes;
  }
  function canGetKilled(square, color) {
    let can = false;
    let enemies = figures.filter((fig) => fig.color !== color);
    enemies.forEach((enemy) => {
      let results = calculateGoingAndKilling(enemy, false);

      if (results.moves.includes(square)) {
        can = true;
        return;
      }
    });
    return can;
  }
  function calculateGoingAndKilling(figure, set) {
    let moves = [];
    let kills = [];
    const { type, square, color, isMoved } = figure;
    if (type === "Pawn") {
      if (color === "white") {
        let letter = square[0];
        let nextLetter = letters[letters.indexOf(letter) + 1];
        let prevLetter = letters[letters.indexOf(letter) - 1];
        let number = Number(square[1]);

        if (!set) {
          moves.push(prevLetter + (number + 1));
          moves.push(nextLetter + (number + 1));
        } else {
          if (!isMoved && !checkIfOccupied(letter + (number + 2))) {
            moves.push(letter + (number + 2));
          }

          if (!checkIfOccupied(letter + (number + 1))) {
            moves.push(letter + (number + 1));
          }
          if (
            checkIfOccupied(prevLetter + (number + 1)) &&
            IsAnotherColor(prevLetter + (number + 1), color)
          ) {
            kills.push(prevLetter + (number + 1));
          }

          if (
            checkIfOccupied(nextLetter + (number + 1)) &&
            IsAnotherColor(nextLetter + (number + 1), color)
          ) {
            kills.push(nextLetter + (number + 1));
          }
        }
      }
      if (color === "black") {
        let letter = square[0];
        let nextLetter = letters[letters.indexOf(letter) + 1];
        let prevLetter = letters[letters.indexOf(letter) - 1];
        let number = Number(square[1]);

        if (!set) {
          moves.push(prevLetter + (number - 1));
          moves.push(nextLetter + (number - 1));
        } else {
          if (!isMoved && !checkIfOccupied(letter + (number - 2))) {
            moves.push(letter + (number - 2));
          }

          if (!checkIfOccupied(letter + (number - 1))) {
            moves.push(letter + (number - 1));
          }

          if (
            checkIfOccupied(prevLetter + (number - 1)) &&
            IsAnotherColor(prevLetter + (number - 1), color)
          ) {
            kills.push(prevLetter + (number - 1));
          }

          if (
            checkIfOccupied(nextLetter + (number - 1)) &&
            IsAnotherColor(nextLetter + (number - 1), color)
          ) {
            kills.push(nextLetter + (number - 1));
          }
        }
      }
    }
    if (type === "Rook") {
      if (color === "white") {
        let letter = square[0];
        let number = Number(square[1]);
        // Top
        for (let i = number + 1; i < 9; i++) {
          if (checkIfOccupied(letter + i)) {
            if (IsAnotherColor(letter + i, "white")) {
              kills.push(letter + i);
            }
            break;
          } else {
            moves.push(letter + i);
          }
        }
        // Down
        for (let i = number + 1; i > 0; i--) {
          if (checkIfOccupied(letter + i)) {
            if (IsAnotherColor(letter + i, "white")) {
              kills.push(letter + i);
            }
            break;
          } else {
            moves.push(letter + i);
          }
        }
        // Left
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (checkIfOccupied(letters[i] + number)) {
            if (IsAnotherColor(letters[i] + number, "white")) {
              kills.push(letters[i] + number);
            }
            break;
          } else {
            moves.push(letters[i] + number);
          }
        }
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (checkIfOccupied(letters[i] + number)) {
            if (IsAnotherColor(letters[i] + number, "white")) {
              kills.push(letters[i] + number);
            }
            break;
          } else {
            moves.push(letters[i] + number);
          }
        }
      } else {
        let letter = square[0];
        let number = Number(square[1]);
        // Top
        for (let i = number + 1; i < 9; i++) {
          if (checkIfOccupied(letter + i)) {
            if (IsAnotherColor(letter + i, "black")) {
              kills.push(letter + i);
            }
            break;
          } else {
            moves.push(letter + i);
          }
        }
        // Down
        for (let i = number + 1; i > 0; i--) {
          if (checkIfOccupied(letter + i)) {
            if (IsAnotherColor(letter + i, "black")) {
              kills.push(letter + i);
            }
            break;
          } else {
            moves.push(letter + i);
          }
        }
        // Left
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (checkIfOccupied(letters[i] + number)) {
            if (IsAnotherColor(letters[i] + number, "black")) {
              kills.push(letters[i] + number);
            }
            break;
          } else {
            moves.push(letters[i] + number);
          }
        }
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (checkIfOccupied(letters[i] + number)) {
            if (IsAnotherColor(letters[i] + number, "black")) {
              kills.push(letters[i] + number);
            }
            break;
          } else {
            moves.push(letters[i] + number);
          }
        }
      }
    }
    if (type === "Knight") {
      let letter = square[0];
      let nextLetter = letters[letters.indexOf(letter) + 1];
      let nextSecondLetter = letters[letters.indexOf(letter) + 2];
      let prevLetter = letters[letters.indexOf(letter) - 1];
      let prevSecondLetter = letters[letters.indexOf(letter) - 2];
      let number = Number(square[1]);
      let nextNumber = number + 1;
      let nextSecondNumber = number + 2;
      let prevNumber = number - 1;
      let prevSecondNumber = number - 2;
      const knightMoves = [
        nextLetter + nextSecondNumber,
        nextSecondLetter + nextNumber,
        nextSecondLetter + prevNumber,
        nextLetter + prevSecondNumber,
        prevLetter + prevSecondNumber,
        prevSecondLetter + prevNumber,
        prevSecondLetter + nextNumber,
        prevLetter + nextSecondNumber,
      ];
      if (color === "white") {
        knightMoves.forEach((m) => {
          if (checkIfOccupied(m)) {
            if (IsAnotherColor(m, "white")) {
              kills.push(m);
            }
          } else {
            moves.push(m);
          }
        });
      } else {
        knightMoves.forEach((m) => {
          if (checkIfOccupied(m)) {
            if (IsAnotherColor(m, "black")) {
              kills.push(m);
            }
          } else {
            moves.push(m);
          }
        });
      }
    }
    if (type === "Bishop") {
      let letter = square[0];
      let number = Number(square[1]);
      if (color === "white") {
        let x = 1;
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number + x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "white")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number + x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "white")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number - x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "white")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number - x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "white")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
      } else {
        let x = 1;
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number + x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "black")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number + x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "black")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) - 1; i > -1; i--) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number - x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "black")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
        x = 1;
        for (let i = letters.indexOf(letter) + 1; i < 8; i++) {
          if (number > 0 && number < 9) {
            let m = letters[i] + (number - x);
            if (checkIfOccupied(m)) {
              if (IsAnotherColor(m, "black")) {
                kills.push(m);
              }
              break;
            } else {
              moves.push(m);
            }
          }
          x++;
        }
      }
    }

    if (type === "King") {
      let letter = square[0];
      let number = Number(square[1]);
      let nextLetter = letters[letters.indexOf(letter) + 1];
      let prevLetter = letters[letters.indexOf(letter) - 1];
      let nextNumber = number + 1;
      let prevNumber = number - 1;
      let kingMoves = [
        nextLetter + nextNumber,
        nextLetter + number,
        nextLetter + prevNumber,
        letter + nextNumber,
        letter + prevNumber,
        prevLetter + nextNumber,
        prevLetter + number,
        prevLetter + prevNumber,
      ];
      if (!set) {
        moves = kingMoves;
      } else {
        kingMoves.forEach((m) => {
          if (checkIfOccupied(m)) {
            if (IsAnotherColor(m, color)) {
              if (!canGetKilled(m, color)) {
                kills.push(m);
              }
            }
          } else {
            if (!canGetKilled(m, color)) {
              moves.push(m);
            }
          }
        });
      }
    }

    if (set) {
      setMoves(moves);
      setKills(kills);
    }
    return { moves, kills };
  }
  function changeTurn() {
    turn === "white" ? setTurn("black") : setTurn("white");
  }
  function move(square) {
    if (moves.includes(square) && figureIsSelected !== null) {
      figures[figures.indexOf(figureIsSelected)].square = square;
      figures[figures.indexOf(figureIsSelected)].isMoved = true;
      figures[figures.indexOf(figureIsSelected)].isSelected = false;

      setFigures(figures);
      setFigureIsSelected(null);
      setMoves([]);
      setKills([]);
      selectFigure();
      changeTurn();
    }
  }
  function kill(square) {
    if (kills.includes(square) && figureIsSelected !== null) {
      figures.forEach((fig) => {
        if (fig.square === square) {
          fig.isDead = true;
          fig.square = "null";
        }
      });
      figures[figures.indexOf(figureIsSelected)].square = square;
      figures[figures.indexOf(figureIsSelected)].isMoved = true;
      figures[figures.indexOf(figureIsSelected)].isSelected = false;

      setFigures(figures);
      setFigureIsSelected(null);
      setMoves([]);
      setKills([]);
      selectFigure();
      changeTurn();
    }
  }
  useEffect(() => {
    if (figureIsSelected !== null) {
      calculateGoingAndKilling(figureIsSelected, true);
    }
  }, [figureIsSelected]);
  useEffect(() => {});
  for (let num = 8; num > 0; num--) {
    for (let letter = 1; letter < 9; letter++) {
      let color = "white";
      if (
        (letter % 2 === 1 && num % 2 === 1) ||
        (letter % 2 === 0 && num % 2 === 0)
      ) {
        color = "black";
      }
      let square = letters[letter - 1] + num;
      squares.push(
        <Square
          key={square}
          id={square}
          color={color}
          pointer={moves.includes(square) ? "pointer" : "auto"}
          onClick={() => {
            move(square);
            kill(square);
          }}
        >
          {figures.map((figure) => {
            if (figure.square === square && !figure.isDead) {
              return (
                <Figure
                  type={figure.type}
                  color={figure.color}
                  isSelected={figure.isSelected}
                  key={figure.square + "figure"}
                  onClick={() => {
                    selectFigure(figure.square, figure.color);
                  }}
                />
              );
            }
          })}
          {figureIsSelected !== null}
          {moves.map((move) => {
            if (move === square) {
              return <MoveBall key={square + "moveball"} />;
            }
          })}
          {figureIsSelected !== null}
          {kills.map((kill) => {
            if (kill === square) {
              return <KillBall key={square + "killball"} />;
            }
          })}
        </Square>
      );
    }
  }
  return <Board>{squares}</Board>;
}

const Board = styled.div`
  width: 95vh;
  height: 95vh;

  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);

  @media screen and (orientation: portrait) {
    width: 100vw;
    height: 100vw;
  }
`;

const Square = styled.div`
  background-color: ${(props) =>
    props.color === "white" ? "#b6b6b6" : "#8d574a"};
  display: grid;
  place-content: center;
  position: relative;
  cursor: ${(props) => props.pointer};
`;

const MoveBall = styled.div`
  width: 101%;
  height: 100%;
  background-color: #24c8245c;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const KillBall = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff000049;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
