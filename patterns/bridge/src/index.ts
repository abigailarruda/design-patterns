import { RemoteControl } from './RemoteControl/RemoteControl';
import { RemoteControlWithVolume } from './RemoteControl/RemoteControlWithVolume';

import { TV } from './Device/TV';
import { Radio } from './Device/Radio';

function main(abstraction: RemoteControl | RemoteControlWithVolume): void {
  abstraction.togglePower();

  if (('turnVolumeUp' in abstraction)) {
    abstraction.turnVolumeUp();
    abstraction.turnVolumeUp();
    abstraction.turnVolumeUp();
    abstraction.turnVolumeUp();
    abstraction.turnVolumeUp();
    abstraction.turnVolumeDown();
  }

  abstraction.togglePower();
}

const tv = new TV();
const radio = new Radio();

const tvRemoteControl = new RemoteControlWithVolume(tv);
const radioRemoteControl = new RemoteControl(radio);

main(tvRemoteControl);
main(radioRemoteControl);
