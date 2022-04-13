import { useState, useMemo, useCallback } from "react";
import {
  Board,
  Card,
  createBoard,
  gameIsOver,
  markCard as getBoardWithCardMarked,
} from "core";

type MarkCardFunction = (cardId: Card["id"]) => void;
type CreateGameFunction = (boardSize: number) => void;
type UseGameHookReturnType = {
  board: Board;
  boardIsCreated: boolean;
  gameOver: boolean;
  markCard: MarkCardFunction;
  createGame: CreateGameFunction;
};

const useGameHook = (): UseGameHookReturnType => {
  const [board, setBoard] = useState<Board>([]);
  const [boardIsCreated, setBoardIsCreated] = useState<boolean>(false);

  const gameOver = useMemo(
    () => (boardIsCreated ? gameIsOver(board) : false),
    [board]
  );

  const createGame = useCallback((boardSize: number) => {
    setBoard(createBoard(boardSize));
    setBoardIsCreated(true);
  }, []);

  const markCard = useCallback(
    (cardId: Card["id"]) => {
      if (!boardIsCreated) return;
      const newBoard = getBoardWithCardMarked(cardId, board);
      setBoard(newBoard);
    },
    [board]
  );

  return {
    board,
    gameOver,
    boardIsCreated,
    markCard,
    createGame,
  };
};

export { useGameHook };
