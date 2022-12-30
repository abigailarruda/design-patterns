import { OrderState } from './OrderState';
import { PendingOrder } from './PendingOrder';

export class Order {
  private state: OrderState = new PendingOrder(this);

  setState(state: OrderState): void {
    this.state = state;
    
    console.log(`[*] The order state is ${this.state.getName()}`)
  }

  getState(): OrderState {
    return this.state;
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}
