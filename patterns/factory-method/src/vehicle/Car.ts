import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}

  pickUp(customerName: string): void {
    console.log(`[*] ${this.name} is waiting/searching for ${customerName}`);
  }

  stop(): void {
    console.log(`[*] ${this.name} stopped`);
  }
}
