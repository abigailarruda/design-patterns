import IVehicleMotorcycle from './IVehicleMotorcycle';

export default class Motorcycle implements IVehicleMotorcycle {
  constructor(color: string, year: number, engine: number) {
    this.configureMotorcycle(color, year, engine);
  }

  startVehicle(): void {
    console.log("[*] Starting the engines");
  }

  configureMotorcycle(color: string, year: number, engine: number): void {
    const motorcycle = { color, year, engine };

    console.log("[*] Creating the motorcycle");
    console.table(motorcycle);

    this.startVehicle();
  }
}
