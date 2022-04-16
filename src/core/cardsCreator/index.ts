import { Board, CardsCreator, InvalidAmountOfGroupsError } from "types";

export const createCards: CardsCreator = (amountOfGroups: number): Board => {
  if (!Number.isInteger(amountOfGroups))
    throw new InvalidAmountOfGroupsError(
      "The amount of groups must be an integer"
    );

  if (amountOfGroups < 1)
    throw new InvalidAmountOfGroupsError(
      "The amount of groups must greater or equal to zero"
    );

  const cards = [];

  for (let i = 0; i < amountOfGroups; i++) {
    cards.push({
      id: cards.length + 1,
      groupId: i,
      isFound: false,
      isMarked: false,
    });

    cards.push({
      id: cards.length + 1,
      groupId: i,
      isFound: false,
      isMarked: false,
    });
  }

  return cards;
};
