export default interface ICar {
  startVehicle(): void;
  configure(color: string, year: number, engine: number): void;
}
