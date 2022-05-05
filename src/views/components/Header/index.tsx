import { ReactElement, CSSProperties } from "react";

type HeaderProps = {
  datasetName: string;
  gameIsOver: boolean;
  onClickNextStage: () => void;
};

const styles: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
};

export const Header = ({
  datasetName,
  gameIsOver,
  onClickNextStage,
}: HeaderProps): ReactElement => (
  <div style={styles}>
    <h1>Memory Game</h1>
    <h2>{datasetName}</h2>
    {gameIsOver && (
      <>
        <h2>Congratulations!</h2>
        <button onClick={onClickNextStage}>Play next stage</button>
      </>
    )}
  </div>
);
