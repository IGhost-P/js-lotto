import LottoMachine from "../../src/Model/LottoMachine";

describe("LotteryShop", () => {
	let lotteryShop;
	beforeEach(() => {
		lotteryShop = new LotteryShop();
	});

	test("로또 티켓의 가격을 설정할 수 있다.", () => {
		// given
		const price = 1000;

		// when
		lotteryShop.setTicketPrice(price);

		// then
		expect(lotteryShop.getTicketPrice()).toBe(price);
	});

	test("LottoMachine을 생성할 수 있다.", () => {
		// given
		const price = 1000;
		lotteryShop.setTicketPrice(price);

		// when
		const lottoMachine = lotteryShop.createLottoMachine();

		// then
		expect(lottoMachine).not.toBeUndefined();
	});

	test("LottoMachine을 통해 랜덤 로또 티켓을 발급받을 수 있다", () => {
		// given
		const price = 1000;
		lotteryShop.setTicketPrice(price);
		const lottoMachine = lotteryShop.createLottoMachine();

		// when
		const lottoTicket = lottoMachine.getLottoTicket();

		// then
		expect(lottoTicket).not.toBeUndefined();
	});
});
