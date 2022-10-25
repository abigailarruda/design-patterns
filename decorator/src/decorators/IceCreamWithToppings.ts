import { IceCream, IceCreamType } from '../interfaces/IceCream';
import { SimpleIceCream } from '../SimpleIceCream';

export class IceCreamWithToppings implements IceCream {
  constructor(protected iceCream: IceCream) {}

  getFlavor(): string {
    return this.iceCream.getFlavor();
  }

  getType(): IceCreamType {
    return this.iceCream.getType();
  }
}
