// Data structures
export type Card = {
  id: number;
  groupId: number;
  isFound: boolean;
  isMarked: boolean;
  value: CardInfo;
};
export type CardInfo = {
  title?: string;
  img?: string;
  color?: string;
}; 
export type Board = Card[];
export type Stage = {
  name: string;
  values: CardInfo[];
};

// Functions
export type BoardCreator = (values: Array<CardInfo>) => Board;
export type CardsCreator = (amountOfGroups: number) => Board;
export type CardMarker = (cardToMark: Card, board: Board) => Board;
export type AmountOfCardsGroupCalculator = (size: number) => number;
export type GameOverChecker = (board: Board) => boolean;

// Errors
export class DomainError extends Error {}
export class CardAlreadyMarkedError extends DomainError {}
export class InvalidValuesError extends DomainError {}
