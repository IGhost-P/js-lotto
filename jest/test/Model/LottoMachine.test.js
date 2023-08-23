import LottoMachine from "../../src/Model/LottoMachine";

describe("LottMachine", () => {
	let lottoMachine;
	beforeEach(() => {
		lottoMachine = new LottoMachine();
	});

	test("LottoTicket을 발급받을 수 있다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		expect(lottoTicket).not.toBeUndefined();
	});
});
