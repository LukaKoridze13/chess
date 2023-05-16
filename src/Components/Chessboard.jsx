import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Figure from "./Figure";

const letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Chessboard() {
  const squares = [];
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
  ]);
  const [moves, setMoves] = useState([]);
  const [kills, setKills] = useState([]);
  const [figureIsSelected, setFigureIsSelected] = useState(null);
  function selectFigure(square, color) {
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
  function calculateGoingAndKilling(figure) {
    let moves = [];
    let kills = [];
    const { type, square, color, isMoved } = figure;
    if (type === "Pawn") {
      if (color === "white") {
        let letter = square[0];
        let nextLetter = letters[letters.indexOf(letter) + 1];
        let prevLetter = letters[letters.indexOf(letter) - 1];
        let number = Number(square[1]);

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
      if (color === "black") {
        let letter = square[0];
        let nextLetter = letters[letters.indexOf(letter) + 1];
        let prevLetter = letters[letters.indexOf(letter) - 1];
        let number = Number(square[1]);

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
    setMoves(moves);
    setKills(kills);
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
    }
  }
  useEffect(() => {
    if (figureIsSelected !== null) {
      calculateGoingAndKilling(figureIsSelected);
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
