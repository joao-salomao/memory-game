import { Board, DomainError, Card, markCard, createBoard, gameIsOver } from ".";

describe("Core Module", () => {
  it("The board size must be greater than zero", () => {
    const board = () => createBoard(0);
    expect(board).toThrow(DomainError);
  });

  it("The amount of cards must be the double of the size", () => {
    const board1 = createBoard(1);
    const board2 = createBoard(2);
    const board3 = createBoard(3);

    expect(board1.length).toBe(2);
    expect(board2.length).toBe(4);
    expect(board3.length).toBe(6);
  });

  it("Should mark card with the same ID", () => {
    const baseBoard = createBoard(2);
    const cardToMark = baseBoard[0];

    const newBoard = markCard(cardToMark.id, baseBoard);
    const markedCard = newBoard.find(({ id }) => id === cardToMark.id);

    expect(markedCard).toBeTruthy();
    expect(markedCard?.isMarked).toBeTruthy();
  });

  it('Should set the property "isFound" when all cards of the same group were found', () => {
    const baseBoard = createBoard(4);
    const groupId = baseBoard[0].groupId;
    const cardsToMark = baseBoard.filter((c) => c.groupId === groupId);

    let newBoard: Board = [];
    cardsToMark.forEach((c) => {
      newBoard = markCard(c.id, newBoard);
    });

    newBoard
      .filter((c) => c.groupId === groupId)
      .forEach((c) => {
        expect(c.isFound).toBeTruthy();
      });
  });

  it('Should set the property "isMarked" to false to all cards when there is a card marked and a card from another group is marked', () => {
    const baseBoard = createBoard(4);
    const card1 = baseBoard[0];
    const card2 = baseBoard.find((c) => c.groupId !== card1.groupId) as Card;

    const updateBoard1 = markCard(card1.id, baseBoard);
    const updateBoard2 = markCard(card2.id, updateBoard1);
    const allCardsAreNotMarked = updateBoard2.every(
      (c) => c.isMarked === false
    );

    expect(allCardsAreNotMarked).toBeTruthy();
  });

  it("Should return true when game is over", () => {
    const board = createBoard(10);

    const newBoard = board
      .sort((c) => c.groupId)
      .reduce((currentBoard, card) => markCard(card.id, currentBoard), board);

    expect(gameIsOver(newBoard)).toBeTruthy();
  });
});
