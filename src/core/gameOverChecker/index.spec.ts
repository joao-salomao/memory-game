import { Board } from "types";
import { gameIsOver } from "core/gameOverChecker";

describe("Game Over Checker", () => {
  it('should return "true" when the game is over', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: true, isMarked: true },
      { id: 2, groupId: 1, isFound: true, isMarked: true },
      { id: 3, groupId: 2, isFound: true, isMarked: true },
      { id: 4, groupId: 2, isFound: true, isMarked: true },
    ];

    const result = gameIsOver(board);

    expect(result).toBeTruthy();
  });

  it('should return "false" when the game is not over', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: false },
      { id: 2, groupId: 1, isFound: false, isMarked: false },
      { id: 3, groupId: 2, isFound: true, isMarked: true },
      { id: 4, groupId: 2, isFound: true, isMarked: true },
    ];

    const result = gameIsOver(board);

    expect(result).toBeFalsy();
  });
});