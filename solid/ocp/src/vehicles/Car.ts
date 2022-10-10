import ICar from './ICar';

export default class Car implements ICar {
  constructor(color: string, year: number, engine: number, seats: number, doors: number) {
    this.configure(color, year, engine, seats, doors);
  }

  startVehicle(): void {
    console.log("[*] Starting the engines");
  }

  configure(color: string, year: number, engine: number, seats: number, doors: number): void {
    const car = { color, year, engine, seats, doors };

    console.log("[*] Creating the car");
    console.table(car);

    this.startVehicle();
  }
}
