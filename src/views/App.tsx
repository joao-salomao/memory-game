import { ReactElement, useEffect } from "react";
import { useGameHook } from "lib/hooks/useGameHook";
import { ENUMERATED_COLORS } from "lib/constants";
import { CardsBoard } from "views/components/CardsBoard";
import { ColorCard } from "views/components/Card/ColorCard";

const App = (): ReactElement => {
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  useEffect(() => {
    createGame(ENUMERATED_COLORS);
  }, [createGame]);

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
            <button onClick={() => createGame(ENUMERATED_COLORS)}>
              Jogar Novamente
            </button>
          </>
        )}
      </section>
      <CardsBoard>
        {boardIsCreated &&
          board.map((card) => (
            <ColorCard key={card.id} card={card} onClick={markCard} />
          ))}
      </CardsBoard>
    </div>
  );
};

export { App };
