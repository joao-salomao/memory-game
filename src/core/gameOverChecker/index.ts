import { Board, GameOverChecker } from "types";

export const gameIsOver: GameOverChecker = (board: Board): boolean =>
  board.every((c) => c.isFound);
