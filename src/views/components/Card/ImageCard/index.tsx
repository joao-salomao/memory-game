import { ReactElement, CSSProperties } from "react";
import { CardWithImage } from "lib/types";

type ImageCardProps = {
  card: CardWithImage;
  onClick: (card: CardWithImage) => void;
};

const styles: CSSProperties = {
  maxHeight: "100%",
  maxWidth: "100%",
  height: "150px",
  width: "150px",
  margin: "3px",
  display: "flex",
  cursor: "pointer",
  fontSize: "40px",
  alignItems: "center",
  borderRadius: "10px",
  justifyContent: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  transition: "background-color .500s",
};

export const ImageCard = ({ card, onClick }: ImageCardProps): ReactElement => {
  return (
    <div
      style={{
        ...styles,
        backgroundImage:
          card.isFound || card.isMarked ? `url(${card.value.img})` : undefined,
        backgroundColor: !card.isFound && !card.isMarked ? "gray" : undefined,
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
