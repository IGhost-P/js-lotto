class LottoTicket {
	constructor({ lottoTicket }) {
		this.lottoTicket = lottoTicket;
	}

	getLottoTicket() {
		return this.lottoTicket;
	}

	getLottoTicketLength() {
		return this.lottoTicket.length;
	}
}

export default LottoTicket;
