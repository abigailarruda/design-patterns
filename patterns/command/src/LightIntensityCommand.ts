import { SmartHouseCommand } from './SmartHouseCommand';
import { SmartHouseLight } from './SmartHouseLight';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    this.light.increaseIntensity();
  }

  undo(): void {
    this.light.decreaseIntensity();
  }
}
