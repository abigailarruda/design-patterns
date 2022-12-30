import { ApprovedOrder } from './ApprovedOrder';
import { Order } from './Order';
import { OrderState } from './OrderState';
import { RejectedOrder } from './RejectedOrder';

export class PendingOrder implements OrderState {
  private name = "pending";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new ApprovedOrder(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new RejectedOrder(this.order));
  }

  waitPayment(): void {
    console.log("[*] The order is already in the pending payment stage");
  }

  shipOrder(): void {
    console.log("[*] The order cannot be shipped with payment pending");
  }
}
