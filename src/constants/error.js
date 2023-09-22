const LOTTO_MACHINE_ERROR = {
  INVALID_LOTTO_TICKET_GENERATED: "로또를 생성할 수 없습니다.",
  INVALID_LOTTO_TICKET_LENGTH: "로또 번호는 6개여야 합니다.",
  INVALID_LOTTO_TICKET_NUMBER: "로또 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_LOTTO_TICKET_DUPLICATE: "로또 번호는 중복되지 않아야 합니다."
};

const LOTTO_OFFICE_ERROR = {
  INVALID_WINNING_NUMBERS: "당첨 번호는 1~45 사이의 숫자여야 합니다.",
  INVALID_WINNING_NUMBERS_DUPLICATE: "당첨 번호는 중복되지 않아야 합니다."
};

export { LOTTO_MACHINE_ERROR, LOTTO_OFFICE_ERROR };
