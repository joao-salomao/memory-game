// Data structures
export type Value = any;
export type Card = {
  id: number;
  groupId: number;
  isFound: boolean;
  isMarked: boolean;
  value: Value;
};
export type Board = Array<Card>;

// Functions
export type BoardCreator = (values: Array<Value>) => Board;
export type CardsCreator = (amountOfGroups: number) => Board;
export type CardMarker = (cardToMark: Card, board: Board) => Board;
export type AmountOfCardsGroupCalculator = (size: number) => number;
export type GameOverChecker = (board: Board) => boolean;

// Errors
export class DomainError extends Error {}
export class CardAlreadyMarkedError extends DomainError {}
export class InvalidValuesError extends DomainError {}
