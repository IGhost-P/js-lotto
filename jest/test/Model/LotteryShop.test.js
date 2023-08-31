import LotteryShop from "../../../src/Model/LotteryShop";

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

	test("LottoMachine을 가지고 있다.", () => {
		// then
		expect(lotteryShop.lottoMachine).not.toBeUndefined();
	});

	test("LottoMachine을 통해 랜덤 로또 티켓을 발급받을 수 있다", () => {
		// given
		const price = 1000;
		lotteryShop.setTicketPrice(price);

		// when
		lotteryShop.makeTickets(price);

		// then
		expect(lotteryShop.lottoTickets.length).toBe(1);
	});
});
