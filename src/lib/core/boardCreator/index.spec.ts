import { createBoard } from ".";
import * as shuffleArrayModule from "lib/utils/shuffleArray";
import { InvalidValuesError } from "lib/types";

describe("Board Creator", () => {
  it("should throw an error when the collection is empty", () => {
    expect(() => createBoard([])).toThrow(InvalidValuesError);
  });

  it("should create the board correctly", () => {
    const shuffleArrayMock = jest.fn((v) => v);
    jest
      .spyOn(shuffleArrayModule, "shuffleArray")
      .mockImplementation(shuffleArrayMock);

    const result = createBoard([{ title: "A" }, { title: "B" }]);

    const expectedBoard = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "A" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "A" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "B" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "B" },
      },
    ];

    expect(shuffleArrayMock).toBeCalledWith(expectedBoard);
    expect(expectedBoard).toEqual(result);
  });
});
