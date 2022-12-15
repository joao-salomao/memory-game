import { ReactElement, CSSProperties } from "react";
import { Stage, StageGroup } from 'lib/types'

type HeaderProps = {
  gameIsOver: boolean;
  currentStageName: Stage['name'];
  currentStageGroupName: StageGroup['name'];
  onClickNextStage: () => void;
  onClickChangeStageGroup: () => void;
};

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
};

export const Header = ({
  gameIsOver,
  currentStageName,
  currentStageGroupName,
  onClickNextStage,
  onClickChangeStageGroup,
}: HeaderProps): ReactElement => (
  <div style={styles}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>Memory Game - by João Salomão</h1>

    </div>
    <div>
      <h2 style={{ marginBottom: 0 }}>{`${currentStageGroupName}: ${currentStageName}`}</h2>
      <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={onClickChangeStageGroup}>Change theme</span>
    </div>
    {
      gameIsOver && (
        <>
          <h2>Congratulations!</h2>
          <button onClick={onClickNextStage}>Play next stage</button>
        </>
      )
    }
  </div>
);
