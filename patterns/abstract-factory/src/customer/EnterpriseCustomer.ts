import { Customer } from './Customer';

export class EnterpriseCustomer implements Customer {
  constructor(public name: string) {
    this.name += ' (enterprise)';
  }
}
