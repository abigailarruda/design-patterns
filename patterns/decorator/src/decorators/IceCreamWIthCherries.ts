import { IceCreamWithToppings } from './IceCreamWithToppings';

export class IceCreamWithCherries extends IceCreamWithToppings {
  getFlavor(): string {
    return `${this.iceCream.getFlavor()} with a cherry on top`;
  }
}
