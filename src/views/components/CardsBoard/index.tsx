import { ReactElement, ReactNode, CSSProperties } from "react";

type CardsBoardProps = {
  children: ReactNode;
};

const styles: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#F0F0FF",
  padding: "50px",
};

export const CardsBoard = ({ children }: CardsBoardProps): ReactElement => {
  return <div style={styles}>{children}</div>;
};
