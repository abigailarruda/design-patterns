import { Customer } from './Customer';

export class IndividualCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (individual)';
  }
}
