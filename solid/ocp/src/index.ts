import TypeVehicle from './TypeVehicle';
import Car from './vehicles/Car';
import Motorcycle from './vehicles/Motorcycle';

const type = TypeVehicle.MOTORCYCLE as TypeVehicle;
let vehicle: Car | Motorcycle;

if (type === TypeVehicle.CAR) {
  vehicle = new Car("yellow", 2022, 2.0, 4, 4);
} else if (type === TypeVehicle.MOTORCYCLE) {
  vehicle = new Motorcycle("red", 2022, 1.0);
}
