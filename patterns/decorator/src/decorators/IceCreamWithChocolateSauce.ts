import { IceCreamWithToppings } from './IceCreamWithToppings';

export class IceCreamWithChocolateSauce extends IceCreamWithToppings {
  getFlavor(): string {
    return `${this.iceCream.getFlavor()} with chocolate sauce`;
  }
}
