import { Board, GameOverChecker } from "lib/types";

export const gameIsOver: GameOverChecker = (board: Board): boolean =>
  board.every((c) => c.isFound);
