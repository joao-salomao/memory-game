import { ReactElement, useState, useEffect } from "react";
import { useGameHook } from "hooks/useGameHook";

const App = (): ReactElement => {
  const [boardSize, setBoardSize] = useState(6);
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  useEffect(() => {
    setTimeout(() => createGame(6), 500);
  }, []);

  return (
    <div>
      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h1>Memory Game</h1>
          <div>
            <label>
              <b>Tamanho do Board</b>
            </label>
            <br />
            <input
              value={boardSize}
              onChange={(e) => setBoardSize(Number(e.target.value))}
            />
            <button onClick={() => createGame(boardSize)}>Criar jogo</button>
          </div>
        </div>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {gameOver && <h2>Game Over!!!</h2>}
      </section>
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {boardIsCreated &&
          board.map((card) => (
            <div
              key={card.id}
              style={{
                height: "150px",
                width: "150px",
                margin: "3px",
                cursor: "pointer",
                transition: "background-color 1s",
                backgroundColor: card.isFound
                  ? "blue"
                  : card.isMarked
                  ? "red"
                  : "gray",
              }}
              onClick={() => markCard(card.id)}
            >
              <p>ID: {card.id}</p>
              <p>Group ID: {card.groupId}</p>
              <p>Is Marked: {card.isMarked ? "Yes" : "No"}</p>
              <p>Is Found: {card.isFound ? "Yes" : "No"}</p>
            </div>
          ))}
      </section>
    </div>
  );
};

export { App };
