import { ReactElement, CSSProperties, useEffect } from "react";
import { useGameHook } from "lib/hooks/useGameHook";
import { useStagesManagerHook } from "lib/hooks/useStagesManagerHook";
import { CardsBoard } from "views/components/CardsBoard";
import { Header } from "views/components/Header";
import { Card } from "views/components/Card";

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
          boardIsCreated && board.map(
            (card) => <Card key={card.id} card={card} onClick={markCard} />
          )
        }
      </CardsBoard>
    </div>
  );
};

export { App };
