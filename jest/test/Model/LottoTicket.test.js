import LottoTicket from "../../../src/Model/LottoTicket.js";

describe("LottoTicket test", () => {
	const lottoTicket = new LottoTicket({ lottoTicket: [1, 2, 3, 4, 5, 6] });

	test("get lottoTicket", () => {
		expect(lottoTicket.getLottoTicket()).toEqual([1, 2, 3, 4, 5, 6]);
	});

	test("get lottoTicket length", () => {
		expect(lottoTicket.getLottoTicketLength()).toEqual(6);
	});
});
