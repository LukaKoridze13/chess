export default function DrawSquares() {
  const squares = [];
  
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
}
