import {
  allCardsFromTheGroupAreMarked,
  hasCardsFromAnotherGroupMarkedAndNotFound,
} from ".";
import { Board } from "types";

describe("Has cards from another group marked and not found checker", () => {
  it('should return "false" when there is not cards from another group marked and not found checker', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: true },
      { id: 2, groupId: 1, isFound: false, isMarked: false },
      { id: 3, groupId: 2, isFound: false, isMarked: false },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
    ];

    const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(1, board);

    expect(result).toBeFalsy();
  });

  it('should return "true" when there is cards from another group marked and not found checker', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: true },
      { id: 2, groupId: 1, isFound: false, isMarked: false },
      { id: 3, groupId: 2, isFound: false, isMarked: true },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
    ];

    const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(1, board);

    expect(result).toBeTruthy();
  });
});

describe("All Cards From The Group Are Marked Checker", () => {
  it('should return "true" when all cards from the group are marked', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: true },
      { id: 2, groupId: 1, isFound: false, isMarked: true },
      { id: 3, groupId: 2, isFound: false, isMarked: false },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
    ];

    const result: boolean = allCardsFromTheGroupAreMarked(1, board);

    expect(result).toBeTruthy();
  });

  it('should return "false" when all cards from the group are not marked', () => {
    const board: Board = [
      { id: 1, groupId: 1, isFound: false, isMarked: false },
      { id: 2, groupId: 1, isFound: false, isMarked: true },
      { id: 3, groupId: 2, isFound: false, isMarked: false },
      { id: 4, groupId: 2, isFound: false, isMarked: false },
    ];

    const result: boolean = allCardsFromTheGroupAreMarked(1, board);

    expect(result).toBeFalsy();
  });
});
