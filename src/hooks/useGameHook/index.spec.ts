import { useGameHook } from ".";
import * as cardMarkerModule from "core/cardMarker";
import { renderHook, act } from "@testing-library/react-hooks";

describe("Use Game Hook", () => {
  it("should start with the board not created", () => {
    const { result } = renderHook(() => useGameHook());
    expect(result.current.boardIsCreated).toBeFalsy();
  });

  test("the game should not be over if the board is not created", () => {
    const { result } = renderHook(() => useGameHook());
    expect(result.current.gameOver).toBeFalsy();
  });

  it("should create the board on call createGame", () => {
    const { result } = renderHook(() => useGameHook());

    act(() => {
      result.current.createGame(2);
    });

    expect(result.current.board.length).toBeGreaterThan(0);
  });

  it("should not mark card when the board is not created", () => {
    const markCardMock = jest
      .spyOn(cardMarkerModule, "markCard")
      .mockImplementation(jest.fn());

    const { result } = renderHook(() => useGameHook());

    act(() => {
      result.current.createGame(2);
      const card = result.current.board[0];
      result.current.markCard(card);
    });

    expect(markCardMock).not.toHaveBeenCalled();
  });
});
