import { useState, useMemo, useCallback } from "react";
import { createBoard } from "lib/core/boardCreator";
import { markCard, setCardsFromGroupAsFounded } from "lib/core/cardMarker";
import { gameIsOver } from "lib/core/gameOverChecker";
import {
  allCardsFromTheGroupAreMarked,
  hasCardsFromAnotherGroupMarkedAndNotFound,
} from "lib/core/cardsChecker";
import { unMarkAllNotFoundAndMarkedCards } from "lib/core/cardUnMarker";
import { awaitFor } from "lib/utils/awaitFor";
import { Board, Card, Value } from "lib/types";

type UseGameHookReturnType = {
  board: Board;
  boardIsCreated: boolean;
  gameOver: boolean;
  markCard: (card: Card) => void;
  createGame: (values: Array<Value>) => void;
};

const useGameHook = (): UseGameHookReturnType => {
  const [board, setBoard] = useState<Board>([]);
  const [isProcessingAction, setIsProcessingAction] = useState<boolean>(false);
  const [boardIsCreated, setBoardIsCreated] = useState<boolean>(false);

  const gameOver = useMemo(
    () => (boardIsCreated ? gameIsOver(board) : false),
    [board, boardIsCreated]
  );

  const createGameAction = useCallback((values: Array<Value>) => {
    setBoard(createBoard(values));
    setBoardIsCreated(true);
  }, []);

  const unMarkAllNotFoundAndMarkedCardsAction = useCallback(
    async (board: Board) => {
      setIsProcessingAction(true);
      await awaitFor(() => {
        setBoard(unMarkAllNotFoundAndMarkedCards(board));
        setIsProcessingAction(false);
      }, 500);
    },
    []
  );

  const setCardsFromGroupAsFoundedAction = useCallback(
    async (groupId: number, board: Board) => {
      setIsProcessingAction(true);
      await awaitFor(() => {
        setBoard(setCardsFromGroupAsFounded(groupId, board));
        setIsProcessingAction(false);
      }, 500);
    },
    []
  );

  const markCardAction = useCallback(
    async (card: Card) => {
      if (!boardIsCreated || isProcessingAction) return;

      try {
        const newBoard = markCard(card, board);
        setBoard(newBoard);

        if (hasCardsFromAnotherGroupMarkedAndNotFound(card.groupId, newBoard)) {
          await unMarkAllNotFoundAndMarkedCardsAction(newBoard);
        }

        if (allCardsFromTheGroupAreMarked(card.groupId, newBoard)) {
          await setCardsFromGroupAsFoundedAction(card.groupId, newBoard);
        }
      } catch (error) {
        // TODO
      }
    },
    [
      board,
      boardIsCreated,
      isProcessingAction,
      setCardsFromGroupAsFoundedAction,
      unMarkAllNotFoundAndMarkedCardsAction,
    ]
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
