import { ReactElement, CSSProperties } from "react";
import { CardWithEnumeratedColor } from "lib/types";

type ColorCardProps = {
  card: CardWithEnumeratedColor;
  onClick: (card: CardWithEnumeratedColor) => void;
};

const styles: CSSProperties = {
  height: "150px",
  width: "150px",
  margin: "3px",
  display: "flex",
  cursor: "pointer",
  fontSize: "40px",
  alignItems: "center",
  borderRadius: "10px",
  justifyContent: "center",
  transition: "background-color .500s",
};

export const ColorCard = ({ card, onClick }: ColorCardProps): ReactElement => {
  return (
    <div
      style={{
        ...styles,
        backgroundColor:
          card.isFound || card.isMarked ? card.value.color : "gray",
      }}
      onClick={() => onClick(card)}
    >
      <p
        style={{
          transitionDelay: ".500s",
          display: card.isFound || card.isMarked ? "block" : "none",
        }}
      >
        {card.value.number}
      </p>
    </div>
  );
};
