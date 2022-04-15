import { useGameHook } from ".";
import { renderHook } from "@testing-library/react-hooks";

describe("Use Game Hook", () => {
  it("should start with the board not created", () => {
    const { result } = renderHook(() => useGameHook());
    expect(result.current.boardIsCreated).toBeFalsy();
  });

  test("the game should not be over if the board is not created", () => {
    const { result } = renderHook(() => useGameHook());
    expect(result.current.gameOver).toBeFalsy();
  });
});
