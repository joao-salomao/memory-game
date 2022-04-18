import { CardMarker, Card, Board, CardAlreadyMarkedError } from "lib/types";

export const markCard: CardMarker = (cardToMark: Card, board: Board): Board => {
  if (cardToMark.isMarked) {
    throw new CardAlreadyMarkedError("The card is already marked");
  }

  return board.map((card) => {
    const newCard = { ...card };

    if (card.id === cardToMark.id) {
      newCard.isMarked = true;
    }

    return newCard;
  });
};

export const setCardsFromGroupAsFounded = (
  groupId: Card["groupId"],
  board: Board
): Board => {
  return board.map((card) => {
    const newCard = { ...card };

    if (card.groupId === groupId) {
      newCard.isFound = true;
    }

    return newCard;
  });
};
