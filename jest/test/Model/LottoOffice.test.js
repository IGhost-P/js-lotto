import LottoOffice from "../../src/Model/LottoOffice";

describe("LottoOffice", () => {
	let lottoOffice;
	beforeEach(() => {
		lottoOffice = new LottoOffice();
	});

	test("당첨 번호를 입력 받는다", () => {
		// given
		const winningNumbers = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 7;

		// when
		lottoOffice.setWinningNumbers({
			winningNumbers,
			bonusNumber,
		});

		// then
		expect(lottoOffice.getWinningNumbers()).toEqual({
			winningNumbers,
			bonusNumber,
		});
	});

	test("당첨번호는 1~45 사이의 숫자가 아니면 실패한다", () => {
		// given
		const winningNumbers = [1, 2, 3, 4, 5, 6];
		const bonusNumber = 50;

		// when
		lottoOffice.setWinningNumbers({
			winningNumbers,
			bonusNumber,
		});

		// then
		expect(() => lottoOffice.getWinningNumbers()).toThrow(
			"당첨 번호는 1~45 사이의 숫자여야 합니다."
		);
	});

	test("당첨번호가 중복된다면 실패한다", () => {
		// given
		const winningNumbers = [1, 2, 3, 4, 5, 5];
		const bonusNumber = 6;

		// when
		lottoOffice.setWinningNumbers({
			winningNumbers,
			bonusNumber,
		});

		// then
		expect(() => lottoOffice.getWinningNumbers()).toThrow(
			"당첨 번호는 중복되지 않아야 합니다."
		);
	});
});
