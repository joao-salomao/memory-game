import { useState, useMemo, useEffect, useCallback } from "react";
import {
  Board,
  Card,
  markCard,
  gameIsOver,
  createBoard,
  setCardsFromGroupAsFounded,
  allCardsFromTheGroupAreMarked,
  unMarkAllNotFoundAndMarkedCards,
  hasCardsFromAnotherGroupMarkedAndNotFound,
} from "core";

type UseGameHookReturnType = {
  board: Board;
  boardIsCreated: boolean;
  gameOver: boolean;
  markCard: (card: Card) => void;
  createGame: (boardSize: number) => void;
};

const useGameHook = (): UseGameHookReturnType => {
  const [board, setBoard] = useState<Board>([]);
  const [boardIsCreated, setBoardIsCreated] = useState<boolean>(false);

  const gameOver = useMemo(
    () => (boardIsCreated ? gameIsOver(board) : false),
    [board, boardIsCreated]
  );

  const createGameAction = useCallback((boardSize: number) => {
    setBoard(createBoard(boardSize));
    setBoardIsCreated(true);
  }, []);

  // 1. If the board is not created, do nothing.
  // 2. Mark card.
  // 3. If a card from another group is marked and not found, then set the cards as not marked.
  // 4. If a card from the same group is marked, then set the cards as founded.
  const markCardAction = useCallback(
    (card: Card) => {
      if (!boardIsCreated) return;

      try {
        const newBoard = markCard(card.id, board);
        setBoard(newBoard);

        if (hasCardsFromAnotherGroupMarkedAndNotFound(card.groupId, newBoard)) {
          setTimeout(() => {
            setBoard(unMarkAllNotFoundAndMarkedCards(newBoard));
          }, 500);
        }

        if (allCardsFromTheGroupAreMarked(card.groupId, newBoard)) {
          setTimeout(() => {
            setBoard(setCardsFromGroupAsFounded(card.groupId, newBoard));
          }, 500);
        }
      } catch (error) {
        // TODO
      }
    },
    [board, boardIsCreated]
  );

  return {
    board,
    gameOver,
    boardIsCreated,
    markCard: markCardAction,
    createGame: createGameAction,
  };
};

export { useGameHook };
