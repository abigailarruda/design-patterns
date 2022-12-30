import { Vehicle } from './Vehicle';
import { Customer } from '../customer/Customer';

export class EnterpriseCar implements Vehicle {
  constructor(public name: string, private readonly customer: Customer) {}

  pickUp(): void {
    console.log(`[*] ${this.name} is waiting/searching for customer ${this.customer.name}`);
  }
}
