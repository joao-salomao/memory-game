import { createBoard } from ".";
import * as cardsCreatorModule from "core/cardsCreator";
import * as amountOfCardsGroupCalculatorModule from "core/amountOfCardsGroupCalculator";

describe("Board Creator", () => {
  it("should create the board", () => {
    const amountOfCardsGroupCalculatorSpy = jest.spyOn(
      amountOfCardsGroupCalculatorModule,
      "calculateAmountOfCardsGroup"
    );
    const createCardsSpy = jest.spyOn(cardsCreatorModule, "createCards");

    const board = createBoard(2);

    expect(amountOfCardsGroupCalculatorSpy).toBeCalledWith(2);
    expect(createCardsSpy).toBeCalledWith(4);
    expect(board.length).toBeGreaterThan(0);
  });
});
