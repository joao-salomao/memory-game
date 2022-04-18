import { ReactElement, useState, useEffect } from "react";
import { useGameHook } from "lib/hooks/useGameHook";
import { COLORS } from "lib/constants";

const App = (): ReactElement => {
  const [boardSize, setBoardSize] = useState(2);
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  useEffect(() => {
    createGame(COLORS);
  }, []);

  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        {gameOver && (
          <>
            <h2>Game Over!!!</h2>
            <button onClick={() => createGame(COLORS)}>Jogar Novamente</button>
          </>
        )}
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
                transition: "background-color .500s",
                backgroundColor:
                  card.isFound || card.isMarked ? card.value : "gray",
              }}
              onClick={() => markCard(card)}
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
