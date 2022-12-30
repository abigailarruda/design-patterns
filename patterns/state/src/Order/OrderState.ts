export interface OrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}
