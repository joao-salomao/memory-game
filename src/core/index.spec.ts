import {
  createBoard,
  markCard,
  gameIsOver,
  unMarkAllNotFoundAndMarkedCards,
  hasCardsFromAnotherGroupMarkedAndNotFound,
  allCardsFromTheGroupAreMarked,
  setCardsFromGroupAsFounded,
  Board,
  InvalidBoardSizeError,
  CardAlreadyMarkedError,
} from ".";

describe("Core Module", () => {
  describe("Board Creator", () => {
    it("should throw an error when the board size was less than one", () => {
      const board = () => createBoard(0);
      expect(board).toThrow(InvalidBoardSizeError);
    });

    test("the amount of cards on the board should be the double of the provided size", () => {
      const board1 = createBoard(1);
      const board2 = createBoard(2);
      const board3 = createBoard(3);

      expect(board1.length).toBe(2);
      expect(board2.length).toBe(4);
      expect(board3.length).toBe(6);
    });
  });

  describe("Card Marker", () => {
    it('should set the property "isMarked" of the card to true', () => {
      const board: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: false },
        { id: 2, groupId: 1, isFound: false, isMarked: false },
        { id: 3, groupId: 2, isFound: false, isMarked: false },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      const result: Board = markCard(3, board);

      const expectedBoard: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: false },
        { id: 2, groupId: 1, isFound: false, isMarked: false },
        { id: 3, groupId: 2, isFound: false, isMarked: true },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      expect(result).toEqual(expectedBoard);
    });

    it("should throw an error if the card is already marked", () => {
      const board: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: true },
        { id: 2, groupId: 1, isFound: false, isMarked: false },
        { id: 3, groupId: 2, isFound: false, isMarked: false },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      expect(() => markCard(1, board)).toThrow(CardAlreadyMarkedError);
    });
  });

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

  describe("Has cards from another group marked and not found checker", () => {
    it('should return "false" when there is not cards from another group marked and not found checker', () => {
      const board: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: true },
        { id: 2, groupId: 1, isFound: false, isMarked: false },
        { id: 3, groupId: 2, isFound: false, isMarked: false },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(
        1,
        board
      );

      expect(result).toBeFalsy();
    });

    it('should return "true" when there is cards from another group marked and not found checker', () => {
      const board: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: true },
        { id: 2, groupId: 1, isFound: false, isMarked: false },
        { id: 3, groupId: 2, isFound: false, isMarked: true },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      const result: boolean = hasCardsFromAnotherGroupMarkedAndNotFound(
        1,
        board
      );

      expect(result).toBeTruthy();
    });
  });

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

  describe("Set Cards From Group As Founded Action", () => {
    it("should set all cards from the group as founded", () => {
      const board: Board = [
        { id: 1, groupId: 1, isFound: false, isMarked: true },
        { id: 2, groupId: 1, isFound: false, isMarked: true },
        { id: 3, groupId: 2, isFound: false, isMarked: false },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      const result: Board = setCardsFromGroupAsFounded(1, board);

      const expectedBoard: Board = [
        { id: 1, groupId: 1, isFound: true, isMarked: true },
        { id: 2, groupId: 1, isFound: true, isMarked: true },
        { id: 3, groupId: 2, isFound: false, isMarked: false },
        { id: 4, groupId: 2, isFound: false, isMarked: false },
      ];

      expect(result).toEqual(expectedBoard);
    });
  });
});
