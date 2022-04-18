import { Board, BoardCreator, Value, InvalidValuesError } from "types";

export const createBoard: BoardCreator = (values: Array<Value>): Board => {
  if (values.length === 0)
    throw new InvalidValuesError("The array of values cannot be empty");

  const board = [];

  for (let index = 0; index < values.length; index++) {
    const groupId = index + 1;
    const value = values[index];

    board.push({
      value,
      groupId,
      id: board.length + 1,
      isFound: false,
      isMarked: false,
    });

    board.push({
      value,
      groupId,
      id: board.length + 1,
      isFound: false,
      isMarked: false,
    });
  }

  return board;
};
