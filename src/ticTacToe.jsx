import React, { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return <button className="square" onClick={onSquareClick}>{value}</button>;
};
const Board = ({ squares, xNext, onPlay }) => {
  const handleClick = (i) => {
    if(calculateWinner(squares) ||squares[i]) {
        return;
    }
    const nextSquares = [...squares];
    if (xNext) {
        nextSquares[i] = 'X';
    } else {
        nextSquares[i] = 'O'
    }
    onPlay(nextSquares)
  };

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xNext ? "X" : "O");
  }

  return (
    <>
    <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

const TicTacToeGame = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xNext, setXNext] = useState(true);

  const handlePlay = (nextSquares) => {
    setSquares(nextSquares);
    setXNext(!xNext);
  };
  return (
    <div className="game">
      <div className="board-game">
        <Board squares={squares} xNext={xNext} onPlay={handlePlay} />
      </div>
    </div>
  );
};

export default TicTacToeGame;

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  