import { Board, Card } from "lib/types";

export const hasCardsFromAnotherGroupMarkedAndNotFound = (
  groupId: Card["groupId"],
  board: Board
): boolean => {
  return board.some(
    (card) => card.groupId !== groupId && card.isMarked && !card.isFound
  );
};

export const allCardsFromTheGroupAreMarked = (
  groupId: Card["groupId"],
  board: Board
): boolean => {
  return board
    .filter((card) => card.groupId === groupId)
    .every((card) => card.isMarked);
};
