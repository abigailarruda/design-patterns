import { Device } from '../Device/Device';

export class RemoteControl {
  constructor(protected device: Device) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());

    const status = this.device.getPower() ? 'on' : 'off';

    console.log(`[*] ${this.device.getName()} is now ${status}`);
  }
}
