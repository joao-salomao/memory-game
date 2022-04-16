import { calculateAmountOfCardsGroup } from ".";
import { InvalidBoardSizeError } from "types";

describe("Amount Of Cards Group Calculator", () => {
  it("should throw an error when the board size was less than one", () => {
    expect(() => calculateAmountOfCardsGroup(0)).toThrow(InvalidBoardSizeError);

    expect(() => calculateAmountOfCardsGroup(-1)).toThrow(
      InvalidBoardSizeError
    );

    expect(() => calculateAmountOfCardsGroup(-123123)).toThrow(
      InvalidBoardSizeError
    );
  });

  it("should throw an error when the size is not a integer", () => {
    expect(() => calculateAmountOfCardsGroup(10.2)).toThrow(
      InvalidBoardSizeError
    );

    expect(() => calculateAmountOfCardsGroup(0.345342)).toThrow(
      InvalidBoardSizeError
    );

    expect(() => calculateAmountOfCardsGroup(2.45341)).toThrow(
      InvalidBoardSizeError
    );
  });

  it("should calculate the right amount of cards", () => {
    expect(calculateAmountOfCardsGroup(1)).toEqual(2);
    expect(calculateAmountOfCardsGroup(2)).toEqual(4);
    expect(calculateAmountOfCardsGroup(3)).toEqual(6);
    expect(calculateAmountOfCardsGroup(4)).toEqual(8);
    expect(calculateAmountOfCardsGroup(10)).toEqual(20);
  });
});
