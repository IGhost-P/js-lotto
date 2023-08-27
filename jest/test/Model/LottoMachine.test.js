import LottoMachine from "../../../src/Model/LottoMachine";
import LottoTicket from "../../../src/Model/LottoTicket";

describe("LottoMachine", () => {
	let lottoMachine;

	beforeEach(() => {
		lottoMachine = new LottoMachine();
	});

	test("LottoTicket을 발급받을 수 있다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		expect(lottoTicket instanceof LottoTicket).toBeTruthy();
	});

	test("발급받은 LottoTicket의 숫자의 범위는 1~45이다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		const allNumbersAreValid = lottoTicket.lottoTicket.every(
			(number) =>
				number >= LottoMachine.LOTTO_TICKET_MIN_NUMBER &&
				number <= LottoMachine.LOTTO_TICKET_MAX_NUMBER
		);
		expect(allNumbersAreValid).toBeTruthy();
	});

	test("발급받은 LottoTicket의 숫자가 중복되지 않아야 한다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		const uniqueNumbersCount = new Set(lottoTicket.lottoTicket).size;
		expect(uniqueNumbersCount).toBe(LottoMachine.LOTTO_TICKET_LENGTH);
	});

	test("LottoTicket의 길이는 6이다", () => {
		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		expect(lottoTicket.lottoTicket.length).toBe(
			LottoMachine.LOTTO_TICKET_LENGTH
		);
	});
});
