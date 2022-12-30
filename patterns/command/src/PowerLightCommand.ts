import { SmartHouseCommand } from './SmartHouseCommand';
import { SmartHouseLight } from './SmartHouseLight';

export class PowerLightCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.on();
  }

  undo(): void {
    this.light.off();
  }
}
