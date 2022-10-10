import IVehicleCar from './IVehicleCar';

export default class Car implements IVehicleCar {
  constructor(color: string, year: number, engine: number, seats: number) {
    this.configureCar(color, year, engine, seats);
  }

  startVehicle(): void {
    console.log("[*] Starting the engines")
  }

  configureCar(color: string, year: number, engine: number, seats: number): void {
    const car = { color, year, engine, seats };

    console.log("[*] Creating the car");
    console.table(car);

    this.startVehicle();
  }
}
