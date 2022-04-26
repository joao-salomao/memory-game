import { ReactElement, CSSProperties } from "react";

type HeaderProps = {
  gameIsOver: boolean;
  onClickCreateNewGame: () => void;
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
  onClickCreateNewGame,
}: HeaderProps): ReactElement => (
  <div style={styles}>
    <h1>Memory Game</h1>
    {gameIsOver && (
      <>
        <h2>Game Over!!!</h2>
        <button onClick={onClickCreateNewGame}>Jogar Novamente</button>
      </>
    )}
  </div>
);
