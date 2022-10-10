export default interface ICar {
  startVehicle(): void;
  configure(color: string, year: number, engine: number, seats: number, doors: number): void;
}
