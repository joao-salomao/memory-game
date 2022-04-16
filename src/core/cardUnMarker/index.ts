import { Board } from "types";

export const unMarkAllNotFoundAndMarkedCards = (board: Board): Board => {
  return board.map((card) => {
    const newCard = { ...card };

    if (newCard.isMarked && !card.isFound) {
      newCard.isMarked = false;
    }

    return newCard;
  });
};
