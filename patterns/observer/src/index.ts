import Fan from './fanbase/Fan';
import Idol from './fanbase/Idol';

const idol = new Idol("BTS");

const firstFan = new Fan(1, "Abigail", new Date("2020-01-12"));
const secondFan = new Fan(2, "João", new Date("2018-06-23"));

idol.subscribe(firstFan);
idol.subscribe(secondFan);

idol.publish();

idol.unsubscribe(secondFan);
