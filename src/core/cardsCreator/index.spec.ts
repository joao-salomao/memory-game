import { createCards } from ".";

describe("Cards Creator", () => {
  it("should create the board with right amount of cards", () => {
    const board1 = createCards(1);
    const board2 = createCards(2);
    const board3 = createCards(3);
    const board4 = createCards(4);

    expect(board1.length).toBe(2);
    expect(board2.length).toBe(4);
    expect(board3.length).toBe(6);
    expect(board4.length).toBe(8);
  });

  it("should create cards with the right properties", () => {
    const board = createCards(3);

    const expectedBoard = [
      { id: 1, groupId: 0, isFound: false, isMarked: false },
      { id: 2, groupId: 0, isFound: false, isMarked: false },
      { id: 3, groupId: 1, isFound: false, isMarked: false },
      { id: 4, groupId: 1, isFound: false, isMarked: false },
      { id: 5, groupId: 2, isFound: false, isMarked: false },
      { id: 6, groupId: 2, isFound: false, isMarked: false },
    ];

    expect(board).toEqual(expectedBoard);
  });
});
