import IVehicle from './IVehicle';

export default interface IVehicleMotorcycle extends IVehicle {
  configureMotorcycle(color: string, year: number, engine: number): void;
}
