import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import DrawSquares from "../Hooks/DrawSquares";
import Coords from "../Hooks/Coords";
import GetMoves from "../Hooks/GetMoves";
import ReverseCoords from "../Hooks/ReverseCoords";
import Promotion from "./Promotion";
export default function Chessboard() {
  const [myColor, setMyColor] = useState("white");
  const [turnColor, setTurnColor] = useState("white");
  const [availableMoves, setAvailableMoves] = useState([]);
  const [availableKills, setAvailableKills] = useState([]);
  const [figureIsSelected, setfigureIsSelected] = useState(false);
  const [castling, setCastling] = useState(false);
  const [promotion, setPromotion] = useState(false);
  const [figures, setFigures] = useState([
    {
      type: "Pawn",
      color: "white",
      row: 1,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      row: 2,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      row: 3,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
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
      color: "white",
      row: 5,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      row: 6,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      row: 7,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "white",
      row: 8,
      column: 2,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // -----------
    // {
    //   type: "Pawn",
    //   color: "black",
    //   row: 1,
    //   column: 7,
    //   isSelected: false,
    //   isDead: false,
    //   isMoved: false,
    // },
    {
      type: "Pawn",
      color: "black",
      row: 2,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      row: 3,
      column: 7,
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
      type: "Pawn",
      color: "black",
      row: 5,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      row: 6,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      row: 7,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Pawn",
      color: "black",
      row: 8,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // ------------
    {
      type: "Rook",
      color: "white",
      row: 1,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Rook",
      color: "white",
      row: 8,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // {
    //   type: "Rook",
    //   color: "black",
    //   row: 1,
    //   column: 8,
    //   isSelected: false,
    //   isDead: false,
    //   isMoved: false,
    // },
    {
      type: "Rook",
      color: "black",
      row: 8,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // -----
    {
      type: "Knight",
      color: "white",
      row: 2,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "white",
      row: 7,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "black",
      row: 2,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Knight",
      color: "black",
      row: 7,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // ----
    {
      type: "Bishop",
      color: "white",
      row: 3,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "white",
      row: 6,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "black",
      row: 3,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Bishop",
      color: "black",
      row: 6,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // -----
    {
      type: "Queen",
      color: "white",
      row: 4,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "Queen",
      color: "black",
      row: 4,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    // ----
    {
      type: "King",
      color: "white",
      row: 5,
      column: 1,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
    {
      type: "King",
      color: "black",
      row: 5,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
  ]);

  function selectFigureToMove(coords) {
    let figureClicked = figures.find(
      (figure) => Coords(figure.row, figure.column) === coords
    );
    unselectAll();
    figureClicked.isSelected = true;
    setfigureIsSelected(figureClicked);
    setFigures([...figures]);
  }

  function move(row, column) {
    let figureIsKilled = figures.find(
      (figure) => figure.row === row && figure.column === column
    );
    if (figureIsKilled) {
      figures.splice(figures.indexOf(figureIsKilled), 1);
    }
    let castlingDone = false;
    castling.forEach((castling) => {
      if (castling.coords === Coords(row, column)) {
        castlingDone = castling;
      }
    });
    if (castlingDone) {
      let row = ReverseCoords(castlingDone.coords).row;
      if (row + 1 === 3) {
        figures[figures.indexOf(castlingDone.rook)].row = row + 1;
      } else {
        figures[figures.indexOf(castlingDone.rook)].row = row - 1;
      }
    }
    if ((column === 8 || column === 1) && figureIsSelected.type === "Pawn") {
      setPromotion(figureIsSelected.color);
    }
    figureIsSelected.row = row;
    figureIsSelected.column = column;
    figureIsSelected.isMoved = true;
    setFigures([...figures]);
    changeTurn();
  }

  function changeTurn() {
    turnColor === "white" ? setTurnColor("black") : setTurnColor("white");
    // myColor === "white" ? setMyColor("black") : setMyColor("white");
    unselectAll();
    setAvailableKills([]);
    setAvailableMoves([]);
    setCastling([]);
    setfigureIsSelected(false);
  }

  function unselectAll() {
    figures.forEach((figure) => {
      figure.isSelected = false;
    });
  }

  useEffect(() => {
    if (figureIsSelected) {
      let moves = GetMoves(figureIsSelected, figures);
      setAvailableMoves(moves.allMoves);
      setAvailableKills(moves.allKills);
      setCastling(moves.castling);
    }
  }, [figureIsSelected]);
  // useEffect(() => {
  //   console.log(figures);
  // }, [turnColor]);

  return (
    <>
      <Board color={myColor}>
        {DrawSquares(
          myColor,
          figures,
          availableMoves,
          availableKills,
          selectFigureToMove,
          move,
          turnColor
        )}
      </Board>
      {promotion && <Promotion color={promotion} />}
    </>
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
