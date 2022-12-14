import { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "../helpers";

const styleBackground = {
    backgroundColor: 'white',
    width: '650px',
    display: 'flexwrap',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
};

const styleGame = {
    width: '200px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Gill Sans',
};

const startButton = {
    backgroundColor: 'black',
    color: 'white',
    fontSize: '16px',
    padding: '10px 60px',
    borderRadius: '5px',
    margin: '10px 0px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

  const handleClick = i => {
    const boardCopy = [...board];
    // If user clicks an occupied square or if game is won, then return
    if (winner || boardCopy[i]) return;
    // Put an X (baguettes) or an O (boule) in the clicked square
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

    const renderMoves = () => (
        <button style={startButton} onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )

    return (
        <>
        <div style={styleBackground}>
          <h1>Baguettes & Boules</h1>
          <div>
            <Board squares={board} onClick={handleClick} />
            <div style={styleGame}>
                <p>
                    {winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}
                </p>
                {renderMoves()}
            </div>
          </div>
        </div>
        </>
    )
}

export default Game;