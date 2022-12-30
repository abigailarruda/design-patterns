import { getRandomVehicle } from './main/RandomVehicle';
import { getRandomNumber } from './utils/RandomNumbers';
import { CarFactory } from './factories/CarFactory';

const carFactory = new CarFactory();
const customerNames = ['John', 'Jack', 'Mary', 'Anne'];

for (let i = 0; i < 10; i++) {
  const vehicle = getRandomVehicle();

  const name = customerNames[getRandomNumber(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp(name, `Car ${getRandomNumber(100)}`);

  newCar.stop();
}