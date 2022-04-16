import { Board, CardsCreator } from "types";

export const createCards: CardsCreator = (amountOfGroups: number): Board => {
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
