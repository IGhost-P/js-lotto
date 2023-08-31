import LottoMachine from "./LottoMachine";

class LotteryShop {
	static LOTTO_TICKET_PRICE = 1000;

	constructor() {
		this.lottoTickets = [];
		this.lottoTicketPrice = LotteryShop.LOTTO_TICKET_PRICE;
		this.lottoMachine = new LottoMachine();
	}

	getTicketPrice() {
		return this.lottoTicketPrice;
	}

	setTicketPrice(price) {
		this.lottoTicketPrice = price;
	}

	makeTickets(money) {
		const ticketCount = money / this.lottoTicketPrice;
		for (let i = 0; i < ticketCount; i++) {
			this.lottoTickets.push(this.lottoMachine.getLottoTicket());
		}
	}
}

export default LotteryShop;
