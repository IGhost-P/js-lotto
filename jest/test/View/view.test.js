import IOHandler from "../../../src/View/IOHandler";

describe("view test", () => {
  let ioHandler;

  beforeEach(() => {
    ioHandler = new IOHandler();
  });

  test("입력에 따른 출력이 제대로 되는지 확인한다", async () => {
    // given
    const input = "test";
    const output = "test";

    // when
    const result = await ioHandler.getInput(input);

    // then
    expect(result).toBe(output);
  });
});
