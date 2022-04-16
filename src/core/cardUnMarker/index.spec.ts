import { Board } from "types";
import { unMarkAllNotFoundAndMarkedCards } from ".";

describe("Un mark All Not Found And Marked Cards", () => {
  it("should un mark all not found and marked cards", () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: true },
      { id: 2, groupId: 1, isFound: false, isMarked: false },
      { id: 3, groupId: 2, isFound: false, isMarked: true },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
      { id: 5, groupId: 3, isFound: true, isMarked: true },
      { id: 6, groupId: 3, isFound: true, isMarked: true },
    ];

    const result: Board = unMarkAllNotFoundAndMarkedCards(board);

    const expectedBoard: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: false },
      { id: 2, groupId: 1, isFound: false, isMarked: false },
      { id: 3, groupId: 2, isFound: false, isMarked: false },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
      { id: 5, groupId: 3, isFound: true, isMarked: true },
      { id: 6, groupId: 3, isFound: true, isMarked: true },
    ];

    expect(result).toEqual(expectedBoard);
  });
});
