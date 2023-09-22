class LottoStatistics {

  constructor() {
    this.rank = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
  }

  getRank({
    winningNumbers,
    bonusNumber,
    lottoTickets
  }) {

    lottoTickets.forEach(lottoTicket => {
      const count = this.getCount({
        winningNumbers,
        bonusNumber,
        lottoTicket
      });
      if (count === 6) {
        this.rank[1] += 1;
      }

      if (count === 5) {
        this.rank[2] += 1;
      }

      if (count === 4) {
        this.rank[3] += 1;
      }

      if (count === 3) {
        this.rank[4] += 1;
      }

      if (count === 2) {
        this.rank[5] += 1;
      }
    });
  }

  getCount({
    winningNumbers,
    bonusNumber,
    lottoTicket
  }) {
    const count = winningNumbers.filter(number => lottoTicket.includes(number)).length;
    const bonusCount = lottoTicket.includes(bonusNumber) ? 1 : 0;
    return count + bonusCount;
  }

  get getStatistics() {
    return this.rank;
  }
}

export default LottoStatistics;