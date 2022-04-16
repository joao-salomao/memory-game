import { calculateAmountOfCardsGroup } from "core/amountOfCardsGroupCalculator";
import { createCards } from "core/cardsCreator";
import { Board, BoardCreator } from "types";

export const createBoard: BoardCreator = (size: number): Board => {
  const amount = calculateAmountOfCardsGroup(size);
  return createCards(amount);
};
