import { Customer } from '../customer/Customer';
import { Vehicle } from '../vehicle/Vehicle';

export interface CreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
}
