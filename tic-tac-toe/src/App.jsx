import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState(true);

  // button game
  function HandleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setIsNext(!xIsNext);
  }
  // button game

  const winner = calculateWinner(squares);
  console.log(winner);

  return (
    <>
      <div className="board">
        <Square value={squares[0]} onSquareClick={() => HandleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => HandleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => HandleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => HandleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => HandleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => HandleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => HandleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => HandleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => HandleClick(8)} />
      </div>
      <h1>Pemenangnya adalah ={winner}</h1>
    </>
  );
}

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
  return false;
}
