import { Order } from './Order';
import { OrderState } from './OrderState';
import { PendingOrder } from './PendingOrder';
import { RejectedOrder } from './RejectedOrder';

export class ApprovedOrder implements OrderState {
  private name = "approved";

  constructor(private order: Order) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log("[*] The order is already in the approved payment stage");
  }

  rejectPayment(): void {
    this.order.setState(new RejectedOrder(this.order));
  }

  waitPayment(): void {
    this.order.setState(new PendingOrder(this.order));
  }

  shipOrder(): void {
    console.log("[*] Shipping the order to customer");
  }
}
