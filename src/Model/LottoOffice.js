class LottoOffice {
  constructor() {
    this.winningNumbers = [];
    this.bonusNumber = 0;
  }

  getWinningNumbers() {
    return {
      winningNumbers: this.winningNumbers,
      bonusNumber: this.bonusNumber
    };
  }

  setWinningNumbers({ winningNumbers, bonusNumber }) {
    this.validateWinningNumbers({ winningNumbers, bonusNumber });
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  validateWinningNumbers({ winningNumbers, bonusNumber }) {
    this.validateRange({ winningNumbers, bonusNumber });
    this.validateDuplicate({ winningNumbers, bonusNumber });
  }

  validateRange({ winningNumbers, bonusNumber }) {
    const numbers = [...winningNumbers, bonusNumber];
    numbers.forEach((number) => {
      if (number < 1 || number > 45) {
        throw new Error("당첨 번호는 1~45 사이의 숫자여야 합니다.");
      }
    });
  }

  validateDuplicate({ winningNumbers, bonusNumber }) {
    const numbers = [...winningNumbers, bonusNumber];
    const set = new Set(numbers);
    if (set.size !== numbers.length) {
      throw new Error("당첨 번호는 중복되지 않아야 합니다.");
    }
  }
}

export default LottoOffice;
