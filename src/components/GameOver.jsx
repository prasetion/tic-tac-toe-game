import React from "react";

const GameOver = ({ winner, handleRestart }) => {
  return (
    <div id="game-over">
      <h2>GameOver</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>it&apos;s a draw!</p>}
      <p>
        <button onClick={handleRestart}>Rematch!</button>
      </p>
    </div>
  );
};

export default GameOver;
