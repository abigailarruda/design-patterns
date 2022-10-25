import { IceCreamWithCherries } from './decorators/IceCreamWIthCherries';
import { IceCreamWithChocolateSauce } from './decorators/IceCreamWithChocolateSauce';
import { SimpleIceCream } from './SimpleIceCream';

const iceCream = new SimpleIceCream();
const iceCreamWithCherry = new IceCreamWithCherries(iceCream);
const iceCreamWithCherryAndChocolateSauce = new IceCreamWithChocolateSauce(iceCreamWithCherry);

console.log(`[🍦] ${iceCream.getFlavor()}`);
console.log(`[🍦] ${iceCreamWithCherry.getFlavor()}`);
console.log(`[🍦] ${iceCreamWithCherryAndChocolateSauce.getFlavor()}`);
