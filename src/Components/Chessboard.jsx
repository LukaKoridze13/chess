import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import DrawSquares from "../Hooks/DrawSquares";
import Coords from "../Hooks/Coords";
import GetMoves from "../Hooks/GetMoves";
import ReverseCoords from "../Hooks/ReverseCoords";
import Promotion from "./Promotion";
import SimulateMove from "../Hooks/SimulateMove";
import EndMessage from "./EndMessage";
import { socket } from "../Socket";
import { getRoomRequest } from "../Requests/Requests";

export default function Chessboard(props) {
  const [myColor, setMyColor] = useState("white");
  const [turnColor, setTurnColor] = useState("white");
  const [availableMoves, setAvailableMoves] = useState([]);
  const [availableKills, setAvailableKills] = useState([]);
  const [figureIsSelected, setfigureIsSelected] = useState(false);
  const [castling, setCastling] = useState(false);
  const [promotion, setPromotion] = useState(false);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(props.join);
  const [figures, setFigures] = useState([
    {
      type: "Pawn",
      color: "white",
      row: 1,
      column: 2,
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
    {
      type: "Pawn",
      color: "black",
      row: 1,
      column: 7,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
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
    {
      type: "Rook",
      color: "black",
      row: 1,
      column: 8,
      isSelected: false,
      isDead: false,
      isMoved: false,
    },
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
    if (start) {
      let figureClicked = figures.find(
        (figure) => Coords(figure.row, figure.column) === coords
      );
      unselectAll();
      figureClicked.isSelected = true;
      setfigureIsSelected(figureClicked);
      setFigures([...figures]);
    }
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
      setCastling([]);
    }
    if ((column === 8 || column === 1) && figureIsSelected.type === "Pawn") {
      setPromotion(figureIsSelected);
    }
    figureIsSelected.row = row;
    figureIsSelected.column = column;
    figureIsSelected.isMoved = true;
    isWin();
    isDraw();
    changeTurn();
    if (!promotion) {
      updateOnlineBoard(figures);
    }

    setFigures([...figures]);
  }
  function changeTurn() {
    unselectAll();
    setAvailableKills([]);
    setAvailableMoves([]);
    setfigureIsSelected(false);
  }
  function unselectAll() {
    figures.forEach((figure) => {
      figure.isSelected = false;
    });
  }
  function promote(figure) {
    let newFigure = promotion;
    newFigure.type = figure;
    figures.splice(figures.indexOf(promotion), 1);
    figures.push(newFigure);
    updateOnlineBoard(figures);
    setFigures([...figures]);
    setPromotion(false);
  }
  function isSafe(coords, color) {
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
  function isDraw() {
    // stalemate, no checkmate no legal moves
    let draw = false;
    let figuresList = figures.filter((figure) => figure.color !== turnColor);
    let king = figures.find(
      (figure) => figure.color !== turnColor && figure.type === "King"
    );
    if (isSafe(Coords(king.row, king.column), king.color)) {
      let available = false;
      figuresList.forEach((fig) => {
        let moves = GetMoves(fig, figures);
        moves.allMoves = moves.allMoves.filter((move) => {
          return SimulateMove(figures, fig, move);
        });
        moves.allKills = moves.allKills.filter((move) => {
          return SimulateMove(figures, fig, move);
        });
        if (moves.allMoves.length > 0 || moves.allKills.length > 0) {
          available = true;
        }
      });
      if (!available) {
        draw = true;
      }
    }
    if (draw) {
      setEnd("draw");
    }
    return draw;
    // dead position
    // 50-Move Rule
    // Threefold Repetition
    // Mutual Agreement
    // insuficient figures for checkmate King vs. king
    // King and bishop vs. king
    // King and knight vs. king
    // King and bishop vs. king and bishop of the same color as the opponent's bishop
  }
  function isWin() {
    let win = false;
    let figuresList = figures.filter((figure) => figure.color !== turnColor);
    let king = figures.find(
      (figure) => figure.color !== turnColor && figure.type === "King"
    );
    if (!isSafe(Coords(king.row, king.column), king.color)) {
      let available = false;

      figuresList.forEach((fig) => {
        let moves = GetMoves(fig, figures);
        moves.allMoves = moves.allMoves.filter((move) => {
          return SimulateMove(figures, fig, move);
        });
        moves.allKills = moves.allKills.filter((move) => {
          return SimulateMove(figures, fig, move);
        });
        if (moves.allMoves.length > 0 || moves.allKills.length > 0) {
          available = true;
        }
      });
      if (!available) {
        win = true;
      }
    }
    if (win) {
      setEnd(turnColor);
    }
    return win;
  }
  function isCheck() {
    let checking;
    if (turnColor === "black") {
      checking = "black";
    } else {
      checking = "white";
    }
    let king = figures.find(
      (figure) => figure.color === checking && figure.type === "King"
    );
    return !isSafe(Coords(king.row, king.column), king.color);
  }
  async function onStart() {
    setStart(true);
    let room = await getRoomRequest(props.room);
    let myUser = room.user1.username === props.user ? room.user1 : room.user2;
    setMyColor(myUser.color);
  }
  function updateOnlineBoard(figures) {
    let newColor = turnColor === "white" ? "black" : "white";
    socket.emit("sentUpdate", {
      figures,
      room_id: props.room,
      color: newColor,
    });
  }
  function receivedUpdate(data) {
    setFigures(data.figures);
    setTurnColor(data.color);
  }
  function onEnd(data) {
    setEnd(data);
  }
  useEffect(() => {
    if (end) {
      socket.emit("end", { room_id: props.room, end });
    }
  }, [end]);

  useEffect(() => {
    if (props.join) {
      onStart();
    }
    socket.emit("joinRoom", props.room);
    socket.on("start", onStart);
    socket.on("receivedUpdate", receivedUpdate);
    socket.on("onEnd", onEnd);
    return () => {
      socket.off("onEnd", onEnd);
      socket.off("receivedUpdate", receivedUpdate);
      socket.off("start", onStart);
    };
  }, []);

  useEffect(() => {
    if (figureIsSelected) {
      let moves = GetMoves(figureIsSelected, figures);
      if (figureIsSelected.type === "King") {
        moves.allMoves = moves.allMoves.filter((move) =>
          isSafe(move, figureIsSelected.color)
        );
        moves.allKills = moves.allKills.filter((move) =>
          isSafe(move, figureIsSelected.color)
        );

        moves.castling = moves.castling.filter((castling) => {
          if (
            isSafe(castling.coords, figureIsSelected.color) &&
            isSafe(
              Coords(figureIsSelected.row, figureIsSelected.column),
              figureIsSelected.color
            )
          ) {
            return true;
          } else {
            moves.allMoves.pop();
          }
        });
      }
      if (isCheck()) {
        moves.allMoves = moves.allMoves.filter((move) => {
          return SimulateMove(figures, figureIsSelected, move);
        });
        moves.allKills = moves.allKills.filter((move) => {
          return SimulateMove(figures, figureIsSelected, move);
        });
      }
      setAvailableMoves(moves.allMoves);
      setAvailableKills(moves.allKills);
      setCastling(moves.castling);
    }
  }, [figureIsSelected]);

  return (
    <>
      <Error>Room ID: {props.room}</Error>
      <Board color={myColor}>
        {DrawSquares({
          myColor,
          figures,
          availableMoves,
          availableKills,
          selectFigureToMove,
          move,
          turnColor,
        })}
      </Board>
      {end && <EndMessage end={end} />}
      {promotion && <Promotion color={promotion.color} promote={promote} />}
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

const Error = styled.p`
  font-size: 20px;
  color: #dd074b;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
`;
