import IOHandler from "../../../src/View/IOHandler";

describe("view test", () => {
  let ioHandler;

  beforeEach(() => {
    ioHandler = new IOHandler();
  });

  test("로또 티켓을 구매할 수 있는 화면을 볼 수 있다", () => {
    // when
    const result = ioHandler.displayOutput("구매할 금액을 입력해 주세요.");
    // then
    expect(result).toBe("구매할 금액을 입력해 주세요.");
  });

  test("당첨 번호를 입력할 수 있는 화면을 볼 수 있다", () => {
    // when
    const result = ioHandler.displayOutput("당첨 번호를 입력해 주세요.");
    // then
    expect(result).toBe("당첨 번호를 입력해 주세요.");
  });

  test("보너스 볼을 입력할 수 있는 화면을 볼 수 있다", () => {
    // when
    const result = ioHandler.displayOutput("보너스 볼을 입력해 주세요.");
    // then
    expect(result).toBe("보너스 볼을 입력해 주세요.");
  });

  test("통계를 확인할 수 있는 화면을 볼 수 있다.", () => {
    // given
    const lottoStatistics = {
      3: 1,
      4: 0,
      5: 0,
      5.5: 0,
      6: 0,
      totalProfitRate: 62.5
    };

    // when
    const result = ioHandler.displayOutput(lottoStatistics);

    // then
    expect(result).toBe(`당첨 통계
      --------------------
      3개 일치 (5,000원) - 1개
      4개 일치 (50,000원) - 0개
      5개 일치 (1,500,000원) - 0개
      5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
      6개 일치 (2,000,000,000원) - 0개
      총 수익률은 62.5%입니다.`);
  });
});
