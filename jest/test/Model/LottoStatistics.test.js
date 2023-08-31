import LottoStatistics from "../../../src/Model/LottoStatistics";

describe("LottoStatistics test", () => {
	test("입력받은 n개의 로또 티켓을 비교하여 일치하는 갯수에 따라 등수를 반환한다", () => {
		// given
		const lottoStatistics = new LottoStatistics();
		const winningNumbers = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;
		const lottoTickets = [
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 7, 8],
		];

		// when
		const result = lottoStatistics.getRank({
			winningNumbers,
			bonusNumber,
			lottoTickets,
		});

		// then
		expect(result).toEqual([1, 2]);
	});

	test("입력받은 n개의 로또 티켓을 등수를 확인해 통계를 구한다", () => {
		// given
		const lottoStatistics = new LottoStatistics();
		const winningNumbers = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;
		const lottoTickets = [
			[1, 2, 3, 4, 5, 6],
			[1, 2, 3, 4, 7, 8],
		];

		// when
		const result = lottoStatistics.getStatistics({
			winningNumbers,
			bonusNumber,
			lottoTickets,
		});

		// then
		expect(result).toEqual({
			1: 1,
			2: 1,
			3: 0,
			4: 0,
			5: 0,
		});
	});
});
