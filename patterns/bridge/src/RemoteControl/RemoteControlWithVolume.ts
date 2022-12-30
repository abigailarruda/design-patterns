import { RemoteControl } from './RemoteControl';

export class RemoteControlWithVolume extends RemoteControl {
  turnVolumeUp(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() + 1);

    console.log(
      `[*] The ${this.device.getName()} was set at volume ${oldVolume} and is now at ${this.device.getVolume()}`
    );
  }

  turnVolumeDown(): void {
    const oldVolume = this.device.getVolume();

    this.device.setVolume(this.device.getVolume() - 1);

    console.log(
      `[*] The ${this.device.getName()} was set at volume ${oldVolume} and is now at ${this.device.getVolume()}`
    );
  }
}
