import { IndividualCar } from '../vehicle/IndividualCar';
import { Customer } from '../customer/Customer';
import { Vehicle } from '../vehicle/Vehicle';
import { IndividualCustomer } from '../customer/IndividualCustomer';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): Vehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}
