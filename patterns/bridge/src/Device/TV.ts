import { Device } from './Device';

export class TV implements Device {
  private volume = 1;
  private powerStatus = false;
  private name = "TV";

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setPower(powerStatus: boolean): void {
    this.powerStatus = powerStatus;
  }

  getPower(): boolean {
    return this.powerStatus;
  }

  setVolume(volume: number): void {
    if (volume < 0) return;

    if (volume > 10) return;

    this.volume = volume;
  }

  getVolume(): number {
    return this.volume;
  }
}
