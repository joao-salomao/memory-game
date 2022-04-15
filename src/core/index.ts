// Game types
export type Card = {
  id: number;
  groupId: number;
  isFound: boolean;
  isMarked: boolean;
};
export type Board = Array<Card>;

// Handlers
export type BoardCreator = (size: number) => Board;
export type CardsCreator = (amount: number) => Board;
export type CardMarker = (cardId: Card["id"], board: Board) => Board;
export type CardsAmountCalculator = (size: number) => number;
export type GameOverChecker = (board: Board) => boolean;

// Errors
export class DomainError extends Error {}
export class CardAlreadyMarkedError extends DomainError {}
export class InvalidBoardSizeError extends DomainError {}

export const gameIsOver: GameOverChecker = (board: Board): boolean =>
  board.every((c) => c.isFound);

export const createBoard: BoardCreator = (size: number): Board => {
  const amount = getCardsAmountToGenerate(size);
  return createCards(amount);
};

const getCardsAmountToGenerate: CardsAmountCalculator = (
  size: number
): number => {
  if (size < 1)
    throw new InvalidBoardSizeError(
      "The board size must be greater than zero."
    );

  return size * 2;
};

const createCards: CardsCreator = (amount: number): Board => {
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

export const markCard: CardMarker = (
  cardId: Card["id"],
  board: Board
): Board => {
  if (cardIsAlreadyMarkedChecker(cardId, board)) {
    throw new CardAlreadyMarkedError("The card is already marked");
  }

  return board.map((card) => {
    const newCard = { ...card };

    if (card.id === cardId) {
      newCard.isMarked = true;
    }

    return newCard;
  });
};

const cardIsAlreadyMarkedChecker = (
  cardId: Card["id"],
  board: Board
): boolean => {
  return board.some((card) => card.id === cardId && card.isMarked);
};

export const hasCardsFromAnotherGroupMarkedAndNotFound = (
  groupId: Card["groupId"],
  board: Board
): boolean => {
  return board.some(
    (card) => card.groupId !== groupId && card.isMarked && !card.isFound
  );
};

export const unMarkAllNotFoundAndMarkedCards = (board: Board): Board => {
  return board.map((card) => {
    const newCard = { ...card };

    if (newCard.isMarked && !card.isFound) {
      newCard.isMarked = false;
    }

    return newCard;
  });
};

export const allCardsFromTheGroupAreMarked = (
  groupId: Card["groupId"],
  board: Board
): boolean => {
  return board
    .filter((card) => card.groupId === groupId)
    .every((card) => card.isMarked);
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
