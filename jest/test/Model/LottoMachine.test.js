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

	test("LottoTicket에 넘기는 숫자의 범위는 1~45가 아니면 실패한다", () => {
		// given
		const lottoTicket = [1, 2, 3, 4, 5, 50];

		// when
		const result = lottoMachine.getLottoTicket({
			lottoTicket,
		});

		// then
		expect(() => result).toThrow("로또 번호는 1~45 사이의 숫자여야 합니다.");
	});

	test("LottoTicket에 넘기는 숫자가 중복이면 실패한다", () => {
		// given
		const lottoTicket = [1, 2, 3, 4, 5, 5];

		// when
		const result = lottoMachine.getLottoTicket({
			lottoTicket,
		});

		// then
		expect(() => result).toThrow("로또 번호는 중복되지 않아야 합니다.");
	});
});
