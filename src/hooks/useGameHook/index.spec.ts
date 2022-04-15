import { useGameHook } from ".";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Use Game Hook", () => {
  it("should start with the board not created", () => {
    const { result } = renderHook(() => useGameHook());
    expect(result.current.boardIsCreated).toBeFalsy();
  });
});
