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

export const App = (): ReactElement => {
  const { board, boardIsCreated, gameOver, createGame, markCard } =
    useGameHook();

  const { currentStage, currentStageGroup, nextStage, nextStageGroup } = useStagesManagerHook();

  useEffect(() => {
    createGame(currentStage.values);
  }, [currentStage, createGame]);

  return (
    <div style={styles}>
      <Header
        gameIsOver={gameOver}
        currentStageName={currentStage.name}
        currentStageGroupName={currentStageGroup.name}
        onClickNextStage={nextStage}
        onClickChangeStageGroup={nextStageGroup}
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
