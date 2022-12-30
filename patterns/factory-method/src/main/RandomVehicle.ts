import { Vehicle } from '../vehicle/Vehicle';
import { CarFactory } from '../factories/CarFactory';
import { BicycleFactory } from '../factories/BicycleFactory';
import { getRandomNumber } from '../utils/RandomNumbers';

export function getRandomVehicle(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const hrvTouring = carFactory.getVehicle('Honda HR-V Touring');
  const wrangler = carFactory.getVehicle('Jeep Wrangler');
  const spilloDeluxe = bicycleFactory.getVehicle('Bianchi Spillo Deluxe');

  const vehicles = [hrvTouring, wrangler, spilloDeluxe];

  return vehicles[getRandomNumber(vehicles.length)];
}
