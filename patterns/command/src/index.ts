import { SmartHouseLight } from './SmartHouseLight';
import { PowerLightCommand } from './PowerLightCommand';
import { SmartHouse } from './SmartHouse';
import { LightIntensityCommand } from './LightIntensityCommand';

const bedroomLight = new SmartHouseLight('Bedroom Light');
const kitchenLight = new SmartHouseLight('Kitchen Light');

const powerLightCommand = new PowerLightCommand(bedroomLight);
const lightIntensityCommand = new LightIntensityCommand(kitchenLight);

const control = new SmartHouse();

control.addCommand('powerLightButton', powerLightCommand);
control.executeCommand('powerLightButton');
control.undoCommand('powerLightButton');

control.addCommand('lightIntensityButton', lightIntensityCommand);
control.executeCommand('lightIntensityButton');
control.undoCommand('lightIntensityButton');
