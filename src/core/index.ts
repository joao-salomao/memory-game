export type Card = {
  id: number;
  groupId: number;
  isFound: boolean;
  isMarked: boolean;
};
export type Board = Array<Card>;
export type BoardMaker = (size: number) => Board;
export type CardsMaker = (amount: number) => Board;
export type CardMarker = (cardId: Card["id"], board: Board) => Board;
export type CardsAmountCalculator = (size: number) => number;
export type GameOverChecker = (board: Board) => boolean;
export class DomainError extends Error {}

export const gameIsOver: GameOverChecker = (board: Board): boolean =>
  board.every((c) => c.isFound);

export const markCard: CardMarker = (
  cardId: Card["id"],
  board: Board
): Board => {
  const cardToMark = board.find((c) => c.id === cardId);

  const hasOtherCardFromOtherGroupMarked = board.find(
    (c) => c.isMarked && !c.isFound && c.groupId !== cardToMark?.groupId
  );

  if (hasOtherCardFromOtherGroupMarked) {
    return board.map((c) => ({ ...c, isMarked: c.isFound || false }));
  }

  let newBoard = board.map((card) => {
    const newCard = { ...card };
    if (newCard.id === cardId) newCard.isMarked = true;
    return newCard;
  });

  const allGroupMembersAreMarked = newBoard
    .filter((c) => c.groupId === cardToMark?.groupId)
    .every((c) => c.isMarked);

  if (allGroupMembersAreMarked) {
    newBoard = newBoard.map((card) => {
      const newCard = { ...card };
      if (newCard.groupId === cardToMark?.groupId) newCard.isFound = true;
      return newCard;
    });
  }

  return newBoard;
};

export const createBoard: BoardMaker = (size: number): Board => {
  const amount = getCardsAmountToGenerate(size);
  return createCards(amount);
};

const getCardsAmountToGenerate: CardsAmountCalculator = (
  size: number
): number => {
  if (size < 1)
    throw new DomainError("The board size must be greater than zero.");

  return size * 2;
};

const createCards: CardsMaker = (amount: number): Board => {
  const cards = [];

  for (let i = 0; i < amount; i = i + 2) {
    cards.push({
      id: i,
      groupId: i,
      isFound: false,
      isMarked: false,
    });

    cards.push({
      id: i + 1,
      groupId: i,
      isFound: false,
      isMarked: false,
    });
  }

  return cards;
};
