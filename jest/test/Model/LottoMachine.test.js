import LottoMachine from "../../src/Model/LottoMachine";
import LottoTicket from "../../src/Model/LottoTicket";

describe("LottMachine", () => {
	let lottoMachine;
	beforeEach(() => {
		lottoMachine = new LottoMachine();
	});

	test("LottoTicket을 발급받을 수 있다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket({
			lottoTicket: [1, 2, 3, 4, 5, 6],
		});

		// then
		expect(lottoTicket instanceof LottoTicket).toBeTruthy();
	});

	test("LottoTicket에 넘기는 숫자의 범위는 1~45", () => {
		// when
		const result = LottoMachine.generateNumbers();

		// then
		for (let num of result) {
			expect(num).toBeGreaterThanOrEqual(1);
			expect(num).toBeLessThanOrEqual(45);
		}
	});

	test("LottoTicket에 넘기는 숫자는 중복되지 않는다", () => {
		// when
		const result = LottoMachine.generateNumbers();

		// then
		expect(new Set(result).size).toEqual(6);
	});
});
