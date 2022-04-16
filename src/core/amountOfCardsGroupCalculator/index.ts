import { InvalidBoardSizeError, AmountOfCardsGroupCalculator } from "types";

export const calculateAmountOfCardsGroup: AmountOfCardsGroupCalculator = (
  size: number
): number => {
  if (size < 1)
    throw new InvalidBoardSizeError(
      "The board size must be greater than zero."
    );

  if (!Number.isInteger(size))
    throw new InvalidBoardSizeError("The board size must be an integer.");

  return size * 2;
};
