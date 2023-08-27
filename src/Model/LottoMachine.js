import LottoTicket from "./LottoTicket";

class LottoMachine {
	static LOTTO_TICKET_LENGTH = 6;
	static LOTTO_TICKET_MIN_NUMBER = 1;
	static LOTTO_TICKET_MAX_NUMBER = 45;

	constructor() {
		this.lottoTicket = [];
	}

	getLottoTicket() {
		const lottoTicket = this.generateRandomLottoTicket();
		if (this.isValidLottoTicket({ lottoTicket })) {
			return new LottoTicket({ lottoTicket });
		} else {
			throw new Error("Invalid Lotto Ticket Generated."); // This should rarely, if ever, happen
		}
	}

	isValidLottoTicket({ lottoTicket }) {
		if (lottoTicket.length !== LottoMachine.LOTTO_TICKET_LENGTH) {
			throw new Error("로또 번호는 6개여야 합니다.");
		}

		if (
			lottoTicket.some(
				(number) =>
					number < LottoMachine.LOTTO_TICKET_MIN_NUMBER ||
					number > LottoMachine.LOTTO_TICKET_MAX_NUMBER
			)
		) {
			throw new Error("로또 번호는 1~45 사이의 숫자여야 합니다.");
		}

		if (new Set(lottoTicket).size !== LottoMachine.LOTTO_TICKET_LENGTH) {
			throw new Error("로또 번호는 중복되지 않아야 합니다.");
		}

		return true;
	}

	generateRandomLottoTicket() {
		const numbers = Array.from(
			{ length: LottoMachine.LOTTO_TICKET_MAX_NUMBER },
			(_, i) => i + 1
		);
		const shuffled = numbers.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, LottoMachine.LOTTO_TICKET_LENGTH);
	}
}

export default LottoMachine;
