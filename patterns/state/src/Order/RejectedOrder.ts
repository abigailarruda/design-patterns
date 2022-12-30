import { Order } from './Order';
import { OrderState } from './OrderState';

export class RejectedOrder implements OrderState {
  private name = "rejected";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log("[*] The order cannot be approved because the payment was rejected");
  }

  rejectPayment(): void {
    console.log("[*] The order has already been rejected and cannot be again");
  }

  waitPayment(): void {
    console.log("[*] The order cannot be pending because the payment was rejected");
  }

  shipOrder(): void {
    console.log("[*] The order cannot be shipped with payment rejected");
  }
}
