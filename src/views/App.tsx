import { ReactElement, CSSProperties, useEffect } from "react";
import { useGameHook } from "lib/hooks/useGameHook";
import { ENUMERATED_COLORS } from "lib/constants";
import { CardsBoard } from "views/components/CardsBoard";
import { ColorCard } from "views/components/Card/ColorCard";
import { Header } from "views/components/Header";

const styles: CSSProperties = {
  backgroundColor: "#F0F0FF",
  maxWidth: "700px",
  margin: "auto",
};

const App = (): ReactElement => {
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  useEffect(() => {
    createGame(ENUMERATED_COLORS);
  }, [createGame]);

  return (
    <div style={styles}>
      <Header
        gameIsOver={gameOver}
        onClickCreateNewGame={() => createGame(ENUMERATED_COLORS)}
      />
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
