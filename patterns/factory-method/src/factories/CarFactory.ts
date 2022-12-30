import { VehicleFactory } from './VehicleFactory';
import { Car } from '../vehicle/Car';
import { Vehicle } from '../vehicle/Vehicle';

export class CarFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
