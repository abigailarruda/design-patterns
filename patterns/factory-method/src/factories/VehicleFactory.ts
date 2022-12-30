import { Vehicle } from '../vehicle/Vehicle';

export abstract class VehicleFactory {
  abstract getVehicle(vehicleName: string): Vehicle;

  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);

    car.pickUp(customerName);

    return car;
  }
}
