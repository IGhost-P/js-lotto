import LottoTicket from '../../../src/Model/LottoTicket.js';

describe('LottoTicket test', () => {
  const lottoTicket = new LottoTicket({length: 6, min: 1, max: 45});

  test('LottoTicket에 숫자 length가 6주어지면 길이가 6이 되어야한다..', () => {
    //Given
    const length = 6;
    //When
    const lottoTicket = new LottoTicket({length: length, min: 1, max: 45});
    //Then
    expect(lottoTicket.getLottoTicket.length).toBe(length);
  });

  test('LottoTicket에 최소값이 1이고 최대값이 45가 주어지면, 1~45 사이의 숫자가 나와야한다.', () => {
    //Given
    const min = 1;
    const max = 45;
    //When
    const lottoTicket = new LottoTicket({length: 6, min: min, max: max});
    //Then
    expect(lottoTicket.getLottoTicket.every(number => number >= min && number <= max)).toBeTruthy();
  });

  test('LottoTicket은 중복된 숫자를 가질 수 없다.', () => {
    //Given
    const lottoTicket = new LottoTicket({length: 6, min: 1, max: 45});
    //When
    const lottoTicketSet = new Set(lottoTicket.getLottoTicket);
    //Then
    expect(lottoTicketSet.size).toBe(lottoTicket.getLottoTicket.length);
  }
  );
});