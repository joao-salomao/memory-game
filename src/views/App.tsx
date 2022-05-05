import { ReactElement, CSSProperties, useEffect } from "react";
import { useGameHook } from "lib/hooks/useGameHook";
import { useStagesManagerHook } from "lib/hooks/useStagesManagerHook";
import { CardsBoard } from "views/components/CardsBoard";
import { ColorCard } from "views/components/Card/ColorCard";
import { ImageCard } from "views/components/Card/ImageCard";
import { Header } from "views/components/Header";

const styles: CSSProperties = {
  backgroundColor: "#F0F0FF",
  maxWidth: "700px",
  margin: "auto",
};

const App = (): ReactElement => {
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  const { currentStage, nextStage } = useStagesManagerHook();

  useEffect(() => {
    createGame(currentStage.values);
  }, [currentStage, createGame]);

  return (
    <div style={styles}>
      <Header
        gameIsOver={gameOver}
        datasetName={currentStage.name}
        onClickNextStage={nextStage}
      />
      <CardsBoard>
        {
          // Implement a better solution
          boardIsCreated &&
            board.map((card) =>
              card.value?.color ? (
                <ColorCard key={card.id} card={card} onClick={markCard} />
              ) : (
                <ImageCard key={card.id} card={card} onClick={markCard} />
              )
            )
        }
      </CardsBoard>
    </div>
  );
};

export { App };
