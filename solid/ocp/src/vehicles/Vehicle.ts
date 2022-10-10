// This class has side-effects in case more
// vehicles are added, besides cars and motorcycles.
export default class Vehicle {
  constructor(
    private color: string, 
    private year: number, 
    private engine: number,
    private seats: number,
    private doors: number
  ) {}

  motorcycle(): void {
    const motorcycle = this;

    console.log("[*] Creating the motorcycle");
    console.table(motorcycle);

    this.startVehicle();
  }

  car(): void {
    const car = this;

    console.log("[*] Creating the car");
    console.table(car);

    this.startVehicle();
  }

  startVehicle(): void {
    console.log("[*] Starting the engines")
  }
}
