import { ReactElement, CSSProperties } from "react";
import { Card as CardItem } from "lib/types";

type ColorCardProps = {
  card: CardItem;
  onClick: (card: CardItem) => void;
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

export const Card = ({ card, onClick }: ColorCardProps): ReactElement => {
  const background = card.isFound || card.isMarked ? (card.value.color || `url(${card.value.img})`) : "gray";

  return (
    <div
      style={{
        ...styles,
        background,
      }}
      onClick={() => onClick(card)}
    >
      {card.value.title && <p
        style={{
          transitionDelay: ".500s",
          display: card.isFound || card.isMarked ? "block" : "none",
        }}
      >
        {card.value.title}
      </p>}
    </div>
  );
};

