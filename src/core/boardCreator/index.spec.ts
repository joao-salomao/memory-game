import { createBoard } from ".";
import { InvalidValuesError } from "types";

describe("Board Creator", () => {
  it("should throw an error when the collection is empty", () => {
    expect(() => createBoard([])).toThrow(InvalidValuesError);
  });

  it("should create the board correctly", () => {
    const result = createBoard(["A", "B"]);

    const expectedBoard = [
      { id: 1, groupId: 1, isFound: false, isMarked: false, value: "A" },
      { id: 2, groupId: 1, isFound: false, isMarked: false, value: "A" },
      { id: 3, groupId: 2, isFound: false, isMarked: false, value: "B" },
      { id: 4, groupId: 2, isFound: false, isMarked: false, value: "B" },
    ];

    expect(expectedBoard).toEqual(result);
  });
});
