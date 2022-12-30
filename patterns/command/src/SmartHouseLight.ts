export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;

  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'on' : 'off';
  }

  on(): boolean {
    this.isOn = true;

    console.log(`[*] ${this.name} is ${this.getPowerStatus()}`);

    return this.isOn;
  }

  off(): boolean {
    this.isOn = false;

    console.log(`[*] ${this.name} is ${this.getPowerStatus()}`);

    return this.isOn;
  }

  increaseIntensity(): number {
    if (this.intensity >= 100) return this.intensity;

    this.intensity += 10;

    console.log(`[*] ${this.name} intensity is ${this.intensity}`);

    return this.intensity;
  }

  decreaseIntensity(): number {
    if (this.intensity <= 0) return this.intensity;

    this.intensity -= 10;

    console.log(`[*] ${this.name} intensity is ${this.intensity}`);

    return this.intensity;
  }
}
