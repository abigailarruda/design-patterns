export interface Device {
  setName(name: string): void;
  getName(): string;
  setPower(powerStatus: boolean): void;
  getPower(): boolean;
  setVolume(volume: number): void;
  getVolume(): number;
}
