import IMotorcycle from './IMotorcycle';

export default class Motorcycle implements IMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configure(color, year, engine);
  }

  startVehicle(): void {
    console.log("[*] Starting the engines");
  }

  configure(color: string, year: number, engine: number): void {
    const motorcycle = { color, year, engine };

    console.log("[*] Creating the motorcycle");
    console.table(motorcycle);

    this.startVehicle();
  }
}
