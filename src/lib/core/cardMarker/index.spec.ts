import { markCard, setCardsFromGroupAsFounded } from ".";
import { Board, CardAlreadyMarkedError } from "lib/types";

describe("Card Marker", () => {
  it('should set the property "isMarked" of the card to true', () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
    ];

    const result: Board = markCard(board[2], board);

    const expectedBoard: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
    ];

    expect(result).toEqual(expectedBoard);
  });

  it("should throw an error if the card is already marked", () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
    ];

    expect(() => markCard(board[0], board)).toThrow(CardAlreadyMarkedError);
  });
});

describe("Set Cards From Group As Founded", () => {
  it("should set all cards from the group as founded", () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
    ];

    const result: Board = setCardsFromGroupAsFounded(1, board);

    const expectedBoard: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: true,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 2,
        groupId: 1,
        isFound: true,
        isMarked: true,
        value: { title: "Some title" },
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: { title: "Some title" },
      },
    ];

    expect(result).toEqual(expectedBoard);
  });
});
