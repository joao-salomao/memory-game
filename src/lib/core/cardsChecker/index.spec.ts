import {
  allCardsFromTheGroupAreMarked,
  hasCardsFromAnotherGroupMarkedAndNotFound,
} from ".";
import { Board } from "lib/types";

describe("Has cards from another group marked and not found checker", () => {
  it('should return "false" when there is not cards from another group marked and not found checker', () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
    ];

    const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(1, board);

    expect(result).toBeFalsy();
  });

  it('should return "true" when there is cards from another group marked and not found checker', () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
    ];

    const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(1, board);

    expect(result).toBeTruthy();
  });
});

describe("All Cards From The Group Are Marked Checker", () => {
  it('should return "true" when all cards from the group are marked', () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
    ];

    const result: boolean = allCardsFromTheGroupAreMarked(1, board);

    expect(result).toBeTruthy();
  });

  it('should return "false" when all cards from the group are not marked', () => {
    const board: Board = [
      {
        id: 1,
        groupId: 1,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 2,
        groupId: 1,
        isFound: false,
        isMarked: true,
        value: {},
      },
      {
        id: 3,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
      {
        id: 4,
        groupId: 2,
        isFound: false,
        isMarked: false,
        value: {},
      },
    ];

    const result: boolean = allCardsFromTheGroupAreMarked(1, board);

    expect(result).toBeFalsy();
  });
});
